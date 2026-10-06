---
layout: page
title: Lab Rats Programs
permalink: /programs/
---

<h1>San Diego Lab Rats Programs</h1>

<p>Explore our science programs!</p>

<div id="programs">
  Loading programs...
</div>

<script>
async function loadPrograms() {
  const container = document.getElementById("programs");

  try {
    const response = await fetch(
      "http://localhost:8587/api/programs/"
    );

    if (!response.ok) {
      throw new Error("Backend request failed");
    }

    const programs = await response.json();

    container.innerHTML = "";

    programs.forEach(program => {
      const card = document.createElement("div");
      const heading = document.createElement("h2");
      const grades = document.createElement("p");
      const description = document.createElement("p");

      heading.textContent = program.name;
      grades.textContent = "Grades: " + program.grades;
      description.textContent = program.description;

      card.append(heading, grades, description);
      container.appendChild(card);
    });

  } catch (error) {
    container.textContent =
      "Unable to load programs. Check that the backend is running.";
    console.error(error);
  }
}

loadPrograms();
</script>