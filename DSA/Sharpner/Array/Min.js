

// Find the min in this array
let arr=[5, 4, 7, 2, 6]

let min=Infinity;
for(let i=0;i<arr.length;i++){
    if(arr[i]<min){
        min=arr[i]
    }
}

console.log(min)