document.addEventListener("mousemove", (e) => {
  const trail = document.createElement("div");
  trail.className = "cursor-trail";
  trail.style.left = e.pageX + "px";
  trail.style.top = e.pageY + "px";
  document.body.appendChild(trail);
  setTimeout(() => {
    trail.remove();
  }, 200);
});

const style = document.createElement("style");
style.textContent = `
  .cursor-trail {
    position: absolute;
    width: 8px;
    height: 8px;
    background: limegreen;
    border-radius: 50%;
    pointer-events: none;
    z-index: 1000;
  }
`;
document.head.appendChild(style);
