function* symbolIterator(strings) {
    for (const str of strings) {
      yield Symbol(str);
    }
  }
  

  const strings = ['Nihar', 'Ranjan', 'Mohanty'];
  const iterator = symbolIterator(strings);
  
  for (const symbol of iterator) {
    console.log(symbol);
  }
  