// Entry point for every LabRats page (loaded as a module from _layouts/sdlabrats.html).
import { initForms } from "./labrats-forms.js";
import { readStorage, writeStorage } from "./labrats-storage.js";
import { initSessionLink } from "./labrats-auth.js";

const THEME_KEY = "labrats-theme";
const DISMISSED_PREFIX = "labrats-dismissed-";

function initMenu() {
  const header = document.querySelector(".labrats__header");
  const toggle = header?.querySelector("[data-labrats-menu-toggle]");
  if (!toggle) return;

  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    header.toggleAttribute("data-open", open);
  };

  header.setAttribute("data-menu-ready", "");
  toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && header.hasAttribute("data-open")) {
      setOpen(false);
      toggle.focus();
    }
  });
}

function initAnnouncement() {
  const notice = document.querySelector("[data-labrats-announcement]");
  if (!notice) return;
  const key = DISMISSED_PREFIX + notice.dataset.labratsAnnouncement;
  if (readStorage(key)) {
    notice.hidden = true;
    return;
  }
  notice.querySelector("[data-labrats-dismiss]")?.addEventListener("click", () => {
    notice.hidden = true;
    writeStorage(key, "1");
  });
}

function initThemeToggle() {
  const toggle = document.querySelector("[data-labrats-theme-toggle]");
  const saved = readStorage(THEME_KEY);
  if (saved === "light" || saved === "dark") {
    document.body.dataset.theme = saved;
  }
  if (!toggle) return;

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  toggle.checked = document.body.dataset.theme ? document.body.dataset.theme === "dark" : prefersDark;
  toggle.addEventListener("change", () => {
    const theme = toggle.checked ? "dark" : "light";
    document.body.dataset.theme = theme;
    writeStorage(THEME_KEY, theme);
  });
}

// Marks the "On this page" link for the section nearest the top of the viewport.
function initContents() {
  const links = [...document.querySelectorAll("[data-labrats-contents] a")];
  const sections = links.map((link) => document.getElementById(link.hash.slice(1))).filter(Boolean);
  if (sections.length === 0 || !("IntersectionObserver" in window)) return;

  const setCurrent = (id) => {
    links.forEach((link) => {
      if (link.hash === `#${id}`) {
        link.setAttribute("aria-current", "true");
        link.scrollIntoView({ block: "nearest", inline: "nearest" });
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting);
      if (visible.length) setCurrent(visible[0].target.id);
    },
    { rootMargin: "-140px 0px -60% 0px" },
  );
  sections.forEach((section) => observer.observe(section));
}

initThemeToggle();
initMenu();
initContents();
initAnnouncement();
initForms();
initSessionLink();
