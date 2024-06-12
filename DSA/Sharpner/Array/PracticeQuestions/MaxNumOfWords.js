let sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];

let max=-Infinity;
for(let i=0;i<sentences.length;i++){
    let count=0;
    let ans=1;
    for(let j=0;j<sentences[i].length;j++){
        if(sentences[i][j]==" "){
            count++
        }
    }
    ans+=count;
    if(ans>max){
        max=ans
    }
}

console.log(max)