import capitalize from './capitalize.js';
import library from './library.js';
import ui from './ui.js';
import stats from './stats.js';

const add = (() => {
  // Cache DOM
  const _btn = document.getElementById('add-btn');
  const _form = document.getElementById('add-form');
  const _cross = document.querySelector('#add-form .icon-close');
  const _overlay = document.getElementById('overlay');

  // Function declaration
  function _togglePopup() {
    _form.classList.toggle('active');
    _overlay.classList.toggle('active');
  }

  function _getFormInputNodes() {
    return {
      inputTitle: document.getElementById('input-title'),
      inputAuthors: document.getElementById('input-authors'),
      inputPageNumber: document.getElementById('input-page-number'),
      inputStatus: document.querySelector('#add-form input[name="input-status"]:checked'), // Select the checked one only
    };
  }

  function _getFormData() {
    const data = _getFormInputNodes();
    const res = {};
    Object.keys(data).forEach((key) => {
      const newKey = `${key}Val`;
      res[newKey] = capitalize.convert(data[key].value);
    });
    return res;
  }

  function _clearForm() {
    const nodes = Object.values(_getFormInputNodes());
    nodes.forEach((node) => {
      const temp = node;
      if (temp.getAttribute('type') === 'radio') temp.checked = false;
      // For radio button need to change the node.checked, not emptying the value like text-based
      else temp.value = '';
    });
  }

  // Bind events
  _btn.addEventListener('click', () => {
    _togglePopup();
  });

  _cross.addEventListener('click', () => {
    _togglePopup();
  });

  _form.addEventListener('submit', (e) => {
    e.preventDefault();
    _togglePopup();
    const bookData = _getFormData();
    library.addBook(bookData);
    ui._renderNewBook(bookData);
    _clearForm();
    stats._updateStates();
  });
})();
