const $ = document;
const barIcon = $.querySelector(".header__bars-icon");
const smallNavbar = $.querySelector(".navbar-sm");
let showSmallNavbar = false;

barIcon.addEventListener("click", (event) => {
  if (!showSmallNavbar) {
    smallNavbar.style.height = `${smallNavbar.scrollHeight}px`;
    showSmallNavbar = true;
  } else {
    smallNavbar.style.height = `0px`;
    showSmallNavbar = false;
  }
});
