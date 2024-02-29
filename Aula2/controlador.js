const readline = require("readline-sync"); //<- importar

const produtos = [];

function criar() {
    const nome = readline.question("\nInforme o nome do produto: ");
    const preco = readline.question("\nInforme o preco do produto: "); // ** tanto faz ser aspas duplas ou simples
    const novo = { nome, preco }; // new Object(nome, preco)
    produtos.push(novo);
  }
  
  function listar() {
      if(produtos.length === 0){
          console.log('lista vazia');
      } else { 
          produtos.forEach((produto) => console.log(produto.nome, "-", produto.preco));
      }
  }
  
  function buscar() {
    const nome = readline.question("Informe o nome do produto: ");
    const buscou = produtos.find((produto) => produto.nome === nome);
  
    if (buscou) {
      console.log(buscou.nome, "-", buscou.preco);
    } else {
      console.log("Produto não encontrado");
    }
  }
  
  function atualizar() {
      const nome = readline.question("Informe o nome do produto: ");
      const buscou = produtos.find((produto) => produto.nome === nome);
    
      if (buscou) {
          const outroNome =
              readline.question("Informe outro nome do produto: ");
          const outroPreco = 
              readline.question("Informe outro preco: ");
          buscou.nome = outroNome;
          buscou.preco = outroPreco;
      } else {
        console.log("Produto não encontrado");
      }
  }
  
  function remover() {
      const nome = readline.question("Informe o nome do produto: ");
      const posicao = produtos.findIndex((produto) => produto.nome === nome);
  
      if(posicao >= 0) {
          produtos.splice(posicao, 1);
      }
  }

  module.exports = { criar, listar,buscar, atualizar, remover}