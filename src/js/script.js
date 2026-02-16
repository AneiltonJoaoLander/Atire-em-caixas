//audio menu
const audioMenu = new Audio("../../styles/audios/audio menu2.aac");
audioMenu.loop = true;
audioMenu.play();

//variaveis
const caixa1 = document.getElementById("1");
const caixa2 = document.getElementById("2");
const caixa3 = document.getElementById("3");
const caixa4 = document.getElementById("4");
var h1Pontuacao = document.getElementById("pontuacao");
var pontuacao = 0;

//caregar pontuacao
h1Pontuacao.innerHTML = `SUA PONTUAÇÃO É ${pontuacao}`;

//funcao caixas iniciais deletar
caixa1.addEventListener("click", function () {
  caixa1.src = "../../styles/images/WhatsApp Image 2026-02-15 at 18.27.11.jpeg";
  const explosaoAudio = new Audio("../../styles/audios/audio esplosao.aac");
  explosaoAudio.play();
  ++pontuacao;
  h1Pontuacao.innerHTML = `SUA PONTUAÇÃO É ${pontuacao}`;
  setTimeout(() => {
    caixa1.remove();
  }, 1000);
});

caixa2.addEventListener("click", () => {
  caixa2.src = "../../styles/images/WhatsApp Image 2026-02-15 at 18.27.11.jpeg";
  const explosaoAudio = new Audio("../../styles/audios/audio esplosao.aac");
  explosaoAudio.play();
  ++pontuacao;
  h1Pontuacao.innerHTML = `SUA PONTUAÇÃO É ${pontuacao}`;
  setTimeout(() => {
    caixa2.remove();
  }, 1000);
});

caixa3.addEventListener("click", () => {
  caixa3.src = "../../styles/images/WhatsApp Image 2026-02-15 at 18.27.11.jpeg";
  const explosaoAudio = new Audio("../../styles/audios/audio esplosao.aac");
  explosaoAudio.play();
  ++pontuacao;
  h1Pontuacao.innerHTML = `SUA PONTUAÇÃO É ${pontuacao}`;
  setTimeout(() => {
    caixa3.remove();
  }, 1000);
});

caixa4.addEventListener("click", () => {
  caixa4.src = "../../styles/images/WhatsApp Image 2026-02-15 at 18.27.11.jpeg";
  const explosaoAudio = new Audio("../../styles/audios/audio esplosao.aac");
  explosaoAudio.play();
  ++pontuacao;
  h1Pontuacao.innerHTML = `SUA PONTUAÇÃO É ${pontuacao}`;
  setTimeout(() => {
    caixa4.remove();
  }, 1000);
});

// tempo aleatorio
var aleatorio1 = Math.random();
if (aleatorio1 <= 0.2) {
  var valorTempo = 2000;
} else if (aleatorio1 > 0.2 && aleatorio1 <= 0.4) {
  var valorTempo = 3000;
} else if (aleatorio1 > 0.4 && aleatorio1 <= 0.6) {
  var valorTempo = 4000;
} else if (aleatorio1 > 0.6 && aleatorio1 <= 0.8) {
  var valorTempo = 5000;
} else if (aleatorio1 > 0.8 && aleatorio1 <= 1) {
  var valorTempo = 6000;
} else {
  alert(`ERRO 70 NÃO FOI POSSIVEL CALCULAR TEMPO: ${valorTempo}`);
}

//funcao sortear num de caixas
setInterval(() => {
  //variaveis
  let aleatorio2 = Math.random();
  const perder1 = caixa1.classList.contains("perdeu");
  const perder2 = caixa1.classList.contains("perdeu");
  const perder3 = caixa1.classList.contains("perdeu");
  const perder4 = caixa1.classList.contains("perdeu");

  //ver num de caixas
  if (aleatorio2 <= 0.25) {
    const caixa1 = document.createElement("img");
    caixa1.classList.add("caixa1");
    caixa1.src =
      "../../styles/images/WhatsApp Image 2026-02-15 at 18.01.49.jpeg";
    caixa1;
    const caixas = document.querySelector(".caixas");
    caixas.appendChild(caixa1);

    //funcao caixa 1 iniciais deletar
    caixa1.addEventListener("click", function () {
      caixa1.src =
        "../../styles/images/WhatsApp Image 2026-02-15 at 18.27.11.jpeg";
      const explosaoAudio = new Audio("../../styles/audios/audio esplosao.aac");
      explosaoAudio.play();
      ++pontuacao;
      h1Pontuacao.innerHTML = `SUA PONTUAÇÃO É ${pontuacao}`;
      setTimeout(() => {
        caixa1.remove();
      }, 1000);
    });
  } else if (aleatorio2 > 0.25 && aleatorio2 <= 0.5) {
    const caixa1 = document.createElement("img");
    caixa1.src =
      "../../styles/images/WhatsApp Image 2026-02-15 at 18.01.49.jpeg";
    caixa1.classList.add("caixa1");
    const caixas = document.querySelector(".caixas");
    caixas.appendChild(caixa1);

    const caixa2 = document.createElement("img");
    caixa2.src =
      "../../styles/images/WhatsApp Image 2026-02-15 at 18.01.49.jpeg";
    caixa2.classList.add("caixa2");
    caixas.appendChild(caixa2);

    //funcao caixas iniciais deletar
    caixa1.addEventListener("click", function () {
      caixa1.src =
        "../../styles/images/WhatsApp Image 2026-02-15 at 18.27.11.jpeg";
      const explosaoAudio = new Audio("../../styles/audios/audio esplosao.aac");
      explosaoAudio.play();
      ++pontuacao;
      h1Pontuacao.innerHTML = `SUA PONTUAÇÃO É ${pontuacao}`;
      setTimeout(() => {
        caixa1.remove();
      }, 1000);
    });

    caixa2.addEventListener("click", () => {
      caixa2.src =
        "../../styles/images/WhatsApp Image 2026-02-15 at 18.27.11.jpeg";
      const explosaoAudio = new Audio("../../styles/audios/audio esplosao.aac");
      explosaoAudio.play();
      ++pontuacao;
      h1Pontuacao.innerHTML = `SUA PONTUAÇÃO É ${pontuacao}`;
      setTimeout(() => {
        caixa2.remove();
      }, 1000);
    });
  } else if (aleatorio2 > 0.5 && aleatorio2 <= 0.75) {
    const caixa1 = document.createElement("img");
    caixa1.src =
      "../../styles/images/WhatsApp Image 2026-02-15 at 18.01.49.jpeg";
    caixa1.classList.add("caixa1");
    const caixas = document.querySelector(".caixas");
    caixas.appendChild(caixa1);

    const caixa2 = document.createElement("img");
    caixa2.src =
      "../../styles/images/WhatsApp Image 2026-02-15 at 18.01.49.jpeg";
    caixa2.classList.add("caixa2");
    caixas.appendChild(caixa2);

    const caixa3 = document.createElement("img");
    caixa3.src =
      "../../styles/images/WhatsApp Image 2026-02-15 at 18.01.49.jpeg";
    caixa3.classList.add("caixa3");
    caixas.appendChild(caixa3);

    //funcao caixas iniciais deletar
    caixa1.addEventListener("click", function () {
      caixa1.src =
        "../../styles/images/WhatsApp Image 2026-02-15 at 18.27.11.jpeg";
      const explosaoAudio = new Audio("../../styles/audios/audio esplosao.aac");
      explosaoAudio.play();
      ++pontuacao;
      h1Pontuacao.innerHTML = `SUA PONTUAÇÃO É ${pontuacao}`;
      setTimeout(() => {
        caixa1.remove();
      }, 1000);
    });

    caixa2.addEventListener("click", () => {
      caixa2.src =
        "../../styles/images/WhatsApp Image 2026-02-15 at 18.27.11.jpeg";
      const explosaoAudio = new Audio("../../styles/audios/audio esplosao.aac");
      explosaoAudio.play();
      ++pontuacao;
      h1Pontuacao.innerHTML = `SUA PONTUAÇÃO É ${pontuacao}`;
      setTimeout(() => {
        caixa2.remove();
      }, 1000);
    });

    caixa3.addEventListener("click", () => {
      caixa3.src =
        "../../styles/images/WhatsApp Image 2026-02-15 at 18.27.11.jpeg";
      const explosaoAudio = new Audio("../../styles/audios/audio esplosao.aac");
      explosaoAudio.play();
      ++pontuacao;
      h1Pontuacao.innerHTML = `SUA PONTUAÇÃO É ${pontuacao}`;
      setTimeout(() => {
        caixa3.remove();
      }, 1000);
    });
  } else if (aleatorio2 > 0.75 && aleatorio2 <= 1) {
    const caixa1 = document.createElement("img");
    caixa1.src =
      "../../styles/images/WhatsApp Image 2026-02-15 at 18.01.49.jpeg";
    caixa1.classList.add("caixa1");
    const caixas = document.querySelector(".caixas");
    caixas.appendChild(caixa1);

    const caixa2 = document.createElement("img");
    caixa2.src =
      "../../styles/images/WhatsApp Image 2026-02-15 at 18.01.49.jpeg";
    caixa2.classList.add("caixa2");
    caixas.appendChild(caixa2);

    const caixa3 = document.createElement("img");
    caixa3.src =
      "../../styles/images/WhatsApp Image 2026-02-15 at 18.01.49.jpeg";
    caixa3.classList.add("caixa3");
    caixas.appendChild(caixa3);

    const caixa4 = document.createElement("img");
    caixa4.src =
      "../../styles/images/WhatsApp Image 2026-02-15 at 18.01.49.jpeg";
    caixa4.classList.add("caixa4");
    caixas.appendChild(caixa4);

    //funcao caixas iniciais deletar
    caixa1.addEventListener("click", function () {
      caixa1.src =
        "../../styles/images/WhatsApp Image 2026-02-15 at 18.27.11.jpeg";
      const explosaoAudio = new Audio("../../styles/audios/audio esplosao.aac");
      explosaoAudio.play();
      ++pontuacao;
      h1Pontuacao.innerHTML = `SUA PONTUAÇÃO É ${pontuacao}`;
      setTimeout(() => {
        caixa1.remove();
      }, 1000);
    });

    caixa2.addEventListener("click", () => {
      caixa2.src =
        "../../styles/images/WhatsApp Image 2026-02-15 at 18.27.11.jpeg";
      const explosaoAudio = new Audio("../../styles/audios/audio esplosao.aac");
      explosaoAudio.play();
      ++pontuacao;
      h1Pontuacao.innerHTML = `SUA PONTUAÇÃO É ${pontuacao}`;
      setTimeout(() => {
        caixa2.remove();
      }, 1000);
    });

    caixa3.addEventListener("click", () => {
      caixa3.src =
        "../../styles/images/WhatsApp Image 2026-02-15 at 18.27.11.jpeg";
      const explosaoAudio = new Audio("../../styles/audios/audio esplosao.aac");
      explosaoAudio.play();
      ++pontuacao;
      h1Pontuacao.innerHTML = `SUA PONTUAÇÃO É ${pontuacao}`;
      setTimeout(() => {
        caixa3.remove();
      }, 1000);
    });

    caixa4.addEventListener("click", () => {
      caixa4.src =
        "../../styles/images/WhatsApp Image 2026-02-15 at 18.27.11.jpeg";
      const explosaoAudio = new Audio("../../styles/audios/audio esplosao.aac");
      explosaoAudio.play();
      ++pontuacao;
      h1Pontuacao.innerHTML = `SUA PONTUAÇÃO É ${pontuacao}`;
      setTimeout(() => {
        caixa4.remove();
      }, 1000);
    });
  } else {
    alert("ERRO 269 NÃO FOI POSSIVEL CALCULAR O NÚMERO DE CAIXAS");
  }
}, valorTempo);
