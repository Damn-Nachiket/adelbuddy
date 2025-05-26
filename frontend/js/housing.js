document.addEventListener('DOMContentLoaded', () => {
  const listings = [
    {
      title: "Shared Room near Flinders Uni",
      location: "Bedford Park",
      price: "$130/week",
      description: "Fully furnished. Walkable to university. Includes WiFi.",
      contact: "contact: housemate1@example.com"
    },
    {
      title: "Single Room – City Fringe",
      location: "Goodwood",
      price: "$180/week",
      description: "Close to tram. Looking for student or working professional.",
      contact: "contact: goodwoodflat@example.com"
    }
  ];

  const container = document.getElementById('housing-listings');

  listings.forEach(item => {
    const el = document.createElement('div');
    el.classList.add('listing-item');
    el.innerHTML = `
      <h3>${item.title}</h3>
      <p><strong>Location:</strong> ${item.location}</p>
      <p><strong>Price:</strong> ${item.price}</p>
      <p>${item.description}</p>
      <p>${item.contact}</p>
    `;
    container.appendChild(el);
  });
});
