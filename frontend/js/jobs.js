document.addEventListener('DOMContentLoaded', () => {
  const jobListings = [
    {
      title: "Part-Time Barista",
      company: "Bean Time Café",
      location: "Rundle Street, Adelaide",
      description: "Seeking friendly barista with basic coffee skills. Students welcome.",
      applyLink: "mailto:beantime@example.com"
    },
    {
      title: "Casual Retail Assistant",
      company: "EcoMart",
      location: "Central Market, Adelaide",
      description: "Evening shifts available. No prior experience required.",
      applyLink: "mailto:ecomartjobs@example.com"
    }
  ];

  const container = document.getElementById('job-listings');

  jobListings.forEach(job => {
    const el = document.createElement('div');
    el.classList.add('listing-item');
    el.innerHTML = `
      <h3>${job.title} <small>– ${job.company}</small></h3>
      <p><strong>Location:</strong> ${job.location}</p>
      <p>${job.description}</p>
      <a href="${job.applyLink}" target="_blank">Apply Now</a>
    `;
    container.appendChild(el);
  });
});
