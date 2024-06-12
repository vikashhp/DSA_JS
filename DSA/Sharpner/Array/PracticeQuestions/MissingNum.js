

let arr=[3,4,1];
//outPut-2;

let n=arr.length+1;
     
let sum=0;
for(let i=0;i<n-1;i++){
    sum+=arr[i]
}
let res=(n*(n+1)/2);
let result=res-sum
console.log(result)





