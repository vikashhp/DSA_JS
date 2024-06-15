
//Min Increment to make array uniquue

let arr = [1, 2, 2];

arr.sort();
let count = 0;
for (let i = 1; i < arr.length; i++) {
  if (arr[i] <= arr[i - 1]) {
    let val = arr[i - 1] - arr[i] + 1;
    count += val;
    arr[i] = arr[i - 1] + 1;
  }
}

console.log(count);
