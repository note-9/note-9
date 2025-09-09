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
  // call this where you need it (e.g., inside DOMContentLoaded)
function createSakuraPetal() {
  // respect user's reduced-motion setting
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const petal = document.createElement("div");
  petal.className = "sakura";

  // keep sizes small to avoid balloon look: 8px - 16px
  const size = 8 + Math.random() * 8; // 8..16
  petal.style.setProperty("--size", size.toFixed(1) + "px");

  // horizontal start
  petal.style.left = Math.random() * window.innerWidth + "px";

  // final drift (-60px .. +60px)
  const drift = Math.round((Math.random() * 120) - 60);
  petal.style.setProperty("--drift", drift + "px");

  // two small sway values for oscillation (around -20..20px)
  const sway1 = Math.round((Math.random() * 40) - 20);
  const sway2 = Math.round((Math.random() * 40) - 20);
  petal.style.setProperty("--sway1", sway1 + "px");
  petal.style.setProperty("--sway2", sway2 + "px");

  // small tilt so petals aren't symmetric -30deg .. +30deg
  const tilt = (Math.random() * 60 - 30).toFixed(1) + "deg";
  petal.style.setProperty("--tilt", tilt);

  // subtle opacity variation
  petal.style.setProperty("--opacity", (0.75 + Math.random() * 0.25).toFixed(2));

  // duration and delay (ms)
  const durationMs = 4500 + Math.random() * 3000; // 4.5s .. 7.5s
  const delayMs = Math.random() * 350; // up to 350ms
  petal.style.setProperty("--duration", Math.round(durationMs) + "ms");
  petal.style.setProperty("--delay", Math.round(delayMs) + "ms");

  document.body.appendChild(petal);

  // cleanup after animation finishes
  setTimeout(() => {
    if (petal && petal.parentNode) petal.parentNode.removeChild(petal);
  }, durationMs + delayMs + 500);
}

// Example handlers (scroll + click + touch bursts)
window.addEventListener("scroll", () => {
  for (let i = 0; i < 3; i++) createSakuraPetal();
}, { passive: true });

window.addEventListener("click", () => {
  for (let i = 0; i < 10; i++) createSakuraPetal();
});

window.addEventListener("touchstart", () => {
  for (let i = 0; i < 6; i++) createSakuraPetal();
}, { passive: true });

//optional: small initial burst on load (uncomment if you want)
 for (let i = 0; i < 6; i++) createSakuraPetal();
