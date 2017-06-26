const logoHtml = document.querySelector('.logo');

window.addEventListener("devicemotion", function(event) {
          let x = Math.round(event.accelerationIncludingGravity.x) * 10;
          let y = Math.round(event.accelerationIncludingGravity.y) * 10;

          logoHtml.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
}, true);