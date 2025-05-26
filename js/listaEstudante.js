document.addEventListener('DOMContentLoaded', () => {
  const alunos = JSON.parse(localStorage.getItem('alunos')) || [];
  const tbody = document.querySelector('#tabelaAlunos tbody');

  function renderTabela() {
    tbody.innerHTML = ''; // limpa a tabela antes de renderizar

    alunos.forEach((aluno, index) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${aluno.nome}</td>
        <td>${aluno.email}</td>
        <td>${aluno.telefone}</td>
        <td>${aluno.dataNascimento}</td>
        <td><button class="btn-excluir" data-index="${index}">Excluir</button></td>
      `;
      tbody.appendChild(tr);
    });

    // Adiciona o evento para cada botão Excluir
    const botoesExcluir = document.querySelectorAll('.btn-excluir');
    botoesExcluir.forEach(botao => {
      botao.addEventListener('click', (e) => {
        const idx = e.target.getAttribute('data-index');
        excluirAluno(idx);
      });
    });
  }

  function excluirAluno(index) {
    alunos.splice(index, 1); // remove do array
    localStorage.setItem('alunos', JSON.stringify(alunos)); // atualiza localStorage
    renderTabela(); // atualiza a tabela na página
  }

  // chama a função para renderizar a tabela ao carregar o script
  renderTabela();
});
