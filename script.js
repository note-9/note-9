document.addEventListener("mousemove", function (e) {
  const trail = document.createElement("div");
  trail.style.position = "absolute";
  trail.style.width = "10px";
  trail.style.height = "10px";
  trail.style.borderRadius = "50%";
  trail.style.backgroundColor = "#00ff00";
  trail.style.left = e.pageX + "px";
  trail.style.top = e.pageY + "px";
  trail.style.pointerEvents = "none";
  trail.style.zIndex = "1000";
  document.body.appendChild(trail);

  setTimeout(() => {
    trail.remove();
  }, 100);
});
