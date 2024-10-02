const flame = document.querySelector('.flame');
const torch = document.querySelector('.torch');

document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

document.addEventListener('keydown', function (e) {
  if (e.ctrlKey && (e.key === 'c' || e.key === 'v')) {
    e.preventDefault();
  }
});
document.addEventListener('copy', function (e) {
  e.preventDefault();
});

document.addEventListener('touchstart', function (e) {
  if (e.touches.length > 1) {
    e.preventDefault();
  }
});

function updateCountdown() {
  const targetDate = new Date('2024-10-02T20:20:00');
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

setInterval(updateCountdown, 1000);
