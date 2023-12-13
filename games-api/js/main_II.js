var URL = "http://localhost:3000/jogos";
//Código a ser refatorado

document.addEventListener('DOMContentLoaded', () => {
    //Pegando a div com a id="data-container"
    const dataContainer = document.getElementById('data-container');
 
    //Função para buscar e exibir dados da API
    const fetchData = async () => {
        try {
            //Fazendo solicitação get
            const response = await fetch(URL)
            
            //Lidando com erros na resposta
            handleErrors(response);

            //converter os dados para json
            const data = await response.json();
            
            //exibir os dados na página html
            data.forEach(jogo => {
                const tagDiv = 
                    document.createElement('div');
                tagDiv.innerHTML= `<strong>${jogo.nome}</strong><p>${jogo.preco}</p>`;
                dataContainer.appendChild(tagDiv);                
            });
        } catch (error) {
            console.log('Error >>>', error);
        }
    }

    //Chamando a função para buscar e exibir dados ao carregar a página
    fetchData();
});

const createGame = () => {
  const jogoTeste = {
    nome: "The Legend of Zelda",
    img: "https://codetheworld.io/wp-content/uploads/2023/12/Dark-Souls.png",
    preco: 100,
  };
  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jogoTeste),
  })
    .then((response) => response.json())
    .then((data) => console.log("sucesso: ", data))
    .catch((error) => console.log("Erro: ", error));
};

const deleteGame = () => {
  const game = {
    nome: "The Legend of Zelda",
    img: "https://codetheworld.io/wp-content/uploads/2023/12/Dark-Souls.png",
    preco: 100,
    id: 3,
  };
  fetch(URL + `/${game.id}`, { method: "DELETE" })
    .then((response) => response.json())
    .then((data) => console.log("sucesso: ", data))
    .catch((error) => console.log("Erro: ", error));
};

const updateGame = () => {
  const game = {
    nome: "The Legend of Zelda II",
    img: "https://codetheworld.io/wp-content/uploads/2023/12/Dark-Souls.png",
    preco: 300,
    id: 3,
  };
  fetch(URL + `/${game.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "applicationno/json",
    },
    body: JSON.stringify(game),
  })
    .then((response) => response.json())
    .then((data) => console.log("sucesso: ", data))
    .catch((error) => console.log("Erro: ", error));
};
