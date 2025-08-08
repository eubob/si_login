

function validacao() {
    const emailvalido = validarEmailInput();
    const senhaValida = validarSenha();
    document.getElementById('btnentrar').disabled = !(emailvalido && senhaValida);
    document.getEle
}

function validarEmailInput() {
    const email = document.getElementById("email").value;
    if (!email) {
        return false;
    }
    return validarEmail(email);
}

function validarEmail(email) {
    const padrao = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return padrao.test(email);
}

function validarSenha() {
    const senha = document.getElementById("senha").value;
    return senha.length > 0;
}
function registrar() {
    window.location.href = "/html/cadastro.html";

}

async function enviarCadastro() {
  const email = document.getElementById('email').value;
  const nome = document.getElementById('nome').value;
  const senha = document.getElementById('senha').value;

    if (!email || !nome || !senha) {
        alert('Por favor, preencha todos os campos.');
        return;
  

  try {
    const resposta = await fetch('/cadastro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ email, nome, senha })
    });

    const texto = await resposta.json();

    if (resposta.ok) {
      alert('Cadastro realizado com sucesso!');
      window.location.href = 'login.html';
    } else {
      alert(`Erro no cadastro: ${texto}`);
    }
  } catch (erro) {
    console.error('Erro ao cadastrar:', erro);
    alert('Erro ao cadastrar usuário. Tente novamente mais tarde.');

}}



    async function login() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  try {
    const resposta = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, senha })
    });

    const texto = await resposta.text();
    alert(texto);

    if (resposta.ok) {
      window.location.href = "home.html"; 
    }
  } catch (erro) {
    console.error('Erro ao fazer login:', erro);
    alert('Erro ao fazer login');
  }
}

}