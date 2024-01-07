let tentativa = 0;

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector(".dashboard__item__img");
    let botao = gameClicado.querySelector(".dashboard__item__button");

    if(botao.innerHTML == "Alugar"){
        botao.innerHTML = "Devolver";
        imagem.classList.add("dashboard__item__img--rented");
        botao.classList.add("dashboard__item__button--return");
    } else {
        botao.innerHTML = "Alugar";
        imagem.classList.remove("dashboard__item__img--rented");
        botao.classList.remove("dashboard__item__button--return");
        tentativa = tentativa + 1;
        let palavraJogo = tentativa > 1 ? "jogos" : "jogo";
        alert(`O jogo foi devolvido, você já devolveu ${tentativa} ${palavraJogo}.`);
    }
}
