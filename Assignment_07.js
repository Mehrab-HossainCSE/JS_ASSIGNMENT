 function square(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        let tem=arr[i]*arr[i];
        sum+=tem;
    }
    return sum;
 }
function isEven(arr){
    let cnt=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0) cnt++;
    }
    return cnt;
}
function maxArray(arr){
    let mx=Number.MIN_VALUE;
   
    for(let i=0;i<arr.length;i++){
        if(mx<arr[i]) mx=arr[i];
        
    }
    return mx;
}

function calculate(num,calback){
    return calback(num);
}
function customOperation(arr,calback){
   if(!Array.isArray(arr)) return null;
   const result=[];
   for(let i=0;i<arr.length;i++){
    result.push(calback(arr[i]));
   }
   return result;
}

const numbers=[1,2,3,4,5];
console.log("Sum of Squares:", calculate(numbers, square)); // Output: 55
console.log("Count Even Numbers:", calculate(numbers, isEven)); // Output: 2
console.log("Find Maximum:", calculate(numbers, maxArray)); // Output: 5
console.log("Custom Operation (Doubled):", customOperation(numbers, (num) => num * 2)); // [ 2, 4, 6, 8, 10 ]