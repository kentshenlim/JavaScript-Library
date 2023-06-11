import library from './library.js';

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

  // Bind events
  _btn.addEventListener('click', () => {
    _togglePopup();
  });

  _cross.addEventListener('click', () => {
    _togglePopup();
  });
})();
