let count = 0;
let btn = document.querySelector("button");
let h2 = document.querySelector("h2");
let inner = document.querySelector(".inner");

btn.addEventListener("click", function () {
  btn.style.pointerEvents = "none";
  let num = 50 + Math.floor(Math.random()* 50)

  let int = setInterval(function () {
    count++;
    h2.innerHTML = count + "%";
    inner.style.width = count + "%";

    if (count >= 100) {
      clearInterval(int);
    }
  }, num);

  setTimeout(function () {
    clearInterval(int);
    btn.innerHTML = "Downloaded";
    btn.style.opacity = 0.5;
    console.log('Downloaded in', num/10, 'Seconds');
  }, num*100);
});


