
document.addEventListener("DOMContentLoaded", function () {
    const elementos = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.2 } // Se activará cuando el 20% del elemento sea visible
    );

    elementos.forEach((elemento) => {
        observer.observe(elemento);
    });
});

window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const elementos = document.querySelectorAll(".fade-in, .slide-in, .zoom-in");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.2 }
    );

    elementos.forEach((elemento) => {
        observer.observe(elemento);
    });
});

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const scaleFactor = 0.8;

function resizeCanvas() {
  canvas.width = window.innerWidth * scaleFactor;
  canvas.height = window.innerHeight * scaleFactor;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Animación sencilla de ejemplo
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const time = Date.now() * 0.002;
  const x = canvas.width / 2 + Math.sin(time) * 100;
  const y = canvas.height / 2 + Math.cos(time) * 100;

  ctx.fillStyle = '#0088ff44';
  ctx.beginPath();
  ctx.arc(x, y, 60, 0, Math.PI * 2);
  ctx.fill();

  requestAnimationFrame(animate);
}
animate();


















































