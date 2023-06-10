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

  function _getFormData() {
    const inputTitle = document.getElementById('input-title').value;
    const inputAuthors = document.getElementById('input-authors').value;
    const inputPageNumber = document.getElementById('input-page-number').value;
    const inputStatus = document.querySelector('input[name="input-status"]:checked').value; // Select the checked one only
    return {
      inputTitle,
      inputAuthors,
      inputPageNumber,
      inputStatus,
    };
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
    console.log(_getFormData());
  });
})();
