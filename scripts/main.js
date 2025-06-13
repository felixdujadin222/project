// 1. Greet user based on time of day
function greetUser() {
  const greeting = document.getElementById("greeting");
  const hour = new Date().getHours();
  let message = "";

  if (hour < 12) {
    message = "Good morning!";
  } else if (hour < 18) {
    message = "Good afternoon!";
  } else {
    message = "Good evening!";
  }

  if (greeting) {
    greeting.textContent = `${message} Welcome to Learn to Code with Felix.`;
  }
}

// 2. Set current year in footer
function setFooterYear() {
  const footerYear = document.getElementById("year");
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }
}

// 3. Display basic tutorial list
const tutorialsList = [
  { title: "Intro to HTML", level: "Beginner" },
  { title: "CSS Flexbox", level: "Beginner" },
  { title: "JavaScript DOM", level: "Intermediate" }
];

function displayTutorials() {
  const list = document.getElementById("tutorialList");
  if (list) {
    tutorialsList.forEach(tut => {
      const item = document.createElement("li");
      item.innerHTML = `<strong>${tut.title}</strong> - ${tut.level}`;
      list.appendChild(item);
    });
  }
}

// 4. Extended tutorial list
const extendedTutorials = [
  { title: "Intro to HTML", level: "Beginner", topic: "Structure and Tags" },
  { title: "CSS Basics", level: "Beginner", topic: "Styling Text and Layout" },
  { title: "Flexbox and Grid", level: "Beginner", topic: "Responsive Layouts" },
  { title: "JavaScript Fundamentals", level: "Intermediate", topic: "Variables, Functions, and Events" },
  { title: "DOM Manipulation", level: "Intermediate", topic: "Selectors and Events" },
  { title: "Local Storage", level: "Intermediate", topic: "Data Persistence in the Browser" }
];

function displayFullTutorials() {
  const list = document.getElementById("fullTutorialList");
  if (list) {
    extendedTutorials.forEach(tut => {
      const item = document.createElement("li");
      item.innerHTML = `
        <strong>${tut.title}</strong> - ${tut.level}<br>
        <em>Topic:</em> ${tut.topic}
      `;
      list.appendChild(item);
    });
  }
}

// 5. Handle contact form with localStorage
function handleFormSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const confirmation = document.getElementById("confirmation");

  if (name && email && message) {
    localStorage.setItem("contactName", name);
    localStorage.setItem("contactMessage", message);

    if (confirmation) {
      confirmation.innerHTML = `Thanks, ${name}! Your message has been received.`;
    }
    event.target.reset();
  } else {
    if (confirmation) {
      confirmation.innerHTML = "Please fill out all fields before submitting.";
    }
  }
}

// 6. DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  greetUser();
  setFooterYear();
  displayTutorials();
  displayFullTutorials();

  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", handleFormSubmit);
  }
});

const toggleButton = document.getElementById("modeToggle");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (localStorage.getItem("theme") === "dark" || (!localStorage.getItem("theme") && prefersDark)) {
  document.body.classList.add("dark-mode");
  toggleButton.textContent = "☀️ Light Mode";
}

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  toggleButton.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});


