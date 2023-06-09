const addBook = (() => {
  const _library = []; // Array of object, each object contains book information
  const addBook = (obj) => {
    _library.push(obj);
  };
})();

export default addBook;
