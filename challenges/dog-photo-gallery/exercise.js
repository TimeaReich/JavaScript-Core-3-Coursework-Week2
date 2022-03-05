let button = document.getElementById("button");
let body = document.getElementById("body");
let list = document.getElementById("list");
let liElement = document.createElement("li");
liElement.style.listStyleType = "none";

button.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((response) => {
      liElement.innerHTML = "";
      let imageElement = document.createElement("img");
      imageElement.src = response.message;
      imageElement.style.width = "350px";
      list.appendChild(liElement);
      liElement.appendChild(imageElement);
    })
    .catch((err) => console.log(err));
});
