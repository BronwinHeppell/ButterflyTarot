var flipCards = document.querySelectorAll(".flip-card");

flipCards.forEach(function (flipCard) {
  flipCard.addEventListener("click", function () {
    this.classList.toggle("flipped");
  });
});