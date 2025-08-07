const trail = [];
const maxTrail = 20;

document.addEventListener("mousemove", (e) => {
  const dot = document.createElement("div");
  dot.classList.add("trail-dot");
  dot.style.left = e.pageX + "px";
  dot.style.top = e.pageY + "px";
  document.body.appendChild(dot);
  trail.push(dot);

  if (trail.length > maxTrail) {
    const oldDot = trail.shift();
    oldDot.remove();
  }
});

// Create trail-dot style
const style = document.createElement('style');
style.textContent = `
  .trail-dot {
    position: absolute;
    width: 6px;
    height: 6px;
    background: #00ff00;
    border-radius: 50%;
    pointer-events: none;
    opacity: 0.8;
    transform: translate(-50%, -50%);
    animation: fadeOut 0.5s forwards;
  }

  @keyframes fadeOut {
    to {
      opacity: 0;
      transform: scale(0.5);
    }
  }
`;
document.head.appendChild(style);
