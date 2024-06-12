/*
*&&&&*
**&&&**
***&&***
****&****
**********



*/

for(let i=1;i<=5;i++){
    let str="";
  for(let j=10;j<=9+i;j++){
    str+="*"
  }
  for(let j=10;j<=14-i;j++){
    str+=" "
  }
  for(let j=10;j<=9+i;j++){
    str+="*"
  }
  console.log(str)

}