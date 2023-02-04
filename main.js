// criando lista de todas as teclas para serem acessadas
const listaDeTeclas = document.querySelectorAll('.tecla') // é necessário o atributo, dentro do parenteses
// que é a classe dos elementos que queremos dentro da lista

function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play()
}

let contador = 0

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]

    const idAudio = `#som_${instrumento}`  //template string

    listaDeTeclas[contador].onclick = function () {
        tocaSom(idAudio)
    }

    contador += 1
    
}