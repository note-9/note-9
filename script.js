document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    { name: "LogWatcher", description: "A real-time log monitoring and alert system using FastAPI." },
    { name: "BeatSage AI", description: "Audio genre and mood classifier using machine learning." },
    { name: "SnekAPI", description: "Multiplayer snake game backend with API control." }
  ];

  const projectList = document.getElementById("project-list");

  projects.forEach(project => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${project.name}</strong>: ${project.description}`;
    projectList.appendChild(li);
  });

  // Cursor trail effect
  const trail = [];
  for (let i = 0; i < 10; i++) {
    const dot = document.createElement("div");
    dot.className = "cursor-dot";
    document.body.appendChild(dot);
    trail.push(dot);
  }

  let mouseX = 0, mouseY = 0;
  document.addEventListener("mousemove", e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateTrail() {
    let x = mouseX, y = mouseY;
    trail.forEach((dot, i) => {
      setTimeout(() => {
        dot.style.left = x + "px";
        dot.style.top = y + "px";
      }, i * 20);
    });
    requestAnimationFrame(animateTrail);
  }

  animateTrail();
});
