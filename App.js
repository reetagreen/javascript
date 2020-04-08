
document.addEventListener("DOMContentLoaded", () => {
  //create cards
  const cardArray = [
    { name: "avocado", img: "src/images/avocado.png" },
    { name: "avocado", img: "src/images/avocado.png" },
    { name: "burrito", img: "src/images/burrito.png" },
    { name: "burrito", img: "src/images/burrito.png" },
    { name: "cookie", img: "src/images/cookie.png" },
    { name: "cookie", img: "src/images/cookie.png" },
    { name: "cupcake", img: "src/images/cupcake.png" },
    { name: "cupcake", img: "src/images/cupcake.png" },
    { name: "donut", img: "src/images/donut.png" },
    { name: "donut", img: "src/images/donut.png" },
    { name: "taco", img: "src/images/taco.png" },
    { name: "taco", img: "src/images/taco.png" }
  ];

  const grid = document.querySelector(".grid");
  //create your board by looping the cardArray
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img"); //for each card
      card.setAttribute("src", "src/images/blank.png"); //link the image
      card.setAttribute("data-id", i); //an id for the cards
      //card.addEventListener('click',flipcard) //listen to mouseclick and add flipcard function
      grid.appendChild(card);
    }
  }

  createBoard();
})