// frontend/js/jobs.js

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("jobs-container");
  if (!container) return;

  if (jobs.length === 0) {
    container.innerHTML = '<p class="no-data-message">No job listings available at the moment.</p>';
    return;
  }

  let html = '';
  jobs.forEach((item) => {
    html += `
      <div class="listing-item">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <p><strong>Location:</strong> ${item.location}</p>
        ${item.contact ? `<p><strong>Contact:</strong> <a href="mailto:${item.contact}">${item.contact}</a></p>` : ''}
      </div>
    `;
  });

  container.innerHTML = html;
});
