// count js
function countUp(target, element, duration) {
  let start = 0;
  const increment = target / duration;
  const timer = setInterval(() => {
    start += increment;
    element.textContent = Math.ceil(start);
    if (start >= target) {
      clearInterval(timer);
      element.textContent = target;
    }
  }, 1000);
}

// Get the element where the count will be displayed
const countElement = document.getElementById('count');

// Call countUp function with target number, element, and duration in seconds
countUp(100, countElement, 5); // Example: Count up to 100 in 5 seconds