const loadBooksBtn = document.getElementById('loadBooksBtn');
const booksDiv = document.getElementById('booksData');

loadBooksBtn.addEventListener('click', getBooks);

const apiURL = 'http://localhost:3000/api/books';

async function getBooks() {
  try {
    const response = await fetch(apiURL);
    const books = await response.json();

    let html = '';
    books.forEach(book => {
      html += `
        <div class="book-card">
          <img src="${book.image}" alt="${book.title}">
          <h3>${book.title}</h3>
          <p>Author: ${book.author}</p>
          <p>Year: ${book.year}</p>
        </div>
      `;
    });

    booksDiv.innerHTML = html;
  } catch (error) {
    console.error('Error fetching books:', error);
    booksDiv.innerHTML = '<p>Failed to load books.</p>';
  }
}
