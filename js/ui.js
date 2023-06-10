import library from './library.js';

const ui = (() => {
  // Cache DOM
  const _libraryShelf = document.getElementById('library-shelf');

  // Function declaration
  function _renderNewBook(obj) {
    const node = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pageNum = document.createElement('p');
    [title.textContent,
      author.textContent,
      pageNum.textContent] = [obj.inputTitleVal,
      `by${obj.inputAuthorsVal}`,
      `page.${obj.inputPageNumberVal}`];
    node.appendChild(title);
    node.appendChild(author);
    node.appendChild(pageNum);
    _libraryShelf.appendChild(node);
  }

  // Bind events

  return {
    _renderNewBook,
  };
})();

export default ui;
