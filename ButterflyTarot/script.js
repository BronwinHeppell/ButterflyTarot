var flipCards = document.querySelectorAll(".flip-card");

flipCards.forEach(function (flipCard) {
  flipCard.addEventListener("click", function () {
    this.classList.toggle("flipped");
  });
});

// South Africa array
const southAfricaButterflies = [
  {
    name: "African Monarch Butterfly",
    title: "Spirituality and Soul ",
    desc: "In some African cultures, butterflies are believed to carry the spirits of ancestors or departed loved ones. The presence of an African Monarch butterfly may be seen as a connection to the spiritual realm or a sign of a departed soul visiting",
  },
  {
    name: "Pearl Emperor Butterfly",
    title: "Creativity",
    desc: "Through its beautiful, intricate pattern, the Pearl Emperor butterfly encourages us to express our creativity",
  },
  {
    name: "Forest Queen Butterfly",
    title: "Positive incomings",
    desc: "Consistent sightings of monarch butterflies might be a way of the universe to tell you that you are about to witness something great. Something that’ll bring a lot of happiness and joy into your life. Everything is going to align in the way that it should",
  },
  {
    name: "Boisduvals false Acraea Butterfly",
    title: "Entering a new phase",
    desc: "You should step into something new that you always wanted to do but had reservations about. This is the time when you put aside those reservations and enter a new phase of your life",
  },
  {
    name: "Gaudy Commodore Butterfly",
    title: "Letting go",
    desc: "The Gaudy Commodore is a sign to let go. Bad memories, holding grudges against people, and old thoughts that trouble you are the barriers that you need to cross if you want growth in your life.",
  },
];

// Wales array
let walesButterflies = [
  {
    name: "Scotch Argus Butterfly",
    title: "Groundedness & Connection to Nature",
    desc: "The Scotch Argus butterfly is often associated with a sense of groundedness and connection to the earth. This butterfly  may symbolize being rooted in nature, appreciating the  beauty of natural landscapes, and finding tranquility in natural environments.",
  },
  {
    name: "Swallowtail Butterfly",
    title: "Diversity and Adaptation",
    desc: "Swallowtail butterflies come in various species, each with its distinctive characteristics. Their diversity and adaptability can symbolize the importance of embracing individuality and finding strength in one's uniqueness.",
  },
  {
    name: "The Green Hairstreak Butterfly",
    title: "Harmony and Balance",
    desc: "Butterflies are often associated with balance and harmony in nature. Their presence in ecosystems can serve as a reminder of the delicate interplay between different species and the importance of maintaining ecological balance.",
  },
  {
    name: "The Gatekeeper Butterfly",
    title: "Transition and Change",
    desc: "As with all butterflies, the Gatekeeper undergoes metamorphosis, symbolizing change, growth, and transformation. This life cycle can be seen as a representation of personal development and the potential for positive changes in life.",
  },
  {
    name: "The Marsh Fritillary Butterfly",
    title: "Conservation and Environmental Awareness",
    desc: "Its presence can serve as a reminder of the importance of environmental awareness and conservation efforts to protect biodiversity and natural habitats.",
  },
];

// Jamaica array
let jamaicaButterflies = [
  {
    name: "Papilo Melanius Butterfly",
    title: "Transformation and Growth",
    desc: "The Papilo Melanius's life cycle can symbolize personal growth, change, and transformation. The butterfly's  journey can inspire individuals to embrace change, adaptability, and the potential for personal development",
  },
  {
    name: "The Prickly Ash Swallowtail Butterfly",
    title: "Beauty and Aesthetics",
    desc: "The Prickly Ash Swallowtail, are admired for their vibrant colors and delicate wing patterns. They are often seen as symbols of beauty and aesthetics, reminding us to appreciate the beauty that surrounds us.",
  },
  {
    name: "The Yellow Angled-Sulphur Butterfly",
    title: "Joy and Positivity",
    desc: "Yellow Angled-Sulphur Butterflies are often associated with feelings of joy, happiness, and positivity. Their bright colors and graceful flight can evoke a sense of wonder and delight in observers.",
  },
  {
    name: "Giant Swallowtail Butterfly",
    title: "Freedom and Lightness",
    desc: "Swallowtails, are known for their graceful flight and delicate presence. They can symbolize a sense of freedom, lightness, and liberation from burdens and restrictions.",
  },
  {
    name: "The Cloudless Sulphur Butterfly",
    title: "Connection to Nature",
    desc: "The Cloudless Sulphur butterflies are closely connected to nature and the environment. Their presence can serve as a reminder of the importance of nature's balance and the interplay between different species.",
  },
];
