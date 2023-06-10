const capitalize = (() => {
  const _commonWords = new Set([
    'a',
    'an',
    'the',
    'and',
    'but',
    'or',
    'nor',
    'for',
    'so',
    'yet',
    'in',
    'on',
    'at',
    'by',
    'with',
    'from',
    'to',
    'for',
    'of',
    'about',
    'over',
    'under',
    'true',
    'false',
    'null',
    'undefined',
  ]);

  return {
    convert(str) {
      if (typeof str === 'string') {
        const words = str.split(' ');
        for (let i = 0; i < words.length; i += 1) {
          if (i === 0 || !_commonWords.has(words[i].toLowerCase())) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
          } else {
            words[i] = words[i].charAt(0).toLowerCase() + words[i].slice(1);
          }
        }
        return words.join(' ');
      }
      return str; // Else no need edit
    },
  };
})();

export default capitalize;
