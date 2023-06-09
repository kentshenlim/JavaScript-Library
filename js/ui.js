const ui = (() => {
  // Cache DOM
  const addBtn = document.getElementById('add-btn');
  const addForm = document.getElementById('add-form');
  const addCross = document.querySelector('.icon-close');

  // Bind events
  addBtn.addEventListener('click', () => {
    addForm.classList.toggle('active');
  });
  addCross.addEventListener('click', function () {
    const parent = this.parentNode;
    parent.classList.remove('active');
  });
})();
