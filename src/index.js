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
gir 
document.getElementById('wistlersMother').addEventListener('mouseover', ()=> {
  console.log("Whistler's Mother");
})
// Adding like functionality 
const likeButton = document.getElementById('like-button');
const likeCountElement = document.getElementById('like-count');

let likeCount = JSON.parse(localStorage.getItem('likeCount')) || 0;
likeCountElement.innerText = likeCount;

likeButton.addEventListener('click', () => {
  likeCount++;
  likeCountElement.innerText = likeCount;
  localStorage.setItem('likeCount', JSON.stringify(likeCount));
});