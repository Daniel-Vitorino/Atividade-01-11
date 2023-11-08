let inputAtividade = document.getElementById("personagem");
let pesquisarPersonagens = document.getElementById("btn-atividade");


pesquisarPersonagens.onclick = () => {

    fetch(`https://hp-api.onrender.com/api/characters/`)
        .then(response => response.json())
        .then(response => exibirDadosDosPersonagens(response))
}

function exibirDadosDosPersonagens(personagem) {
    personagem.forEach(personagem => {
        let nomePersonagens = document.createElement("h1");
        nomePersonagens.innerText = personagem.name;

        let casaDoPersonagem = document.createElement("h2");
        casaDoPersonagem.innerText = personagem.house;

        let patronoDoPersonagem = document.createElement("h2");
        patronoDoPersonagem.innerText = personagem.patronus;

        let imgPersonagem = document.createElement("img");
        imgPersonagem.src = personagem.image;

        let divPersonagens = document.getElementById("informacaoPersonagem");
        divPersonagens.append(nomePersonagens, casaDoPersonagem, patronoDoPersonagem, imgPersonagem);

    })
}