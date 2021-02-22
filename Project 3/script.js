//! DECLARATION OF MAIN VARIABLES
let num = [0, 0, 0, 0];
let levelAdd = 0;
let levelSub = 0;
let j = 1;
let missingAdd;
let missingSub;
let correct = 0;
let incorrect = 0;

//! ADD CODE
document.getElementById("add").addEventListener("click", function add() {
  resetArray();
  let startNum = Math.floor(Math.random() * (20 * levelAdd) + 1);
  //* ADDS THE PREVIOUS NUMBER TO THE NEXT
  num[0] = startNum * 1;
  num[1] = num[0] * 2;
  num[2] = num[0] * 3;
  num[3] = num[0] * 4;
  missingAdd = num[1];
  //* PRINTS OUT H1 TAGS WITH THE NUMBERS IN THEM
  for (let i = 0; i < 4; ++i) {
    if (i == 1) {
      document
        .getElementById("answersAdd")
        .insertAdjacentHTML(
          "beforeend",
          '<input value="" placeholder=" Enter" type="number" id="checkAdd"></input>'
        );
    } else {
      document
        .getElementById("answersAdd")
        .insertAdjacentHTML("beforeend", "<h1>" + num[i] + "</h1>");
    }
  }

  levelAdd++;

  document.getElementById("add").innerHTML = "Addition<br>Level: " + levelAdd;
  i = 0;

  document.getElementById("add").addEventListener("mousedown", function () {
    document.getElementById("answersAdd").innerText = "";
  });

  ////
  let input = document.getElementById("checkAdd");

  input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();

      checkAnswerAdd();
      totals();
    }
  });
});

//! SUBTRACT CODE
document.getElementById("sub").addEventListener("click", function () {
  resetArray();
  let startNum = Math.floor(Math.random() * 10 + 1);

  //* REASSIGNING VARIABLES
  num[0] = startNum * j + 12;
  num[1] = num[0] + startNum * j;
  num[2] = num[1] + startNum * j;
  num[3] = num[2] + startNum * j;
  let one = num[3];
  let two = num[2];
  let three = num[1];
  let four = num[0];
  num[3] = four;
  num[2] = three;
  num[1] = two;
  num[0] = one;
  missingSub = two;
  for (let i = 0; i < 4; ++i) {
    if (i == 1) {
      document
        .getElementById("answersSub")
        .insertAdjacentHTML(
          "beforeend",
          '<input type="number" placeholder=" Enter" id="checkSub"></input>'
        );
    } else {
      document
        .getElementById("answersSub")
        .insertAdjacentHTML("beforeend", "<h1>" + num[i] + "</h1>");
    }
  }

  //* RESET THE ARRAY

  ++levelSub;

  document.getElementById("sub").innerHTML =
    "Subtraction<br>Level: " + levelSub;
  i = 0;
  ++j;
  document.getElementById("sub").addEventListener("mousedown", function () {
    document.getElementById("answersSub").innerText = "";
  });

  let input = document.getElementById("checkSub");
  input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      checkAnswerSub();
      totals();
    }
  });
});

function resetArray() {
  num[0] = 0;
  num[1] = 0;
  num[2] = 0;
  num[3] = 0;
}
function checkAnswerAdd() {
  let testerAdd = parseInt(document.getElementById("checkAdd").value);
  console.log(testerAdd + " ADD");
  if (missingAdd === testerAdd) {
    console.log(missingAdd + " " + num[1]);
    ++correct;
    alert("Correct");
    return 0;
  } else {
    ++incorrect;
    alert("Incorrect");
  }
}
function checkAnswerSub() {
  let testerSub = parseInt(document.getElementById("checkSub").value);
  console.log(testerSub + " SUB");
  if (missingSub === testerSub) {
    console.log(missingAdd + " " + num[1]);
    ++correct;
    alert("Correct");
    return 0;
  } else {
    ++incorrect;
    alert("Incorrect");
  }
}

function totals() {
  document.getElementById("CIC").innerHTML =
    "<h1 id='scores'>You have " +
    correct +
    " correct answers!<br>You have " +
    incorrect +
    " incorrect answers!";
}
