// Q7: Login Form Validation using RegExp
// Open q7_login_form.html in a browser to test this file.
const loginForm = document.querySelector("#loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", event => {
        event.preventDefault();

        const username = loginForm.elements.username.value.trim();
        const password = loginForm.elements.password.value;
        const errors = [];

        if (username.length < 5) errors.push("Username must contain at least 5 characters.");
        if (password.length < 8) errors.push("Password must contain at least 8 characters.");
        if (!/[0-9]/.test(password)) errors.push("Password must contain a number.");
        if (!/[A-Z]/.test(password)) errors.push("Password must contain an uppercase letter.");
        if (!/[a-z]/.test(password)) errors.push("Password must contain a lowercase letter.");
        if (!/[^A-Za-z0-9]/.test(password)) errors.push("Password must contain a special character.");

        document.querySelector("#loginResult").textContent =
            errors.length ? errors.join("\\n") : "Login details are valid!";
    });
}
