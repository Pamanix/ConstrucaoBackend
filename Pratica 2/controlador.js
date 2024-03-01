const Contato = require('./controlador');

const contatos = [];

function adicionarContatos(nome, email, telefone){

    const novoContato = {Contato};
    contatos.push(novoContato);
}

function listarContatos(){
    contatos.forEach((contatos)=>
    console.log(contato.nome, "\n", contatos.telefone, '\n', contatos.email));
}