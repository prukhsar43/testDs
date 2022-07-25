function diagonalAdd(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
  
        if (i == 0 || j == 0 || i == arr.length - 1 || j == arr.length - 1) {
  
          sum += arr[i][j]
        }
  
        if (i !== 0 && j !== 0 && i !== arr.length - 1 && j !== arr.length - 1) {
          sum += arr[i][j]
        }
      }
  
    }
    console.log(sum)
  }
  
  diagonalAdd([[1, 2, 3], [1, 2, 3], [1, 2, 3]])
  
  
  
  