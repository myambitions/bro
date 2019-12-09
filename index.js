const imagesArray = ["1", "2", "3", "logo_1", "info"];

const img = document.querySelector("img");
let i = 0;
imagesArray.forEach(image => {
  setTimeout(() => {
    img.src = `img/${image}.png`;
    img.dataset.id = image; // data-id=1,2,3,logo_1
  }, 2000 * i);
  ++i;
});