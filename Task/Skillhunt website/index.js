// sticky scroll
window.addEventListener("scroll", function () {
  var navBar = document.querySelector(".nav-bar");
  var scrollPosition = window.scrollY;

  if (scrollPosition > 1000) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
});
// click input border

// animation from bottom when scroll

