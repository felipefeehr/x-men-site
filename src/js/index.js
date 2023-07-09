/*
O que precisamos fazer? - quando passar o mous em cima do personagem na lista, temos que adicionar a bordaa azul de seleção na imagem pequena do personagem e mostrar a imagem, o nome e o texto grande do personagem que está selecionado

OBJETIVO 1 - quando passar o mouse em cima do persongem na listagem, devemos selecioná-lo
    passo 1  pegar os personagens no JS pra poder verificar quando o usuário passar  o mouse em cima de um deles
    passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
    passo 3 - verificar se ja exista um personagem selecionado, se sim, devemos remover a seleção dele

OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descriição do personagem grande
    passo 1 - pegar o elemento do personagem grande para adicionar as informações dele
    passo 2 - alterar a imagem do personagem grande
    passo 3 - alterar o nome do personagem grande
    passo 4 - alterar a descrição do personagem grande
*/

const personagens = document.querySelectorAll('.personagem');

personagens.forEach(personagem => {

    if (window.innerWidth < 450) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    personagem.addEventListener('mouseenter', () => {
        removerSelecaoDoPersonagem();

        console.log();
        personagem.classList.add('selecionado');

        alterarImagemDoPersonagemGrande(personagem);

        alterarNomeDoPersonagemGrande(personagem);

        alterarDescricaoDoPersonagemGrande(personagem);
    })
})

function alterarDescricaoDoPersonagemGrande(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomeDoPersonagemGrande(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemDoPersonagemGrande(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    const idPersonagem = personagem.attributes.id.value;

    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}
