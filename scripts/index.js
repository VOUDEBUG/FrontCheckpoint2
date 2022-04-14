// Arquivo carregado apenas na tela de login (index.html)

// Obtem o form que está na tela de login
const form = document.querySelector("form");

// Obtem o spinner que está na tela
const spinner = document.querySelector(".spinner-container");

// Função que exibe o spinner
const showSpinner = () => {
  spinner.classList.add("show");
};

// Função que esconde o spinner
const hideSpinner = () => {
  spinner.classList.remove("show");
};

// Começa a ouvir o evento de submit do formulário
form.addEventListener("submit", function (event) {
  // Cancela o comportamento padrão do navegador quando tem um submit no formulário
  event.preventDefault();

  // Exibe o spinner
  showSpinner();

  // Com a função que está utils, pegamos o valor do email e password
  const email = window.getValue("inputEmail");
  const password = window.getValue("inputPassword");

  // Criamos o objeto no formato exato que API pede
  const data = {
    email,
    password
  };

  // Window por que a função está no utlis (carregado antes)
  // Passamos qual o caminho queremos bater na API
  // Qual metodo
  // O body (ou dados)
  // OBS: O ultimo parametro da função é o JWT, que não temos nesse caso de login, então não vamos passar ele (ou passar undefined)
  window
    .chamadaApi("users/login", "POST", data)
    // Obter o JWT para salvar no localStorage
    .then((dados) => {
      // Verifica se a resposta é um objeto
      // Porque: se for um objeto significa que o servidor me retornou o jwt, quando ele não retorna um jwt ele devolve um tipo "string"
      if (typeof dados === "object") {
        // Salva o dado no localStorage
        localStorage.setItem("jwt", dados.jwt);
        // Redireciona o usuário para a próxima tela (de tarefas)
        window.location.href = "/tarefas.html";
      } else {
        // Esconde o spinner
        hideSpinner();
      }
    });
});
