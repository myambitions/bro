const imagesArray = ["1", "2", "3", "logo_1"];

const img = document.querySelector("img");
let i = 0;
imagesArray.forEach(image => {
  setTimeout(() => {
    img.src = `img/${image}.png`;
  }, 2000 * i);
  ++i;
});