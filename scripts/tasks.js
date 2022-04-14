// Cria uma função para isolar a chamada para obter os dados do usuário
const obterUsuario = (code) => {
  // Chamada para getMe
  // O primeiro argumento é o endereço completo da API, no caso users/getMe é para obter as informações do usuário
  // Para informações privadas (ou seja, que só um usuario autenticado pode acessar) precisamo informar o JWT (no authorization do header)
  window
    .chamadaApi("users/getMe", "GET", undefined, code)
    // O retorno obtem a resposta em formato JSON
    .then((usuario) => renderizaUsuario(usuario));
};

// Adiciona o nome completo do usuário na tela
const renderizaUsuario = (usuario) => {
  // Em seguida buscamos o elemento na tela
  const elemento = document.querySelector(".user-name");
  // E anexamos o valor (nome + sobrenome)
  const fullName = `${usuario.firstName} ${usuario.lastName}`;
  elemento.innerHTML = fullName;
};

// Obtem um valor que está guardado no navegador do usuário
const code = localStorage.getItem("jwt");

// Executa a função passando como argumento o JWT
obterUsuario(code);

const obterTasks = (jwt) => {
  // limpar a lista atual que está (ou não) na tela
  // promise
  // executar uma função para cada task da lista (forEach)
};

const adicionaTaskNaLista = (task) => {};
