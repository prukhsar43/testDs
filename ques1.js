function assignOne(arr){
    let newArr=[]
  for(let i=0;i<arr.length;i++){
   
   if(arr[i]>arr[i+1]){
   
        
      newArr.push(arr[i])
   }
      
        
  }
 
   console.log(newArr)
 }
 
 assignOne([13,17,5,4,6])