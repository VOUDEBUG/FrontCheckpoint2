// Endereço da API
window.enderecoApi = "https://ctd-todo-api.herokuapp.com/v1/";

// Função que obtem o valor digitado no campo
window.getValue = (elementId) => {
  return document.getElementById(elementId).value;
};

// Fetch para API
window.chamadaApi = (caminho, metodo, dados, jwt) => {
  // Faz a chamada do Fetch juntando o endereço da API com o caminho enviado na chamada da função
  return (
    fetch(window.enderecoApi + caminho, {
      method: metodo,
      headers: {
        // Sempre passa esse Content-type
        "Content-type": "application/json",
        // Sempre passa o authorization, quando for caminho que não precisa é só enviar undefined
        authorization: jwt
      },
      // Recebe dados via chamada da função e transforma em string
      body: JSON.stringify(dados)
    })
      // Recebe a resposta e envia para a função obterJSON
      .then(window.obterJSON)
      // Em caso de erro, agora a obterJSON faz cair aqui no catch que da o alerta para o usuário
      .catch((erro) => alert(erro))
  );
};

// Função que recebe uma resposta da api e retorna um objeto ou um erro
window.obterJSON = (resposta) => {
  // Verifica se a resposta está OK (status === 2xx)
  if (!resposta.ok) {
    // Solicita então o texto para obter a mensagem de erro
    return resposta.text().then((msg) => {
      // Cria um erro, no agumento dessa Classe a gente adiciona a mensagem que queremos exibir para o usuário
      const err = new Error(`HTTP (${resposta.status}) ${msg}`);
      err.response = resposta;
      err.status = resposta.status;

      // Retorna o erro
      throw err;
    });
  }

  // Retorna o JSON (para o próximo then) só se não passar pelo if
  return resposta.json();
};
