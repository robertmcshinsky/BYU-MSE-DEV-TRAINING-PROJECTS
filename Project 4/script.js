// TIC TAC TOE

let score = [];
let xScore = [];
let oScore = [];
let size = 200;
let grabbed = false;
let xCoords, yCoords;

for (let i = 0; i < 9; ++i) {
  let box = document.createElement("div");
  box.setAttribute("id", "box" + i);
  box.setAttribute("class", "box");
  box.style.width = size + "px";
  box.style.height = size + "px";
  box.style.border = "2px solid black";
  box.style.borderRadius = "20px";
  box.style.padding = "20px";
  document.querySelector("#ticTacToe").appendChild(box);
}

let x, o;
let boxes = 5;
for (let k = 0; k < boxes; ++k) {
  x = document.createElement("div");
  o = document.createElement("div");

  x.setAttribute("id", "x" + k);
  x.setAttribute("class", "x" + k + " x");
  x.innerHTML = "<img src='x.png' />";
  x.style.height = size + "px";
  x.style.width = size + "px";
  x.style.fontSize = size - 50 + "px";
  o.setAttribute("id", "o" + k);
  o.setAttribute("class", "o" + k + " o");
  o.innerHTML = "<img src='o.png' />";
  o.style.height = size + "px";
  o.style.width = size + "px";
  o.style.fontSize = size - 50 + "px";
  document.querySelector("#forX").appendChild(x);
  document.querySelector("#forO").appendChild(o);

  let myO = document.querySelector(".o" + k);
  let myX = document.querySelector(".x" + k);

  // MOVE ELEMENT TO NEW LOCATION
  myO.addEventListener("mousedown", function () {
    console.log("GrabbedY");
    console.log(grabbed);
    grabbed = true;
    myO.addEventListener("mouseout", function (event) {
      xCoords = event.pageX;
      yCoords = event.pageY;
      console.log("L: " + xCoords + " T: " + yCoords);

      if (grabbed === true && xCoords < 350 && yCoords < 340) {
        document.querySelector("#box0").appendChild(myO);
        oScore[0] = true;
        checkScores();
        grabbed = false;
      } else if (grabbed === true && xCoords < 650 && yCoords < 340) {
        document.querySelector("#box1").appendChild(myO);
        oScore[1] = true;
        checkScores();
        grabbed = false;
      } else if (grabbed === true && xCoords < 950 && yCoords < 340) {
        document.querySelector("#box2").appendChild(myO);
        oScore[2] = true;
        checkScores();
        grabbed = false;
      } else if (grabbed === true && xCoords < 350 && yCoords < 590) {
        document.querySelector("#box3").appendChild(myO);
        oScore[3] = true;
        checkScores();
        grabbed = false;
      } else if (grabbed === true && xCoords < 650 && yCoords < 590) {
        document.querySelector("#box4").appendChild(myO);
        oScore[4] = true;
        checkScores();
        grabbed = false;
      } else if (grabbed === true && xCoords < 950 && yCoords < 590) {
        document.querySelector("#box5").appendChild(myO);
        oScore[5] = true;
        checkScores();
        grabbed = false;
      } else if (grabbed === true && xCoords < 350 && yCoords < 840) {
        document.querySelector("#box6").appendChild(myO);
        oScore[6] = true;
        checkScores();
        grabbed = false;
      } else if (grabbed === true && xCoords < 650 && yCoords < 840) {
        document.querySelector("#box7").appendChild(myO);
        oScore[7] = true;
        checkScores();
        grabbed = false;
      } else if (grabbed === true && xCoords < 950 && yCoords < 840) {
        document.querySelector("#box8").appendChild(myO);
        oScore[8] = true;
        checkScores();
        grabbed = false;
      }
      grabbed = false;
    });
    myO.addEventListener("mouseup", function (event) {
      console.log("Up");
    });
  });
  myX.addEventListener("mousedown", function () {
    console.log("GrabbedY");
    console.log(grabbed);
    grabbed = true;
    myX.addEventListener("mouseout", function (event) {
      xCoords = event.pageX;
      yCoords = event.pageY;
      console.log("L: " + xCoords + " T: " + yCoords);

      if (grabbed === true && xCoords < 350 && yCoords < 340) {
        document.querySelector("#box0").appendChild(myX);
        xScore[0] = true;
        checkScores();
        grabbed = false;
      } else if (grabbed === true && xCoords < 650 && yCoords < 340) {
        document.querySelector("#box1").appendChild(myX);
        xScore[1] = true;
        checkScores();
        grabbed = false;
      } else if (grabbed === true && xCoords < 950 && yCoords < 340) {
        document.querySelector("#box2").appendChild(myX);
        xScore[2] = true;
        checkScores();
        grabbed = false;
      } else if (grabbed === true && xCoords < 350 && yCoords < 590) {
        document.querySelector("#box3").appendChild(myX);
        xScore[3] = true;
        checkScores();
        grabbed = false;
      } else if (grabbed === true && xCoords < 650 && yCoords < 590) {
        document.querySelector("#box4").appendChild(myX);
        xScore[4] = true;
        checkScores();
        grabbed = false;
      } else if (grabbed === true && xCoords < 950 && yCoords < 590) {
        document.querySelector("#box5").appendChild(myX);
        xScore[5] = true;
        checkScores();
        grabbed = false;
      } else if (grabbed === true && xCoords < 350 && yCoords < 840) {
        document.querySelector("#box6").appendChild(myX);
        xScore[6] = true;
        checkScores();
        grabbed = false;
      } else if (grabbed === true && xCoords < 650 && yCoords < 840) {
        document.querySelector("#box7").appendChild(myX);
        xScore[7] = true;
        checkScores();
        grabbed = false;
      } else if (grabbed === true && xCoords < 950 && yCoords < 840) {
        document.querySelector("#box8").appendChild(myX);
        xScore[8] = true;
        checkScores();

        grabbed = false;
      }
      grabbed = false;
    });
    myO.addEventListener("mouseup", function (event) {
      console.log("Up");
    });
  });
}

function checkScores() {
  //Check Scores
  if (xScore[0] === true && xScore[1] === true && xScore[2] === true) {
    alert("X Won!");
  } else if (xScore[3] === true && xScore[4] === true && xScore[5] === true) {
    alert("X Won!");
  } else if (xScore[6] === true && xScore[7] === true && xScore[8] === true) {
    alert("X Won!");
  } else if (xScore[0] === true && xScore[4] === true && xScore[8] === true) {
    alert("X Won!");
  } else if (xScore[2] === true && xScore[4] === true && xScore[6] === true) {
    alert("X Won!");
  } else if (xScore[0] === true && xScore[3] === true && xScore[6] === true) {
    alert("X Won!");
  } else if (xScore[1] === true && xScore[4] === true && xScore[7] === true) {
    alert("X Won!");
  } else if (xScore[2] === true && xScore[5] === true && xScore[8] === true) {
    alert("X Won!");
  } else if (oScore[0] === true && oScore[1] === true && oScore[2] === true) {
    alert("O Won!");
  } else if (oScore[3] === true && oScore[4] === true && oScore[5] === true) {
    alert("O Won!");
  } else if (oScore[6] === true && oScore[7] === true && oScore[8] === true) {
    alert("O Won!");
  } else if (oScore[0] === true && oScore[4] === true && oScore[8] === true) {
    alert("O Won!");
  } else if (oScore[2] === true && oScore[4] === true && oScore[6] === true) {
    alert("O Won!");
  } else if (oScore[0] === true && oScore[3] === true && oScore[6] === true) {
    alert("O Won!");
  } else if (oScore[1] === true && oScore[4] === true && oScore[7] === true) {
    alert("O Won!");
  } else if (oScore[2] === true && oScore[5] === true && oScore[8] === true) {
    alert("O Won!");
  }
}
