document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('skills-list');

  if (!skills || skills.length === 0) {
    container.innerHTML = '<p>No skill offers yet. Be the first to add!</p>';
    return;
  }

  skills.forEach(entry => {
    const card = document.createElement('div');
    card.className = 'skill-card';

    card.innerHTML = `
      <h3>${entry.name}</h3>
      <p><strong>Can Offer:</strong> ${entry.skill}</p>
      <p><strong>Wants Help With:</strong> ${entry.wants}</p>
      <p><strong>Contact:</strong> ${entry.contact}</p>
    `;

    container.appendChild(card);
  });
});
