// Q4: Theme Switcher — use setAttribute() for both the class and data-theme.
document.querySelectorAll("button[data-theme-choice]").forEach(button => {
    button.addEventListener("click", () => {
        const theme = button.getAttribute("data-theme-choice");
        document.body.setAttribute("class", theme);
        document.body.setAttribute("data-theme", theme);
    });
});
