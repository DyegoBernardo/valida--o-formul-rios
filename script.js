// ---------- FUNÇÕES GERAIS -------------- //
function togglePopup(input, label) {
  // Mostrar popup de campo obrigatório
  input.addEventListener("focus", () => {
    label.classList.add("required-popup");
  });

  // Ocultar popup de campo obrigatório
  input.addEventListener("blur", () => {
    label.classList.remove("required-popup");
  });
}

function estilizarInputCorreto(input, helper) {
  helper.classList.remove("visible");
  input.classList.remove("error");
  input.classList.add("correct");
}

function estilizarInputIncorreto(input, helper) {
  helper.classList.add("visible");
  input.classList.add("error");
  input.classList.remove("correct");
}

// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

togglePopup(usernameInput, usernameLabel)

// Validar valor do input
usernameInput.addEventListener("change", (e)=> {
  let valor = e.target.value

  if(valor.length < 3){
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    usernameHelper.innerText = "Seu username precisa ter 3 ou mais caracteres";
    estilizarInputIncorreto(usernameInput, usernameHelper)
    inputCorretos.username = false
  } else {
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(usernameInput, usernameHelper);
    inputCorretos.username = true
  }
})

// ---------- VALIDAÇÃO EMAIL ---------- //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

togglePopup(emailInput, emailLabel)

// Validar valor do input
emailInput.addEventListener("change", (e)=> {
  let valor = e.target.value

  if(valor.includes("@") && valor.includes(".com")){
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(emailInput, emailHelper);
    inputCorretos.email = true
  } else {
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    emailHelper.innerText = "Precisa inserir um email válido";
    estilizarInputIncorreto(emailInput, emailHelper);
    inputCorretos.email = false
  }
})

// ---------- VALIDAÇÃO SENHA ---------- //
let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById("senha-helper");

togglePopup(senhaInput, senhaLabel)

senhaInput.addEventListener("blur", (e) => {
  let valor = e.target.value

  if (valor == "") {
    senhaHelper.innerText = "O campo senha não pode estar vazio!"
    estilizarInputIncorreto(senhaInput, senhaHelper);
    inputCorretos.senha = false
  }else{
    estilizarInputCorreto(senhaInput, senhaHelper)
    inputCorretos.senha = true
  }
})

// ---------- VALIDAÇÃO CONFIRMA SENHA ---------- //
let confirmaSenhaInput = document.getElementById("confirma-senha");
let confirmaSenhaLabel = document.querySelector('label[for="confirma-senha"]');
let confirmaSenhaHelper = document.getElementById("confirma-senha-helper");

togglePopup(confirmaSenhaInput, confirmaSenhaLabel)

confirmaSenhaInput.addEventListener("blur", (e) => {
  let valorConfirmaSenha = e.target.value

  if (valorConfirmaSenha == senhaInput.value) {
    estilizarInputCorreto(confirmaSenhaInput, confirmaSenhaHelper)
    inputCorretos.confirmaSenha = true
  }else{
    confirmaSenhaHelper.innerText = "As senhas precisam ser iguais!"
    estilizarInputIncorreto(confirmaSenhaInput, confirmaSenhaHelper)
    inputCorretos.confirmaSenha = false
  }
})

// ---------- EVITAR ENVIO DO FORMULÁRIO ---------- //
let btnSubmit = document.querySelector('button[type="submit"]')
let inputCorretos = {
   username: false, 
   email: false,
   senha: false,
   confirmaSenha: false
}

btnSubmit.addEventListener("click", (e) => {
  if (inputCorretos.username == false ||
    inputCorretos.email == false ||
    inputCorretos.senha == false ||
    inputCorretos.confirmaSenha == false){
    e.preventDefault()
    alert('Os campos obrigatórios devem ser preenchidos corretamente.')
  }else{
    alert("Formulário enviado com sucesso!")
  }
})