document.getElementById('formCadastro').addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const dataNascimento = document.getElementById('dataNascimento').value;

  const aluno = { nome, email, telefone, dataNascimento };

  // Pegar os alunos do localStorage ou array vazio
  const alunos = JSON.parse(localStorage.getItem('alunos')) || [];

  // Adicionar novo aluno
  alunos.push(aluno);

  // Salvar de volta
  localStorage.setItem('alunos', JSON.stringify(alunos));

  // Mensagem de sucesso
  document.getElementById('msgSucesso').style.display = 'block';

  // Limpar formulário
  this.reset();
});

