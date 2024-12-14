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

function updateBeginCount() {


  const sinceDate = new Date('2016-10-25T12:00:00')
  const currentTime = new Date();

  const timeDifference = currentTime - sinceDate;
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const months = Math.floor(days / 30.44);
  const years = Math.floor(months / 12);


  document.getElementById('beginCount').innerHTML = `
          Ja fazem ${years} anos que eu te amo </br>
          um total de ${months} meses </br> </br>
          ou ${days} dias, se preferir
  
      `;
}

function updateCountdown() {
  const targetDate = new Date('2024-12-20T10:00:00');
  const now = new Date();
  const difference = targetDate - now;

  if (difference <= 0) {
    document.getElementById('countdown').innerHTML = `
      Por isso, o homem deixará seu pai e sua mãe e se unirá à sua mulher, e eles se tornarão uma só carne. <br />
      Gênesis 2:24
    `;
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById('countdown').innerHTML = `
          ${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos 💍
      `;
}

setInterval(() => { updateCountdown(); updateBeginCount() }, 1000);
