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
  const equivalenciaTempo = [
    { dias: 2971, atividade: "O Império Romano durou aproximadamente 2971 dias entre 196 a.C. e 180 a.C." },
    { dias: 2972, atividade: "a Construção da Grande Muralha da China entre 221 a.C. e 202 a.C." },
    { dias: 2973, atividade: "Atravessar o Deserto do Saara com um grupo de exploradores no século XIX." },
    { dias: 2974, atividade: "A viagem de Magalhães ao redor do mundo (1519-1522) levou cerca de 2974 dias." },
    { dias: 2975, atividade: "o Desenvolvimento de um software complexa como o Linux desde seu início em 1991." },
    { dias: 2976, atividade: "o Tempo médio de uma missão espacial tripulada, como as missões da Apollo, considerando o tempo de planejamento e execução." },
    { dias: 2977, atividade: "A Guerra dos Cem Anos entre a Inglaterra e a França durou aproximadamente 2977 dias." },
    { dias: 2978, atividade: "a Construção das Pirâmides do Egito, com destaque para a Pirâmide de Quéops, que levou cerca de 2978 dias." },
    { dias: 2979, atividade: "O processo de fundação e expansão da cidade de Nova York ao longo dos primeiros anos." },
    { dias: 2980, atividade: "O tempo total de duração da construção da Catedral de Notre-Dame de Paris." },
    { dias: 2981, atividade: "O ciclo de produção de um álbum musical grandioso e experimental, como alguns dos discos de Pink Floyd." },
    { dias: 2982, atividade: "o Tempo médio de duração de grandes expedições ao Polo Sul, como a de Ernest Shackleton (1914-1917)." },
    { dias: 2983, atividade: "A fundação e crescimento de cidades como Roma ou Atenas na Antiguidade." },
    { dias: 2984, atividade: "A execução de um projeto de infraestrutura em grande escala, como a construção de um canal de navegação." },
    { dias: 2985, atividade: "A jornada de Marco Polo pela Ásia, de Veneza à China, durante o século XIII." },
    { dias: 2986, atividade: "O período de tempo de uma revolução ou conflito de longo prazo, como a Revolução Francesa." },
    { dias: 2987, atividade: "O desenvolvimento de uma tecnologia disruptiva, como a criação da Internet no final do século XX." },
    { dias: 2988, atividade: "o Tempo de duração do projeto de preservação e renovação da cidade de Pompeia após seu redescobrimento no século XVIII." },
    { dias: 2989, atividade: "A guerra de resistência contra invasões, como a Guerra de Independência dos Estados Unidos (1775-1783)." },
    { dias: 2990, atividade: "A construção de uma grande obra de arte ou escultura monumental, como o Cristo Redentor no Brasil." },
    { dias: 2991, atividade: "Um grande projeto de engenharia, como a construção do Canal do Panamá, que levou mais de uma década para ser concluído." },
    { dias: 2992, atividade: "A criação de um movimento artístico global, como o Surrealismo, que influenciou o mundo por décadas." },
    { dias: 2993, atividade: "O tempo médio de duração de uma grande crise econômica, como a Grande Depressão de 1929." },
    { dias: 2994, atividade: "O desenvolvimento de uma revolução industrial, como a Revolução Industrial Inglesa no século XIX." },
    { dias: 2995, atividade: "A criação e desenvolvimento do primeiro computador, como o ENIAC, que começou em 1943." },
    { dias: 2996, atividade: "O tempo médio de duração de um império histórico de grande escala, como o Império Otomano." },
    { dias: 2997, atividade: "O tempo de construção de uma grande catedral medieval, como a Catedral de Chartres na França." },
    { dias: 2998, atividade: "A evolução de um movimento político, como o Marxismo, ao longo do século XIX." },
    { dias: 2999, atividade: "O tempo necessário para a exploração e cartografia de grandes territórios, como o Oeste Americano." },
    { dias: 3000, atividade: "O projeto de construção da Estátua da Liberdade, que levou aproximadamente 3000 dias para ser concluído." }
  ];

  const sinceDate = new Date('2016-10-25T12:00:00')
  const currentTime = new Date();

  const timeDifference = currentTime - sinceDate;
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const months = Math.floor(days / 30.44);
  const years = Math.floor(months / 12);


  document.getElementById('beginCount').innerHTML = `
          Ja fazem ${years} anos que eu te amo </br>
          um total de ${months} meses </br> </br>
          
          ${days} dias <br /> assim como 
          ${equivalenciaTempo.find(e => e.dias === days).atividade.toLowerCase() || ""}
          <br /> 
          igual a gente :)
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
