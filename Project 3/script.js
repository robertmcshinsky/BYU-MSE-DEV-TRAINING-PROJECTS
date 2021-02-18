let num = [0, 0, 0, 0];
let num2 = [0, 0, 0, 0];

let levelAdd = 1,
  j = 1,
  m = 1,
  p = 0;

//! ADD CODE
document.getElementById("add").addEventListener("click", function () {
  let startNum = Math.floor(Math.random() * 20 + 1);
  for (let i = 0; i < 4; ++i) {
    //* ADDS THE PREVIOUS NUMBER TO THE NEXT
    for (let q = 0; q < 4; ++q) {
      num[q] = num[0] + startNum * levelAdd;
    }
    if (i == 2) {
      document
        .getElementById("answersAdd")
        .insertAdjacentHTML("beforeend", "<h1>_</h1>");
    } else {
      document
        .getElementById("answersAdd")
        .insertAdjacentHTML("beforeend", "<h1>" + num[i] + "</h1>");
    }
  }
  //* RESET THE ARRAY
  num[0] = 0;
  num[1] = 0;
  num[2] = 0;
  num[3] = 0;

  document.getElementById("add").innerHTML = "Harder";
  i = 0;
  levelAdd++;
  document.getElementById("add").addEventListener("mousedown", function () {
    document.getElementById("answersAdd").innerText = "";
  });
});

//! SUBTRACT CODE
document.getElementById("sub").addEventListener("click", function () {
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

  for (let i = 0; i < 4; ++i) {
    if (i == 2) {
      document
        .getElementById("answersSub")
        .insertAdjacentHTML("beforeend", "<h1>_</h1>");
    } else {
      document
        .getElementById("answersSub")
        .insertAdjacentHTML("beforeend", "<h1>" + num[i] + "</h1>");
    }
  }
  //* RESET THE ARRAY
  num[0] = 0;
  num[1] = 0;
  num[2] = 0;
  num[3] = 0;

  document.getElementById("sub").innerHTML = "Harder";
  i = 0;
  ++j;
  document.getElementById("sub").addEventListener("mousedown", function () {
    document.getElementById("answersSub").innerText = "";
  });
});

/*
document.getElementById("sub").addEventListener("click", function () {
  for (let i = 0; i < 4; ++i) {
    num[i] = i;

    if (i == 2) {
      document
        .getElementById("answersSub")
        .insertAdjacentHTML("beforeend", "<h1>_</h1>");
    } else {
      document
        .getElementById("answersSub")
        .insertAdjacentHTML("beforeend", "<h1>" + (num[i] + 1) * j + "</h1>");
    }
  }
  document.getElementById("sub").innerHTML = "Harder";
  i = 0;
  j = j * 2;
  document.getElementById("sub").addEventListener("mousedown", function () {
    document.getElementById("answersSub").innerText = "";
  });
});
*/
