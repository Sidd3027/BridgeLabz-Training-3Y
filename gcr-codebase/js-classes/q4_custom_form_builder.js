// Q4: Custom Form Builder (Forms + Classes)
// Open q4_form_builder.html in a browser to test this file.
class FormBuilder {
    constructor(fields, container) {
        this.fields = fields;
        this.container = container;
    }

    buildForm() {
        this.container.innerHTML = `
            <form id="dynamicForm">
                ${this.fields.map((field, index) => `
                    <label for="field${index}">${field.label}</label>
                    <input id="field${index}" name="${field.name}" type="${field.type}" required>
                `).join("")}
                <button type="submit">Submit</button>
            </form>
            <pre id="formData"></pre>
        `;

        this.container.querySelector("#dynamicForm").addEventListener("submit", event => {
            event.preventDefault();
            const data = this.getFormData();
            this.container.querySelector("#formData").textContent = JSON.stringify(data, null, 2);
        });
    }

    getFormData() {
        const form = this.container.querySelector("#dynamicForm");
        return Object.fromEntries(new FormData(form).entries());
    }
}

const formContainer = document.querySelector("#formContainer");
if (formContainer) {
    const builder = new FormBuilder([
        { type: "text", label: "Username", name: "username" },
        { type: "email", label: "Email", name: "email" },
        { type: "password", label: "Password", name: "password" }
    ], formContainer);
    builder.buildForm();
}
