document.addEventListener("DOMContentLoaded", () => {
  // Respect reduced-motion preference
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    console.log("Sakura: reduced-motion enabled — petals disabled.");
    return;
  }

  // Debug counter (useful when testing on mobile)
  window.__sakuraCount = 0;

  function createSakuraLeaf() {
    const leaf = document.createElement("div");
    leaf.className = "sakura";

    // Random properties
    const size = 12 + Math.random() * 26; // bigger min size for mobile visibility
    const left = Math.round(Math.random() * window.innerWidth);
    const drift = Math.round((Math.random() - 0.5) * (window.innerWidth * 0.25)); // horizontal drift +-25% vw
    const duration = 4000 + Math.random() * 7000; // ms
    const delay = Math.random() * 800; // ms
    const rotate = (Math.random() < 0.5 ? -1 : 1) * (120 + Math.random() * 600) + "deg";

    // Inject CSS vars used by stylesheet animation
    leaf.style.setProperty("--left", `${left}px`);
    leaf.style.setProperty("--drift", `${drift}px`);
    leaf.style.setProperty("--size", `${size}px`);
    leaf.style.setProperty("--duration", `${duration}ms`);
    leaf.style.setProperty("--delay", `${delay}ms`);
    leaf.style.setProperty("--rotate", rotate);

    document.body.appendChild(leaf);
    window.__sakuraCount++;

    // cleanup after animation ends (duration + delay + small buffer)
    setTimeout(() => {
      if (leaf && leaf.parentNode) leaf.parentNode.removeChild(leaf);
      window.__sakuraCount = Math.max(0, window.__sakuraCount - 1);
    }, duration + delay + 500);
  }

  // Continuous spawn loop (adjust spawnRate for density)
  const spawnRate = 90; // ms between spawns — lower = more petals
  const spawner = setInterval(createSakuraLeaf, spawnRate);

  // Mobile/interaction bursts so phones show lots on touch/scroll
  const burst = () => {
    for (let i = 0; i < 6; i++) createSakuraLeaf();
  };
  window.addEventListener("touchstart", burst, { passive: true });
  window.addEventListener("touchmove", burst, { passive: true });
  window.addEventListener("scroll", burst, { passive: true });

  // Diagnostic: many mobile bugs happen when an ancestor has `transform`
  (function checkTransforms() {
    let el = document.body;
    while (el) {
      const s = getComputedStyle(el);
      if (s && s.transform && s.transform !== "none") {
        console.warn(
          "Sakura: ancestor element has CSS transform — this can break position:fixed on mobile. Element:",
          el
        );
        // Don't forcibly change user's styles; just warn so you can inspect/remove transform.
      }
      el = el.parentElement;
    }
  })();
});
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
