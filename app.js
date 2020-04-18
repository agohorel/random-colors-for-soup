const btn = document.querySelector("button");
const color = document.querySelector(".color");
const smiley = document.querySelector("p");
const player = document.querySelector(".player");

btn.addEventListener("click", () => {
  color.style.backgroundImage = `linear-gradient(to bottom right, ${makeColor()}, ${makeColor()}, ${makeColor()})`;
  btn.style.backgroundColor = makeColor();
  smiley.style.color = makeColor();

  player.play();
});

function makeColor() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  return `rgb(${r},${g},${b})`;
}
