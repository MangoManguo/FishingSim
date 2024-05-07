// Functionize Minecraft Fishing Start Code

// variables
let img = document.getElementById("result-img");
let numCodSpan = document.getElementById("num-cod");
let numSalmonSpan = document.getElementById("num-salmon");
let numTropicalSpan = document.getElementById("num-tropical");
let numPufferSpan = document.getElementById("num-puffer");
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;
let plus5btn = document.getElementById("plus5");
let until200btn = document.getElementById("until200");
let fishbtn = document.getElementById("fish-btn");
let useript = document.getElementById("ipt");
let userNum = document.getElementById("input");
let inventory = document.getElementById("inventory");
let sort = document.getElementById("sort");
let clear = document.getElementById("clear");

// Fish Button Event Listener
fishbtn.addEventListener("click", fishBtnClicked);
plus5btn.addEventListener("click", add5);
until200btn.addEventListener("click", until200);
useript.addEventListener("click", addNum);
sort.addEventListener("click", sortFish);
clear.addEventListener("click", clearFish);

function fishBtnClicked() {
  // Steve Fish Simulator
  let character = document.getElementById("character-select").value;
  let randNum = Math.random();
  console.log(randNum);
  if (character === "steve") {
    // Fish w/ steve
    if (randNum < 0.7) {
      console.log("Cod");
      img.src = "img/Raw-Cod.png";
      inventory.innerHTML += "<img src='img/Raw-Cod.png'/>";
      numCod++;
      numCodSpan.innerHTML = numCod;
    } else if (randNum < 0.9) {
      console.log("Salmon");
      img.src = "img/Raw-Salmon.png";
      inventory.innerHTML += "<img src='img/Raw-Salmon.png'/>";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
    } else if (randNum < 0.95) {
      console.log("Tropical");
      img.src = "img/Tropical-Fish.png";
      inventory.innerHTML += "<img src='img/Tropical-Fish.png'/>";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
    } else {
      console.log("Pufferfish");
      img.src = "img/Pufferfish.png";
      inventory.innerHTML += "<img src='img/Pufferfish.png'/>";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
    }
  } else if (character === "alex") {
    // Fish w/ alex
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.1) {
      console.log("Cod");
      img.src = "img/Raw-Cod.png";
      inventory.innerHTML += "<img src='img/Raw-Cod.png'/>";
      numCod++;
      numCodSpan.innerHTML = numCod;
    } else if (randNum < 0.2) {
      console.log("Salmon");
      img.src = "img/Raw-Salmon.png";
      inventory.innerHTML += "<img src='img/Raw-Salmon.png'/>";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
    } else if (randNum < 0.5) {
      console.log("Tropical");
      img.src = "img/Tropical-Fish.png";
      inventory.innerHTML += "<img src='img/Tropical-Fish.png'/>";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
    } else {
      console.log("Pufferfish");
      img.src = "img/Pufferfish.png";
      inventory.innerHTML += "<img src='img/Pufferfish.png'/>";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
    }
  } else if (character === "villager") {
    // Fish w/ villager
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.25) {
      console.log("Cod");
      img.src = "img/Raw-Cod.png";
      inventory.innerHTML += "<img src='img/Raw-Cod.png'/>";
      numCod++;
      numCodSpan.innerHTML = numCod;
    } else if (randNum < 0.5) {
      console.log("Salmon");
      img.src = "img/Raw-Salmon.png";
      inventory.innerHTML += "<img src='img/Raw-Salmon.png'/>";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
    } else if (randNum < 0.75) {
      console.log("Tropical");
      img.src = "img/Tropical-Fish.png";
      inventory.innerHTML += "<img src='img/Tropical-Fish.png'/>";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
    } else {
      console.log("Pufferfish");
      img.src = "img/Pufferfish.png";
      inventory.innerHTML += "<img src='img/Pufferfish.png'/>";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
    }
  }
}
function add5() {
  for (let i = 1; i <= 5; i++) {
    fishBtnClicked();
  }
}
function until200() {
  while (numCod < 200) {
    fishBtnClicked();
  }
}
function addNum() {
  for (i = 1; i < +userNum.value; i++) {
    fishBtnClicked();
    console.log(i);
  }
}
function sortFish() {
  inventory.innerHTML = "";
  for (i = 0; i < numCod; i++) {
    inventory.innerHTML += "<img src='img/Raw-Cod.png'/>";
  }
  for (i = 0; i < numSalmon; i++) {
    inventory.innerHTML += "<img src='img/Raw-Salmon.png'/>";
  }
  for (i = 0; i < numTropical; i++) {
    inventory.innerHTML += "<img src='img/Tropical-Fish.png'/>";
  }
  for (i = 0; i < numPuffer; i++) {
    inventory.innerHTML += "<img src='img/Pufferfish.png'/>";
  }
}

function clearFish() {
  numCod = 0;
  numSalmon = 0;
  numTropical = 0;
  numPuffer = 0;
  inventory.innerHTML = "";
  numCodSpan.innerHTML = numCod;
  numSalmonSpan.innerHTML = numSalmon;
  numTropicalSpan.innerHTML = numTropical;
  numPufferSpan.innerHTML = numPuffer;
}
