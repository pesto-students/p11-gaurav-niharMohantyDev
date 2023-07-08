const exchangeRates = require('./exchangeRates.json');

async function getExchangeRate(currencyCode) {
  try {
    if (exchangeRates.rates.hasOwnProperty(currencyCode)) {
      const exchangeRate = exchangeRates.rates[currencyCode];
      return exchangeRate.toFixed(4);
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

getExchangeRate('USD')
  .then((rate) => {
    console.log(rate); // Output: 1.0972
  })
  .catch((error) => {
    console.error(error);
  });
