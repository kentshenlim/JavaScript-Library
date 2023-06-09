const ui = (() => {
  // Cache DOM
  const addBtn = document.getElementById('add-btn');
  const addForm = document.getElementById('add-form');
  const addCross = document.querySelector('.icon-close');
  const overlay = document.getElementById('overlay');

  // Bind events
  addBtn.addEventListener('click', () => {
    addForm.classList.add('active');
    overlay.classList.add('active');
  });
  addCross.addEventListener('click', function () {
    closePopup.call(this);
  });

  function closePopup() {
    const parent = this.parentNode;
    parent.classList.remove('active');
    overlay.classList.remove('active');
  }
})();
