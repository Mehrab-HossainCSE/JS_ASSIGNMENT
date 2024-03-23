function sortNumsAscending(arr){
    if(!Array.isArray(arr) || arr.length==0) return [];
    for(let i=0;i<arr.length;i++){
        if((typeof(arr[i]))!=='number') return [];
    }
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(sortNumsAscending()); // []
console.log(sortNumsAscending(["hello", 2, 3])); // []
console.log(sortNumsAscending([1, "2", 3])); // []
console.log(sortNumsAscending([45, 34, 23, 12, 7])); // [1, 2, 3]