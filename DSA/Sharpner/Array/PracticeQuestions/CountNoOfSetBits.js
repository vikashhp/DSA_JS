
let n = "00000000000000000000000000001011";


// we have to count the no of 1 in 

let count=0;

for(let i=0;i<32;i++){
    if((n>>i)&1==1){
        count++
    }
}

console.log(count)