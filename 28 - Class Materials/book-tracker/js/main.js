//Example fetch using openlibrary

// Example ISBNs 9781781352687 9780140328721 9781912906765
document.querySelector('#lookupBook').addEventListener('click', getFetch);
document.querySelector('#clearBooks').addEventListener('click', clearBooks);
populateBooks();

function clearBooks() {
  localStorage.setItem('booksRead', '[]');
  populateBooks();
}

async function getFetch() {
  // Need current books array so I can add the searched one to it
  const currentBooks = getBooks();

  // Lookup the details for the required book
  const ISBNchosen = document.querySelector('input').value;
  const url = `https://openlibrary.org/isbn/${ISBNchosen}.json`;

  // Fetch it
  const bookRes = await fetch(url);
  const bookData = await bookRes.json();

  // Author requires a separate API call
  const authorData = await getAuthor(bookData.authors[0].key);

  // Create an object to represent the book
  const book = {
    title: bookData.title,
    author: authorData.name,
    ISBN: ISBNchosen,
  };

  // Add to the array and store locally
  currentBooks.push(book);
  localStorage.setItem('booksRead', JSON.stringify(currentBooks));

  populateBooks();
}

async function getAuthor(key) {
  const authorURL = `https://openlibrary.org${key}.json`;
  const authorRes = await fetch(authorURL);
  return await authorRes.json();
}

function populateBooks() {
  const currentBooks = getBooks();
  const booksEle = document.querySelector('.bookList');
  booksEle.innerHTML = '';
  for (book of currentBooks) {
    booksEle.innerHTML += `  <section class="book">
        <li><span class="title">${book.title}</span> by  <span class="author">${book.author}</span> - ISBN ${book.ISBN}</li>
      </section>`;
  }
}

function getBooks() {
  return JSON.parse(localStorage.getItem('booksRead'));
}
