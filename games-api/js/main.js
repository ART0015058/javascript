import { getAllGames } from "./service.js";
import { createGame } from "./service.js";
import { deleteGame } from "./service.js";
import { updateGame } from "./service.js";

var URL = "http://localhost:3000/jogos";

window.onload = () => {
  loadGames();
};

// Refatorado
const loadGames = () => {
  console.log(">>>");
  const dataContainer = document.getElementById("data-container");
  getAllGames().then((resp) => {
    resp.forEach((game) => {
      const gamesElement = document.createElement("div");
      gamesElement.innerHTML = `<strong>${game.nome}</strong><p>${game.preco}</p>`;
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
    nome: "The Legend of Zelda II",
    img: "https://codetheworld.io/wp-content/uploads/2023/12/Dark-Souls.png",
    preco: 300,
    id: 3
  }
  updateGame(jogo);
});
