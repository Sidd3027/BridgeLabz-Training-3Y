// Q2: Student Form Validator (Forms + RegExp)
// Open q2_student_form.html in a browser to test this file.
const studentForm = document.querySelector("#studentForm");

if (studentForm) {
    const rules = {
        name: /^[A-Za-z ]+$/,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        phone: /^\d{10}$/,
        password: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
    };

    studentForm.addEventListener("submit", event => {
        event.preventDefault();
        let allValid = true;

        Object.entries(rules).forEach(([fieldName, pattern]) => {
            const input = studentForm.elements[fieldName];
            const error = document.querySelector(`#${fieldName}Error`);
            const valid = pattern.test(input.value.trim());

            input.classList.toggle("valid", valid);
            input.classList.toggle("invalid", !valid);
            error.textContent = valid ? "" : `Please enter a valid ${fieldName}.`;
            if (!valid) allValid = false;
        });

        const result = document.querySelector("#studentResult");
        result.textContent = allValid ? "Registration details are valid!" : "Please correct the highlighted fields.";
    });
}
