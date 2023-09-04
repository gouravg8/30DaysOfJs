import readline from "readline";
const red = "\x1b[31m";
const green = "\x1b[32m";
const reset = "\x1b[0m";

let tasks = [];
let initialPromptDisplayed = false;

let intro = `Welcome to Task Tracker CLI!

Available commands:
- add [task description] (e.g., add Buy groceries)
- list
- done [task number] (e.g., done 2)
- delete [task number] (e.g., delete 3)
- clear
- quit`;
console.log(intro);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let errorMsg = (msg) => {
  return red + msg + reset;
};

let successMsg = (msg) => {
  return green + msg + reset;
};

if (!initialPromptDisplayed) {
  console.log("Enter your command:");
  initialPromptDisplayed = true;
} else {
  rl.setPrompt("> ");
}
rl.on("line", (command) => {
  if (command.startsWith("add")) {
    let text = command.slice(4, command.length).replace(/\s+/g, " ");
    tasks.push([text, 0]);
  } else if (command == "list") {
    if (!tasks.length) console.log(">", errorMsg("Todo is empty"));
    tasks.forEach((task, index) => {
      let doneOrnot = task[1] ? "[x]" : "[]";
      console.log(index + 1 + ".", doneOrnot, task[0]);
    });
  } else if (command.startsWith("done")) {
    let index = command.slice(5).trim();
    if (!isNaN(index)) {
      index = parseInt(index) - 1;
      if (index <= tasks.length && index >= 0) {
        tasks[index][1] = 1;
        console.log(">", successMsg("Task marked as completed"));
      } else {
        console.log(">", errorMsg("Item not found"));
      }
    }
  } else if (command.startsWith("delete")) {
    let index = command.slice(7).trim();
    if (!isNaN(index)) {
      index = parseInt(index) - 1;
      if (index <= tasks.length && index >= 0) {
        tasks.splice(index, 1);
        console.log(">", successMsg("Item deleted"));
      } else {
        console.log(">", errorMsg("Item not found"));
      }
    }
  } else if (command.startsWith("quit")) {
    rl.close();
    rl.pause();
  } else if (command.startsWith("help") || "") {
    console.log(intro);
  } else if (command.startsWith("clear")) {
    tasks = [];
  } else {
    console.log(">", errorMsg("Invalid command"));
  }
  rl.prompt();
  rl.on("SIGINT", () => {
    rl.question("Exit (y or n)? ", (input) => {
      if (input.match(/^y(es)?$/i)) {
        rl.pause();
      }
    });
  });
});

// rl.on('resume', () => {
//     console.log('Resume Event is invoked.');
// });
// rl.on('pause', () => {
//     console.log('Paused Event is invoked');
// });
