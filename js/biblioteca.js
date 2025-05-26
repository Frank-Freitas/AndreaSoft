let startIndex = 0;
const maxResults = 12; 

async function buscarLivros() {
  try {
    const resposta = await fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:fiction&startIndex=${startIndex}&maxResults=${maxResults}`);
    const dados = await resposta.json();

    const lista = document.getElementById('ListaLivros');

    dados.items.forEach(item => {
      const livro = item.volumeInfo;

      const li = document.createElement('li');
      li.classList.add('livro-card');

      li.innerHTML = `
        <img src="${livro.imageLinks?.thumbnail || ''}" alt="Capa do livro" />
        <h3>${livro.title}</h3>
        <p><strong>Autor:</strong> ${livro.authors?.join(', ') || 'Desconhecido'}</p>
        <p><strong>Ano:</strong> ${livro.publishedDate?.substring(0, 4) || 'N/A'}</p>
      `;

      lista.appendChild(li);
    });

  } catch (erro) {
    console.error('Erro ao buscar livros:', erro);
  }
}


document.getElementById('verMais').addEventListener('click', () => {
  startIndex += maxResults;
  buscarLivros();
});


buscarLivros();
