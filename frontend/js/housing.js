document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('housing-container');
  const form = document.getElementById('housing-form');

  // Load jobs from localStorage or fallback to default
  const savedJobs = JSON.parse(localStorage.getItem('housing')) || housing;

  function renderJobs(data) {
    container.innerHTML = '';

    if (!data || data.length === 0) {
      container.innerHTML = '<p>No house listings yet. Be the first to add!</p>';
      return;
    }

    data.forEach((job, index) => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <h3>${entry.address}</h3>
        <p>${entry.type}</p>
        <p><strong>Location:</strong> ${entry.rent}</p>
        <p><strong>Contact:</strong> ${entry.contact}</p>
        <button class="delete-btn" data-index="${index}">Delete</button>
      `;

      container.appendChild(card);
    });

    // Attach delete button listeners
    const deleteButtons = container.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const idx = e.target.getAttribute('data-index');
        savedJobs.splice(idx, 1);
        localStorage.setItem('housing', JSON.stringify(savedJobs));
        renderJobs(savedJobs);
      });
    });
  }

  renderJobs(savedJobs);

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newJob = {
      title: document.getElementById('address').value.trim(),
      description: document.getElementById('type').value.trim(),
      location: document.getElementById('rent').value.trim(),
      contact: document.getElementById('contact').value.trim()
    };

    savedJobs.push(newJob);
    localStorage.setItem('housing', JSON.stringify(savedJobs));
    renderJobs(savedJobs);

    form.reset();
  });
});
