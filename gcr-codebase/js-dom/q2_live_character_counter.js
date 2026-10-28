// Q2: Live Character Counter. The maxlength attribute is a backup guard;
// beforeinput + preventDefault blocks edits that would exceed 100 characters.
const messageBox = document.querySelector("#message");
const counter = document.querySelector("#counter");
const resetButton = document.querySelector("#reset");
const MAX_CHARACTERS = 100;

function updateCounter() {
    const remaining = MAX_CHARACTERS - messageBox.value.length;
    counter.textContent = `${remaining} characters remaining`;
    counter.classList.toggle("warning", remaining <= 20 && remaining > 0);
    counter.classList.toggle("danger", remaining === 0);
}

messageBox.addEventListener("beforeinput", event => {
    if (event.inputType.startsWith("delete")) return;
    const selectedLength = messageBox.selectionEnd - messageBox.selectionStart;
    const insertedText = event.data || "";
    const projectedLength = messageBox.value.length - selectedLength + insertedText.length;
    if (projectedLength > MAX_CHARACTERS) event.preventDefault();
});
messageBox.addEventListener("input", updateCounter);
resetButton.addEventListener("click", () => {
    messageBox.value = "";
    updateCounter();
    messageBox.focus();
});
updateCounter();
