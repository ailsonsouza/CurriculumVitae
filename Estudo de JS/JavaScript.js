
// Código para o Exemplo de Eventos realizados no JS
var a2 = window.document.getElementById("area2")
a2.addEventListener("click", clicou)
a2.addEventListener("mouseenter", entrar)
a2.addEventListener("mouseout", sair)

function clicou(){
    a2.innerText = "clicou!"
    a2.style.background = "red"
}

function entrar(){
    a2.innerText = "Entrou"
}

function sair(){
    a2.innerText = "Saiu"
    a2.style.background = "green"
}


// Código para o Exemplo de Eventos realizados diretamente no HTML
var a = window.document.getElementById("area")
function clicar(){
    a.innerText = "clicou!"
    a.style.background = "red"
}

function entrou(){
    a.innerText = "Entrou"
}

function saiu(){
    a.innerText = "Saiu"
    a.style.background = "green"
}

function definir(numero){
    
    let result = '';

    if (numero % 2 === 0) {
        result = 'Par';
    } else {
        result = 'Ímpar';
    }

    let resultParImpar = document.getElementById("resultParimp");
    resultParImpar.innerHTML = `O número escolhido é ${result}`;
}

