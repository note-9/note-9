document.addEventListener("DOMContentLoaded", () => {
  // Scroll reveal
  const hiddenEls = document.querySelectorAll('.hidden');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('show');
    });
  });
  hiddenEls.forEach(el => observer.observe(el));

  // GitHub projects
  const projects = [
    { title: 'Self-Driving-Car', desc: 'Autonomous vehicle simulator / control system.', url: 'https://github.com/note-9/self-driving-car' },
    { title: 'Starfield Animation', desc: 'Stunning starfield visual effect using SDL.', url: 'https://github.com/note-9/starfield-animation' },
    { title: 'Game of Life', desc: 'Conway’s cellular automaton simulation.', url: 'https://github.com/note-9/game-of-life' },
    { title: 'TCPChat', desc: 'Client-server real-time TCP chat application.', url: 'https://github.com/note-9/TCPChat' },
    { title: 'Web Crawler', desc: 'Custom web-scraping & crawling tool.', url: 'https://github.com/note-9/web-crawler' },
    { title: 'Social Media App', desc: 'Small API for a social media like webapp.', url: 'https://github.com/note-9/Social-Media-App' },
  ];

  const container = document.querySelector('.projects');
  if (container) {
    projects.forEach(p => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h3><a href="${p.url}" target="_blank">${p.title}</a></h3>
        <p>${p.desc}</p>
      `;
      container.appendChild(card);
    });
  } else {
    console.error("❌ Could not find .projects container in HTML.");
  }

  // 🌸 Sakura leaves falling on scroll
document.addEventListener("DOMContentLoaded", () => {
  // 🌸 Sakura petals falling continuously
  function createSakuraLeaf() {
    const leaf = document.createElement("div");
    leaf.classList.add("sakura");

    // Random horizontal position
    leaf.style.left = Math.random() * window.innerWidth + "px";

    // Random size
    const size = 10 + Math.random() * 15;
    leaf.style.width = size + "px";
    leaf.style.height = size + "px";

    // Random animation duration (fall speed)
    leaf.style.animationDuration = (5 + Math.random() * 5) + "s";

    // Random rotation speed
    leaf.style.animationDelay = (Math.random() * 5) + "s";

    document.body.appendChild(leaf);

    // Remove after animation ends
    setTimeout(() => leaf.remove(), 10000);
  }

  // Keep spawning petals
  setInterval(createSakuraLeaf, 300); // every 0.3s
});

});
