// frontend/js/main.js

document.addEventListener("DOMContentLoaded", () => {
  const resourcesContainer = document.getElementById("resources-container");
  if (!resourcesContainer) return;

  if (resources.length === 0) {
    resourcesContainer.innerHTML = '<p class="no-data-message">No resources available at the moment.</p>';
    return;
  }

  let html = '';
  resources.forEach((item) => {
    html += `
      <div class="listing-item">
        <h3>${item.title}</h3>
        <p><strong>Type:</strong> ${item.type}</p>
        <p>${item.description}</p>
        <p><strong>Location:</strong> ${item.location || 'N/A'}</p>
        ${item.contact ? `<p><strong>Contact:</strong> <a href="mailto:${item.contact}">${item.contact}</a></p>` : ''}
        ${item.date ? `<p><strong>Date:</strong> ${item.date}</p>` : ''}
      </div>
    `;
  });

  resourcesContainer.innerHTML = html;
});
