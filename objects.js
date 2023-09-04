//-------> create dog obj with name, leg, color, age, bard(m)
// const dog = {
//   naam: "bruto",
//   leg: 4,
//   color: "brown",
//   age: 3,
//   bark: function () {
//     return "woof woof";
//   },
// };
// console.log(dog.breed);
// console.log(dog.naam);
// console.log(dog.leg);
// console.log(dog.color);
// console.log(dog.age);
// console.log(dog.bark());

//-------> added new property
// dog.breed = "german sheferd";
// dog.getDogInfo = function () {
//   return `${this.naam} is ${this.color}, have ${this.leg} and are breed of ${this.breed}`;
// };
// console.log(dog.getDogInfo());

//------->user wala obj
// let users = {
//   Alex: {
//     email: "alex@alex.com",
//     skills: ["HTML", "CSS", "JavaScript"],
//     age: 20,
//     isLoggedIn: false,
//     points: 30,
//   },
//   Asab: {
//     email: "asab@asab.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "Redux",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 25,
//     isLoggedIn: false,
//     points: 50,
//   },
//   Brook: {
//     email: "daniel@daniel.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
//     age: 30,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Daniel: {
//     email: "daniel@alex.com",
//     skills: ["HTML", "CSS", "JavaScript", "Python"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   John: {
//     email: "john@john.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
//     age: 20,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Thomas: {
//     email: "thomas@thomas.com",
//     skills: ["HTML", "CSS", "JavaScript", "React"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   Paul: {
//     email: "paul@paul.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
// };

//------->find no of loggedIn user, user having points >= 50
// const loggedWale = Object.keys(users);
// let countLogwale = countPoint = 0;
// for (let i = 0; i < loggedWale.length; i++) {
//   if (users[loggedWale[i]].isLoggedIn) {
//     countLogwale++;
//   }
//   if(users[loggedWale[i]].points >= 50){
//     countPoint++
//   }
// }
// console.log('logged in:', countLogwale, ',points above 50:', countPoint);

//------->find MERN wale from the users
// const user = Object.keys(users)
// let mernWale = []
// for (let i = 0; i < user.length; i++) {
//     let skills = users[user[i]].skills
//     for (let j = 0; j < skills.length; j++) {
//         if(skills.includes('MongoDB') && skills.includes('Express') && skills.includes('React') && skills.includes('Node')){
//             mernWale.push(user[i])
//             break
//         }
//     }
// }
// console.log(mernWale);

//------->add your name also
// const updatedUser = {
//     ...users,
//     Gourav:{
//         email:'suar@gmail.com',
//         skills: ['html', 'css', 'js', 'tailwind'],
//         age:21,
//         isLoggedIn: true,
//         points: 99
//     }
// }

// console.log(users);

//------->get all keys or properties of users obj
// let keys = Object.keys(users)
// let valus = Object.values(users)
// console.log('keys:', keys, 'values:', valus);

//------->create contries object and print name, capital, populaton, languages(arr)
// const countries = {
//   USA: {
//     name: "United States of America",
//     capital: "Washington, D.C.",
//     population: 331002651,
//     languages: ["English"],
//   },
//   China: {
//     name: "China",
//     capital: "Beijing",
//     population: 1444216107,
//     languages: ["Chinese"],
//   },
//   India: {
//     name: "India",
//     capital: "New Delhi",
//     population: 1380004385,
//     languages: ["Hindi", "English"],
//   },
//   Brazil: {
//     name: "Brazil",
//     capital: "Brasília",
//     population: 212559417,
//     languages: ["Portuguese"],
//   },
//   Russia: {
//     name: "Russia",
//     capital: "Moscow",
//     population: 145934462,
//     languages: ["Russian"],
//   },
// };

// Print country information
// for (const country in countries) {
//   const info = countries[country];
//   console.log(`Country: ${info.name}`);
//   console.log(`Capital: ${info.capital}`);
//   console.log(`Population: ${info.population}`);
//   console.log(`Languages: ${info.languages.join(', ')}`);
//   console.log('-------------------------------');
// }

//------->crete obj name personAccount
// const personAccount = {
//   firstName: "Gourav",
//   lastName: "soni",
//   income: [300000, 50000, 150000, 20000, 10000],
//   expenses: [5000, 2000, 101, 2000, 3000],
//   totalIncome: function () {
//     let income = 0;
//     for (const it of this.income) {
//       income += it;
//     }
//     let desc =
//       income +
//       ": Comes from the Product selling, Youtube and from online cunsultancy services";
//     return desc;
//   },
//   totalExpenses: function () {
//     let expence = 0;
//     for (const it of this.expenses) {
//       expence += it;
//     }
//     let desc =
//       expence +
//       ": Spending on buying the new hosting, gears, domains, and new equipments form upgrade the setup and my workplace";
//     return desc;
//   },
//   addIncome: function (amount) {
//     this.income.push(amount);
//   },
//   addExpense: function (amount) {
//     this.expenses.push(amount);
//   },
//   accountBalance: function () {
//     return this.totalIncome - this.totalIncome;
//   },
// };

// console.log(personAccount.totalIncome());
// console.log(personAccount.totalExpenses());
// personAccount.addIncome(20102);
// console.log(personAccount.totalIncome());
// personAccount.addExpense(5001);
// console.log(personAccount.totalExpenses());

// const users = [
//   {
//     _id: "ab12ex",
//     username: "Alex",
//     email: "alex@alex.com",
//     password: "123123",
//     createdAt: "08/01/2020 9:00 AM",
//     isLoggedIn: false,
//   },
//   {
//     _id: "fg12cy",
//     username: "Asab",
//     email: "asab@asab.com",
//     password: "123456",
//     createdAt: "08/01/2020 9:30 AM",
//     isLoggedIn: true,
//   },
//   {
//     _id: "zwf8md",
//     username: "Brook",
//     email: "brook@brook.com",
//     password: "123111",
//     createdAt: "08/01/2020 9:45 AM",
//     isLoggedIn: true,
//   },
//   {
//     _id: "eefamr",
//     username: "Martha",
//     email: "martha@martha.com",
//     password: "123222",
//     createdAt: "08/01/2020 9:50 AM",
//     isLoggedIn: false,
//   },
//   {
//     _id: "ghderc",
//     username: "Thomas",
//     email: "thomas@thomas.com",
//     password: "123333",
//     createdAt: "08/01/2020 10:00 AM",
//     isLoggedIn: false,
//   },
// ];

// first step to sign up
// let signUp = (username, password, email) => {
//   userExists(username, email)
//     ? console.log("user already existed")
//     : signUpProcess(username, password, email);
// };

// // user sign up here
// let signUpProcess = (username, password, email) => {
//   let d = new Date();
//   const newUsers = {
//     _id: "afsdk",
//     username: username,
//     email: email,
//     password: password,
//     createdAt: d.toLocaleTimeString(),
//     isLoggedIn: false,
//   };
//   users.push(newUsers);
//   console.log("You are added, now login");
// };

// // check user existed or not
// let userExists = (username, email) => {
//   const exitsted = users.find(
//     (user) => user.username === username || user.email === email
//   );
//   return exitsted;
// };
// signUp("Gourav", 123123, "suarbiro@gmail.com"); //add new user
// signUp("Sourav", 1201110, "soorabh@gmail.com"); //add new user
// signUp("Alex", 123322, "bhalul@gmail.com"); // check user existed or not
// console.log(users);

// -------->sign in
// let signIn = (usename, password) => {
//   // check for user existed
//   let ans = userExists(usename)
//     ? doSignIn(usename, password)
//     : "User not existed, sign up here";
//   return ans;
// };

// // let user signIn in theire account
// let doSignIn = (username, password) => {
//   const usr = Object.values(users);
//   const correctNamePass = users.find(
//     (user) => user.username === username && user.password === password
//   );
//   const result = correctNamePass
//     ? (correctNamePass["isLoggedIn"] = true)
//     : "Wrong username or pass";
//   return result;
// };
// console.log(signIn("Alex", "123123"));
// console.log(users);

// -------->product wala question
// const products = [
//   {
//     _id: "eedfcf",
//     name: "mobile phone",
//     description: "Huawei Honor",
//     price: 200,
//     ratings: [
//       { userId: "fg12cy", rate: 5 },
//       { userId: "zwf8md", rate: 4.5 },
//     ],
//     likes: [],
//   },
//   {
//     _id: "aegfal",
//     name: "Laptop",
//     description: "MacPro: System Darwin",
//     price: 2500,
//     ratings: [],
//     likes: ["fg12cy"],
//   },
//   {
//     _id: "hedfcg",
//     name: "TV",
//     description: "Smart TV:Procaster",
//     price: 400,
//     ratings: [{ userId: "fg12cy", rate: 5 }],
//     likes: ["fg12cy"],
//   },
// ];

// let getUserId = () => {
//   let id = "";
//   let range = "1234567890abcdefghijklmnopqrstuvwxyz";
//   for (let j = 0; j < 5; j++) {
//     id += range.charAt(Math.floor(Math.random() * range.length));
//   }
//   return id;
// };

// create a fx called rateProduct
// function rateProduct(ids, rating) {
//   let findProduct = products.find((id) => id._id == ids);
//   let result = findProduct
//     ? findProduct.ratings.push({ userId: getUserId(), rating: rating })
//     : "product not found";
//   return result;
// }
// rateProduct("aegfal", 4);
// rateProduct("aegfal", 2);

// -------->like or unline
// function likeProduct(prodId, userId) {
//   let findProduct = products.find((id) => id._id == prodId);
//   let index = findProduct.likes.indexOf(userId);
//   let result =
//     index + 1
//       ? findProduct.likes.splice(index, 1)
//       : findProduct.likes.push((userId = userId));
//   return 'total no of likes become: ' + result;
// }
// console.log(likeProduct("aegfal", "fg12cy"));
// console.log(likeProduct("aegfal", "ddfd"));
// console.log(products[1]);
console.log('hii');