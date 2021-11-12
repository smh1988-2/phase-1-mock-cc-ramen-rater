const BASE_URL = "http://localhost:3000/ramens"; //base URL for all fetches

const form = document.getElementById("new-ramen");
form.addEventListener("submit", (e) => ramenAdder(e));

//variables to render my ramen
const menu = document.getElementById("ramen-menu");
const image = document.getElementById("ramen-pic");
const name = document.getElementById("ramen-name");
const restaurant = document.getElementById("ramen-restaurant");
const rating = document.getElementById("rating-display");
const comment = document.getElementById("comment-display");

//fetch those bowls and pass them all to the renderer
fetch(BASE_URL)
  .then((resp) => resp.json())
  .then((data) => data.forEach(ramenRender));

function ramenRender(data) {
  //renders each bowl across the top of the screen
  const ramenPic = document.createElement("img");
  ramenPic.src = `${data.image}`;
  ramenPic.id = `ramen-${data.id}`;
  menu.appendChild(ramenPic);
  ramenPic.addEventListener("click", ramenFeaturer); //adds event listeners to each bowl

  function ramenFeaturer() {
    //updates the featured ramen on click (l:25)
    image.src = `${data.image}`;
    name.textContent = `${data.name}`;
    restaurant.textContent = `${data.restaurant}`;
    rating.textContent = `${data.rating}`;
    comment.textContent = `${data.comment}`;
  }

  document.getElementById("ramen-1").click(); //auto-clicks the first ramen so it's displayed on page load
}

function ramenAdder(e) {
  //uses the form to add a new bowl to the header and makes it available to click
  e.preventDefault();
  let newRamen = {
    name: e.target[0].value,
    restaurant: e.target[1].value,
    image: e.target[2].value,
    rating: e.target[3].value,
    comment: e.target[4].value,
  };
  ramenRender(newRamen);
}
