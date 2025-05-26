// frontend/js/skills.js

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("skills-container");
  if (!container) return;

  if (skills.length === 0) {
    container.innerHTML = '<p class="no-data-message">No skill exchanges available at the moment.</p>';
    return;
  }

  let html = '';
  skills.forEach((item) => {
    html += `
      <div class="card">
        <h3>${item.name}</h3>
        <p><strong>Skill Offered:</strong> ${item.skill}</p>
        <p><strong>Looking For:</strong> ${item.wants}</p>
        ${item.contact ? `<p><strong>Contact:</strong> <a href="mailto:${item.contact}">${item.contact}</a></p>` : ''}
      </div>
    `;
  });

  container.innerHTML = html;
});
