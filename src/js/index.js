const listaSelecaoAcademiaEquilibrio = document.querySelectorAll(".academia");

listaSelecaoAcademiaEquilibrio.forEach((academia) => {
  academia.addEventListener("click", () => {
    esconderCartaoAcademia();

    const idAcademiaSelecionado = mostrarCartaoAcademia(academia);
    
    desativarAcademiaNaListagem();

    ativarAcademiaNaListagem(idAcademiaSelecionado);
  });
});

function ativarAcademiaNaListagem(idAcademiaSelecionado) {
  const academiaSelecionadoNaListagem =
    document.getElementById(idAcademiaSelecionado);
  academiaSelecionadoNaListagem.classList.add("ativo");
}

function desativarAcademiaNaListagem() {
  const academiaAtivoNaListagem = document.querySelector(".ativo");
  academiaAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoAcademia(academia) {
  const idAcademiaSelecionado = academia.attributes.id.value;
  const idDoCartaoAcademiaParaAbrir = "cartao-" + idAcademiaSelecionado;
  const cartaoAcademiaParaAbrir = document.getElementById(
    idDoCartaoAcademiaParaAbrir
  );

  if (cartaoAcademiaParaAbrir) {
    cartaoAcademiaParaAbrir.classList.add("aberto");
    return  idAcademiaSelecionado
  } 
  return null;
}
  


function esconderCartaoAcademia() {
  const cartaoAcademiaAberto = document.querySelector(".aberto");
  if(cartaoAcademiaAberto)  {
  cartaoAcademiaAberto.classList.remove("aberto");
  }
}










  

