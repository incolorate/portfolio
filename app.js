const menu = document.querySelector("#hamburger-menu");
const navBar = document.querySelector(".nav-options");

menu.addEventListener("click", () => {
  navBar.classList.toggle("hidden");
});

let toggleProjects = document.querySelector("#toggle-projects");

toggleProjects.onclick = () => {
  let arrowUp = `<span class="fa-solid fa-angles-up"></span>`;
  let arrowDown = `<span class="fa-solid fa-angles-down"></span>`;
  if (toggleProjects.innerHTML == arrowUp) {
    console.log("hello");
    document.querySelector("#more-projects").style.display = "none";
    toggleProjects.innerHTML = arrowDown;
  } else {
    document.querySelector("#more-projects").style.display = "initial";
    toggleProjects.innerHTML = arrowUp;
  }
};

// Animations

const hiddenElementsLeft = document.querySelectorAll(".left");
const hiddenElementsRight = document.querySelectorAll(".right");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

hiddenElementsLeft.forEach((el) => observer.observe(el));
hiddenElementsRight.forEach((el) => observer.observe(el));
