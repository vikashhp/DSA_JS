let arr=[1, -1, 3, 2, -7, -5, 11, 6];


let l=0;
let r=arr.length-1;
let swap=false;
while(l<=r){
    if(arr[l]<0 && arr[r]>0){
        let temp=arr[r];
        arr[r]=arr[l];
        arr[l]=temp;
        swap=true;
    }
    l++
    r--
}

if(swap==false){
    console.log(false)
}else{
    console.log(true)
}