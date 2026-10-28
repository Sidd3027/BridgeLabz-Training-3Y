// Q3: Multi-Step Form — validate the current step before moving forward.
const multiStepForm = document.querySelector("#multiStepForm");
const steps = [...multiStepForm.querySelectorAll(".step")];
const backButton = document.querySelector("#backButton");
const nextButton = document.querySelector("#nextButton");
const submitButton = document.querySelector("#submitButton");
const formMessage = document.querySelector("#formMessage");
let currentStep = 0;

function showStep(index) {
    steps.forEach((step, stepIndex) => step.hidden = stepIndex !== index);
    backButton.disabled = index === 0;
    nextButton.hidden = index === steps.length - 1;
    submitButton.hidden = index !== steps.length - 1;
    formMessage.textContent = "";
}

function validateCurrentStep() {
    const input = steps[currentStep].querySelector("input");
    input.setCustomValidity("");
    if (!input.checkValidity()) {
        input.reportValidity();
        return false;
    }
    return true;
}

nextButton.addEventListener("click", () => {
    if (!validateCurrentStep()) return;
    currentStep++;
    showStep(currentStep);
});
backButton.addEventListener("click", () => {
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
    }
});
multiStepForm.addEventListener("submit", event => {
    event.preventDefault();
    if (!validateCurrentStep()) return;
    const data = Object.fromEntries(new FormData(multiStepForm).entries());
    formMessage.textContent = `Registration complete: ${data.name}, ${data.email}.`;
    steps.forEach(step => step.hidden = true);
    backButton.hidden = nextButton.hidden = submitButton.hidden = true;
});
showStep(currentStep);
