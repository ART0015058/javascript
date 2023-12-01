/* Definindo um array */
let alunos = [
    {nome: "Aninhha", email: "ninha@gmail.com", telefone: 21935484773, profissao: "frontend"},
    {nome: "Jaque", email: "jaque@gmail.com", telefone: 21974450073, profissao: "backend"},
    {nome: "Julinha", email: "juju@msn.com", telefone: 21979984073, profissao: "fullstack"},
    {nome: "Lucao", email: "lucao@hotmail.com", telefone: 21954454075, profissao: "mobile"},
    {nome: "Inacio", email: "inacio@yahoo.com", telefone: 21977458473, profissao: "mobile"},
    {nome: "Maurao", email: "maurao@hotmail.com", telefone: 21944488576, profissao: "frontend"},
    {nome: "Ramonzao", email: "monzao@gmail.com", telefone: 2173484973, profissao: "frontend"},
    {nome: "Davizao", email: "davi@msn.com", telefone: 21975584073, profissao: "frontend"},

]

//Definindo um segundo array
let produtos = [
    {name:"Iphone 15", categoria: "smartphones", preco: 9999.00, marca:"Apple"},
    {name: "Samsung Galaxy S25", categoria: "smartphones", preco: 5999.00, marca:"Samsung"},
    {name: "Moto G33", categoria:"smartphones", preco: 300.00, marca:"Motorola"},
    {name: "Samsung Galaxy A03", categoria:"smartphones", preco:499.00, marca:"Samsung"},
    {name:"Moto G53", categoria:"smartphones", preco:1169.99, marca:"Motorola"},
    {name:"Iphone 14", categoria:"smartphone", preco: 4499.10, marca:"Apple"},
    {name:"Acer Aspire 5", categoria:"notebooks", preco: 2789.10, marca:"Acer"},
    {name:"Samsung Book", categoria:"notebooks", preco: 2519.10, marca:"Samsung"},
    {name:"Dell Inspiron 15", categoria:"notebooks", preco: 2609.10 , marca:"Dell"},
    {name:"Lenovo Ideapad", categoria:"notebooks", preco: 2384.10 , marca:"Lenovo"},
    {name:"Asus Vivobook", categoria:"notebooks", preco: 2519.10, marca:"Asus"},
    {name:"Monitor Smart Tv LG 24", categoria:"monitor tv", preco: 944.28, marca:"LG"},
    {name:"Monitor Notebook Tv CCE 14", categoria:"monitor tv", preco: 975.29, marca:"CCE"},
    {name:"Tv Monitor 24 Hd Multilaser", categoria:"monitor tv", preco: 1149.90, marca:"Multilaser"},
    {name:"Tv Monitor LED 24 HYE", categoria:"monitor tv", preco: 1302.99, marca:"HYE"},
]

// carregar os dados do array na tabela
window.onload = (event) => {
    let tbody1 = document.querySelector("#tBody1");
alunos.forEach((aluno, index) => {
    let tr = document.createElement("tr");

    let tdCod = document.createElement("td");
    tr.id = index + 1
    let tdNome = document.createElement("td");
    let tdEmail = document.createElement("td");
    let tdTelefone = document.createElement("td");
    let tdProfissao = document.createElement("td");
    let tdBotao = document.createElement("td");

    tdCod.textContent = index+1;
    tdNome.textContent = aluno.nome;
    tdEmail.textContent = aluno.email;
    tdTelefone.textContent = aluno.telefone;
    tdProfissao.textContent = aluno.profissao;
    tdBotao.innerHTML = `<button class="btn btn-outline-danger btn-hover" onclick="remover(this)">Remover</button>`

    tbody1.appendChild(tr);

    tr.appendChild(tdCod);
    tr.appendChild(tdNome);
    tr.appendChild(tdEmail);
    tr.appendChild(tdTelefone);
    tr.appendChild(tdProfissao);
    tr.appendChild(tdBotao);

});

let tbody2 = document.querySelector("#tBody2");
    produtos.forEach((produto, index) => {
        let tr = document.createElement("tr");

        let tdCode = document.createElement("td");
        tr.id = index + 1
        let tdName = document.createElement("td");
        let tdCategoria = document.createElement("td");
        let tdPreco = document.createElement("td");
        let tdMarca = document.createElement("td");

        tdCode.textContent = index + 1;
        tdName.textContent = produto.name;
        tdCategoria.textContent = produto.categoria;
        tdPreco.textContent = produto.preco;
        tdMarca.textContent = produto.marca;

        tbody2.appendChild(tr);

        tr.appendChild(tdCode);
        tr.appendChild(tdName);
        tr.appendChild(tdCategoria);
        tr.appendChild(tdPreco);
        tr.appendChild(tdMarca);
        
    })

    initPieChart();

}

// Definindo funções de remoção e adição

function remover (id) {
    let row = id.parentNode.parentNode.id;
    row = document.getElementById(row);
    row.parentNode.removeChild(row);
    return false
}

function adicionar () {
    //Definindo as variáveis e recebendo os dados
    let nome = document.getElementById(`nome`).value;
    let email = document.getElementById(`email`).value;
    let telefone = document.getElementById(`telefone`).value;
    let profissao = document.getElementById(`profissao`).value;
    let table = document.getElementById(`myTable`);

    //Calculando o tamanho da tabela
    let tablesize = table.rows.length;
    //Inserindo uma linha abaixo da última linha da tabela
    let row = table.insertRow(tablesize);

    let col1 = row.insertCell(0);
    let col2 = row.insertCell(1);
    let col3 = row.insertCell(2);
    let col4 = row.insertCell(3);
    let col5 = row.insertCell(4);
    let col6 = row.insertCell(5);

    //Adicionando o id no elemento a ser criado
    row.id = tablesize;

    // Criando o código do botão para remover a linha
    let btnCode = `<button class="btn-outline-danger" onclick="remover(this)">Remover</button>`;

    //Preenchendo as células da linha
    col1.innerHTML = tablesize;
    col2.innerHTML = nome;
    col3.innerHTML = email;
    col4.innerHTML = telefone;
    col5.innerHTML = profissao;
    col6.innerHTML = btnCode;

    //Limpar os campos do formulário
    document.getElementById(`nome`).value = " ";
    document.getElementById(`email`).value = " ";
    document.getElementById(`telefone`).value = " ";
    document.getElementById(`profissao`).value = " ";

   

    //Para não recarregar a página
    return false;  
}

//Criar o gráfico

const initPieChart = () => {
        const ctx = document.getElementById("myChart");
        const data = {
            labels: ['Frontend', 'Backend', 'Fullstack', 'Mobile'],
            datasets: [
                {
                    label: 'Quantidade',
                    data: [10,20,50,20],
                    backgroundColor: ['pink', 'lightblue', 'lightgreen', 'orange'],
                   
                }
            ]
        }
        const pieChart = new Chart(
            ctx,
            {
                type: 'pie',
                data: data
            }
        );
}

//Criar outro gráfico

const initPolarAreaChart = () => {
    removerChart();
    const ctx = document.getElementById("myChart");
    const data = {
        labels: ['Frontend', 'Backend', 'Fullstack', 'Mobile'],
        datasets: [{
            label: 'Quantidade',
            data: [18,16,12,14],
            backgroundColor: ['pink', 'lightblue', 'lightgreen', 'orange'],
            hoverOffset: 5,

        }],
    };
    const polarAreaChart = new Chart(
        ctx,
        {
            type:'polarArea',
            data: data
        }

    )

}

//Remover gráfico

const removerChart = () => {
    const divChart = document.querySelector('.chart');
    document.getElementById("myChart").remove();
    const myChart = document.createElement("canvas");
    myChart.id = "myChart";
    divChart.appendChild(myChart);
}