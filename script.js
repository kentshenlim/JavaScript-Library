const myLibrary = [];

function Book(title, author, page, isRead) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.isRead = isRead;
}

function addBookToLibrary(bookObject) {
  myLibrary.push(bookObject);
}
/*
The form will generate an object when submitted. That object will be passed to
addBookToLibrary function, which then passed into myLibrary.
*/
