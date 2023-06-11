const library = (() => {
  const _library = []; // Array of object, each object contains book information

  // Function declaration
  function addBook(obj) {
    _library.push(obj);
    console.log(_library);
  }

  function getBookCount() {
    const bookCounts = {
      completed: 0,
      uncompleted: 0,
    };
    _library.forEach((item) => {
      if (item.inputStatusVal === 'True') bookCounts.completed += 1;
      else bookCounts.uncompleted += 1;
    });
    return bookCounts;
  }

  function getReadPageCount() {
    let count = 0;
    _library.forEach((item) => {
      count += +item.inputPageNumberVal;
    });
    return count;
  }

  return { addBook, getBookCount, getReadPageCount };
})();

export default library;
