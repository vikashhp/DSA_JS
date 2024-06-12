// A Bad Number is defined by a number which is divisible by sum of its digit.

// Example1 :- 12 -> Sum of digit (1+2) = 3. 12 is divisible by 3 therefore its a bad number

// Example2 :- 45 -> Sum of digit (4+5) = 9. 45 is divisible by 9 therefore its a bad number

// 11 is not a Bad (1+1 ) =2 Since 11 is not divisible by 2.

// Write a program to store first n Bad Numbers in an array . After storing return the array.﻿
// Note :- 0-9 are not Bad Numbers so you can start counting from 10.
// Input:-
// n=5
// Output:- Return the output in the form of an array.
// 10
// 12
// 18
// 20
// 21

let arr=[];
let i=10;
let n=5;

while(arr.length<n){
    let digit=i%10;
    let sum=digit;
    let temp=i;
    while(temp>0){
        temp=Math.floor(temp/10);
        sum+=temp%10;

    }
    if(i%sum==0){
        arr.push(i)
    }
    i++
}
console.log(arr)