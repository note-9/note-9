const canvas = document.getElementById("trail");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse = { x: 0, y: 0 };
let lastMouse = { x: 0, y: 0 };

window.addEventListener("mousemove", function (e) {
  lastMouse.x = mouse.x;
  lastMouse.y = mouse.y;
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

function animate() {
  ctx.strokeStyle = "#00ff00";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(lastMouse.x, lastMouse.y);
  ctx.lineTo(mouse.x, mouse.y);
  ctx.stroke();

  // fade effect
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
