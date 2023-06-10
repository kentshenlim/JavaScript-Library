const add = (() => {
  // Cache DOM
  const _btn = document.getElementById('add-btn');
  const _form = document.getElementById('add-form');
  const _cross = document.querySelector('#add-form .icon-close');
  const _overlay = document.getElementById('overlay');
  const _inputTitle = document.getElementById('input-title');
  const _inputAuthors = document.getElementById('input-authors');
  const _inputPageNumber = document.getElementById('input-page-number');
  const _inputStatus = document.getElementsByName('input-status');
  console.log(_inputTitle);

  // Function declaration
  function _togglePopup() {
    _form.classList.toggle('active');
    _overlay.classList.toggle('active');
  }

  function _clearForm() {

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
    console.log(_form);

    _togglePopup();
    console.log(_inputStatus);
  });
})();
