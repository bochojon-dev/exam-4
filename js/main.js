// Backtop //////////////////////////////////
window.addEventListener("scroll", function () {
  toggleBacktop();
});
let backtop = document.getElementById("backtop");
function toggleBacktop() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.style.bottom = "20px";
  } else {
    backtop.style.bottom = "-50px";
  }
}
// Responsive nav //////////////////////////////////
function toggleNavbar() {
  document.getElementById("navbar-responsive").classList.toggle("open");
}
document.getElementById("menu-btn").addEventListener("click", toggleNavbar);
// Nav shrink ////////////////////////
window.addEventListener("scroll", function () {
  shrink();
});
let navbar = document.getElementById("navbar");
function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}
// Lght dark ////////////////////////
let modeBtn = document.getElementById("light-dark");
modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});
// Header fixed //////////////////////
window.addEventListener("DOMContentLoaded", function () {
  var element = document.querySelector("nav-items"); // HTML elementingizni tanlash
  element.addEventListener("scroll", function () {
    var scrollPosition = element.scrollTop;
    if (scrollPosition > 40) {
      element.classList.add("scrolled"); // CSS klassni qo'shish
    } else {
      element.classList.remove("scrolled"); // CSS klassni o'chirish
    }
  });
});
