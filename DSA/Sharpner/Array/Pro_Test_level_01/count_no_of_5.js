// Given a (m x n) 2d array count the number of 5's in it.


let arr= [[1,2,5],[3,5,5,5],[5,1],[6,7,5,4] ];

let total=0
for(let i=0;i<arr.length;i++){
    let count=0
    for(let j=0;j<arr[i].length;j++){
        if(arr[i][j]==5){
            count++
        }
    }
    total+=count
}

console.log(total)