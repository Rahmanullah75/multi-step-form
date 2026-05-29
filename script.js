const steps = document.querySelectorAll(".form-step");

const nextBtns = document.querySelectorAll(".next-btn");

const prevBtns = document.querySelectorAll(".prev-btn");

let currentStep = 0;

// Show Current Step
function showStep(index){

    steps.forEach((step) => {
        step.classList.remove("active");
    });

    steps[index].classList.add("active");
}

// Next Button
nextBtns.forEach((button) => {

    button.addEventListener("click", () => {

        currentStep++;

        if(currentStep >= steps.length){
            currentStep = steps.length - 1;
        }

        showStep(currentStep);
    });
});

// Previous Button
prevBtns.forEach((button) => {

    button.addEventListener("click", () => {

        currentStep--;

        if(currentStep < 0){
            currentStep = 0;
        }

        showStep(currentStep);
    });
});

// Submit Button
const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", () => {

    alert("Form Submitted Successfully!");

});