const flame = document.querySelector('.flame');
const torch = document.querySelector('.torch');

const coordenadasDestino = { lat: -11.50133, lon: -40.016448 };

function calcularDistancia(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Raio da Terra em metros
  const rad = Math.PI / 180; // Fator de conversão para radianos
  const φ1 = lat1 * rad; // φ, λ em radianos
  const φ2 = lat2 * rad;
  const Δφ = (lat2 - lat1) * rad;
  const Δλ = (lon2 - lon1) * rad;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distanciaMetros = R * c; // Distância em metros
  const distanciaKm = distanciaMetros / 1000; // Distância em km

  return {
    distanciaKm: distanciaKm.toFixed(2), // arredondando para 2 casas decimais
    distanciaMetros: distanciaMetros.toFixed(2),
  };
}

function successLocation(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  // document.getElementById('location').textContent = `(${lat}, ${lon})`;

  // Calcula a distância até o destino
  const resultado = calcularDistancia(
    lat,
    lon,
    coordenadasDestino.lat,
    coordenadasDestino.lon
  );

  document.getElementById(
    'location'
  ).textContent = `${resultado.distanciaMetros}`;
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(successLocation, (err) => {
    console.log(`the error: ${err.message} ${err.code}`);
  });
} else {
  console.log('error geo location');
}

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
