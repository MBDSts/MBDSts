
const cursor = document.getElementById('Cursor');

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;
const speed = 0.09;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animate() {
    currentX += (mouseX - currentX) * speed;
    currentY += (mouseY - currentY) * speed;
    cursor.style.left = `${currentX}px`;
    cursor.style.top = `${currentY}px`;

    requestAnimationFrame(animate);
}
function checkHover(event) {
  // Elements considered clickable
  const clickableSelectors = 'a, button, input[type="button"], input[type="submit"], .clickable';

  // Check if the event target matches any clickable selector or is inside one
  const isClickable = event.target.closest(clickableSelectors) !== null;

  if (isClickable) {
    cursor.classList.add('flicker');
  } else {
    cursor.classList.remove('flicker');
  }
}

document.addEventListener('mousemove', checkHover);

animate();