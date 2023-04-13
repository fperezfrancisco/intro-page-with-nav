/** menu sub drop down */
const featureLi = document.querySelector(".featureLi");
const companyLi = document.querySelector(".companyLi");
const featuresDropDown = document.querySelector(".featuresDropDown");
const companyDropDown = document.querySelector(".companyDropDown");
const featureArrowDown = document.getElementById("featureArrowDown");
const featureArrowUp = document.getElementById("featureArrowUp");
const companyArrowDown = document.getElementById("companyArrowDown");
const companyArrowUp = document.getElementById("companyArrowUp");
/** mobile menu sub drop down */
const featureLiMobile = document.getElementById("mobileFeatureLi");
const companyLiMobile = document.getElementById("mobileCompanyLi");
const featuresDropDownMobile = document.querySelector(
  ".featuresDropDownMobile"
);
const companyDropDownMobile = document.querySelector(".companyDropDownMobile");
const featureArrowDownMobile = document.getElementById(
  "featureArrowDownMobile"
);
const featureArrowUpMobile = document.getElementById("featureArrowUpMobile");
const companyArrowDownMobile = document.getElementById(
  "companyArrowDownMobile"
);
const companyArrowUpMobile = document.getElementById("companyArrowUpMobile");

/* add event listeners */
featureLiMobile.addEventListener("click", () => {
  featureArrowDownMobile.classList.toggle("hidden");
  featureArrowUpMobile.classList.toggle("hidden");
  featuresDropDownMobile.classList.toggle("hidden");
});

companyLiMobile.addEventListener("click", () => {
  companyArrowDownMobile.classList.toggle("hidden");
  companyArrowUpMobile.classList.toggle("hidden");
  companyDropDownMobile.classList.toggle("hidden");
});

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

/** mobile menu actions*/

const mobileNav = document.querySelector(".mobileNav");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".mobileCloseBtn");
const openBtn = document.querySelector(".menuOpen");

function toggleMenu() {
  mobileNav.classList.toggle("active");
  overlay.classList.toggle("active");
}

closeBtn.addEventListener("click", toggleMenu);
openBtn.addEventListener("click", toggleMenu);
