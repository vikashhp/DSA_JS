

let arr=[7,8,9,6,5,4,3,2,1];

for(let i=1;i<arr.length;i++){
    let min=arr[i];
    let j=i-1;
    while(j>=0 && arr[j]>min){
        let temp=arr[j+1];
        arr[j+1]=arr[j];
        arr[j]=temp;
        j=j-1
    }
    arr[j+1]=min

}

console.log(arr)