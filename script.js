document.addEventListener("DOMContentLoaded", () => {
  // ---------------------------
  // 🌟 Scroll reveal
  // ---------------------------
  const hiddenEls = document.querySelectorAll('.hidden');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('show');
    });
  });
  hiddenEls.forEach(el => observer.observe(el));

  // ---------------------------
  // 📂 GitHub projects
  // ---------------------------
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
  }

  // ---------------------------
  // 🌸 Sakura petals (on scroll + on click)
  // ---------------------------
  function createSakuraLeaf() {
  const leaf = document.createElement("div");
  leaf.classList.add("sakura");

  // Random position, size, drift
  leaf.style.left = Math.random() * window.innerWidth + "px";
  const size = 12 + Math.random() * 20;
  leaf.style.width = size + "px";
  leaf.style.height = size * 1.3 + "px";
  leaf.style.animationDuration = (5 + Math.random() * 5) + "s";

  // add random horizontal drift (CSS var)
  leaf.style.setProperty("--drift", (Math.random() - 0.5) * 200 + "px");

  document.body.appendChild(leaf);

  setTimeout(() => leaf.remove(), 12000);
}


  // spawn a few petals per scroll event
  window.addEventListener("scroll", () => {
    for (let i = 0; i < 3; i++) createSakuraLeaf();
  });

  // spawn a burst on click/tap
  window.addEventListener("click", () => {
    for (let i = 0; i < 10; i++) createSakuraLeaf();
  });
});
