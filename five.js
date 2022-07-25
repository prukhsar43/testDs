function stringPresent(str, str2) {

    for (let i = 0; i < str2.length; i++) {
  
  
      if (!str.includes(str2[i])) {
        return  str2[i]
      }
  
      }
  
 
  
  }
  
  console.log(stringPresent('abcd', 'abcde'))
 
