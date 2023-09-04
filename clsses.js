// Exercises Level 1

//1.     Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
  constructor(name = "Sourav", age = 18, color = "black", legs = 4) {
    this.neme = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
}
const sorv = new Animal();
const gorv = new Animal("Gourav", 21, "white");
// console.log(sorv);
// console.log(gorv);
//2.     Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal {
  constructor(name, age, color, legs = 4) {
    super(name, age, color);
    this.legs = legs;
  }
}
let dogGorv = new Dog("g2", 11, "brown");
// console.log(dogGorv);

class Cat extends Animal {
  constructor(name, age, color, legs, sound) {
    super(name, age, color, legs);
    this.sound = sound;
  }
}

let catGorv = new Cat("gorvv", 13, "hara", 4, "meow meow");
// console.log(catGorv);

// Exercises Level 2
//3.    Override the method you create in Animal class
// kar liya hai uper by adding the sound in cat child

// Exercises Level 3
let ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];

class Statistics {
  constructor(ages) {
    this.ages = ages;
  }

  count() {
    return this.ages.length;
  }
  sum() {
    return this.ages.reduce((acc, curr) => acc + curr);
  }
  min() {
    return Math.min(...this.ages);
  }
  max() {
    return Math.max(...this.ages);
  }
  range() {
    return this.max() - this.min();
  }
  mean() {
    return Math.round(this.sum() / this.count());
  }
  sort() {
    return ages.sort((a, b) => a - b);
  }
  isEven() {
    let out = this.count() & 1 ? false : true;
    return out;
  }
  median() {
    let sortLen = this.sort();
    let nBy2 = (sortLen.length - 1) / 2;
    let so = this.sort();
    if (this.isEven()) {
      return (so[nBy2] + so[nBy2 + 1]) / 2;
    } else {
      return so[nBy2];
    }
  }
  freqObj() {
    let newObj = {};
    this.sort().forEach((elm) => {
      if (newObj[elm]) {
        newObj[elm]++;
      } else newObj[elm] = 1;
    });
    return newObj;
  }
  mode() {
    let max = 0,
      index = 0;
    let vals = Object.entries(newObj);
    for (let i = 0; i < vals.length; i++) {
      // max = vals[i][1] > max ? vals[i][1] : max;
      if (vals[i][1] > max) {
        max = vals[i][1];
        index = i;
      } else {
        max = max;
        index = index;
      }
    }
    // console.log(vals);
    // console.log(vals[index], max);
    return { mode: vals[index][0], count: max };
  }
  var() {
    let scoreFromMean = ages.map((nums) => nums - this.mean());
    let squareOfDeviattionFromMean = scoreFromMean.map((nums) =>
      Math.pow(nums, 2)
    );
    let sumOfSquares = squareOfDeviattionFromMean.reduce(
      (acc, cur) => acc + cur
    );
    let divideSumOfSquaresByn_1 = sumOfSquares / this.count();
    return +divideSumOfSquaresByn_1.toPrecision(3);
  }
  std() {
    return +Math.sqrt(this.var()).toPrecision(2);
  }
  freqDist() {
    // return this.freqObj();
    let freqD = {};
    ages.forEach((age) => {
      if (freqD[age]) {
        freqD[age] += Math.round(+this.std().toFixed(2));
      } else {
        freqD[age] = Math.round(+this.std().toFixed(2));
      }
    });
    return freqD;
  }
}
let statistics = new Statistics(ages);
// console.log("sort", statistics.sort());
// console.log("Count:", statistics.count()); // 25
// console.log("Sum: ", statistics.sum()); // 744
// console.log("Min: ", statistics.min()); // 24
// console.log("Max: ", statistics.max()); // 38
// console.log("Range: ", statistics.range()); // 14
// console.log("Mean: ", statistics.mean()); // 30
// console.log("Median: ", statistics.median()); // 29
// console.log("Mode: ", statistics.mode()); // {'mode': 26, 'count': 5}
// console.log("Variance: ", statistics.var()); // 17.5
// console.log("Standard Deviation: ", statistics.std()); // 4.2
// console.log("Frequency Distribution: ", statistics.freqDist()); // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

//2. Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
class PersonAccount {
  constructor(
    firstname,
    lastname,
    income = 0,
    incomeDescription = "Unknown",
    expense = 0,
    expenseDescription = "Unknown"
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.incomes = [{ income: income, description: incomeDescription }];
    this.expenses = [{ expense: expense, description: expenseDescription }];
  }

  totalIncome() {
    return this.incomes.reduce((total, income) => total + income.income, 0);
  }

  totalExpenses() {
    // return this.expenses;
    return this.expenses.reduce((total, expense) => total + expense.expense, 0);
  }

  accountInfo() {
    return `${this.firstname} ${this.lastname} is customer at our bank called GSB`;
  }

  addIncome(income, incomeDescription = "Unknown") {
    this.incomes.push({ income: income, description: incomeDescription });
  }

  addExpense(expense, expenseDescription = "Unknown") {
    this.expenses.push({ expense: expense, description: expenseDescription });
  }

  accountBalance() {
    return this.totalIncome() - this.totalExpenses();
  }
}

let person = new PersonAccount("Gourav", "soni", 100000, 'Youtube, Product selling, Courses and rest', 12000, 'VidEdit, Hosting, Ads and salary');
console.log(person);

person.addIncome(5000, "Bas evi hi");
console.log(person);

person.addExpense(1200, "Hosting lee thi");
console.log(person);

console.log(person.accountBalance());
console.log(person.accountInfo());

console.log("Total expenses", person.totalExpenses());
console.log("Total income", person.totalIncome());
