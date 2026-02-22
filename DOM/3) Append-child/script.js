let btn = document.querySelector("button");
let main = document.querySelector("main");

let arr = [
  "Believe in yourself.",
  "Keep moving forward.",
  "Dream big.",
  "Stay focused.",
  "Never give up.",
  "Work hard.",
  "Stay positive.",
  "Be fearless.",
  "Make it happen.",
  "Stay strong.",
  "Trust the process.",
  "Think big.",
  "Act now.",
  "Stay humble.",
  "Be consistent.",
  "Keep learning.",
  "Push limits.",
  "Embrace change.",
  "Create your future.",
  "You’ve got this.",
];

btn.addEventListener("click", function () {
  let x = Math.random() * 80;
  let y = Math.random() * 80;
  let rot = Math.random() * 350;
  let scl = Math.random() * 3
  let h1 = document.createElement("h1");
  let a = Math.floor(Math.random() * arr.length);

  h1.innerHTML = arr[a];
  h1.style.left = x + "%";
  h1.style.top = y + "%";
  h1.style.rotate = rot + "deg";
  h1.style.scale = scl
  main.appendChild(h1);
  h1.style.color = "white";
  h1.style.position = "absolute";
});