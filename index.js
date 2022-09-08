function fetchBooks() {
  let pge = 'https://anapioficeandfire.com/api/books';
  fetch(pge)
  .then((response) => {return response.json();})
  .then((books) => {renderBooks(books);});
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
