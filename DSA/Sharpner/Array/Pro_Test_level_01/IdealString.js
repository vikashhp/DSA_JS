// Given a String, Check whether it is an ideal string or not. Return True if it is Ideal else Return False.
// Note - Ideal String is a String in which no two contiguous characters are equal
// Example 1:
// Input: s = "aba"
// Output: True
// Example 2:
// Input: s = "aaab"
// Output: "False"

let s='aba';

for(let i=0;i<s.length;i++){
   for(let j=i+1;j<s.length;j++){
      if(s[i]==s[j]){
        console.log(false);
        break
      }else{
        console.log(true);
        break
      }
   }
}