const flame = document.querySelector('.flame');
const torch = document.querySelector('.torch');

document.addEventListener('DOMContentLoaded', () => {
  const handle = document.getElementById('handle');
  handle.hidden = true;

  if (!localStorage.getItem('handle')) {
    setTimeout(() => {
      handle.hidden = false;
      setTimeout(() => {
        handle.hidden = true;
        localStorage.setItem('handle', true);
      }, 500);
    }, 2000);
  }
});

function getColorFromMouseEvent(event) {
  const x = event.clientX;
  const y = event.clientY;
  const width = window.innerWidth;
  const height = window.innerHeight;

  const red = Math.min(255, Math.max(0, Math.round(255 - (y / height) * 100)));
  const green = Math.min(140, Math.max(0, Math.round((y / height) * 140)));
  const blue = 0;

  return `radial-gradient(circle at bottom, rgba(255, 165, 0, 0.8), rgba(255, 69, 0, 0.8), rgba(255, 0, 0, 0.8), rgba(${red}, ${green}, ${blue}, 0.8))`;
}

function getColorFromDeviceOrientation(event) {
  const x = event.beta; // Inclinação frontal e traseira
  const y = event.gamma; // Inclinação lateral

  const red = Math.min(
    255,
    Math.max(0, Math.round(255 - ((x + 180) / 360) * 100))
  );
  const green = Math.min(140, Math.max(0, Math.round(((y + 90) / 180) * 140)));
  const blue = 0;

  return `radial-gradient(circle at bottom, rgba(255, 165, 0, 0.8), rgba(255, 69, 0, 0.8), rgba(255, 0, 0, 0.8), rgba(${red}, ${green}, ${blue}, 0.8))`;
}

function shakeElement(element, x, y) {
  const maxShake = 40; // Máximo deslocamento de shake em pixels
  const shakeX = (x / window.innerWidth) * maxShake - maxShake / 2;
  const shakeY = (y / window.innerHeight) * maxShake - maxShake / 2;
  element.style.transform = `translate(${shakeX}px, ${shakeY}px)`;
}

function updateCountdown() {
  const targetDate = new Date('2024-10-02T00:20:20');
  const now = new Date();
  const difference = targetDate - now;

  if (difference <= 0) {
    document.getElementById('countdown').innerHTML =
      'Obrigado por ter vindo amor, eu te amo <3!';
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById('countdown').innerHTML = `
          Faltam... 
          ${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos  para o meu amor chegar <3
      `;
}

// updateCountdown();
setInterval(updateCountdown, 1000);
