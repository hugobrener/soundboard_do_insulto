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

document.addEventListener("keydown", function(e) {
    if (e.ctrlKey && e.key === "0"){
        document.getElementById('som_tecla_comecou').play()
    } else if (e.ctrlKey && e.key === "1"){
        document.getElementById('som_tecla_uma-maquina').play()
    } else if (e.ctrlKey && e.key === "2"){
        document.getElementById('som_tecla_risada').play()
    }else if (e.ctrlKey && e.key === "3"){
        document.getElementById('som_tecla_para').play()
    }else if (e.ctrlKey && e.key === "4"){
        document.getElementById('som_tecla_fodace').play()
    }
    else {
        console.log('num deu gau')
    }
})