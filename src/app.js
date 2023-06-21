import "bootstrap"; // Importing the Bootstrap library
import "./style.css"; // Importing a CSS file

// Main function that generates random outputs
function generateExcuse() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  // Generate random values from the arrays
  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  // Create an excuse using the random values
  let excuse =
    randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen;

  // Set the generated excuse as the content of an element with the id "excuse"
  document.querySelector("#excuse").innerHTML = excuse;
}

// Execute the generateExcuse function when the window loads
window.onload = generateExcuse;
