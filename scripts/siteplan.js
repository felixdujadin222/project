// siteplan.js

// 1. Show current date in footer
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector("footer");
  if (footer) {
    const date = new Date();
    footer.innerHTML += `<p>Last updated: ${date.toDateString()}</p>`;
  }
});

// 2. Optional: Toggle section visibility for wireframe sketches
function toggleSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.style.display = section.style.display === "none" ? "block" : "none";
  }
}
