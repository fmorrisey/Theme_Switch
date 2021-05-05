// DOM Elements

const darkButton = document.getElementById("darkId");
const lightButton = document.getElementById("lightId");
const solarButton = document.getElementById("solarId");
const body = document.body;

console.log(darkButton);
console.log(lightButton);
console.log(solarButton);
console.log(body);

// Button Event Handlers
darkButton.onclick = () => {
  /* Looks for classList on the body
  body.classList.remove('light'); //removes a theme
  body.classList.add('dark'); //adds a theme */

  //One line of code alternative
  body.classList.replace("light", "dark");
  console.log("I've been clicked captain!");
};

lightButton.onclick = () => {
  body.classList.replace("dark", "light");
};

solarButton.onclick = () => {
  body.classList.replace("dark", "light");
};
