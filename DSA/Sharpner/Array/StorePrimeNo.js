
//Find 5 prime number starting from 2
let n=5;

let arr=[];

let x=2;
while(arr.length<n){
    let flag=true;
    for(let i=2;i<x;i++){
        if(x%i==0){
            flag=false;
            break;
        }
    }
    if(flag){
        arr.push(x);
    }
    x++

}
console.log(arr)