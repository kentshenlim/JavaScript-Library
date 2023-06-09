const ui = (() => {
  // Cache DOM
  const _addBtn = document.getElementById('add-btn');
  const _addForm = document.getElementById('add-form');
  const _addCross = document.querySelector('.icon-close');
  const _overlay = document.getElementById('overlay');

  // Bind events
  _addBtn.addEventListener('click', () => {
    _addForm.classList.add('active');
    _overlay.classList.add('active');
  });
  _addCross.addEventListener('click', function () {
    closePopup.call(this);
  });

  function closePopup() {
    const parent = this.parentNode;
    parent.classList.remove('active');
    _overlay.classList.remove('active');
  }
})();
