console.log("Hi");
// promises
// const doPromis = new Promise((res, rej) => {
//   setTimeout(() => {
//     const skills = ["Html", "Css", "Js"];
//     if (skills.length > 0) {
//       res(skills);
//     } else {
//       rej("error occur");
//     }
//   }, 2000);
// });

// doPromis
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => console.error(error));

// async await
// const doPromise = () => {
//   setTimeout(async () => {
//     const skills = ["Html", "Css", "Js"];
//     try {
//       const out = (await skills.length) > 0 ? skills : "error";
//       console.log(out);
//     } catch (error) {
//       console.error(error);
//     }
//   }, 2000);
// };
// doPromise();

// fetch API
const countryUrl = "https://restcountries.com/v2/all";
// fetch(url)
//   .then((res) => res.json())
//   .then((data) => {
// console.log(data);
// data.forEach(country => {
//     console.table(country.name, country.capital, country.languages, country.population, country.area)
// });
//   })
//   .catch((err) => console.log(err));

//   Exercises: Level 1

//     Read the countries API using fetch and print the name of country, capital, languages, population and area.
// const url = "https://restcountries.com/v2/all";
// fetch(url)
//   .then((res) => res.json())
//   .then((data) => {
//     data.forEach(country => {
//         console.table(country.name, country.capital, country.languages, country.population, country.area)
//     });
//   })
//   .catch((err) => console.log(err));

// Exercises: Level 2

//     Print out all the cat names in to catNames variable.
const catsAPI = "https://api.thecatapi.com/v1/breeds";
// fetch(catsAPI)
//   .then((cats) => cats.json())
//   .then((data) => {
//     data.forEach((cat) => {
//       console.log("Cat:", cat.name);
//     });
//   });

// Exercises: Level 3

//     Read the cats api and find the average weight of cat in metric unit.
const catFetch = async () => {
  try {
    const res = await fetch(catsAPI);
    const cats = await res.json();
    cats.forEach((cat) => {
      const weightInMetric = cat.weight.metric;
      const firstWeight = +weightInMetric.charAt(0);
      const lastWeight = +weightInMetric.charAt(weightInMetric.length - 1);
      const avgWeight = (firstWeight + lastWeight) / 2;
      console.log(`Avarage weight of ${cat.name} is ${avgWeight}`);
      // console.log(cat.weight.metric);
    });
  } catch (err) {
    console.error(err);
  }
};
// catFetch();

//     Read the countries api and find out the 10 largest countries
// const countApi = async () => {
// sort by population
//   try {
//     const res = await fetch(countryUrl);
//     const countries = await res.json();
//     console.log("Largest by population");
//     let co = countries.sort((a, b) => b.population - a.population).slice(0, 10);
//     co.forEach((sortCo) => {
//       console.log(sortCo.name, sortCo.population);
//     });
//   } catch (err) {
//     console.error(err);
//   }

// sort by area
//   try {
//     const res = await fetch(countryUrl);
//     const countries = await res.json();
//     console.log("Largest by area");
//     let co = countries.sort((a, b) => b.area - a.area).slice(0, 10);
//     co.forEach((sortCo) => {
//       console.log(sortCo.name, sortCo.area);
//     });
//   } catch (err) {
//     console.error(err);
//   }
// };
// countApi();
//     Read the countries api and count total number of languages in the world used as officials.
const noOfLangs = async () => {
  let langs = new Set();
  try {
    const res = await fetch(countryUrl);
    const countries = await res.json();
    countries.forEach((country) => {
      country.languages.forEach((lang) => {
        langs.add(lang.name);
      });
    });
  } catch (err) {
    console.log(err);
  }
  //   let myLangsInSort = Array.from(langs)
  //   myLangsInSort.sort((a,b)=> a.localeCompare(b))
  //   console.log(myLangsInSort);
  console.log("Official languages used by countries are", langs.size);
};
noOfLangs();

console.log("Bye");
