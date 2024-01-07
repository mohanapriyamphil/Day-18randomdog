const apiUrl =
  "https://api.thedogapi.com/v1/images/search?api_key=live_8NYL2jWMVqFpMuCmzs3M6O2uf7D0N7P2pdaZbfHOXPnD39YPsdj6QA8iGN7ktcf4";

const imageArea = document.getElementById("dog-image");

const overlayElement = document.getElementById("overlay");

const loadDogImage = ({ url }) => {
  const imgElement = document.getElementById("img-element");
  imgElement.src = url;
};

const sleepTime = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolved");
    });
  });

const getRandomDog = async () => {
  overlayElement.style.display = "flex";
  await sleepTime();
  const response = await fetch(apiUrl);
  const data = await response.json();
  //   console.log(data[0]["url"]);
  loadDogImage(data[0]);
  overlayElement.style.display = "none";
};

getRandomDog();
