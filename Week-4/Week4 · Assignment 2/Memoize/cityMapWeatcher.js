const temperatureData = {
    'Gachibowli': 20
  };
  
  const temperatureCache = {};
  
  function getTemperatureForCity(city) {
    if (temperatureCache.hasOwnProperty(city)) {
      return temperatureCache[city];
    } else {
      const temperature = temperatureData[city];
      if (temperature !== undefined) {
        temperatureCache[city] = temperature;
        return temperature;
      } else {
        return null;
      }
    }
  }
  
  const temperature1 = getTemperatureForCity('Gachibowli');
  console.log(temperature1);
  