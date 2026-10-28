// Q1: Dynamic Product List Manager — event delegation for Edit/Delete.
const productInput = document.querySelector("#productInput");
const addProductButton = document.querySelector("#addProduct");
const productList = document.querySelector("#productList");

function finishEditing(item, input) {
    if (!item || !input || !item.contains(input)) return;
    const updatedName = input.value.trim();
    const nameSpan = item.querySelector(".product-name");
    nameSpan.textContent = updatedName || input.dataset.original || "Unnamed product";
    input.remove();
    nameSpan.hidden = false;
    item.classList.remove("editing");
}

function addProduct(name) {
    const item = document.createElement("li");
    const nameSpan = document.createElement("span");
    nameSpan.className = "product-name";
    nameSpan.textContent = name;
    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.dataset.action = "edit";
    editButton.textContent = "Edit";
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.dataset.action = "delete";
    deleteButton.textContent = "Delete";
    item.append(nameSpan, " ", editButton, " ", deleteButton);
    productList.appendChild(item);
}

addProductButton.addEventListener("click", () => {
    const name = productInput.value.trim();
    if (!name) return;
    addProduct(name);
    productInput.value = "";
    productInput.focus();
});

productList.addEventListener("click", event => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;
    const item = button.closest("li");
    if (button.dataset.action === "delete") {
        item.remove();
    } else if (button.dataset.action === "edit" && !item.classList.contains("editing")) {
        const nameSpan = item.querySelector(".product-name");
        const input = document.createElement("input");
        input.className = "editing";
        input.value = nameSpan.textContent;
        input.dataset.original = nameSpan.textContent;
        nameSpan.hidden = true;
        item.insertBefore(input, nameSpan);
        item.classList.add("editing");
        input.focus();
        input.select();
        input.addEventListener("keydown", keyEvent => {
            if (keyEvent.key === "Enter") finishEditing(item, input);
            if (keyEvent.key === "Escape") {
                input.value = input.dataset.original;
                finishEditing(item, input);
            }
        });
    }
});

document.addEventListener("click", event => {
    const editingItem = productList.querySelector("li.editing");
    if (!editingItem || editingItem.contains(event.target)) return;
    finishEditing(editingItem, editingItem.querySelector("input.editing"));
});
