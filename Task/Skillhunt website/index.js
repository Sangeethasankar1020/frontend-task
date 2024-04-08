// sticky scroll
window.addEventListener("scroll", function () {
  var navBar = document.querySelector(".nav-bar");
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
});
// click input border
document.addEventListener("DOMContentLoaded", function () {
    var findBtn = document.querySelector(".find-btn");
    
  findBtn.addEventListener("click", function () {
    findBtn.style.borderColor = "lightgrey";
  });
});
// animation from bottom when scroll

