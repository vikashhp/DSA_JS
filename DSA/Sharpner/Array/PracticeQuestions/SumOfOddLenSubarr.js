// Sum of All Odd Length Subarrays

// Input: arr = [1,4,2,5,3]
// Output: 58

let ans=0
for(let i=0;i<arr.length;i++){
    for(let j=i;j<arr.length;j++){
        if((j-i+1)%2!=0){
            let sum=0;
            for(let index=i;index<j+1;index++){
                sum+=arr[index]
            }
            ans+=sum
        }
    }
}
console.log(ans)