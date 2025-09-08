// Scroll reveal
const hiddenEls = document.querySelectorAll('.hidden');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
});
hiddenEls.forEach(el => observer.observe(el));

// Your GitHub projects data
const projects = [
  { title: 'Self-Driving-Car', desc: 'Autonomous vehicle simulator / control system.', url: 'https://github.com/note-9/self-driving-car' },
  { title: 'Starfield Animation', desc: 'Stunning starfield visual effect using canvas.', url: 'https://github.com/note-9/starfield-animation' },
  { title: 'Game of Life', desc: 'Conway’s cellular automaton simulation.', url: 'https://github.com/note-9/game-of-life' },
  { title: 'TCPChat', desc: 'Client-server real-time TCP chat application.', url: 'https://github.com/note-9/TCPChat' },
  { title: 'Web Crawler', desc: 'Custom web-scraping & crawling tool.', url: 'https://github.com/note-9/web-crawler' },
  { title: 'Social Media App', desc: 'Full-stack social media platform.', url: 'https://github.com/note-9/Social-Media-App' },
];

// Inject project cards
const container = document.querySelector('.projects');
projects.forEach(p => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <h3><a href="${p.url}" target="_blank">${p.title}</a></h3>
    <p>${p.desc}</p>
  `;
  container.appendChild(card);
});
