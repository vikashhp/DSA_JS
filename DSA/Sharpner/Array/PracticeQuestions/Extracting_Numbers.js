let s = "abc334v44d";

let str = "";
let ans = [];

let counter = 0;

for (let i = 0; i < s.length; i++) {
  if (
    s.charCodeAt(i) == 48 ||
    s.charCodeAt(i) == 49 ||
    s.charCodeAt(i) == 50 ||
    s.charCodeAt(i) == 51 ||
    s.charCodeAt(i) == 52 ||
    s.charCodeAt(i) == 53 ||
    s.charCodeAt(i) == 54 ||
    s.charCodeAt(i) == 55 ||
    s.charCodeAt(i) == 56 ||
    s.charCodeAt(i) == 57
  ) {
    str += s[i];
    counter++;
  } else {
    counter = 0;
    if (counter == 0 && str.length > 0) {
      ans.push(str);
      str = "";
    }
  }
}

if (str.length > 0) {
  ans.push(str);
}

console.log(ans);
