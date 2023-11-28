// Definindo um array de alunos
let alunos = [
    
    {nome: "Ana", email:"ana@senai.com.br", telefone:21999554466, profissao:"backend"},
    {nome: "José", email:"jose@senai.com.br", telefone:21979954466, profissao:"backend"},
    {nome: "Maria", email:"maria@senai.com.br", telefone:21976578486, profissao:"fullstack"},
    {nome: "Antonio", email:"antonio@senai.com.br", telefone:21978955646, profissao:"mobile"},
    {nome: "Julia", email:"julia@senai.com.br", telefone:21979993466, profissao:"mobile"},
    {nome: "Arnaldo", email:"arnaldo@senai.com.br", telefone:21979854336, profissao:"frontend"},
    {nome: "Susan", email:"susan@senai.com.br", telefone:21999754363, profissao:"frontend"},
    {nome: "Jamanta", email:"jamanta@senai.com.br", telefone:21969653436, profissao:"frontend"},

];

//carregar os dados do array para a tabela

window.onload = (event) => {
    let tbody = document.createElement("#myTable");
    alunos.forEach((aluno, index) =>{
        let tr = document.createElement("tr");

        let tdCod = document.createElement("td");
        let tdNome = document.createElement("td");
        let tdEmail = document.createElement("td");
        let tdTelefone = document.createElement("td");
        let tdProfissao = document.createElement("td");
        let tdBotao = document.createElement("td");

        tdCod.textContent = index;
        tdNome.textContent = aluno.nome;
        tdEmail.textContent = aluno.email;
        tdTelefone.textContent = aluno.telefone;
        tdProfissao.textContent = aluno.profissao;
        tdBotao.innerHTML = `<button class="btn-remover" onclick="remover(this)">Remover</button>`;

        tr.appendChild(tdCod);
        tr.appendChild(tdNome);
        tr.appendChild(tdEmail);
        tr.appendChild(tdTelefone);
        tr.appendChild(tdProfissao);
        tr.appendChild(tdBotao);

        tbody.appendChild(tr);
        
    }
    )
}

function remover (id) {
    let row = id.parentNode.parentNode.id;
    row = document.getElementById(row);
    row.parentNode.removeChild(row);
    return false
}