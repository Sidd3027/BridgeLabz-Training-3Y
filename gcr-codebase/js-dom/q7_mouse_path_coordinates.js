// Q7: Detect mouse movement and double-click coordinates.
const trackingBox = document.querySelector("#trackingBox");
const coordinates = document.querySelector("#coordinates");

trackingBox.addEventListener("mousemove", event => {
    coordinates.textContent = `clientX: ${event.clientX}, clientY: ${event.clientY}`;
});

trackingBox.addEventListener("dblclick", event => {
    const boxRect = trackingBox.getBoundingClientRect();
    const dot = document.createElement("span");
    dot.className = "dot";
    dot.style.left = `${event.clientX - boxRect.left}px`;
    dot.style.top = `${event.clientY - boxRect.top}px`;
    trackingBox.appendChild(dot);
});
