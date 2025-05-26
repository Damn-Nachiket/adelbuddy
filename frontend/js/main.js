document.addEventListener('DOMContentLoaded', () => {
  // Existing nav highlight code (if any)...

  const listingsContainer = document.getElementById('listings');

  if (listingsContainer && typeof localResources !== 'undefined') {
    localResources.forEach(item => {
      const div = document.createElement('div');
      div.className = 'listing-item';
      div.innerHTML = `
        <h3>${item.title} <small>(${item.type})</small></h3>
        <p>${item.description}</p>
        <p><strong>Location:</strong> ${item.location}</p>
        ${item.date ? `<p><strong>Date:</strong> ${item.date}</p>` : ''}
        ${item.contact ? `<p><strong>Contact:</strong> ${item.contact}</p>` : ''}
      `;
      listingsContainer.appendChild(div);
    });
  }
});
