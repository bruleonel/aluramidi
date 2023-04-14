function tocaSom(idSom) {
    const elemento = document.querySelector(idSom);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listaTeclas = document.querySelectorAll('.tecla'); 

for (let i = 0; i < listaTeclas.length; i++) {

    const tecla = listaTeclas[i];
    const teclaClicada = tecla.classList[1];
    const idAudio = `#som_${teclaClicada}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydow = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}

