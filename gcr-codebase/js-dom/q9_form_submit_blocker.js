// Q9: Form Submit Blocker with preventDefault() and live errors.
const registrationForm = document.querySelector("#registrationForm");
const successMessage = document.querySelector("#success");
const fieldRules = {
    name: value => value.trim().length > 0 || "Name is required.",
    email: value => value.trim().length > 0 ? (value.includes("@") || "Email must contain @.") : "Email is required.",
    password: value => value.length >= 6 || "Password must be at least 6 characters."
};

function validateField(fieldName) {
    const input = registrationForm.elements[fieldName];
    const errorElement = document.querySelector(`#${fieldName}Error`);
    const result = fieldRules[fieldName](input.value);
    const errorText = result === true ? "" : result;
    errorElement.textContent = errorText;
    input.classList.toggle("invalid", Boolean(errorText));
    return !errorText;
}

Object.keys(fieldRules).forEach(fieldName => {
    registrationForm.elements[fieldName].addEventListener("input", () => {
        validateField(fieldName);
        successMessage.textContent = "";
    });
});

registrationForm.addEventListener("submit", event => {
    event.preventDefault();
    const allValid = Object.keys(fieldRules).map(validateField).every(Boolean);
    if (allValid) {
        successMessage.textContent = "Form Submitted Successfully";
        registrationForm.reset();
        Object.keys(fieldRules).forEach(fieldName => {
            document.querySelector(`#${fieldName}Error`).textContent = "";
            registrationForm.elements[fieldName].classList.remove("invalid");
        });
    } else {
        successMessage.textContent = "";
    }
});
