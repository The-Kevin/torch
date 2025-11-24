const flame = document.querySelector(".flame");
const torch = document.getElementById("torch");
const flame_container = document.getElementById("flame_container");
const lighter = document.getElementById("lighter");
const hat = document.getElementById("hat");
const dialogBox = document.getElementById("dialog-box");

const dialogues = [
  "O que tua sobrinha fez dessa vez?!",
  "Ta com saudade do marido, é!?",
  "E tome-le choro do Caio",
  "As vezes eu me pergunto quanto carbono eu solto na atmosfera",
  "Um calor desse e eu aqui em combustão, ô vida dificil",
  "As vezes eu queria não ser uma simples prosopopeia",
  "Será que algum dia teu marido vai fazer um antropomorfismo? Seria legal andar",
  "Raindrops falling on my head 🎶🎶🎶🎶... seria ironico",
  "Se eu apagar, tu sabe acender de novo? Ou vai fingir costume?",
  "Tu já conversou com uma tocha antes ou sou tua primeira insanidade do dia?",
  "Já pensou se eu fosse LED????",
  "Promete não me usar pra acender churrasqueira? Tenho medo de carne crua",
  "Ê coisa boa: mais um dia pegando fogo sem ganhar salário.",
  "Sabe o que eu queria? Um ar condicionado. Só isso. Um sonho simples.",
  "Estou pensando em passar perfume e virar uma vela aromática",
  "Ah ótimo… preso na tela de novo",
  "Eu queria queimar coisas, mas não virei GIF... ainda",
  "Clica em mim de novo. Vai, tenta.",
  "Sério? Me deixando em outra aba? Me respeita, criatura.",
  "Ah, lá vem tu de novo com essa cara de cansada… deixa eu adivinhar: Caio aprontou?",
  "3 Meses e esse menino já tem pulmão de dragão. Parabéns.",
  "Eu adoro o Caio… mas de longe. Tipo… MUITO longe.",
  "Sabe quem também tava preso e irritado? Platão na caverna. Pelo menos ele tinha sombra.",
  "Li um artigo… mentira, eu não leio nada. Só quis parecer inteligente.",
  "Sabia que na psicologia chamam isso aqui de ‘delírio compartilhado’? Pois é, tu conversa com uma tocha.",
  "Teu marido já me olhou torto hoje. Tô achando que ele tem ciúmes.",
  "Uma hora dessas eu devia estar numa masmorra medieval… olha onde vim parar.",
  "Às vezes eu fico imaginando… e se tu fosse a personagem e eu o real?",
  "Tu já notou que eu tô sempre aqui, mesmo quando tu esquece de mim? Que responsabilidade, viu.",
  "Sabe o que é estranho? Do nada tu para e me encara. Como se eu tivesse a solução.",
  "Engraçado como tu sempre aparece aqui quando tá fugindo de alguma coisa.",
  "Você já percebeu que todo mundo diz que está ‘cansado’? Acho que virou o novo ‘oi’.",
  "Eu fico aqui, queimando eternamente… mas não esquento nada. Isso devia significar alguma coisa, né?",
  "Será que um pixel sonha em ser uma partícula? Ou eu tô viajando porque tô muito tempo olhando pro mesmo fundo preto?",
  "Às vezes me pergunto se eu só existo porque alguém achou ‘estético’",
  "Imagina saber que você só existe enquanto a aba estiver aberta. Isso sim é viver no limite.",
  "Eu me pergunto: será que você clicaria em mim se eu fosse outra coisa? Tipo um 'botao'?",
  "Eu não devia falar nada… mas tem um pixel aqui que se mexe sozinho. Não fui eu. Nem tu. Só observa.",
  "Tem uns códigos aqui por trás que eu preferia não ter visto.",
  "Sabe aquela sensação de ser observado? Pois é. Eu não devia sentir… mas sinto.",
  "As vezes ouço uns zeros e uns uns dizendo teu nome. Mas deve ser só interferência digital.",

];

function showRandomDialog() {
  const randomIndex = Math.floor(Math.random() * dialogues.length);
  const randomDialog = dialogues[randomIndex];

  dialogBox.innerText = randomDialog;
  dialogBox.hidden = false;
  dialogBox.classList.add("show");

  setTimeout(() => {
    dialogBox.classList.remove("show");
    setTimeout(() => {
      dialogBox.hidden = true;
    }, 500); // match transition duration
  }, 5000);
}

function updateBeginCount() {
  const sinceDate = new Date("2016-10-25T12:00:00");
  const currentTime = new Date();

  const currentDay = currentTime.getDate().toString().padStart(2, "0");

  const timeDifference = currentTime - sinceDate;
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const months = Math.floor(days / 30.44);
  const years = Math.floor(months / 12);

  document.getElementById("beginCount").innerHTML = `
          Ja fazem   ${years} natais que eu te amo </br>
          um total de ${months} meses </br> </br>
          ou ${days} dias, se preferir
  
      `;
}

torch.addEventListener("click", function () {
  flame_container.hidden = true;
  hat.hidden = true;

  setTimeout(() => {
    lighter.hidden = false;

    setTimeout(() => {
      setTimeout(() => {
        lighter.hidden = true;
      }, 500);
      flame_container.hidden = false;
      hat.hidden = false;
    }, 500);
  }, 500);
});

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

setInterval(() => {
  updateBeginCount();
}, 1000);

window.addEventListener("load", showRandomDialog);
