document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById("resources-container");
  const form = document.getElementById('resources-form');

  function renderResources(data) {
    container.innerHTML = '';

    if (!data || data.length === 0) {
      container.innerHTML = '<p>No resources added yet. Be the first to add!</p>';
      return;
    }

    data.forEach(entry => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <h3><a href="${entry.link}" target="_blank" rel="noopener">${entry.title}</a></h3>
        <p>${entry.description}</p>
      `;

      container.appendChild(card);
    });
  }

  // Load saved resources or fallback empty array
  const savedResources = JSON.parse(localStorage.getItem('resources')) || [];
  renderResources(savedResources);

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newEntry = {
      title: document.getElementById('title').value,
      link: document.getElementById('link').value,
      description: document.getElementById('description').value,
    };

    savedResources.push(newEntry);
    localStorage.setItem('resources', JSON.stringify(savedResources));
    renderResources(savedResources);

    form.reset();
  });
});
