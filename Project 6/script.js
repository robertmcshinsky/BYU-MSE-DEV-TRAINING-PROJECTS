let i = -1;
let q = [];
let a = [];
let timeframe = 10;
let gauge = 10;
let points;

//

function addCircle() {
  ++i;

  for (let k = 0; k < i + 1; ++k) {
    let rand = Math.floor(Math.random() * gauge);
    console.log(rand);
    let rand2 = Math.floor(Math.random() * gauge);
    q[k] = rand + " + " + rand2;
    a[k] = rand + rand2;
  }

  let theTime = setInterval(success, 60000);
  function fail() {
    clearInterval(theTime);
    let boom = document.createElement("img");
    boom.setAttribute("src", "boom.png");
    boom.setAttribute("id", "boom");
    document.querySelector("#game").innerHTML = "";
    document.querySelector("#game").appendChild(boom);
  }
  function success() {
    clearInterval(theTime);
    let boom = document.createElement("img");
    boom.setAttribute("src", "success.png");
    boom.setAttribute("id", "boom");
    document.querySelector("#game").innerHTML = "";
    document.querySelector("#game").appendChild(boom);
  }
  let circle = document.createElement("div");
  circle.setAttribute("id", "circle");
  circle.setAttribute("class", "circle" + i);
  circle.style.animationDuration = timeframe + "s";

  let topBomb = document.createElement("div");
  topBomb.setAttribute("id", "topBomb");
  topBomb.setAttribute("class", "topBomb");

  let fuse = document.createElement("div");
  fuse.setAttribute("id", "fuse");
  fuse.setAttribute("class", "fuse");

  let equation = document.createElement("h1");
  equation.setAttribute("id", "equation");
  equation.setAttribute("class", "equation" + i);
  equation.innerHTML = q[i];

  let text = document.createElement("input");
  text.setAttribute("type", "text");
  text.setAttribute("id", "text");
  text.addEventListener("keyup", function (event) {
    if (event.keyCode === 13 && document.getElementById("text").value == a[i]) {
      circle.setAttribute("class", "complete");
      document.querySelector("#game").innerHTML = "";
      gauge = gauge + 10;
      ++points;
      if (points % 2 == 0) {
        --timeframe;
      }
      addCircle();
    } else if (
      event.keyCode === 13 &&
      document.getElementById("text").value != a[i]
    ) {
      fail();
      console.log("WRONG");
    }
  });
  circle.appendChild(fuse);
  circle.appendChild(topBomb);
  circle.appendChild(equation);
  circle.appendChild(text);
  document.querySelector("#game").appendChild(circle).focus();
  document.getElementById("text").focus();
}

addCircle();
