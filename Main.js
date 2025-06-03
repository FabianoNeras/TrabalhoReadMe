const botoes = document.querySelectorAll(".botao"); 
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");

// Datas dos objetivos
const datas = [
    new Date("2025-12-06T00:00:00"), // Formatura
    new Date("2025-08-25T00:00:00"), // Nascimento da LOLO
    new Date("2025-12-25T00:00:00")  // Natal
];

// Atualiza todos os contadores a cada segundo
function iniciarContadores() {
    setInterval(() => {
        contadores.forEach((elemento, index) => {
            elemento.innerHTML = gerarHTMLContador(datas[index]);
        });
    }, 1000);
}

function gerarHTMLContador(dataAlvo) {
    const agora = new Date();
    const diferenca = dataAlvo - agora;

    const segundos = Math.floor((diferenca / 1000) % 60);
    const minutos = Math.floor((diferenca / 1000 / 60) % 60);
    const horas   = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const dias    = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    return `
        <div class="bloco"><span>${formatar(dias)}</span><label>Dias</label></div>
        <div class="bloco"><span>${formatar(horas)}</span><label>Horas</label></div>
        <div class="bloco"><span>${formatar(minutos)}</span><label>Minutos</label></div>
        <div class="bloco"><span>${formatar(segundos)}</span><label>Segundos</label></div>
    `;
}

function formatar(numero) {
    return numero < 10 ? "0" + numero : numero;
}

iniciarContadores();
