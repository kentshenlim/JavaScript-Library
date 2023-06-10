const library = (() => {
  const _library = []; // Array of object, each object contains book information
  const addBook = (obj) => {
    _library.push(obj);
    console.log(_library);
  };
  return { addBook };
})();

export default library;
