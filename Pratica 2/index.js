const readline = require("readline-sync");

    const contatos = [];
    const controlador = require('./controlador');

function menu(){
    console.log("1.Listar");
    console.log("2.Criar");
    console.log("3.Buscar");
    console.log("4.Atualizar");
    console.log("5.Remover");
    console.log("6.Sair");
}

function escolherOpcao(opcao){
    switch(opcao) {
        case 1:

        break;

        case 2:

        break;

        case 3:

        break;

        case 4:

        break;

        case 5:

        break;

        case 6:

        break;

        default:
            console.log("\n Opcao Invalida\n")
    }
}

function main(){
    while(true){
        menu();

        const opcao = readline.question("\n Escolhar uma opcao: "); 

        escolherOpcao();
    }
}

main();