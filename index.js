const OuterHeight = document.querySelector(".outerHeight");
const OuterWidth = document.querySelector(".outerWidth");
const InnerHeight = document.querySelector(".innerHeight");
const InnerWidth = document.querySelector(".innerWidth");

OuterHeight.textContent = window.outerHeight;
OuterWidth.textContent = window.outerWidth;

InnerHeight.textContent = window.innerHeight;
InnerWidth.textContent = window.innerWidth;

const reportWindowSize = () => {
    OuterHeight.textContent = window.outerHeight;
    OuterWidth.textContent = window.outerWidth;

    InnerHeight.textContent = window.innerHeight;
    InnerWidth.textContent = window.innerWidth;
};

window.addEventListener("resize", reportWindowSize);
