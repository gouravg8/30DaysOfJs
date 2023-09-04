// Functions
// --------> full name
// let fname = prompt("enter first name")
// let lname = prompt("enter last name")
// function fullName(fname, lname) {
//     return fname + " " + lname
// }
// console.log(fullName(fname, lname));

// --------> weight according to palnets
// function weight(mass, gravity = 9.8) {
//   return mass * gravity + "N";
// }
// console.log(weight(61)); //weight at earth
// console.log(weight(65, 1.23)); // weight at moon

// --------> solving linear equation
// function solLinEqu(a, b, c) {    //nhi ho paya
//     let eq = a + 'x+' + b + 'y+' + c
//     return eq;
// }
// console.log(solLinEqu(4,3,0));

// --------> solve quard eq
// function quardEqu(a, b, c) {
//   let d = b ** 2 - 4 * a * c;
//   let pos, neg, out;
//   if (d > 0) {
//     pos = findPos(a, b, d);
//     neg = findNeg(a, b, d);
//     out = pos + ", " + neg;
//   } else if (d == 0) {
//     pos = findPos(b, d);
//     out = pos;
//   } else {
//     out = "Because \'d < 0\' so roots are imaginary";
//   }
//   console.log(d);
//   return out;
// }
// function findPos(a, b, d) {
//   return (-b + Math.sqrt(d)) / (2 * a);
// }
// function findNeg(a, b, d) {
//   return (-b - Math.sqrt(d)) / (2 * a);
// }
// console.log(quardEqu(1, -4, 6.25));

// --------> printArray
// function printArr() {
//     for (const i of arguments[0]) {
//         console.log(i);
//     }
// }
// let arr = [1,2,3,4,5,6]
// printArr(arr)

// --------> showDateTime i.e. 08/01/2023 04:08 ,, dd/mm/yyyy hh:mm
// function showDateTime() {
//   let d = new Date();
//   let day = String(d.getDay() + 1).padStart(2, "0");
//   let month = String(d.getMonth() + 1).padStart(2, "0");
//   let year = String(d.getFullYear() + 1).padStart(2, "0");
//   let hour = String((d.getHours()) % 12 || 12).padStart(2, "0");
//   let minute = String(d.getMinutes()).padStart(2, "0");
//   let local = d.toLocaleString([], {hour12: true})

//   console.log(`${day}/${month}/${year} ${hour}:${minute}`);
//   console.log(local);
// }

// -------->reverse the elements of the array
// let arr = [1, 2, 3, 4, 5, 6];
// let rev = (args) => {
//   let i = 0;
//   let j = args.length - 1;
//   while (i < j) {
//     let temp = args[i];
//     args[i] = args[j];
//     args[j] = temp;
//     i++;
//     j--;
// }
// };
// console.log(rev(arr));
// rev(arr);
// console.log(arr);

// -------->add items in arr
// let arr = [];
// const addItem = (item) => {
//   arr.push(item);
//   return arr;
// };
// addItem("suar");
// addItem("gaurab");
// addItem("bhilai");
// console.log(arr);

// -------->remove items
// let arr = ["suar", "gaurav", "bhilai"];
// let removeItem = (index) => {
//   arr.splice(index, 1)
//   return arr;
// };

// console.log(removeItem(1));

// -------->sum of nums taken as params
// let allSum = 0;
// let sum = (params) => {
//   for (let i = 0; i < params.length; i++) {
//     allSum += params[i]
//   }
//   return allSum;
// };
// sum([1, 2, 3, 4, 5, 6,7,8,9,10]);
// console.log(allSum);

// -------->even and oddd numbers
// let n = 100;
// let oddEven = (n) => {
//   let odds = evens = 0;
//   for (let i = 0; i <= n; i++) {
//     ((i & 1) != 1) ? evens++ : odds++;
//   }
//   console.log("odds: " + odds + ", evens : " + evens);
// };
// oddEven(n);

// -------->random user ip
// let ip = 0;
// let ipId = () => {
//   let one = two = three = four = 0
//   one = Math.floor(Math.random() * 255)
//   two = Math.floor(Math.random() * 255)
//   three = Math.floor(Math.random() * 255)
//   four = Math.floor(Math.random() * 255)
//   console.log(`Ip address: ${one}:${two}:${three}:${four}`);
// };
// ipId()

// -------->random mac address
// let macAddress = () => {
//   let o = (t = th = f = 0);
//   let range = 100;
//   o = Math.floor(Math.random() * range)
//     .toString(16)
//     .padStart(2, "0");
//   t = Math.floor(Math.random() * range)
//     .toString(16)
//     .padStart(2, "0");
//   th = Math.floor(Math.random() * range)
//     .toString(16)
//     .padStart(2, "0");
//   f = Math.floor(Math.random() * range)
//     .toString(16)
//     .padStart(2, "0");
//   fi = Math.floor(Math.random() * range)
//     .toString(16)
//     .padStart(2, "0");
//   si = Math.floor(Math.random() * range)
//     .toString(16)
//     .padStart(2, "0");

//   console.log(`Mac address: ${o}:${t}:${th}:${f}:${fi}:${si}`);
// };
// macAddress();

// -------->no of user id generate
// let noOfUserIds = prompt("enter no of user id creating: ");
// let len = prompt("enter no of char must be in the id")
// let arrOfIds = [];
// let id = (noOfUserIds, len) => {
//   let id = "";
//   let range = "1234567890abcdefghijklmnopqrstuvwxyz";
//   for (let i = 0; i < noOfUserIds; i++) {
//     for (let j = 0; j < len; j++) {
//       id += range.charAt(Math.floor(Math.random() * range.length));
//     }
//     arrOfIds.push(id);
//     id = ''
//   }
//   return arrOfIds;
// };
// id(noOfUserIds, len);
// console.log(arrOfIds);

// -------->hex to rgb
// let n = '0033ff'
// n = parseInt(n, 16)
// console.log(n);

// let hexToRgb = (hex) =>{
//   let removeHash = hex.split('#')
//   let r = parseInt(removeHash[1].substring(0, 2), 16)
//   let g = parseInt(removeHash[1].substring(2, 4), 16)
//   let b = parseInt(removeHash[1].substring(4), 16)
//   console.log(`HEX: ${hex}`);
//   console.log(`RGB: rgb(${r}, ${g}, ${b})`);
// }
// hexToRgb('#800000')

// -------->suffel array
// let arr = [1,2,3,4,5,6]
// let suffle = (arr) =>{
//   for (let i = 0; i < arr.length; i++) {
//    let random = Math.floor(Math.random() * arr.length)
//    let temp = arr[i]
//    arr[i] = arr[random]
//    arr[random] = temp
//   }
// }

// suffle(arr)
// console.log(arr);

// -------->factorial
// let n = 3;
// let fact = 1;
// let facto = (n) => {
//   if (n == 1) {
//     return fact;
//   } else {
//     fact *= n;
//     return facto(n - 1);
//   }
// };
// console.log(facto(n));

// -------->sumOfArrayItems with valid reason
// let arr = [1, 2, 3, 4, "suar", 5, 6, 7, 8, 9, 10];
// let sumOfArrayItems = (arr) => {
//   let sum = 0;
//   for (const i of arr) {
//     typeof i != "number" ? console.log(i, "is not valid number") : (sum += i);
//   }
//   console.log(sum);
// };
// sumOfArrayItems(arr);

// -------->check uniqueOrNot
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10];
let uniq = (arr) => arr.length === new Set(arr).size;

// return hai ? console.log("hai") : console.log("nhi");
console.log(uniq(arr));
