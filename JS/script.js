// let arr = ["india", "google", "nepal", "shri lanka", "facebook"];
// let arr2 = ["jindia", "jpak", "jnepal", "jshri lanka"];
// arr.sort();
// arr.reverse();
// arr2 = arr
// console.log(arr.join('*'));
// console.log(arr.toString());
// arr.push("usa");
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
// if(arr[i].includes('oo')){
//     console.log(i, arr[i]);
// }
// arr[i].includes('oo') && console.log(arr[i])

// }

// loops
// --------->check even or not
// let n = prompt("enter number to get odd even")
// isEven(n) ? console.log(n, 'is even') : console.log(n, 'is not even');
// function isEven(n) {
//     return ((n&1) != 1)
// }
// --------->check even or not in short
// let n = prompt("enter number to get odd even");
// ((n&1) !=1) ? console.log('even') : console.log('odd');

// --------->prime or not
// let n = prompt("enter number to get prime or not");

// for (let i = 2; i < n / 2; i++) {
//     n % i === 0 && console.log("nhi hai");
//     break;
// }
// ---------> sum of all num
// let n = prompt("enter number to get sum");
// let sum = 0;
// for (let i = 0; i <= n; i++) {
//     sum += i
// }
// console.log(sum);

// --------->sum of even and odd
// let range = 10;
// let sumOfEven = 0,
//   sumOfOdd = 0;
// for (let i = 0; i <= range; i++) {
//   if ((i & 1) != 1) {
//     sumOfEven += i;
//     console.log("even", i);
//   } else {
//     sumOfOdd += i;
//     console.log("odd", i);
//   }
// }
// console.log("sum of odd", sumOfOdd);
// console.log("sum of evens", sumOfEven);
// // let asArr = ["sum of odd: " + sumOfOdd, "sum of even: " + sumOfEven];
// let asArr = [sumOfOdd, sumOfEven];
// console.log(asArr);

// ---------> arr of fixed len haing random same integets
// let rand = +(Math.random() * 10).toFixed(2);
// let arr = Array(5).fill(rand);
// console.log(arr);

// ---------> arr of fixed len haing random diff integetsF
// let arr = Array(5);
// for (let i = 0; i < arr.length; i++) {
//     let rand = +(Math.random() * 10 + 1).toFixed(2);
//     arr[i] = rand
// }
// console.log(arr);

// ---------> random letters of len 5
// let str = ''
// let len = 5
// let strFrom = 'abcdefghijklmnopqrstuvwxyz1234567890'
// for (let i = 0; i < len; i++) {
//     str += strFrom.charAt(Math.floor(Math.random() * strFrom.length))
// }
// console.log(str);

// ---------> create hex codes
// let hex = ''
// let range = '1234567890abcde'
// for (let i = 0; i < 6; i++) {
//     hex += range.charAt(Math.floor(Math.random() * range.length))
// }
// console.log(`#${hex}`);

// ---------> perform operations on country data
const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombi",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor (Timor Timur)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia, The",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia and Montenegro",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];
// ---------> ['country name', 'F3Char', country.length]
// let arrOfInfo = [];
// for (let i = 0; i < countries.length; i++) {
//   countries.sort();
//   arrOfInfo[i] = [
//     countries[i],
//     countries[i].substring(0, 3).toUpperCase(),
//     countries[i].length,
//   ];
//   console.log(arrOfInfo[i]);
// }

// let landWale = [];
// let max = -1;
// for (let i = 0; i < countries.length; i++) {
// ---------> includes 'land'
//   countries[i].includes("land") && landWale.push(countries[i])
//   ---------> ends with 'ia
// countries[i].endsWith('ia') && landWale.push(countries[i])
//   ---------> contains only five(5) letters in name
// countries[i].length == 5 && landWale.push(countries[i])
// ---------> country having biggest length from all of them
//   max = countries[i].length > max ? i : max
// }
// console.log(landWale);
// console.log(countries[max]);

// ---------> create MERN from their name's first letter
// const mernName = ["Mongo db", "Express", "React", "Node js"];
// let mern = "";
// for (let i = 0; i < mernName.length; i++) {
//     mern += mernName[i].charAt(0)
// }
// ---------> use 'for of' loop
// for (const i of mernName) {
//     mern += i.charAt(0)
// }
// ---------> usr 'for in' loop
// for (const i in mernName) {
//     mern += mernName[i].charAt(0)
// }

// ---------> return reversed array without using .reverse()
// let i = 0,
//   j = mernName.length-1;
// while (i < j) {
//   let temp = mernName[i];
//   mernName[i] = mernName[j];
//   mernName[j] = temp;
//   i++;
//   j--;
// }
// console.log(mernName);

// ---------> copy array in newArr
// const newArr = [...mernName]
// console.log(newArr);

// ---------> coutries with 2 or more words
// let moreWordyArr = []
// for (const i in countries) {
//     countries[i].includes(' ') && (moreWordyArr.push(countries[i]))
// }
// console.log(moreWordyArr);

// ---------> reverse, capitalize, sorted
// for (const country in countries) {
//   countries[country] = countries[country].toLowerCase();
// }
// countries.reverse();
// for (const country in countries) {
//   countries[country] =
//     countries[country].charAt(0).toUpperCase() +
//     countries[country].substring(1);
// }
// countries.sort();
// for (const country in countries) {
//   console.log(countries[country]);
// }
