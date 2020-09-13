// Book Class:Represents a book
class Book {
  // method that runs when we instantiate a book
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
// UI class:Handles UI Tasks
class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: "silent screams",
        author: "Angela Swots",
        isbn: "300",
      },
      {
        title: "Love and Dating",
        author: "Andy Hardey",
        isbn: "34545",
      },
    ];

    // imitates local storage
    const books = StoredBooks;
    // loops via array
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector("#book-list");

    const row = document.createElement("tr");
    row.innerHTML = `
<td>${book.title}</td>
<td>${book.author}</td>
<td>${book.isbn}</td>
<td><a href="#" class="btn btn-danger btn-sm delete">&times;</a></td>
`;

    list.appendChild(row);
  }
}

//Event:Dispplay Books
document.addEventListener("DOMContentLoaded", UI.displayBooks);
