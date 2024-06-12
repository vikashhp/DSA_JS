

// let arr=[1,2,3];

// arr.shift();[2,3]


let nums = [1,2,3,4,5,6,7];
let k = 3;

for(let i=0;i<k;i++){
    nums.unshift(nums.pop());
}

console.log(nums)


