// Q6: Real-Time Table Filter — case-insensitive matching.
const searchInput = document.querySelector("#searchInput");
const studentRows = [...document.querySelectorAll("#studentRows tr")];
const noResults = document.querySelector("#noResults");

searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    studentRows.forEach(row => {
        const matches = row.textContent.toLowerCase().includes(searchTerm);
        row.hidden = !matches;
        if (matches) visibleCount++;
    });

    noResults.hidden = visibleCount !== 0;
});
