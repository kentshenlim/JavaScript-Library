const addBtn = document.getElementById('add-btn');
const addForm = document.getElementById('add-form');

addBtn.addEventListener('click', () => {
  addForm.classList.toggle('active');
});
