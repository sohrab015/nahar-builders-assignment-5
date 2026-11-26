// Contact page: front-end validation + SweetAlert messages
const rules = {
  name: v => v.trim().length >= 3 || "Enter your full name (at least 3 characters).",
  email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || "Enter a valid email, like name@example.com.",
  phone: v => /^\+?[0-9\s-]{8,16}$/.test(v.trim()) || "Enter a phone number with 8 to 16 digits.",
  subject: v => v !== "" || "Choose a project type.",
  message: v => v.trim().length >= 10 || "Write at least 10 characters about your project."
};

function checkField(field) {
  const input = document.getElementById(field);
  const result = rules[field](input.value);
  const errorBox = document.getElementById(field + "-err");
  const errorClass = input.tagName === "SELECT" ? "select-error" : input.tagName === "TEXTAREA" ? "textarea-error" : "input-error";

  if (result === true) {
    errorBox.innerText = "";
    input.classList.remove(errorClass);
    input.removeAttribute("aria-invalid");
    return true;
  }
  errorBox.innerText = result;
  input.classList.add(errorClass);
  input.setAttribute("aria-invalid", "true");
  return false;
}

const form = document.getElementById("contactForm");

Object.keys(rules).forEach(function (field) {
  document.getElementById(field).addEventListener("blur", () => checkField(field));
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const fields = Object.keys(rules);
  const results = fields.map(checkField);
  const firstBad = fields.find((f, i) => !results[i]);

  if (firstBad) {
    document.getElementById(firstBad).focus();
    Swal.fire({ icon: "error", title: "Please check the form", text: "Some fields need your attention.", confirmButtonColor: "#14212b" });
    return;
  }

  Swal.fire({
    icon: "success",
    title: "Request received",
    text: "This is a demo form, so nothing was sent. Please call +880 1811 44 77 52 or email info@naharbuilders.com to follow up.",
    confirmButtonColor: "#f0a81c"
  });
  form.reset();
});
