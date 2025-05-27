document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('jobs-container');
  const form = document.getElementById('job-form');

  // Load jobs from localStorage or fallback to default
  const savedJobs = JSON.parse(localStorage.getItem('jobs')) || jobs;

  function renderJobs(data) {
    container.innerHTML = '';

    if (!data || data.length === 0) {
      container.innerHTML = '<p>No job listings yet. Be the first to add!</p>';
      return;
    }

    data.forEach((job, index) => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <h3>${job.title}</h3>
        <p>${job.description}</p>
        <p><strong>Location:</strong> ${job.location}</p>
        <p><strong>Contact:</strong> ${job.contact}</p>
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
        localStorage.setItem('jobs', JSON.stringify(savedJobs));
        renderJobs(savedJobs);
      });
    });
  }

  renderJobs(savedJobs);

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newJob = {
      title: document.getElementById('job-title').value.trim(),
      description: document.getElementById('job-description').value.trim(),
      location: document.getElementById('job-location').value.trim(),
      contact: document.getElementById('job-contact').value.trim()
    };

    savedJobs.push(newJob);
    localStorage.setItem('jobs', JSON.stringify(savedJobs));
    renderJobs(savedJobs);

    form.reset();
  });
});
