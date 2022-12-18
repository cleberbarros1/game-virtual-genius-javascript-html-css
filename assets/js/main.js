let botoes = document.getElementsByClassName('botao');
let botaoSt = document.getElementById('botaoStart');
let order = [];
let level = 3;
let novoLevel = level;
let j = 1;
let escolhido = 0;
let score = 0;
let marcadorSt = false;

function atualizarPainel() {
document.getElementById('pontos').innerHTML = score;
document.getElementById('dificuldade').innerHTML = level;
}

for(i of botoes) {
    i.addEventListener("click", clicou)
}

function clicou() {
    if(this != order[escolhido]) {
        marcadorSt = false;
        botaoSt.innerHTML ="Play Game";
        botaoSt.style = "background-color: green; scale: 1;";
        order = [];
        alert("Vish! Errou a sequecia!");
        level = 3;
        novoLevel = level;
        j = 1;
        score = 0;
        atualizarPainel();
        escolhido = 0;
        console.clear();
    } else {
    this.classList.toggle('selected');
    escolhido += 1;
    setTimeout(() => this.classList.toggle('selected'), 500);
    }

    if(escolhido == level) {
        setTimeout(() => {
        order = [];
        score += 300;
        alert(`PARABÉNS! Você venceu o primeiro nível e recebeu 300 pontos.\nSeu total de pontos é ${score}.\nO próximo nível vai começar.`);
        level += 1;
        novoLevel = level;
        j += 1;
        atualizarPainel();
        setTimeout(randomOrder, 5000);
        escolhido = 0;
        console.clear();
    }, 200)
    }
}


function randomOrder(level = novoLevel){
    marcadorSt = true;
    botaoSt.innerHTML ="Jogando...";
    botaoSt.style = "background-color: blue; scale: .8;";
    for(i = 0; i < level; i++) {
        setTimeout(() => {
        let numeroRand = Math.floor(Math.random(0,1)*4); 
        order.push(botoes[numeroRand]);
        console.log(botoes[numeroRand]);
        botoes[numeroRand].classList.toggle('selected');
        console.log(order.length);
        setTimeout(() => {botoes[numeroRand].classList.toggle('selected');}, 500 / j);
    }, 1000 * i)
    
    }
    
}

botaoSt.addEventListener("click", () => {
    if(marcadorSt != false){ return }
    setTimeout(randomOrder, 500)});
atualizarPainel();

