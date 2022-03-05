let body = document.getElementById("body");
let imageElement = document.createElement("img");
body.appendChild(imageElement);

function programmerHumor() {
  fetch("https://xkcd.now.sh/?comic=latest")
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      imageElement.src = response.img;
    });
}
programmerHumor();
