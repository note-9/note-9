document.addEventListener("mousemove", (e) => {
  const dot = document.createElement("div");
  dot.className = "cursor-dot";
  dot.style.left = `${e.pageX}px`;
  dot.style.top = `${e.pageY}px`;
  document.body.appendChild(dot);

  setTimeout(() => {
    dot.remove();
  }, 500); // Trail duration
});
