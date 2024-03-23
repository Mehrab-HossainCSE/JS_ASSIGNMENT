function findSmallest(arr){
    
    let mn=Number.MAX_VALUE;
   
    for(let i=0;i<arr.length;i++){
        if(mn>arr[i]) mn=arr[i];
        
    }
    return mn;
}
console.log(findSmallest([30, 45, 60, 7]));//7