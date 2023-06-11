const info = (() => {
  // Cache DOM
  const _btn = document.getElementById('info-btn');
  const _form = document.getElementById('info-form');
  const _cross = document.querySelector('#info-form .icon-close');
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
