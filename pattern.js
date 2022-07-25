function pattern(num) {
    let newNm = ''
    for (let i = 1; i <= num; i++) {
  
      for (let j = i; j > 1; j--) {
        newNm += j
  
      }
  
      for (let j = 1; j <= i; j++) {
        newNm += j
      }
  
     console.log(newNm)
    }
  
  }
  
  pattern(4)
  