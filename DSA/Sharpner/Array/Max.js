
// Find the max in this array
let arr=[5, 4, 7, 2, 6]

let max=-Infinity;
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i]
    }
}

console.log(max)