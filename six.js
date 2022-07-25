function assignSix(arr){
    let newArr=[],newArr2=[]
    let val=arr[0]
   for(let i=0;i<arr.length-1;i++){
   
     if(arr[i].length==val.length){
     
        newArr.push(arr[i])
          
     }
   }
  
  for(let i=0;i<newArr.length-1;i++){
  
      if(newArr[i]!==newArr[i+1]){
          newArr2.push(newArr[i],newArr[i+1])
         console.log(newArr[i].length*newArr[i+1].length) 
      }
      
      console.log(newArr2)
  }
    
  }
  
  assignSix(["abcw","baz","foo","bar","xtfn","abcdef"]
)