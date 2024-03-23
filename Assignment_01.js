function minMaxLengthAverage(arr){
    const newArray=[];
    let mn=Number.MAX_VALUE;
    let mx=Number.MIN_VALUE;
    let cnt=0;
    let average=0;
    for(let i=0;i<arr.length;i++){
        if(mn>arr[i]) mn=arr[i];
        if(mx<arr[i]) mx=arr[i];
        cnt++;
       average+=arr[i];
    }
    average/=cnt;
    newArray.push(mn);
    newArray.push(mx);
    newArray.push(cnt);
    newArray.push(average);
    return newArray;
}
console.log(minMaxLengthAverage([7, 13, 3, 77, 100]));//[ 3, 100, 5, 40 ]