'use strict'

import {contatos} from "./contatos.js"

// let cont = 0
// const adicionarId = (contato) => {
//     contato.id =  cont++
//     return contato
// }

// const contatos2 = contatos.map(adicionarId)

//console.log (contatos2)

const criarCard = (contato, indice) => {
    // const mensagem = document.createElement('ul')
    // mensagem.classList.add('container-mensagens')

    // const mensagem = document.getElementById('container-mensagens')

    const conversa = document.createElement('div')
    conversa.classList.add('container-conversas')
    //conversa.setAttribute('id', 'id-' + indice)
    // conversa.onclick = teste

    conversa.addEventListener('click', (event) => {

        console.log(contatos[indice])
    })

    const foto = document.createElement('img')
    foto.classList.add('img-chat')
    foto.src = `../img/dois-colegas-em-um-fabrica.jpg`

    const informacao = document.createElement('div')
    informacao.classList.add('container-info')

    const perfil = document.createElement('div')
    perfil.classList.add('container-perfil')

    const nome = document.createElement('span')
    nome.textContent = contato.name

    const descricao = document.createElement('span')
    descricao.classList.add('info-conversa')
    descricao.textContent = contato.description

    const hora = document.createElement('div')
    hora.classList.add('hora')
    hora.textContent = contato.hora

    // mensagem.append(conversa)

    conversa.append(foto, informacao, nome, hora)

    informacao.append(perfil)

    perfil.append(nome, descricao)

    return conversa

}

const carregarContatos = () => {
    const container = document.getElementById('container-mensagens')
    const contatosMensagens = contatos.map(criarCard)

    container.replaceChildren(...contatosMensagens)
}

// const acaoDoButao = document.getElementById('')

//  function teste(event){
//     console.log(event.target.id)
//  }


//  const criarChat = (contato) => {
//     const containerChat = document.getElementById('containerChat')
//     containerChat.innerHTML = "";

//     contato.containerChat.reverse().forEach((mensagem) => {
//         const headerChat = document.createElement('div')
//         headerChat.classList.add('header-direito')
//     });

//  }

carregarContatos()



var div = document.getElementById('container-mensagens');

div.addEventListener('click', function() {

    var container = document.getElementById('containerD');
    container.classList.toggle('hide');



});


console.log();

// const container = document.getElementById('container')



// console.log (containerConversas)

// container.addEventListener('click', teste)


