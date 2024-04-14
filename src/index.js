document.addEventListener("DOMContentLoaded", () => {
  const URL = "http://localhost:3000/art";

  fetch(URL)
    .then((resp) => resp.json())
    .then((data) => renderArt(data));
});
// function to render json data
function renderArt(art) {
  const artList = document.getElementById('artList'); 
  
  art.forEach(function (artwork) {
    const listItem = document.createElement("li");
    const image = document.createElement("img");
    
    image.src = `${artwork.link}`;
    image.alt = `${artwork.title} by ${artwork.artist}`;
    
    listItem.appendChild(image);
    artList.appendChild(listItem);
  });
}
// adding event listener to welcome users on click
const welcome = document.getElementById("landing");
console.log(welcome);
welcome.addEventListener("click", () => {
alert("the best pieces ever");
});

// adding event listener to display name of the art on hover
document.getElementById('wistlersMother').addEventListener('mouseover', ()=> {
  console.log("Whistler's Mother");
})
