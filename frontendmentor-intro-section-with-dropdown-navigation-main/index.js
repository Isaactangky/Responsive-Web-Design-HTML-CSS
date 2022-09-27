const openMenu = document.querySelector(".menu-icon");
const closeMenu = document.querySelector(".close-menu");

const overlay = document.querySelector(".overlay");
const mainMenu = document.querySelector(".navbar-user-wrapper");
const mainMenuLiEls = document.querySelectorAll(".main-menu >li");
const subMenuEls = document.querySelectorAll(".sub-menu");
function hideElements() {
  overlay.classList.toggle("hidden");
  mainMenu.classList.toggle("active");
}
openMenu.addEventListener("click", function () {
  overlay.classList.toggle("hidden");
  mainMenu.classList.toggle("active");
});

// Hide overlay and main menu
overlay.addEventListener("click", hideElements);
closeMenu.addEventListener("click", hideElements);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !overlay.classList.contains("hidden"))
    hideElements();
});
// sub-menu
mainMenuLiEls.forEach((li) =>
  li.addEventListener("click", function () {
    const subMenu = this.querySelector(".sub-menu");
    if (!subMenu) return;
    subMenu.classList.toggle("hidden");
  })
);
document.addEventListener("click", function (e) {
  if (
    !e.target.classList.contains("features") &&
    !e.target.classList.contains("company")
  ) {
    subMenuEls.forEach((el) => el.classList.add("hidden"));
  }
});
