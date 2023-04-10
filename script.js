/** menu sub drop down */
const featureLi = document.querySelector(".featureLi");
const companyLi = document.querySelector(".companyLi");
const featuresDropDown = document.querySelector(".featuresDropDown");
const companyDropDown = document.querySelector(".companyDropDown");
const featureArrowDown = document.getElementById("featureArrowDown");
const featureArrowUp = document.getElementById("featureArrowUp");
const companyArrowDown = document.getElementById("companyArrowDown");
const companyArrowUp = document.getElementById("companyArrowUp");

/* add event listeners */

featureLi.addEventListener("click", () => {
  featureArrowDown.classList.toggle("hidden");
  featureArrowUp.classList.toggle("hidden");
  featuresDropDown.classList.toggle("hidden");
});

companyLi.addEventListener("click", () => {
  companyArrowDown.classList.toggle("hidden");
  companyArrowUp.classList.toggle("hidden");
  companyDropDown.classList.toggle("hidden");
});
