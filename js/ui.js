import library from './library.js';

const ui = (() => {
  // Cache DOM
  const _libraryShelf = document.getElementById('library-shelf');

  // Function declaration
  function _addIcon(node, iconName) {
    const iconNode = document.createElement('span');
    iconNode.classList.add('icon');
    const iconInnerNode = document.createElement('ion-icon');
    iconInnerNode.setAttribute('name', iconName);
    iconNode.appendChild(iconInnerNode);
    node.insertBefore(iconNode, node.firstChild);
  }

  function _renderNewBook(obj) {
    const node = document.createElement('div');
    node.classList.add('book-tag-wrapper');
    const title = document.createElement('h3');
    title.classList.add('book-tag-title');
    const author = document.createElement('p');
    author.classList.add('book-tag-author');
    const pageNum = document.createElement('p');
    pageNum.classList.add('book-tag-pageNum');
    [title.textContent,
      author.textContent,
      pageNum.textContent] = [` ${obj.inputTitleVal}`,
      ` ${obj.inputAuthorsVal}`,
      ` ${obj.inputPageNumberVal}`];
    _addIcon(title, 'book'); // Must come after textContent, else overwritten
    _addIcon(author, 'people');
    _addIcon(pageNum, 'bookmarks');
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
