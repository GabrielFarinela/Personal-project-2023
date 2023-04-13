const objLivro1 = { titulo: 'Engenharia de Software', src: 'img/sommerville_es.jpeg', autor: 'Ian Sommerville', valor: '194,24' };
const objLivro2 = { titulo: 'Inteligência Artificial', src: 'img/norvig_ia.jpeg', autor: 'Stuart Russel, Peter Norvig', valor: '200,00' };

function adicionaProduto() {
  let novoLivro = document.createElement("article");

  novoLivro.innerHTML = 
  `<div class="produto" id="prod_1">
  <div>
      <img class="miniatura" src=${objLivro1.src} alt="Imagem do Produto">
  </div>
  <div class="nome">
      <p>${objLivro1.titulo}</p>
      <p class="autor">${objLivro1.autor}</p>
  </div>
  <div class="preco">
      <p>R$ <span id="livro1" class="valor">${objLivro1.valor}</span></p>
  </div>
  <div class="quantidade">
      <input onchange="escreveValorTotal()" id="quantidadeLivroAdd" type="number" name="quantidade" min="1" max="5" size="2" value="0">
  </div>
  <div class="presente">
      <label>Para presente: </label>
      <input id="presenteAdd" type="checkbox">
  </div>
  <button style="margin: 30px;" onclick="excluiProduto(this)">Excluir</button>
</div>`

  let livroAnterior = document.querySelector("article:last-of-type");
  livroAnterior.parentNode.insertBefore(novoLivro, livroAnterior.nextSibling);
}

function excluiProduto(botao) {
  let artigo = botao.parentNode.parentNode;
  artigo.parentNode.removeChild(artigo);
}

function removerProdutos() {
  let artigos = document.querySelectorAll("article");

  for (let i = 1; i < artigos.length; i++) {
    artigos[i].remove();
  }

  escreveValorTotal(0)
}

// arredonda valor
function arred(d, casas) {
  let aux = Math.pow(10, casas)
  return Math.floor(d * aux) / aux
}

// transforma string para float
function textToFloat(text) {
  let valor = text.replace("R$ ", "").replace(",", ".");
  return parseFloat(valor);
}

// transforma float para string
function floatToText(float) {
  let text = "R$ " + float;
  return text;
}

function calculaPrecoTotal() {
  let livro1 = document.getElementById("livro1");
  let livro2 = document.getElementById("livro2");
  let quantidadeLivro1 = document.getElementById("quantidadeLivro1");
  let quantidadeLivro2 = document.getElementById("quantidadeLivro2");
  const valorLivro1 = textToFloat(livro1.textContent);
  const valorLivro2 = textToFloat(livro2.textContent);
  const qtdLivro1 = quantidadeLivro1.value;
  const qtdLivro2 = quantidadeLivro2.value;
  const result = ((valorLivro1 * qtdLivro1) + (valorLivro2 * qtdLivro2))
  escreveValorTotal(result)
}

function escreveValorTotal(result) {
  let valorTotal = document.getElementById("valor-total");
  let presente1 = document.getElementById("presente1");
  let presente2 = document.getElementById("presente2");
  if(presente1.checked && quantidadeLivro1.value > 0)
    result = result + 5
  if(presente2.checked  && quantidadeLivro2.value > 0)
    result = result + 5
  valorTotal.innerText = floatToText(result)
}

document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM carregado");
});