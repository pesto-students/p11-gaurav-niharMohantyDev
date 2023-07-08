function drawTriangle(triangleSize) {
    for (let i = 1; i <= triangleSize; i++) {
      let row = '';
  
      for (let j = 1; j <= i; j++) {
        row += '*';
      }
  
      console.log(row);
    }
  }
  

  drawTriangle(4);
  