let nums = [2,5,1,3,4,7];
let n = 3;
// Output: [2,3,5,4,1,7] 

let arr=[]
for(let i=0;i<n;i++){
  arr.push(nums[i])
  arr.push(nums[i+n])
}

console.log(arr)