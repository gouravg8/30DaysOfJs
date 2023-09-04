let table = document.querySelector("table");

const countryUrl = "https://restcountries.com/v2/all";
let countriesDetail = async (len) => {
  try {
    const res = await fetch(countryUrl);
    let countries = await res.json();
    countries = countries.slice(0, len);
    // console.log(countries);
    countries.forEach((country) => {
      createCountry(
        country.name,
        country.capital,
        country.population,
        country.area,
        country.flag
      );
    });
  } catch (err) {
    console.error(err);
  }
};

let createCountry = (gnaam, gcapital, gpopulation, garea, gflag) => {
  let tr = document.createElement("tr");
  tr.classList.add("text-gray-400", "text-center");
  table.appendChild(tr);
  let naam = document.createElement("td");
  naam.innerText = gnaam;
  tr.appendChild(naam);
  let capital = document.createElement("td");
  capital.innerText = gcapital;
  tr.appendChild(capital);
  let population = document.createElement("td");
  population.innerText = gpopulation;
  tr.appendChild(population);
  //   let area = document.createElement("td");
  //   area.innerText = garea;
  //   tr.appendChild(area);
  let flag = document.createElement("img");
  flag.style.width = "2rem";
  flag.classList.add("flex", "items-center",'justify-center');
  flag.src = gflag;
  tr.appendChild(flag);
};

// console.log(table);
countriesDetail(10);
