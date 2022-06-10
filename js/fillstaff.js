let arrayN = document.querySelectorAll(".navbar__menu a");
hrefClass = function () {
  for (let j = 0; j < arrayN.length; j++) {
    arrayN[j].classList.remove("active");
    this.classList.add("active");
  }
};
for (let j = 0; j < arrayN.length; j++) {
  arrayN[j].addEventListener("click", hrefClass);
}
