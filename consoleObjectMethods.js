import countriesData from "./country_data.cjs";
// console.log('30 Days of Javascript');
// console.log('%d %s of Javascript', 30, 'Days');
// console.log(countriesData);
// css
// console.log('%c30 Days%c %cof%c %cJavascript', 'color:green', '', 'color:red', '', 'color:yellow');

// console.log(countriesData);

// Exercises:Level 1
// Display the countries array as a table
// console.table(countriesData)

// Display the countries object as a table
// countriesData.forEach(country =>{
//     console.table(country)
// })

// Use console.group() to group logs
// countriesData.forEach(country =>{
//     console.group('country:', country.name)
//     console.table(country)
//     console.groupEnd('country')
// })

// Exercises:Level 2
// 10 > 2 * 10 use console.assert()
// console.assert(10 > 2 * 10);

// Write a warning message using console.warn()
// console.warn(
//   "This is warning, Please sudhar jao, This is first and Last Warning from our side"
// );

// Write an error message using console.error()
// console.error(
//   "Ohh f**k you are f**ked up because you were playing game from last 10 hours and did'nt work"
// );

// Exercises:Level 3
// Check the speed difference among the following loops: while, for, for of, forEach
let k = Object.entries(countriesData);
console.time("this is for loop");
for (let i = 0; i < countriesData.length; i++) {
  //   console.log(k[i]);
}
console.timeEnd("this is for loop"); //456.463ms

console.time("this is for each");
countriesData.forEach((coutry) => {
  // console.log(coutry);
});
console.timeEnd("this is for each"); //323.652ms

console.time("this is for of");
for (const it of countriesData) {
  //   console.log(it);
}
console.timeEnd("this is for of"); //373.485ms

console.time("this is while loop");
let i = 0;
while (i < countriesData.length) {
//   console.log(k[i]);
  i++;
}
console.timeEnd("this is while loop"); //432.69ms
