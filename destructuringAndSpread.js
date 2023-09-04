import countryData from "./country_data.cjs";
const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
// console.log(countryData);
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};
const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

// 1. Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
// console.log("Cosntants:", e, pi, gravity, humanBodyTemp, waterBoilingTemp);
// 2. Destructure and assign the elements of countries array to fin, est, sw, den, nor
const [fin, est, sw, den, nor] = countries;
// console.log("Countries:", fin, est, sw, den, nor);
// 3. Destructure the rectangle object by its properties or keys.
const { width, height, area, perimeter } = rectangle;
// console.log("Rectangle:", width, height, area, perimeter);

// Exercises: Level 2
// 1. Iterate through the users array and get all the keys of the object using destructuring
for (const { name, scores, skills, age } of users) {
  //   console.log("User:", name, scores, skills, age);
}
// 2. Find the persons who have less than two skills
for (const { name, skills } of users) {
  //   skills.length < 2 && console.log(name, "have less than 2 skills");
}

// Exercises: Level 3
// 1. Destructure the countries object print name, capital, population and languages of all countries
// for (const { name, capital, population, languages } of countryData) {
//   console.log(name, capital, population, languages);
// }

//2. A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];
// const [name, skills, [, , jsScore, reactScore]] = student;
// console.log(name, skills, jsScore, reactScore);

//3. Write a function called convertArrayToObject which can convert the array to a structure object.
const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

// console.log(convertArrayToObject(students));
// [
//   {
//     name: 'David',
//     skills: ['HTM','CSS','JS','React'],
//     scores: [98,85,90,95]
//   },
//   {
//     name: 'John',
//     skills: ['HTM','CSS','JS','React'],
//     scores: [85, 80,85,80]
//   }
// ]
function convertArrayToObject(students) {
  let out = [];
  for (const [name, skills, scores] of students) {
    out.push({ name: name, skills: skills, scores: scores });
  }
  return out;
}

//4. Copy the student object to newStudent without mutating the original object. In the new object add the following ?
const studentss = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};
let newStudentss = { ...studentss };

// Add Bootstrap with level 8 to the front end skill sets
newStudentss.skills.frontEnd.push({ skill: "Bootstrap", level: 8 });

// Add Express with level 9 to the back end skill sets
newStudentss.skills.backEnd.push({ skill: "Express", level: 9 });
// Add SQL with level 8 to the data base skill sets
newStudentss.skills.dataBase.push({ skill: "SQL", level: 8 });
// Add SQL without level to the data science skill sets
newStudentss.skills.dataScience.push("SQL");

// Accessing skill information using forEach
let k = Object.entries(newStudentss.skills.dataScience);
// console.log(k);
