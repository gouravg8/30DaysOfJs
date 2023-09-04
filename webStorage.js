// Exercises: Level 1
//     Store you first name, last name, age, country, city in your browser localStorage.
localStorage.clear();
// console.log(localStorage);
localStorage.setItem("name", "Gourav");
localStorage.setItem("age", 21);
localStorage.setItem("country", "India");
localStorage.setItem("city", "New Delhi");
// console.log(localStorage);

// Exercises: Level 2
//     Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
let student = {
  firstName: "Gourav",
  lastName: "soni",
  age: 21,
  skills: ["HTML", "CSS", "Js", "React", "MongoDB"],
  country: "India",
  entrolledKey: 1239,
};
localStorage.setItem("student", JSON.stringify(student));
// console.log(JSON.stringify(localStorage, undefined, 4));
// console.log(localStorage.getItem('student'));

// Exercises: Level 3
//     Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

let personAccount = {
  firstname: "Gourav",
  lastname: "soni",
  incomes: 1500000,
  expeses: 14500,
  totalIncome: incomes,
  totalExpense: 1234,
  addIncome(income) {
    this.incomes += income;
  },
  addExpenses(expense){
    this.expeses += expense
  },accountBalace(){
    
  }
};

localStorage.setItem("personAccount", JSON.stringify(personAccount));
console.log(localStorage.getItem("personAccount"));
