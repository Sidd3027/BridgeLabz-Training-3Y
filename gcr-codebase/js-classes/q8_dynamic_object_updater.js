// Q8: Dynamic Object Updater
// Open q8_object_updater.html in a browser to test this file.
const user = { name: "John", email: "john@mail.com", age: 21 };
const userForm = document.querySelector("#userForm");

if (userForm) {
    userForm.elements.name.value = user.name;
    userForm.elements.email.value = user.email;
    userForm.elements.age.value = user.age;

    const renderUser = () => {
        document.querySelector("#userDetails").textContent = JSON.stringify(user, null, 2);
    };
    renderUser();

    userForm.addEventListener("submit", event => {
        event.preventDefault();
        user.name = userForm.elements.name.value.trim();
        user.email = userForm.elements.email.value.trim();
        user.age = Number(userForm.elements.age.value);
        renderUser();
    });
}
