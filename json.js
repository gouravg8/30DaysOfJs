const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
let age = 250;
let isMarried = true;
const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`;
// Exercises Level 1

//     Change skills array to JSON using JSON.stringify()
let skillsJson = JSON.stringify(skills, undefined, 2);
// console.log(skills);
// console.log(skillsJson);
//     Stringify the age variable
let agesJson = JSON.stringify(age);
// console.log(agesJson);
//     Stringify the isMarried variable
let isMarriedJson = JSON.stringify(isMarried);
// console.log(isMarriedJson);
//     Stringify the student object
let studentJson = JSON.stringify(student, undefined, 2);
// console.log(studentJson);

// Exercises Level 2
//     Stringify the students object with only firstName, lastName and skills properties
let stuFnameLnameSkills = JSON.stringify(
  student,
  ["firstName", "lastName", "skills"],
  2
);
// console.log(stuFnameLnameSkills);

// Exercises Level 3
//     Parse the txt JSON to object.
let texToObj = JSON.parse(txt);
// console.log(txt);
// console.log(texToObj);
//     Find the user who has many skills from the variable stored in txt.
// console.log(JSON.stringify(txt, undefined, ''));
let entrs = Object.entries(texToObj);
for (const e of entrs) {
  console.log(e["0"], "logged in", e["1"]["skills"].length > 4, e['1']['skills'].length);
}
// console.log(entrs);
// console.log(txtr);

// const usersText = `{
//     "users":[
//       {
//         "firstName":"Asabeneh",
//         "lastName":"Yetayeh",
//         "age":250,
//         "email":"asab@asb.com"
//       },
//       {
//         "firstName":"Alex",
//         "lastName":"James",
//         "age":25,
//         "email":"alex@alex.com"
//       },
//       {
//       "firstName":"Lidiya",
//       "lastName":"Tekle",
//       "age":28,
//       "email":"lidiya@lidiya.com"
//       }
//     ]
//     }`

//     const usersObj = JSON.parse(usersText, (key, value) => {
//       let newValue =
//         typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
//       return newValue
//     })
//     console.log(usersObj)
