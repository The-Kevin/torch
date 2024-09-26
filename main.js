const flame = document.querySelector('.flame');
const torch = document.querySelector('.torch');

document.addEventListener('DOMContentLoaded', () => {
  const handle = document.getElementById('handle');
  handle.hidden = true;
  handle.innerText = '-11.501330, -40.016448';

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

setInterval(updateCountdown, 1000);
