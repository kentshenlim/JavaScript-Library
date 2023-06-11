import library from './library.js';
import scientific from './scientific.js';

const stats = (() => {
  // Cache DOM
  const _btn = document.getElementById('stats-btn');
  const _form = document.getElementById('stats-form');
  const _cross = document.querySelector('#stats-form .icon-close');
  const _overlay = document.getElementById('overlay');

  // Function declaration
  function _togglePopup() {
    _form.classList.toggle('active');
    _overlay.classList.toggle('active');
  }

  function getStats() {
    const { completed: completedBooks, uncompleted: uncompletedBooks } = library.getBookCount();
    const completedPages = library.getReadPageCount();
    return { completedBooks, uncompletedBooks, completedPages };
  }

  function _updateStates() {
    const completedBooksNode = document.getElementById('stats-completed-books');
    const uncompletedBooksNode = document.getElementById('stats-uncompleted-books');
    const totalBooksNode = document.getElementById('stats-total-books');
    const completedPagesNode = document.getElementById('stats-completed-pages');
    const data = getStats();
    completedBooksNode.textContent = data.completedBooks;
    uncompletedBooksNode.textContent = data.uncompletedBooks;
    totalBooksNode.textContent = data.completedBooks + data.uncompletedBooks;
    completedPagesNode.textContent = scientific.convert(data.completedPages);
  }

  // Bind events
  _btn.addEventListener('click', () => {
    _togglePopup();
  });

  _cross.addEventListener('click', () => {
    _togglePopup();
  });

  return { getStats, _updateStates };
})();

export default stats;
