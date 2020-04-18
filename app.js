const btn = document.querySelector("button");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  color.style.backgroundColor = makeColor();
  btn.style.backgroundColor = makeColor();
});

function makeColor() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  return `rgb(${r},${g},${b})`;
}
