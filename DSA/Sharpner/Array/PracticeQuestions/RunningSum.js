

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]

let nums=[1,2,3,4];


let arr=[];

for(let i=0;i<nums.length;i++){
    let sum=0
    for(let j=0;j<=i;j++){
        sum+=nums[j]
    }
    arr.push(sum)
}

console.log(arr)