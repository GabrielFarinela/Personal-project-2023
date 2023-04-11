const livro1 = document.getElementById("livro1");
const livro2 = document.getElementById("livro2");
const quantidadeLivro1 = document.getElementById("quantidadeLivro1");
const quantidadeLivro2 = document.getElementById("quantidadeLivro2");
const valorTotal = document.getElementById("valor-total");
const presente1 = document.getElementById("presente1");
const presente2 = document.getElementById("presente2");

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
  const valorLivro1 = textToFloat(livro1.textContent);
  const valorLivro2 = textToFloat(livro2.textContent);
  const qtdLivro1 = quantidadeLivro1.value;
  const qtdLivro2 = quantidadeLivro2.value;
  const result = ((valorLivro1 * qtdLivro1) + (valorLivro2 * qtdLivro2))
  return result
}

function escreveValorTotal() {
  let result = calculaPrecoTotal()
  if(presente1.checked && quantidadeLivro1.value > 0)
    result = result + 5
  if(presente2.checked  && quantidadeLivro2.value > 0)
    result = result + 5
  valorTotal.innerText = floatToText(result)
}

document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM carregado");
});