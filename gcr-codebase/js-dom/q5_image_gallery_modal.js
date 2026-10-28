// Q5: Image Gallery with Modal Preview.
const gallery = document.querySelector("#gallery");
const modal = document.querySelector("#modal");
const modalContent = document.querySelector("#modalContent");
const modalImage = document.querySelector("#modalImage");

gallery.addEventListener("click", event => {
    const clickedImage = event.target.closest("img");
    if (!clickedImage) return;
    modalImage.src = clickedImage.src.replace("/400/300", "/1000/750");
    modalImage.alt = clickedImage.alt;
    modal.hidden = false;
});
modal.addEventListener("click", () => modal.hidden = true);
modalContent.addEventListener("click", event => event.stopPropagation());
document.querySelector("#closeModal").addEventListener("click", () => modal.hidden = true);
