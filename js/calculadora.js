let operandoA;
let operandoB;
let operacion;

function init() {
    //variables

    let resultado = document.getElementById("resultado");
    let reset = document.getElementById("reset");
    let siete = document.getElementById("siete");
    let ocho = document.getElementById("ocho");
    let nueve = document.getElementById("nueve");
    let cuatro = document.getElementById("cuatro");
    let cinco = document.getElementById("cinco");
    let seis = document.getElementById("seis");
    let uno = document.getElementById("uno");
    let dos = document.getElementById("dos");
    let tres = document.getElementById("tres");
    let cero = document.getElementById("cero");
    let punto = document.getElementById("punto");
    let igual = document.getElementById("igual");

    //Eventos
    uno.onclick = function(e) {
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function(e) {
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function(e) {
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function(e) {
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function(e) {
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function(e) {
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function(e) {
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function(e) {
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function(e) {
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function(e) {
        resultado.textContent = resultado.textContent + "0";
    }
    punto.onclick = function(e) {
        resultado.textContent = resultado.textContent + ".";
    }

    reset.onclick = function(e) {
        resetear();
    }


    igual.onclick = function(e) {
        operandoB = resultado.textContent;
        resolver();
    }
}

function limpiar() {
    resultado.textContent = "";
}

function resetear() {
    resultado.textContent = "";
    operandoA = 0;
    operandoB = 0;
    operacion = "";
}

function resolver() {
    let res = 0;


    switch (planeta) {
        case "mercurio":
            res = parseFloat(operandoA) * parseFloat(operandoB) / 9.8;
            break;

        case "venus":
            res = parseFloat(operandoA) * parseFloat(operandoB) / 9.8;
            break;

        case "marte":
            res = parseFloat(operandoA) * parseFloat(operandoB) / 9.8;
            break;

        case "jupiter":
            res = parseFloat(operandoA) * parseFloat(operandoB) / 9.8;
            break;

    }

    resetear();
    resultado.textContent = res;
}