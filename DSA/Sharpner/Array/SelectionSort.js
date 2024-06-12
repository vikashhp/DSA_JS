

let arr=[7,8,9,6,54,4,3,2,1];

  
for(let j=0;j<arr.length-1;j++){
    let max=arr[j];
    let index=j;
    for(let i=j+1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
            index=i;
        }
    }
    let temp=arr[j];
    arr[j]=arr[index];
    arr[index]=temp;
}

for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}