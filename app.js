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

  static deleteBook(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }

  static showAlert;
  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
}

//Event:Display Books
document.addEventListener("DOMContentLoaded", UI.displayBooks);
//Event:Add a book
document.querySelector("#book-form").addEventListener("submit", (e) => {
  //prevent actual submit
  e.preventDefault();
  // get form values
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  // validate
  if (title === "" || author === "" || isbn === "") {
    alert("Please fill in all fields");
  } else {
    //instantiate book
    const book = new Book(title, author, isbn);

    //Add Book to UI
    UI.addBookToList(book);

    // clear fields
    UI.clearFields();
  }
});

//Event:Remove a Book
document.querySelector("#book-list").addEventListener("click", (e) => {
  UI.deleteBook(e.target);
});
