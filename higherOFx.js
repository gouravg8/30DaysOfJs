import data from "./data.cjs";
import countryData from "./country_data.cjs";
const countriess = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
const names = ["Asaveeh", "Mathias", "Elias", "Brook"];
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "patato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// use forEach
// countries.forEach(el => console.log(el))
// names.forEach(el => console.log(el))
// nums.forEach(el => console.log(el))
// products.forEach(el => console.log(el))

// use map
// countries.map((el) => console.log(el.toUpperCase()));
// let countLen = countries.map((el) => el.length);
// console.log(countLen);
// let sqrs = nums.map((el) => el * el);
// console.log(sqrs);
// let upperName = names.map(nam => nam.toUpperCase())
// console.log(upperName);
// products.map(el => console.log(el.price))

// use filter
// let filtContry = countries.filter((country) => country.includes("land"));
// console.log(filtContry);
// let sixCharCountry = countries.filter((country) => country.length === 6);
// console.log(sixCharCountry);
// let sixOrMoreLenContry = countries.filter((country) => country.length >= 6);
// console.log(sixOrMoreLenContry);
// let startWithEContry = countries.filter((country) => country.startsWith("E"));
// console.log(startWithEContry);
// let validPriceVal = products.filter((val) => typeof val.price !== "string");
// let priceOfProd = products
//   .filter((val) => typeof val.price !== "string")
//   .map((e) => e.price);
// console.log(priceOfProd);
// let getStringLists = products
//   .filter((e) => typeof e.price === "string")
//   .map((e) => e.price);
// console.log(getStringLists);
// 17

// summ of nums using redure()
// let summ = nums.reduce((n, curr) => n + curr, 0)
// console.log(summ);

// 18 use reduce => make 'Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries'
// let europe = countries.reduce((acc, curr) => acc + ", " + curr, );
// console.log(europe, 'are north European countries');

// diff betwn some, every
// let n = products.every((e) => typeof e.price === "string");
// let n = products.some((e) => typeof e.price === "string");
// console.log(n);

// check len(name> 7) (some)
// let gt7 = names.some(e=> e.length > 7)
// console.log(gt7);

// all countries contain word 'land' (every)
// let land = countries.every((e) => e.includes("land"));
// console.log(land);

// find len(country) == 6 (find)
// let len6 = countries.find((e) => e.length === 6);
// let firstLen6 = countries.findIndex((e) => e.length === 6);
// console.log(firstLen6);

// findIndex of norway
// let norway = countries.findIndex((e) => e === "Norway");
// let russia = countries.findIndex((e) => e === "Russia");
// console.log(russia);

//LVL2
// total price of product by chaining the HoFx
// let sumPrice = products
//   .filter((e) => typeof e.price !== "string")
//   .reduce((acc, curr) => acc + curr.price, 0);
// console.log(sumPrice);

// let categorizeCountries = () => {
//   let land = data.filter((e) => e.includes("land"));
//   let ia = data.filter((e) => e.includes("ia"));
//   let island = data.filter((e) => e.includes("island"));
//   let stan = data.filter((e) => e.includes("stan"));
//   console.log('land', land);
//   console.log('ia', ia);
//   console.log('island', island);
//   console.log('stan', stan);
// };

// categorizeCountries();
// let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let countriesStartWithLetter,
//   count,
//   arr = [];
// let letterAndNoOfUse = (letters) => {
//   for (const letter of letters) {
//     countriesStartWithLetter = data.filter((country) =>
//       country.startsWith(letter)
//     );
//     arr.push({
//       letter,
//       country: countriesStartWithLetter,
//       count: countriesStartWithLetter.length,
//     });
//   }
//   return countriesStartWithLetter;
// };
// letterAndNoOfUse(letters);
// for (const it of arr) {
//   console.log(it);
// }

// getFirstTenCountries
// let getFirstTenCountries = () => {
//   let ten = data.filter((val, index) => index < 10);
//   let ten = data.slice(0, 10);
//   return ten;
// };
// console.log(getFirstTenCountries());

// getLastTenCountries
// let getLastTenCountries = () => {
// let ten = data.filter((val, index) => index > data.length - 10);
//   let ten = data.slice(-10);
//   return ten;
// };
// console.log(getLastTenCountries());

// max used letter incountries
// let arrOfCountries = [],
//   arrOfLetter = [],
//   count;
// let maxUsedLetter = () => {
//   let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   let ans;
//   for (const letter of letters) {
//     ans = data.filter((val, index) => val.startsWith(letter));
//     count = ans.length;
//     // arrOfCountries.push(count);
//     arrOfLetter.push({ letter: letter, count: count });
//   }
//   return arrOfLetter;
// };
// console.log(maxUsedLetter());
// let ans = maxUsedLetter().map(e=> e.count)
// let nans = Math.max(...ans)
// ans = ans.findIndex(num => num== nans)
// console.log('letter is:', arrOfLetter[ans].letter, 'times:', arrOfLetter[ans].count);

// Sort countries by name, by capital, by population
// let populationSort = [];
// let byPopulation = (countryData) => {
//   let sortByPopulation = countryData
//     .sort((a, b) => b.population - a.population)
//     .map((e) => e.population);
//   return sortByPopulation;
// };
// let byName = (countryData) => {
//   let sortByName = countryData
//     .sort((x, y) => {
//       if (x.name > y.name) {
//         return 1;
//       }
//       if (x.name < y.name) {
//         return -1;
//       }
//       return 0;
//     })
//     .map((e) => e.name);
//   return sortByName;
// };
// let byCapitalName = (countryData) => {
//   let sortByCapitalName = countryData
//     .sort((x, y) => {
//       if (x.capital > y.capital) {
//         return 1;
//       }
//       if (x.capital < y.capital) {
//         return -1;
//       }
//       return 0;
//     })
//     .map((e) => e.capital);
//   return sortByCapitalName;
// };

// console.log(byPopulation(countryData));
// console.log(byName(countryData));
// console.log(byCapitalName(countryData));

// find most spoken langs
// let languageCount = {};
// countryData.forEach((country) => {
//   country.languages.forEach((language) => {
//     if (languageCount[language]) {
//       languageCount[language]++;
//     } else {
//       languageCount[language] = 1;
//     }
//   });
// });

// const mostSpokenLang = Object.keys(languageCount).reduce(
//   (mostSpoken, language) => {
//     if (!mostSpoken || languageCount[language] > languageCount[mostSpoken]) {
//       return language;
//     } else {
//       return mostSpoken;
//     }
//   },
//   ""
// );
// console.log(
//   "Most spoken lang is:",
//   mostSpokenLang,
//   "Which is spoken in",
//   languageCount[mostSpokenLang],
//   "countries"
// );
// console.log(countryData[0].languages);
// let a = "ujh"
// console.log(!a);

//most populated country
// let mostPopCon = "";
// let maxPop = 0;
// let popl = countryData.forEach((country) => {
//   country.population > maxPop &&
//     ((mostPopCon = country.name), (maxPop = country.population));
// });
// // popl;
// // console.log(popl);
// console.log(mostPopCon, maxPop);

// 10 most popul contries
// let countries = (countriesData, limit) =>
//   countriesData
//     .sort((a, b) => {
//       return b.population - a.population;
//     })
//     .slice(0, limit);

// let countrie = countries(countryData, 10);
// console.log('10 most populated countries in the world');
// for (const country in countrie) {
//   console.log(
//     "Name:",
//     countrie[country].name,
//     "Population:",
//     countrie[country].population
//   );
// }

// Do statistics
const ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];
// console.log(2 & 1 ? false : true);
// console.log(ages.sort());
let statistics = {
  count: function () {
    return ages.length;
  },
  sum: function () {
    return ages.reduce((acc, curr) => acc + curr, 0);
  },
  min: function () {
    return ages.reduce((acc, curr) => (acc > curr ? curr : acc));
  },
  max: function () {
    return ages.reduce((acc, curr) => (acc < curr ? curr : acc));
  },
  range: function () {
    return Math.max(...ages) - Math.min(...ages);
  },
  mean: function () {
    return Math.ceil(this.sum() / this.count());
  },
  median: function () {
    let sortt = ages.sort();
    let nby2 = (this.count() - 1) / 2;
    let even = (count) => (count & 1 ? false : true);
    return even(this.count() - 1)
      ? sortt[nby2]
      : sortt[(nby2 + (nby2 + 1)) / 2];
  },
  mode: function () {
    let count = 0;
    let n = {};
    ages.forEach((el) => {
      if (n[el]) {
        n[el]++;
      } else {
        n[el] = 1;
      }
    });

    const mostOcc = Object.keys(n).reduce((maxx, currN) => {
      if (!maxx || n[currN] > n[maxx]) {
        return currN;
      } else {
        return maxx;
      }
    }, 0);
    return { most: +mostOcc, count: n[mostOcc] };
  },
  var: function () {
    let mean = this.mean();
    let sqDiffs = ages
      .map((val) => Math.pow(Math.abs(val - mean), 2))
      .reduce((acc, curr) => acc + curr);
    let varian = sqDiffs / this.count();
    return varian;
  },
  std: function () {
    return +Math.sqrt(this.var()).toFixed(1);
  },
  freqDist: function () {
    let fDist = {};
    ages.forEach((val) => {
      if (fDist[val]) {
        fDist[val] += Math.round(this.std());
      } else {
        fDist[val] = Math.round(this.std());
      }
    });

    return fDist;
  },
};
console.log("Count:", statistics.count()); // 25
console.log("Sum:", statistics.sum()); // 744
console.log("Min:", statistics.min()); // 24
console.log("Max:", statistics.max()); // 38
console.log("Range:", statistics.range()); // 14
console.log("Mean:", statistics.mean()); // 30
console.log("Median:", statistics.median()); // 29
console.log("Mode:", statistics.mode()); // {'mode': 26, 'count': 5}
console.log("Variance:", statistics.var()); // 17.5
console.log("Standard Deviation:", statistics.std()); // 4.2
console.log("Frequency Distribution: ", statistics.freqDist()); // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
