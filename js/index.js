const fullBoxAnimation = () => {
  let skillBox = document.querySelector(".skills");
  let windowHeight = window.innerHeight;
  let skillBoxTop = skillBox.getBoundingClientRect().top;
  let fullPoint = 50;
  skillBoxTop < windowHeight - fullPoint
    ? skillBox.classList.add("active")
    : "";
};

window.addEventListener("scroll", () => {
  fullBoxAnimation();
});

document.body.addEventListener("touchmove", () => {
  fullBoxAnimation();
});
