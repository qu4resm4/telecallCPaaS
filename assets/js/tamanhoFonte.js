var btnAumentar = document.getElementById("btnAumentar");
var btnDiminuir = document.getElementById("btnDiminuir");
var elementos = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, li");
var fonts = [];

function obterTamanhoFonte() {
  elementos.forEach(function (elemento) {
    fonts.push(parseFloat(window.getComputedStyle(elemento).fontSize));
  });
}

obterTamanhoFonte();

btnAumentar.addEventListener('click', function () {
  elementos.forEach(function (elemento, i) {
    fonts[i]++;
    elemento.style.fontSize = fonts[i] + 'px';
  });
});

btnDiminuir.addEventListener('click', function () {
  elementos.forEach(function (elemento, i) {
    fonts[i]--;
    elemento.style.fontSize = fonts[i] + 'px';
  });
});
