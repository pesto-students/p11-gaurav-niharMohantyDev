function calcWordFrequencies() {
    const input = ('aur bhai kya chal raha hai hai');
    const words = input.split(' ');
    const frequencies = {};
  
    // Calculate word frequencies
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      frequencies[word] = frequencies[word] ? frequencies[word] + 1 : 1;
    }
  
    // Output word frequencies
    for (const word in frequencies) {
      console.log(word, frequencies[word]);
    }
  }
  
  // Example usage:
  calcWordFrequencies();
  