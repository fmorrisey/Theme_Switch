// DOM Elements

const darkButton = document.getElementById("darkId");
const lightButton = document.getElementById("lightId");
const solarButton = document.getElementById("solarId");
const body = document.body;

// Apply the cached theme on reload
const theme = localStorage.getItem("theme");
const isSolar = localStorage.getItem("isSolar");

if (theme) {
  body.classList.add(theme);
  isSolar && body.classList.add("solar");
}

// Button Event Handlers
darkButton.onclick = () => {
  body.classList.replace("light", "dark");
  localStorage.setItem("theme", "dark");
};

lightButton.onclick = () => {
  body.classList.replace("dark", "light");
  localStorage.setItem("theme", "light");
};

solarButton.onclick = () => {
  if (body.classList.contains("solar")) {
    body.classList.remove("solar");
    solarButton.style.cssText = `
      --bg-color: var(--yellow);
      `;
    solarButton.innerText = "solarize";

    localStorage.removeItem("isSolar");
  } else {
    solarButton.style.cssText = `
      --bg-solar: white;
      `;
    body.classList.add("solar");
    solarButton.innerText = "normalize";
    localStorage.setItem("isSolar", true);
  }
};
