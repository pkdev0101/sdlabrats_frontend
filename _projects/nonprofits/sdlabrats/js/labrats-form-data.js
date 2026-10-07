// Pure helpers for LabRats forms: turn form entries into a request payload and
// check it before sending. No DOM access, so tests can import this file directly.
// The Flask backend (model/labrats_inquiry.py) applies the same rules again.

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Fields that may hold several values (checkbox groups).
const MULTI_VALUE_FIELDS = new Set(["programs"]);

const NAME_FIELDS = ["first_name", "last_name"];

// Required fields per form. Labels are used in error messages.
export const FORM_RULES = {
  contact: {
    required: { first_name: "first name", last_name: "last name", email: "email", interest: "what you're asking about" },
  },
  newsletter: {
    required: { first_name: "first name", last_name: "last name", email: "email" },
  },
  video_topic: {
    required: { first_name: "first name", last_name: "last name", email: "email", subjects: "subjects" },
  },
  partnership: {
    required: {
      company: "company name", first_name: "first name", last_name: "last name",
      job_title: "title", email: "business email",
    },
  },
  scholarship: {
    required: {
      student_first_name: "student's first name", student_last_name: "student's last name",
      student_grade: "grade", student_school: "school",
      parent_first_name: "parent's first name", parent_last_name: "parent's last name",
      email: "email", phone: "phone",
    },
  },
};

export function isKnownForm(kind) {
  return Object.hasOwn(FORM_RULES, kind);
}

// entries: iterable of [name, value] pairs, as produced by new FormData(form).
export function collectPayload(entries) {
  const payload = {};
  for (const [name, rawValue] of entries) {
    const value = typeof rawValue === "string" ? rawValue.trim() : rawValue;
    if (MULTI_VALUE_FIELDS.has(name)) {
      payload[name] = [...(payload[name] || []), value];
    } else {
      payload[name] = value;
    }
  }
  return payload;
}

// Returns { fieldName: message } for every problem; an empty object means valid.
export function validatePayload(kind, payload) {
  if (!isKnownForm(kind)) {
    throw new Error(`Unknown LabRats form "${kind}"`);
  }
  const errors = {};
  for (const [field, label] of Object.entries(FORM_RULES[kind].required)) {
    if (!payload[field]) {
      errors[field] = `Please enter your ${label}.`;
    }
  }
  if (payload.email && !EMAIL_PATTERN.test(payload.email)) {
    errors.email = "Please enter an email address like name@example.com.";
  }
  if (kind === "scholarship") {
    Object.assign(errors, validateScholarship(payload));
  }
  return errors;
}

function validateScholarship(payload) {
  const errors = {};
  if (payload.phone && payload.phone.replace(/\D/g, "").length < 10) {
    errors.phone = "Please enter a phone number with area code.";
  }
  if (!payload.programs || payload.programs.length === 0) {
    errors.programs = "Choose at least one program.";
  }
  if (!payload.income_under_limit) {
    errors.eligibility = "Please answer the household income question.";
  } else if (payload.income_under_limit !== "yes" && payload.military_family !== "yes") {
    errors.eligibility =
      "Scholarships are for households under $89,000 a year or military families. " +
      "If your situation is different, contact us and we will talk it through.";
  }
  return errors;
}

// First name to greet the person with after a successful submission.
export function greetingName(payload) {
  const field = ["parent_first_name", ...NAME_FIELDS].find((name) => payload[name]);
  return field ? payload[field] : "";
}
