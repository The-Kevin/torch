const flame = document.querySelector('.flame');
const torch = document.querySelector('.torch');

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
  // const targetDate = new Date('2024-12-19T10:00:00');
  // const now = new Date();
  // const difference = targetDate - now;

  // if (difference <= 0) {
  //   document.getElementById('countdown').innerHTML = `
  //     here
  //   `;
  //   return;
  // }

  // const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  // const hours = Math.floor(
  //   (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  // );
  // const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  // const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // document.getElementById('countdown').innerHTML = `
  //         ${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos 💍
  //     `;
}

setInterval(() => { updateBeginCount() }, 1000);
