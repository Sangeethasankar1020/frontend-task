document.addEventListener("DOMContentLoaded", function () {
  var upArrow = document.querySelector(".up-arrow");

  upArrow.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      // Adjust the scroll position as needed
      upArrow.classList.add("show");
    } else {
      upArrow.classList.remove("show");
    }
  });
});
