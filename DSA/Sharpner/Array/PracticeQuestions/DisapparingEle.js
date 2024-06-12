//Disappering Element
let arr=[4,3,2,7,8,2,3,1];

let res=[];
let min=Infinity;
 for(let i=0;i<arr.length;i++){
    if(arr[i]<min){
        min=arr[i]
    }
 }

 let max=arr.length;

 for(let i=min;i<=max;i++){
    if(arr.indexOf(i)<0){
        res.push(i)
    }
  
 }

 console.log(res)


