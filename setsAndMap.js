import countryData from "./country_data.cjs";
// let st = new Set()  //empty set

// for (let i = 0; i <= 10; i++) { //add 0 to 10 in set by looping
//     st.add(i)
// }

// // remove a elem from set
// st.delete(6)
// // clear set
// st.clear()

// create a set of 5 string elements from array
// let arr = ['sale', 'suar', 'kutte', 'kamine', 'halua']
// let st = new Set(arr)
// console.log(st);

// Create a map of countries and number of characters of a country
// let counts = new Map();
// let countries = ["india", "pakistan", "nepal", "china", "bhutan", "shri lanka"];
// for (const country of countries) {
//   counts.set(country, country.length);
// }
// console.log(counts);

// Exercises:Level 2
// let a = [1, 2, 3, 4, 5];
// let b = [3, 4, 5, 6, 7];
// // Find a union b
// let union = [...a, ...b]
// let setUnion = new Set(union)
// console.log('union:',setUnion);
// // Find a intersection b
// let aAsSet = new Set(a), bAsSet = new Set(b);
// let intersecetion = a.filter(num => bAsSet.has(num))
// console.log('intersection:',intersecetion);
// // Find a with b
// let aWithB = a.filter(num=> !bAsSet.has(num))
// console.log('a with b:',aWithB);

// Exercise: lvl3
// let cd = countryData;
// // 1. count no of langs
// console.log("No of languages are:", noOfLangs(cd));
// function noOfLangs(countries) {
//   let allLangs = [];
//   countries.forEach((country) => {
//     country.languages.forEach((bhasa) => allLangs.push(bhasa));
//   });
//   return new Set(allLangs).size;
// }

// // 2. 10 most spoken langs
// console.log(mostSpokenLanguage(cd, 10));

// function mostSpokenLanguage(countries, nol) {
//   let allLangs = [];
//   let langOBj = [];
//   countries.forEach((country) => {
//     country.languages.forEach((bhasa) => allLangs.push(bhasa));
//   });

//   let setOfLang = new Set(allLangs);
//   setOfLang.forEach((ln) => {
//     let len = allLangs.filter((ll) => ll == ln).length;
//     langOBj.push({ language: ln, count: len });
//   });
//   let sortLang = langOBj.sort((a, b) => b.count - a.count);
//   return sortLang.slice(0, nol);
// }
