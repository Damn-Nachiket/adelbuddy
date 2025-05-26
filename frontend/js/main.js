// main.js - AdelBuddy frontend interactivity starter

console.log("Welcome to AdelBuddy! Let's build something amazing!");

// Example: Highlight the current page link in nav (simple)
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a');
  links.forEach(link => {
    if (link.href === window.location.href) {
      link.style.fontWeight = 'bold';
      link.style.textDecoration = 'underline';
    }
  });
});
