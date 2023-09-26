const titles = [
  "Front-End Developer",
  "React Developer | NextJs",
  "Vue Developer | VueX",
  "User Interface Designer",
  // Add more titles as needed
];

let currentIndex = 0;
const changingTitle = document.getElementById("changingTitle");

function changeTitle() {
  changingTitle.textContent = titles[currentIndex];
  currentIndex = (currentIndex + 1) % titles.length;
}

// Change the title every 60,000 milliseconds (1 minute)
setInterval(changeTitle, 3000);

// Add this code to animate the progress bars when the page loads
document.addEventListener("DOMContentLoaded", function () {
  const progressBars = document.querySelectorAll(".progress");

  progressBars.forEach((bar) => {
    const value = bar.getAttribute("data-value");
    bar.style.width = value;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".mobile-menu");
  const navList = document.querySelector(".nav-list");

  hamburger.addEventListener("click", function () {
    this.classList.toggle("active");
    navList.classList.toggle("active");
  });
});
