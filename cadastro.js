

function cadastramento() {

  alert("Obrigado por Optar em Cadastra-se em nosso site, Agradecemos por vc ser um de nós clique no botao para acessar a pagina dos passsos do Cadastro")
}


function enviar() {

  // Manipulação de elementos com ID //

  var campo1 = document.getElementById('Nome').value;
  var campo2 = document.getElementById('cpf').value;
  var campo3 = document.getElementById('email').value;
  var campo4 = document.getElementById('senha').value;

// Condicões do Formulario //

  if (campo1 == "") {
    alert("Nome invalido ou campo vazio");
    return false;
  }

  if (campo2 == "") {
    alert("CPF invalido ou campo Vazio");
    return false;
  }

  if (campo3 == "") {
    alert("Email invalido ou campo Vazio");
    return false;
  }
  if (campo4 == "") {
    alert("Senha invalida ou campo vazio");
    return false;

  }


  if (campo1 == "" && campo2 == "" && campo3 == "" && campo4 == "") {
    alert("Campos Vazios");
    return false;

  }

  else{
    alert("cadastro realizado com sucesso");
    return false;   

  }



}









