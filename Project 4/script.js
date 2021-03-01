function moveX1(event) {
  let x1 = document.getElementById("x1");
  let body = document.getElementById("body");

  //

  x1.addEventListener("mousedown", function () {
    //! Pick up x
    console.log("Picked Up");
    x1.addEventListener("mouseup", function () {
      return 0;
    });
    x1.addEventListener("mouseout", function (event) {
      //! Leave x in a div
      let xCoords = event.pageX;
      let yCoords = event.pageY;
      console.log("Placed");
      console.log("LEFT: " + xCoords + "  TOP: " + yCoords);
      //! locked into the box
      let size = 125;
      let t1X = 600;
      let t2X = 750;
      let t3X = 900;
      let t4X = 600;
      let t5X = 750;
      let t6X = 900;
      let t7X = 600;
      let t8X = 750;
      let t9X = 900;
      let t1Y = 200;
      let t2Y = 200;
      let t3Y = 200;
      let t4Y = 350;
      let t5Y = 350;
      let t6Y = 350;
      let t7Y = 500;
      let t8Y = 500;
      let t9Y = 500;
      if (
        xCoords > t1X &&
        xCoords < t1X + size &&
        yCoords > t1Y &&
        yCoords < t1Y + size
      ) {
        xCoords = t1X;
        yCoords = t1Y;
      } else if (
        xCoords > t2X &&
        xCoords < t2X + size &&
        yCoords > t2Y &&
        yCoords < t2Y + size
      ) {
        xCoords = t2X;
        yCoords = t2Y;
      } else if (
        xCoords > t3X &&
        xCoords < t3X + size &&
        yCoords > t3Y &&
        yCoords < t3Y + size
      ) {
        xCoords = t3X;
        yCoords = t3Y;
      } else if (
        xCoords > t4X &&
        xCoords < t4X + size &&
        yCoords > t4Y &&
        yCoords < t4Y + size
      ) {
        xCoords = t4X;
        yCoords = t4Y;
      } else if (
        xCoords > t5X &&
        xCoords < t5X + size &&
        yCoords > t5Y &&
        yCoords < t5Y + size
      ) {
        xCoords = t5X;
        yCoords = t5Y;
      } else if (
        xCoords > t6X &&
        xCoords < t6X + size &&
        yCoords > t6Y &&
        yCoords < t6Y + size
      ) {
        xCoords = t6X;
        yCoords = t6Y;
      } else if (
        xCoords > t7X &&
        xCoords < t7X + size &&
        yCoords > t7Y &&
        yCoords < t7Y + size
      ) {
        xCoords = t7X;
        yCoords = t7Y;
      } else if (
        xCoords > t8X &&
        xCoords < t8X + size &&
        yCoords > t8Y &&
        yCoords < t8Y + size
      ) {
        xCoords = t8X;
        yCoords = t8Y;
      } else if (
        xCoords > t9X &&
        xCoords < t9X + size &&
        yCoords > t9Y &&
        yCoords < t9Y + size
      ) {
        xCoords = t9X;
        yCoords = t9Y;
      } else {
        xCoords = 685;
        yCoords = 25;
        alert("Oops, please place the piece inside one of the boxes");
      }
      console.log(xCoords + " : " + yCoords);
      x1.style.marginLeft = xCoords + 15 + "px";
      x1.style.marginTop = yCoords + 25 + "px";
    });
  });
}
function moveX2(event) {
  let x2 = document.getElementById("x2");
  let body = document.getElementById("body");

  //

  x2.addEventListener("mousedown", function () {
    //! Pick up x
    console.log("Picked Up");
    x2.addEventListener("mouseup", function () {
      return 0;
    });
    x2.addEventListener("mouseout", function (event) {
      //! Leave x in a div
      let xCoords = event.pageX;
      let yCoords = event.pageY;
      console.log("Placed");
      console.log("LEFT: " + xCoords + "  TOP: " + yCoords);
      //! locked into the box
      let size = 125;
      let t1X = 600;
      let t2X = 750;
      let t3X = 900;
      let t4X = 600;
      let t5X = 750;
      let t6X = 900;
      let t7X = 600;
      let t8X = 750;
      let t9X = 900;
      let t1Y = 200;
      let t2Y = 200;
      let t3Y = 200;
      let t4Y = 350;
      let t5Y = 350;
      let t6Y = 350;
      let t7Y = 500;
      let t8Y = 500;
      let t9Y = 500;
      if (
        xCoords > t1X &&
        xCoords < t1X + size &&
        yCoords > t1Y &&
        yCoords < t1Y + size
      ) {
        xCoords = t1X;
        yCoords = t1Y;
      } else if (
        xCoords > t2X &&
        xCoords < t2X + size &&
        yCoords > t2Y &&
        yCoords < t2Y + size
      ) {
        xCoords = t2X;
        yCoords = t2Y;
      } else if (
        xCoords > t3X &&
        xCoords < t3X + size &&
        yCoords > t3Y &&
        yCoords < t3Y + size
      ) {
        xCoords = t3X;
        yCoords = t3Y;
      } else if (
        xCoords > t4X &&
        xCoords < t4X + size &&
        yCoords > t4Y &&
        yCoords < t4Y + size
      ) {
        xCoords = t4X;
        yCoords = t4Y;
      } else if (
        xCoords > t5X &&
        xCoords < t5X + size &&
        yCoords > t5Y &&
        yCoords < t5Y + size
      ) {
        xCoords = t5X;
        yCoords = t5Y;
      } else if (
        xCoords > t6X &&
        xCoords < t6X + size &&
        yCoords > t6Y &&
        yCoords < t6Y + size
      ) {
        xCoords = t6X;
        yCoords = t6Y;
      } else if (
        xCoords > t7X &&
        xCoords < t7X + size &&
        yCoords > t7Y &&
        yCoords < t7Y + size
      ) {
        xCoords = t7X;
        yCoords = t7Y;
      } else if (
        xCoords > t8X &&
        xCoords < t8X + size &&
        yCoords > t8Y &&
        yCoords < t8Y + size
      ) {
        xCoords = t8X;
        yCoords = t8Y;
      } else if (
        xCoords > t9X &&
        xCoords < t9X + size &&
        yCoords > t9Y &&
        yCoords < t9Y + size
      ) {
        xCoords = t9X;
        yCoords = t9Y;
      } else {
        xCoords = 685;
        yCoords = 25;
        alert("Oops, please place the piece inside one of the boxes");
      }
      console.log(xCoords + " : " + yCoords);
      x2.style.marginLeft = xCoords + 15 + "px";
      x2.style.marginTop = yCoords + 25 + "px";
    });
  });
}
function moveX3(event) {
  let x3 = document.getElementById("x3");
  let body = document.getElementById("body");

  //

  x3.addEventListener("mousedown", function () {
    //! Pick up x
    console.log("Picked Up");
    x3.addEventListener("mouseup", function () {
      return 0;
    });
    x3.addEventListener("mouseout", function (event) {
      //! Leave x in a div
      let xCoords = event.pageX;
      let yCoords = event.pageY;
      console.log("Placed");
      console.log("LEFT: " + xCoords + "  TOP: " + yCoords);
      //! locked into the box
      let size = 125;
      let t1X = 600;
      let t2X = 750;
      let t3X = 900;
      let t4X = 600;
      let t5X = 750;
      let t6X = 900;
      let t7X = 600;
      let t8X = 750;
      let t9X = 900;
      let t1Y = 200;
      let t2Y = 200;
      let t3Y = 200;
      let t4Y = 350;
      let t5Y = 350;
      let t6Y = 350;
      let t7Y = 500;
      let t8Y = 500;
      let t9Y = 500;
      if (
        xCoords > t1X &&
        xCoords < t1X + size &&
        yCoords > t1Y &&
        yCoords < t1Y + size
      ) {
        xCoords = t1X;
        yCoords = t1Y;
      } else if (
        xCoords > t2X &&
        xCoords < t2X + size &&
        yCoords > t2Y &&
        yCoords < t2Y + size
      ) {
        xCoords = t2X;
        yCoords = t2Y;
      } else if (
        xCoords > t3X &&
        xCoords < t3X + size &&
        yCoords > t3Y &&
        yCoords < t3Y + size
      ) {
        xCoords = t3X;
        yCoords = t3Y;
      } else if (
        xCoords > t4X &&
        xCoords < t4X + size &&
        yCoords > t4Y &&
        yCoords < t4Y + size
      ) {
        xCoords = t4X;
        yCoords = t4Y;
      } else if (
        xCoords > t5X &&
        xCoords < t5X + size &&
        yCoords > t5Y &&
        yCoords < t5Y + size
      ) {
        xCoords = t5X;
        yCoords = t5Y;
      } else if (
        xCoords > t6X &&
        xCoords < t6X + size &&
        yCoords > t6Y &&
        yCoords < t6Y + size
      ) {
        xCoords = t6X;
        yCoords = t6Y;
      } else if (
        xCoords > t7X &&
        xCoords < t7X + size &&
        yCoords > t7Y &&
        yCoords < t7Y + size
      ) {
        xCoords = t7X;
        yCoords = t7Y;
      } else if (
        xCoords > t8X &&
        xCoords < t8X + size &&
        yCoords > t8Y &&
        yCoords < t8Y + size
      ) {
        xCoords = t8X;
        yCoords = t8Y;
      } else if (
        xCoords > t9X &&
        xCoords < t9X + size &&
        yCoords > t9Y &&
        yCoords < t9Y + size
      ) {
        xCoords = t9X;
        yCoords = t9Y;
      } else {
        xCoords = 685;
        yCoords = 25;
        alert("Oops, please place the piece inside one of the boxes");
      }
      console.log(xCoords + " : " + yCoords);
      x3.style.marginLeft = xCoords + 15 + "px";
      x3.style.marginTop = yCoords + 25 + "px";
    });
  });
}
function moveX4(event) {
  let x4 = document.getElementById("x4");
  let body = document.getElementById("body");

  //

  x4.addEventListener("mousedown", function () {
    //! Pick up x
    console.log("Picked Up");
    x4.addEventListener("mouseup", function () {
      return 0;
    });
    x4.addEventListener("mouseout", function (event) {
      //! Leave x in a div
      let xCoords = event.pageX;
      let yCoords = event.pageY;
      console.log("Placed");
      console.log("LEFT: " + xCoords + "  TOP: " + yCoords);
      //! locked into the box
      let size = 125;
      let t1X = 600;
      let t2X = 750;
      let t3X = 900;
      let t4X = 600;
      let t5X = 750;
      let t6X = 900;
      let t7X = 600;
      let t8X = 750;
      let t9X = 900;
      let t1Y = 200;
      let t2Y = 200;
      let t3Y = 200;
      let t4Y = 350;
      let t5Y = 350;
      let t6Y = 350;
      let t7Y = 500;
      let t8Y = 500;
      let t9Y = 500;
      if (
        xCoords > t1X &&
        xCoords < t1X + size &&
        yCoords > t1Y &&
        yCoords < t1Y + size
      ) {
        xCoords = t1X;
        yCoords = t1Y;
      } else if (
        xCoords > t2X &&
        xCoords < t2X + size &&
        yCoords > t2Y &&
        yCoords < t2Y + size
      ) {
        xCoords = t2X;
        yCoords = t2Y;
      } else if (
        xCoords > t3X &&
        xCoords < t3X + size &&
        yCoords > t3Y &&
        yCoords < t3Y + size
      ) {
        xCoords = t3X;
        yCoords = t3Y;
      } else if (
        xCoords > t4X &&
        xCoords < t4X + size &&
        yCoords > t4Y &&
        yCoords < t4Y + size
      ) {
        xCoords = t4X;
        yCoords = t4Y;
      } else if (
        xCoords > t5X &&
        xCoords < t5X + size &&
        yCoords > t5Y &&
        yCoords < t5Y + size
      ) {
        xCoords = t5X;
        yCoords = t5Y;
      } else if (
        xCoords > t6X &&
        xCoords < t6X + size &&
        yCoords > t6Y &&
        yCoords < t6Y + size
      ) {
        xCoords = t6X;
        yCoords = t6Y;
      } else if (
        xCoords > t7X &&
        xCoords < t7X + size &&
        yCoords > t7Y &&
        yCoords < t7Y + size
      ) {
        xCoords = t7X;
        yCoords = t7Y;
      } else if (
        xCoords > t8X &&
        xCoords < t8X + size &&
        yCoords > t8Y &&
        yCoords < t8Y + size
      ) {
        xCoords = t8X;
        yCoords = t8Y;
      } else if (
        xCoords > t9X &&
        xCoords < t9X + size &&
        yCoords > t9Y &&
        yCoords < t9Y + size
      ) {
        xCoords = t9X;
        yCoords = t9Y;
      } else {
        xCoords = 685;
        yCoords = 25;
        alert("Oops, please place the piece inside one of the boxes");
      }
      console.log(xCoords + " : " + yCoords);
      x4.style.marginLeft = xCoords + 15 + "px";
      x4.style.marginTop = yCoords + 25 + "px";
    });
  });
}
function moveX5(event) {
  let x5 = document.getElementById("x5");
  let body = document.getElementById("body");

  //

  x5.addEventListener("mousedown", function () {
    //! Pick up x
    console.log("Picked Up");
    x5.addEventListener("mouseup", function () {
      return 0;
    });
    x5.addEventListener("mouseout", function (event) {
      //! Leave x in a div
      let xCoords = event.pageX;
      let yCoords = event.pageY;
      console.log("Placed");
      console.log("LEFT: " + xCoords + "  TOP: " + yCoords);
      //! locked into the box
      let size = 125;
      let t1X = 600;
      let t2X = 750;
      let t3X = 900;
      let t4X = 600;
      let t5X = 750;
      let t6X = 900;
      let t7X = 600;
      let t8X = 750;
      let t9X = 900;
      let t1Y = 200;
      let t2Y = 200;
      let t3Y = 200;
      let t4Y = 350;
      let t5Y = 350;
      let t6Y = 350;
      let t7Y = 500;
      let t8Y = 500;
      let t9Y = 500;
      if (
        xCoords > t1X &&
        xCoords < t1X + size &&
        yCoords > t1Y &&
        yCoords < t1Y + size
      ) {
        xCoords = t1X;
        yCoords = t1Y;
      } else if (
        xCoords > t2X &&
        xCoords < t2X + size &&
        yCoords > t2Y &&
        yCoords < t2Y + size
      ) {
        xCoords = t2X;
        yCoords = t2Y;
      } else if (
        xCoords > t3X &&
        xCoords < t3X + size &&
        yCoords > t3Y &&
        yCoords < t3Y + size
      ) {
        xCoords = t3X;
        yCoords = t3Y;
      } else if (
        xCoords > t4X &&
        xCoords < t4X + size &&
        yCoords > t4Y &&
        yCoords < t4Y + size
      ) {
        xCoords = t4X;
        yCoords = t4Y;
      } else if (
        xCoords > t5X &&
        xCoords < t5X + size &&
        yCoords > t5Y &&
        yCoords < t5Y + size
      ) {
        xCoords = t5X;
        yCoords = t5Y;
      } else if (
        xCoords > t6X &&
        xCoords < t6X + size &&
        yCoords > t6Y &&
        yCoords < t6Y + size
      ) {
        xCoords = t6X;
        yCoords = t6Y;
      } else if (
        xCoords > t7X &&
        xCoords < t7X + size &&
        yCoords > t7Y &&
        yCoords < t7Y + size
      ) {
        xCoords = t7X;
        yCoords = t7Y;
      } else if (
        xCoords > t8X &&
        xCoords < t8X + size &&
        yCoords > t8Y &&
        yCoords < t8Y + size
      ) {
        xCoords = t8X;
        yCoords = t8Y;
      } else if (
        xCoords > t9X &&
        xCoords < t9X + size &&
        yCoords > t9Y &&
        yCoords < t9Y + size
      ) {
        xCoords = t9X;
        yCoords = t9Y;
      } else {
        xCoords = 685;
        yCoords = 25;
        alert("Oops, please place the piece inside one of the boxes");
      }
      console.log(xCoords + " : " + yCoords);
      x5.style.marginLeft = xCoords + 15 + "px";
      x5.style.marginTop = yCoords + 25 + "px";
    });
  });
}
function moveO1(event) {
  let o1 = document.getElementById("o1");
  let body = document.getElementById("body");

  //

  o1.addEventListener("mousedown", function () {
    //! Pick up x
    console.log("Picked Up");
    o1.addEventListener("mouseup", function () {
      return 0;
    });
    o1.addEventListener("mouseout", function (event) {
      //! Leave x in a div
      let xCoords = event.pageX;
      let yCoords = event.pageY;
      console.log("Placed");
      console.log("LEFT: " + xCoords + "  TOP: " + yCoords);
      //! locked into the box
      let size = 125;
      let t1X = 600;
      let t2X = 750;
      let t3X = 900;
      let t4X = 600;
      let t5X = 750;
      let t6X = 900;
      let t7X = 600;
      let t8X = 750;
      let t9X = 900;
      let t1Y = 200;
      let t2Y = 200;
      let t3Y = 200;
      let t4Y = 350;
      let t5Y = 350;
      let t6Y = 350;
      let t7Y = 500;
      let t8Y = 500;
      let t9Y = 500;
      if (
        xCoords > t1X &&
        xCoords < t1X + size &&
        yCoords > t1Y &&
        yCoords < t1Y + size
      ) {
        xCoords = t1X;
        yCoords = t1Y;
      } else if (
        xCoords > t2X &&
        xCoords < t2X + size &&
        yCoords > t2Y &&
        yCoords < t2Y + size
      ) {
        xCoords = t2X;
        yCoords = t2Y;
      } else if (
        xCoords > t3X &&
        xCoords < t3X + size &&
        yCoords > t3Y &&
        yCoords < t3Y + size
      ) {
        xCoords = t3X;
        yCoords = t3Y;
      } else if (
        xCoords > t4X &&
        xCoords < t4X + size &&
        yCoords > t4Y &&
        yCoords < t4Y + size
      ) {
        xCoords = t4X;
        yCoords = t4Y;
      } else if (
        xCoords > t5X &&
        xCoords < t5X + size &&
        yCoords > t5Y &&
        yCoords < t5Y + size
      ) {
        xCoords = t5X;
        yCoords = t5Y;
      } else if (
        xCoords > t6X &&
        xCoords < t6X + size &&
        yCoords > t6Y &&
        yCoords < t6Y + size
      ) {
        xCoords = t6X;
        yCoords = t6Y;
      } else if (
        xCoords > t7X &&
        xCoords < t7X + size &&
        yCoords > t7Y &&
        yCoords < t7Y + size
      ) {
        xCoords = t7X;
        yCoords = t7Y;
      } else if (
        xCoords > t8X &&
        xCoords < t8X + size &&
        yCoords > t8Y &&
        yCoords < t8Y + size
      ) {
        xCoords = t8X;
        yCoords = t8Y;
      } else if (
        xCoords > t9X &&
        xCoords < t9X + size &&
        yCoords > t9Y &&
        yCoords < t9Y + size
      ) {
        xCoords = t9X;
        yCoords = t9Y;
      } else {
        xCoords = 835;
        yCoords = 25;
        alert("Oops, please place the piece inside one of the boxes");
      }
      console.log(xCoords + " : " + yCoords);
      o1.style.marginLeft = xCoords + 15 + "px";
      o1.style.marginTop = yCoords + 25 + "px";
    });
  });
}
function moveO2(event) {
  let x2 = document.getElementById("o2");
  let body = document.getElementById("body");

  //

  x2.addEventListener("mousedown", function () {
    //! Pick up x
    console.log("Picked Up");
    x2.addEventListener("mouseup", function () {
      return 0;
    });
    x2.addEventListener("mouseout", function (event) {
      //! Leave x in a div
      let xCoords = event.pageX;
      let yCoords = event.pageY;
      console.log("Placed");
      console.log("LEFT: " + xCoords + "  TOP: " + yCoords);
      //! locked into the box
      let size = 125;
      let t1X = 600;
      let t2X = 750;
      let t3X = 900;
      let t4X = 600;
      let t5X = 750;
      let t6X = 900;
      let t7X = 600;
      let t8X = 750;
      let t9X = 900;
      let t1Y = 200;
      let t2Y = 200;
      let t3Y = 200;
      let t4Y = 350;
      let t5Y = 350;
      let t6Y = 350;
      let t7Y = 500;
      let t8Y = 500;
      let t9Y = 500;
      if (
        xCoords > t1X &&
        xCoords < t1X + size &&
        yCoords > t1Y &&
        yCoords < t1Y + size
      ) {
        xCoords = t1X;
        yCoords = t1Y;
      } else if (
        xCoords > t2X &&
        xCoords < t2X + size &&
        yCoords > t2Y &&
        yCoords < t2Y + size
      ) {
        xCoords = t2X;
        yCoords = t2Y;
      } else if (
        xCoords > t3X &&
        xCoords < t3X + size &&
        yCoords > t3Y &&
        yCoords < t3Y + size
      ) {
        xCoords = t3X;
        yCoords = t3Y;
      } else if (
        xCoords > t4X &&
        xCoords < t4X + size &&
        yCoords > t4Y &&
        yCoords < t4Y + size
      ) {
        xCoords = t4X;
        yCoords = t4Y;
      } else if (
        xCoords > t5X &&
        xCoords < t5X + size &&
        yCoords > t5Y &&
        yCoords < t5Y + size
      ) {
        xCoords = t5X;
        yCoords = t5Y;
      } else if (
        xCoords > t6X &&
        xCoords < t6X + size &&
        yCoords > t6Y &&
        yCoords < t6Y + size
      ) {
        xCoords = t6X;
        yCoords = t6Y;
      } else if (
        xCoords > t7X &&
        xCoords < t7X + size &&
        yCoords > t7Y &&
        yCoords < t7Y + size
      ) {
        xCoords = t7X;
        yCoords = t7Y;
      } else if (
        xCoords > t8X &&
        xCoords < t8X + size &&
        yCoords > t8Y &&
        yCoords < t8Y + size
      ) {
        xCoords = t8X;
        yCoords = t8Y;
      } else if (
        xCoords > t9X &&
        xCoords < t9X + size &&
        yCoords > t9Y &&
        yCoords < t9Y + size
      ) {
        xCoords = t9X;
        yCoords = t9Y;
      } else {
        xCoords = 835;
        yCoords = 25;
        alert("Oops, please place the piece inside one of the boxes");
      }
      console.log(xCoords + " : " + yCoords);
      o2.style.marginLeft = xCoords + 15 + "px";
      o2.style.marginTop = yCoords + 25 + "px";
    });
  });
}
function moveO3(event) {
  let o3 = document.getElementById("o3");
  let body = document.getElementById("body");

  //

  o3.addEventListener("mousedown", function () {
    //! Pick up x
    console.log("Picked Up");
    o3.addEventListener("mouseup", function () {
      return 0;
    });
    o3.addEventListener("mouseout", function (event) {
      //! Leave x in a div
      let xCoords = event.pageX;
      let yCoords = event.pageY;
      console.log("Placed");
      console.log("LEFT: " + xCoords + "  TOP: " + yCoords);
      //! locked into the box
      let size = 125;
      let t1X = 600;
      let t2X = 750;
      let t3X = 900;
      let t4X = 600;
      let t5X = 750;
      let t6X = 900;
      let t7X = 600;
      let t8X = 750;
      let t9X = 900;
      let t1Y = 200;
      let t2Y = 200;
      let t3Y = 200;
      let t4Y = 350;
      let t5Y = 350;
      let t6Y = 350;
      let t7Y = 500;
      let t8Y = 500;
      let t9Y = 500;
      if (
        xCoords > t1X &&
        xCoords < t1X + size &&
        yCoords > t1Y &&
        yCoords < t1Y + size
      ) {
        xCoords = t1X;
        yCoords = t1Y;
      } else if (
        xCoords > t2X &&
        xCoords < t2X + size &&
        yCoords > t2Y &&
        yCoords < t2Y + size
      ) {
        xCoords = t2X;
        yCoords = t2Y;
      } else if (
        xCoords > t3X &&
        xCoords < t3X + size &&
        yCoords > t3Y &&
        yCoords < t3Y + size
      ) {
        xCoords = t3X;
        yCoords = t3Y;
      } else if (
        xCoords > t4X &&
        xCoords < t4X + size &&
        yCoords > t4Y &&
        yCoords < t4Y + size
      ) {
        xCoords = t4X;
        yCoords = t4Y;
      } else if (
        xCoords > t5X &&
        xCoords < t5X + size &&
        yCoords > t5Y &&
        yCoords < t5Y + size
      ) {
        xCoords = t5X;
        yCoords = t5Y;
      } else if (
        xCoords > t6X &&
        xCoords < t6X + size &&
        yCoords > t6Y &&
        yCoords < t6Y + size
      ) {
        xCoords = t6X;
        yCoords = t6Y;
      } else if (
        xCoords > t7X &&
        xCoords < t7X + size &&
        yCoords > t7Y &&
        yCoords < t7Y + size
      ) {
        xCoords = t7X;
        yCoords = t7Y;
      } else if (
        xCoords > t8X &&
        xCoords < t8X + size &&
        yCoords > t8Y &&
        yCoords < t8Y + size
      ) {
        xCoords = t8X;
        yCoords = t8Y;
      } else if (
        xCoords > t9X &&
        xCoords < t9X + size &&
        yCoords > t9Y &&
        yCoords < t9Y + size
      ) {
        xCoords = t9X;
        yCoords = t9Y;
      } else {
        xCoords = 835;
        yCoords = 25;
        alert("Oops, please place the piece inside one of the boxes");
      }
      console.log(xCoords + " : " + yCoords);
      o3.style.marginLeft = xCoords + 15 + "px";
      o3.style.marginTop = yCoords + 25 + "px";
    });
  });
}
function moveO4(event) {
  let o4 = document.getElementById("o4");
  let body = document.getElementById("body");

  //

  o4.addEventListener("mousedown", function () {
    //! Pick up x
    console.log("Picked Up");
    o4.addEventListener("mouseup", function () {
      return 0;
    });
    o4.addEventListener("mouseout", function (event) {
      //! Leave x in a div
      let xCoords = event.pageX;
      let yCoords = event.pageY;
      console.log("Placed");
      console.log("LEFT: " + xCoords + "  TOP: " + yCoords);
      //! locked into the box
      let size = 125;
      let t1X = 600;
      let t2X = 750;
      let t3X = 900;
      let t4X = 600;
      let t5X = 750;
      let t6X = 900;
      let t7X = 600;
      let t8X = 750;
      let t9X = 900;
      let t1Y = 200;
      let t2Y = 200;
      let t3Y = 200;
      let t4Y = 350;
      let t5Y = 350;
      let t6Y = 350;
      let t7Y = 500;
      let t8Y = 500;
      let t9Y = 500;
      if (
        xCoords > t1X &&
        xCoords < t1X + size &&
        yCoords > t1Y &&
        yCoords < t1Y + size
      ) {
        xCoords = t1X;
        yCoords = t1Y;
      } else if (
        xCoords > t2X &&
        xCoords < t2X + size &&
        yCoords > t2Y &&
        yCoords < t2Y + size
      ) {
        xCoords = t2X;
        yCoords = t2Y;
      } else if (
        xCoords > t3X &&
        xCoords < t3X + size &&
        yCoords > t3Y &&
        yCoords < t3Y + size
      ) {
        xCoords = t3X;
        yCoords = t3Y;
      } else if (
        xCoords > t4X &&
        xCoords < t4X + size &&
        yCoords > t4Y &&
        yCoords < t4Y + size
      ) {
        xCoords = t4X;
        yCoords = t4Y;
      } else if (
        xCoords > t5X &&
        xCoords < t5X + size &&
        yCoords > t5Y &&
        yCoords < t5Y + size
      ) {
        xCoords = t5X;
        yCoords = t5Y;
      } else if (
        xCoords > t6X &&
        xCoords < t6X + size &&
        yCoords > t6Y &&
        yCoords < t6Y + size
      ) {
        xCoords = t6X;
        yCoords = t6Y;
      } else if (
        xCoords > t7X &&
        xCoords < t7X + size &&
        yCoords > t7Y &&
        yCoords < t7Y + size
      ) {
        xCoords = t7X;
        yCoords = t7Y;
      } else if (
        xCoords > t8X &&
        xCoords < t8X + size &&
        yCoords > t8Y &&
        yCoords < t8Y + size
      ) {
        xCoords = t8X;
        yCoords = t8Y;
      } else if (
        xCoords > t9X &&
        xCoords < t9X + size &&
        yCoords > t9Y &&
        yCoords < t9Y + size
      ) {
        xCoords = t9X;
        yCoords = t9Y;
      } else {
        xCoords = 835;
        yCoords = 25;
        alert("Oops, please place the piece inside one of the boxes");
      }
      console.log(xCoords + " : " + yCoords);
      o4.style.marginLeft = xCoords + 15 + "px";
      o4.style.marginTop = yCoords + 25 + "px";
    });
  });
}
function moveO5(event) {
  let o5 = document.getElementById("o5");
  let body = document.getElementById("body");

  //

  o5.addEventListener("mousedown", function () {
    //! Pick up x
    console.log("Picked Up");
    o5.addEventListener("mouseup", function () {
      return 0;
    });
    o5.addEventListener("mouseout", function (event) {
      //! Leave x in a div
      let xCoords = event.pageX;
      let yCoords = event.pageY;
      console.log("Placed");
      console.log("LEFT: " + xCoords + "  TOP: " + yCoords);
      //! locked into the box
      let size = 125;
      let t1X = 600;
      let t2X = 750;
      let t3X = 900;
      let t4X = 600;
      let t5X = 750;
      let t6X = 900;
      let t7X = 600;
      let t8X = 750;
      let t9X = 900;
      let t1Y = 200;
      let t2Y = 200;
      let t3Y = 200;
      let t4Y = 350;
      let t5Y = 350;
      let t6Y = 350;
      let t7Y = 500;
      let t8Y = 500;
      let t9Y = 500;
      if (
        xCoords > t1X &&
        xCoords < t1X + size &&
        yCoords > t1Y &&
        yCoords < t1Y + size
      ) {
        xCoords = t1X;
        yCoords = t1Y;
      } else if (
        xCoords > t2X &&
        xCoords < t2X + size &&
        yCoords > t2Y &&
        yCoords < t2Y + size
      ) {
        xCoords = t2X;
        yCoords = t2Y;
      } else if (
        xCoords > t3X &&
        xCoords < t3X + size &&
        yCoords > t3Y &&
        yCoords < t3Y + size
      ) {
        xCoords = t3X;
        yCoords = t3Y;
      } else if (
        xCoords > t4X &&
        xCoords < t4X + size &&
        yCoords > t4Y &&
        yCoords < t4Y + size
      ) {
        xCoords = t4X;
        yCoords = t4Y;
      } else if (
        xCoords > t5X &&
        xCoords < t5X + size &&
        yCoords > t5Y &&
        yCoords < t5Y + size
      ) {
        xCoords = t5X;
        yCoords = t5Y;
      } else if (
        xCoords > t6X &&
        xCoords < t6X + size &&
        yCoords > t6Y &&
        yCoords < t6Y + size
      ) {
        xCoords = t6X;
        yCoords = t6Y;
      } else if (
        xCoords > t7X &&
        xCoords < t7X + size &&
        yCoords > t7Y &&
        yCoords < t7Y + size
      ) {
        xCoords = t7X;
        yCoords = t7Y;
      } else if (
        xCoords > t8X &&
        xCoords < t8X + size &&
        yCoords > t8Y &&
        yCoords < t8Y + size
      ) {
        xCoords = t8X;
        yCoords = t8Y;
      } else if (
        xCoords > t9X &&
        xCoords < t9X + size &&
        yCoords > t9Y &&
        yCoords < t9Y + size
      ) {
        xCoords = t9X;
        yCoords = t9Y;
      } else {
        xCoords = 835;
        yCoords = 25;
        alert("Oops, please place the piece inside one of the boxes");
      }
      console.log(xCoords + " : " + yCoords);
      o5.style.marginLeft = xCoords + 15 + "px";
      o5.style.marginTop = yCoords + 25 + "px";
    });
  });
}

moveX1();
moveX2();
moveX3();
moveX4();
moveX5();
moveO1();
moveO2();
moveO3();
moveO4();
moveO5();
