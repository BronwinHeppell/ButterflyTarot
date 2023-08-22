let flipCards = document.querySelectorAll(".flip-card");
let southAfricaCard = document.getElementById("southAfricaCard");
let walesCard = document.getElementById("walesCard");
let jamaicaCard = document.getElementById("jamaicaCard");

flipCards.forEach(function (flipCard) {
  flipCard.addEventListener("click", function () {
    this.classList.toggle("flipped");
  });
});

southAfricaCard.addEventListener("click", function () {
  if (!this.classList.contains("flipped")) {
    return;
  }
  randomizeAndDisplayButterflyInfoSouthAfrica();
});

walesCard.addEventListener("click", function () {
  if (!this.classList.contains("flipped")) {
    return;
  }
  randomizeAndDisplayButterflyInfoWales();
});

jamaicaCard.addEventListener("click", function () {
  if (!this.classList.contains("flipped")) {
    return;
  }
  randomizeAndDisplayButterflyInfoJamaica();
});

const southAfricaButterflies = [
  // Your butterfly data here
  {
    butterflyname: "Pearl Emperor Butterfly",
    butterflytitle: "Creativity",
    butterflydesc:
      "Through its beautiful, intricate pattern, the Pearl Emperor butterfly encourages us to express our creativity",
  },
  {
    butterflyname: "African Monarch Butterfly",
    butterflytitle: "Spirituality and Soul",
    butterflydesc:
      "In some African cultures, butterflies are believed to carry the spirits of ancestors or departed loved ones. The presence of an African Monarch butterfly may be seen as a connection to the spiritual realm or a sign of a departed soul visiting",
  },
  {
    butterflyname: "Boisduvals false Acraea Butterfly",
    butterflytitle: "Entering a new phase",
    butterflydesc:
      "You should step into something new that you always wanted to do but had reservations about. This is the time when you put aside those reservations and enter a new phase of your life",
  },
];

// Wales array
const walesButterflies = [
  {
    butterflyname: "Scotch Argus Butterfly",
    butterflytitle: "Groundedness & Connection to Nature",
    butterflydesc:
      "The Scotch Argus butterfly is often associated with a sense of groundedness and connection to the earth. This butterfly  may symbolize being rooted in nature, appreciating the  beauty of natural landscapes, and finding tranquility in natural environments.",
  },

  {
    butterflyname: "The Green Hairstreak Butterfly",
    butterflytitle: "Harmony and Balance",
    butterflydesc:
      "Butterflies are often associated with balance and harmony in nature. Their presence in ecosystems can serve as a reminder of the delicate interplay between different species and the importance of maintaining ecological balance.",
  },
  {
    butterflyname: "The Gatekeeper Butterfly",
    butterflytitle: "Transition and Change",
    butterflydesc:
      "As with all butterflies, the Gatekeeper undergoes metamorphosis, symbolizing change, growth, and transformation. This life cycle can be seen as a representation of personal development and the potential for positive changes in life.",
  },
];

// Jamaica array
const jamaicaButterflies = [
  {
    butterflyname: "The Prickly Ash Swallowtail Butterfly",
    butterflytitle: "Beauty and Aesthetics",
    desc: "The Prickly Ash Swallowtail, are admired for their vibrant colors and delicate wing patterns. They are often seen as symbols of beauty and aesthetics, reminding us to appreciate the beauty that surrounds us.",
  },
  {
    butterflyname: "The Yellow Angled-Sulphur Butterfly",
    butterflytitle: "Joy and Positivity",
    butterflydesc:
      "Yellow Angled-Sulphur Butterflies are often associated with feelings of joy, happiness, and positivity. Their bright colors and graceful flight can evoke a sense of wonder and delight in observers.",
  },
  {
    butterflyname: "Giant Swallowtail Butterfly",
    butterflytitle: "Freedom and Lightness",
    butterflydesc:
      "Swallowtails, are known for their graceful flight and delicate presence. They can symbolize a sense of freedom, lightness, and liberation from burdens and restrictions.",
  },
];

function randomizeAndDisplayButterflyInfoSouthAfrica() {
  const randomIndex = Math.floor(Math.random() * southAfricaButterflies.length);
  const randomButterfly = southAfricaButterflies[randomIndex];

  // Update butterfly information on the card back

  document.querySelector("#butterflynameSouthAfrica").textContent =
    randomButterfly.butterflyname;
  document.querySelector("#butterflytitleSouthAfrica").textContent =
    butterfly.butterflytitle;
  document.querySelector("#butterflydescSouthAfrica").textContent =
    butterfly.butterflydesc;
}

function randomizeAndDisplayButterflyInfoWales() {
  const randomIndex = Math.floor(Math.random() * walesButterflies.length);
  const randomButterfly = walesButterflies[randomIndex];

  // Update butterfly information on the card back

  document.querySelector("#butterflynameWales").textContent =
    randomButterfly.butterflyname;
  document.querySelector("#butterflytitleWales").textContent =
    butterfly.butterflytitle;
  document.querySelector("#butterflydescWales").textContent =
    butterfly.butterflydesc;
}

function randomizeAndDisplayButterflyInfoJamaica() {
  const randomIndex = Math.floor(Math.random() * jamaicaButterflies.length);
  const randomButterfly = jamaicaButterflies[randomIndex];

  // Update butterfly information on the card back

  document.querySelector("#butterflynameJamaica").textContent =
    randomButterfly.butterflyname;
  document.querySelector("#butterflytitleJamaica").textContent =
    butterfly.butterflytitle;
  document.querySelector("#butterflydescJamaica").textContent =
    butterfly.butterflydesc;
}
