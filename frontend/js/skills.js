document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById("skills-container");
  if (!container) {
    console.error("Missing container for skills!");
    return;
  }
  const form = document.getElementById('skill-form');

  // Load from localStorage or fallback to default skills
  let savedSkills = JSON.parse(localStorage.getItem('skills')) || (typeof skills !== 'undefined' ? skills : []);

  function renderSkills(data) {
    container.innerHTML = '';

    if (!data || data.length === 0) {
      container.innerHTML = '<p>No skill offers yet. Be the first to add!</p>';
      return;
    }

    data.forEach((entry, index) => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <h3>${entry.name}</h3>
        <p><strong>Can Offer:</strong> ${entry.skill}</p>
        <p><strong>Wants Help With:</strong> ${entry.wants}</p>
        <p><strong>Contact:</strong> ${entry.contact}</p>
        <button class="delete-btn" data-index="${index}">🗑️ Delete</button>
      `;

      container.appendChild(card);
    });

    // Delete functionality
    document.querySelectorAll('.delete-btn').forEach(button => {
      button.addEventListener('click', function () {
        const index = this.getAttribute('data-index');
        if (confirm("Are you sure you want to delete this entry?")) {
          savedSkills.splice(index, 1);
          localStorage.setItem('skills', JSON.stringify(savedSkills));
          renderSkills(savedSkills);
        }

        localStorage.setItem('skills', JSON.stringify(savedSkills));
        renderSkills(savedSkills);
      });
    });
  }

  renderSkills(savedSkills);

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newEntry = {
      name: document.getElementById('name').value,
      skill: document.getElementById('offer').value,
      wants: document.getElementById('wants').value,
      contact: document.getElementById('contact').value
    };

    savedSkills.push(newEntry);
    localStorage.setItem('skills', JSON.stringify(savedSkills));
    renderSkills(savedSkills);

    form.reset();
  });
});
