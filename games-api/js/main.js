import { getAllGames, createGame, deleteGame, updateGame } from "./service.js";

window.onload = () => {
  loadGames();
};

// Refatorado
const loadGames = () => {
  console.log(">>>");
  const dataContainer = document.getElementById("data-container");
  getAllGames().then((resp) => {
    resp.forEach((jogo) => {
      const gamesElement = document.createElement("div");
      gamesElement.innerHTML = 
        `<div class="col">
          <div class="elemento"><img class="cardimg" src="${jogo.img}" alt="${jogo.nome}">           
              <h4 class="cardtitle">
                ${jogo.nome}
              </h4>
              <p class="cardtext">R$ ${jogo.preco}</p></div>                      
        </div>`;
      dataContainer.appendChild(gamesElement);
    });
  });
};

// Refatorado
document.getElementById('btnCreate').addEventListener('click', () => {
  const jogo = {
    nome: "The Legend of Zelda",
    img: "https://codetheworld.io/wp-content/uploads/2023/12/Dark-Souls.png",
    preco: 100
  }
  createGame(jogo)
});


// Refatorado
document.getElementById('btnDelete').addEventListener('click', () => {
  const jogo = {
   nome: "The Legend of Zelda",
   img: "https://codetheworld.io/wp-content/uploads/2023/12/Dark-Souls.png",
   preco: 100,
   id: 3
 }
 deleteGame(jogo)
});

// Refatorado
document.getElementById('btnUpdate').addEventListener('click', () => {
  const jogo = {
      nome: "The Legend of Zelda: Tears of the Kingdom",
      img: "https://zelda.nintendo.com/tears-of-the-kingdom/_images/game/logo-shadow.png",
      preco: 300,
      id: 3
  }
  updateGame(jogo);
});
