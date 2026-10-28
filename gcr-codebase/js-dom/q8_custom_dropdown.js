// Q8: Custom Dropdown — outside click listener uses the capturing phase.
const dropdown = document.querySelector("#dropdown");
const dropdownButton = document.querySelector("#dropdownButton");
const dropdownOptions = document.querySelector("#dropdownOptions");

dropdownButton.addEventListener("click", () => {
    dropdownOptions.hidden = !dropdownOptions.hidden;
    dropdownButton.setAttribute("aria-expanded", String(!dropdownOptions.hidden));
});

dropdownOptions.addEventListener("click", event => {
    const option = event.target.closest("button");
    if (!option) return;
    dropdownButton.textContent = `${option.textContent} ▾`;
    dropdownOptions.hidden = true;
    dropdownButton.setAttribute("aria-expanded", "false");
});

// Capture phase (true) lets the document detect outside clicks early.
document.addEventListener("click", event => {
    if (!dropdown.contains(event.target)) {
        dropdownOptions.hidden = true;
        dropdownButton.setAttribute("aria-expanded", "false");
    }
}, true);
