// Importar o arquivo que tem os métodos de exceptions
import { handleErrors } from "./exception.js";

var URL = 'http://localhost:3000/jogos';

export const getAllGames = async () => {
    try {
        //Fazendo solicitação get
        const response = await fetch ( URL );
        
        //Lidando com erros na resposta
        handleErrors(response);

        //converter os dados para json
        return await response.json();
              
    } catch (error) {
        console.log('Error >>>', error);
    }

}; 