// Level 1
//1. Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
let text =
  "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";
let pattern = /\d+/g;
let result = text.match(pattern);
let sum = result.reduce((acc, curr) => +acc + +curr);
console.log("Income:", sum);

//2. The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
let points = ["-1", "2", "-4", "-3", "-1", "0", "4", "8"];
let neg = points.filter((e) => e.match(/-\d+/g)).sort((a, b) => a - b);
let pos = points.filter((e) => e.match(/^[1-9]+/g));
let zero = points.filter((e) => e.match(0));
console.log(neg, zero, pos);
// sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
let distance = pos[pos.length - 1] - neg[0];
console.log(distance);
// distance = 12

let pt = [...points];
pt.sort((a, b) => a - b);
let d = pt[pt.length - 1] - pt[0];
console.log(d);

// Write a pattern which identify if a string is a valid JavaScript variable
let is_valid_variable = (attr) => {
  let pattern = /^[a-zA-Z_$][a-zA-Z0-9_&]*$/g;
  let result = attr.match(pattern) ? true : false;
  console.log(result);
};

is_valid_variable("first_name"); // True
is_valid_variable("first-name"); // False
is_valid_variable("1first_name"); // False
is_valid_variable("firstname"); // True

// Level 2
// Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

let tenMostFrequentWords = (paragraph, num) => {
  let pattern = /\w+/g;
  let result = paragraph.match(pattern);
  let out = [];
  result.forEach((elem) => {
    if (out[elem]) {
      out[elem]++;
    } else {
      out[elem] = 1;
    }
  });
  let entrys = Object.entries(out);
  //   out = vals.sort((a, b) => b - a);
  let sortOut = entrys.sort((a, b) => b[1] - a[1]);
  return Array.from(sortOut).slice(0, num);
};

console.log(tenMostFrequentWords(paragraph, 10));
