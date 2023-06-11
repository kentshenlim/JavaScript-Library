const scientific = (() => {
  function convert(num) {
    const numStr = `${num}`;
    if (numStr.length > 5) {
      let temp = num;
      let power = 0;
      while (temp > 10) {
        power += 1;
        temp /= 10;
      }
      const val = Math.round(temp * 10) / 10;
      return `${val}e${power}`;
    }
    return num;
  }

  return { convert };
})();

export default scientific;
