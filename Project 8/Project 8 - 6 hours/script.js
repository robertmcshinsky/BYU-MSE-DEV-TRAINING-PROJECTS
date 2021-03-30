// TIME I HAVE WORKED ON THIS PROJECT -- ( 225 ) Minutes
// Goal: 360 min totol
// Time-left: 135 min -- 2 hr 15 min
//DONE
const months = [
  {
    month: "January",
    days: 31,
    holidays: [
      {
        name: "New Years",
        dayOccurs: 1,
      },
      {
        name: "Martin Luther King Jr. Day",
        dayOccurs: 17,
      },
    ],
  },
  {
    month: "February",
    days: 28,
    holidays: [
      {
        name: "Valentines Day",
        dayOccurs: 14,
      },
      {
        name: "Washington's Birthday",
        dayOccurs: 21,
      },
    ],
  },
  {
    month: "March",
    days: 31,
    holidays: [
      {
        name: "National Pie Day",
        dayOccurs: 14,
      },
      {
        name: "St. Patrick's Day",
        dayOccurs: 17,
      },
    ],
  },
  {
    month: "April",
    days: 30,
    holidays: [
      {
        name: "April Fools",
        dayOccurs: 1,
      },
      {
        name: "National Grilled Cheese Sandwich Day",
        dayOccurs: 12,
      },
    ],
  },
  {
    month: "May",
    days: 31,
    holidays: [
      {
        name: "Star Wars Day",
        dayOccurs: 4,
      },
      {
        name: "Memorial Day",
        dayOccurs: 31,
      },
    ],
  },
  {
    month: "June",
    days: 30,
    holidays: [
      {
        name: "D - Day",
        dayOccurs: 6,
      },
      {
        name: "National Kissing Day",
        dayOccurs: 22,
      },
    ],
  },
  {
    month: "July",
    days: 31,
    holidays: [
      {
        name: "Independence Day",
        dayOccurs: 4,
      },
      {
        name: "My Birthday",
        dayOccurs: 17,
      },
    ],
  },
  {
    month: "August",
    days: 31,
    holidays: [
      {
        name: "National Fajita Day",
        dayOccurs: 18,
      },
    ],
  },
  {
    month: "September",
    days: 30,
    holidays: [
      {
        name: "National Dance Day",
        dayOccurs: 18,
      },
      {
        name: "Batman Day",
        dayOccurs: 21,
      },
    ],
  },
  {
    month: "October",
    days: 31,
    holidays: [
      {
        name: "World Smile Day",
        dayOccurs: 1,
      },
      {
        name: "Eminem's Birthday",
        dayOccurs: 17,
      },
    ],
  },
  {
    month: "November",
    days: 30,
    holidays: [
      {
        name: "National Cancer Awareness Day",
        dayOccurs: 7,
      },
      {
        name: "Children's Day",
        dayOccurs: 14,
      },
    ],
  },
  {
    month: "December",
    days: 31,
    holidays: [
      {
        name: "Christmas",
        dayOccurs: 25,
      },
      {
        name: "New Years Eve",
        dayOccurs: 31,
      },
    ],
  },
];

const week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

if (localStorage.getItem("Appointment") !== null) {
  let appts = JSON.parse(localStorage.getItem("Appointment"));
  console.log(appts);
} else if (localStorage.getItem("Appointment") === null) {
  appts = new Array(0);
}
console.log(week);
console.log(months);

// All time elements
//DONE
const date = new Date();
let thisMonth = date.getMonth();
let today = date.getDate();
let weekDay = date.getDay();
let year = date.getFullYear();
let currentDay;

//DONE
function SetJumbotron() {
  document.querySelector("#title").innerHTML = "Calendar";
  document.querySelector("#monthName").innerHTML = months[thisMonth].month;
  document.querySelector("#date").innerHTML = today;
  document.querySelector("#login").innerHTML = "Login";
}
//
// Create the days inside each month
//DONE
function Month() {
  let month = document.querySelector("#month");
  let weekNames = document.querySelector("#weekNames");

  // Created the week names
  for (let i = 0; i < 7; ++i) {
    let weekday = document.createElement("div");
    weekday.setAttribute("class", "weekday");
    weekday.innerHTML = week[i];
    weekNames.appendChild(weekday);
  }

  for (let k = 0; k < months[thisMonth].days; ++k) {
    let day = document.createElement("div");
    let content = document.createElement("div");

    day.classList.add("day");
    day.classList.add("empty");
    day.setAttribute("id", "Day" + (k + 1));
    day.innerHTML = k + 1;

    content.setAttribute("id", "Day" + (k + 1) + "Content");
    content.classList.add("content");

    for (let j = 0; j < months[thisMonth].holidays.length; ++j) {
      if (months[thisMonth].holidays[j].dayOccurs === k + 1) {
        content.innerHTML = " - " + months[thisMonth].holidays[j].name;
        day.setAttribute("onmouseover", "show(this.id)");
        day.setAttribute("onmouseout", "remove(this.id)");
        day.classList.remove("empty");
        day.classList.add("full");
        content.style.display = "none";
        break;
      }
    }
    day.appendChild(content);
    month.appendChild(day);
  }
}

function clearOptions() {
  document.querySelector("#options").innerHTML = "";
}

//TODO
function AddAppt() {
  clearOptions();
  console.log("AddAppt");
  let selection = document.createElement("div");
  selection.setAttribute("id", "selection");
  selection.setAttribute("class", "selection");

  let form = document.createElement("form");
  form.setAttribute("class", "form");

  let labelInfo = document.createElement("label");
  labelInfo.setAttribute("for", "info");
  labelInfo.innerHTML = "What do you want to put in your schedule?";

  let inputInfo = document.createElement("input");
  inputInfo.setAttribute("name", "info");
  inputInfo.setAttribute("type", "text");
  inputInfo.setAttribute("id", "info");

  let labelDate = document.createElement("div");
  labelDate.setAttribute("for", "date");
  labelDate.innerHTML = "What day should we put this in?";

  let selectDate = document.createElement("select");
  selectDate.setAttribute("id", "date");
  selectDate.setAttribute("name", "date");
  selectDate.setAttribute("onChange", "myNewFunction(this)");

  for (let i = 0; i < months[thisMonth].days; ++i) {
    let option = document.createElement("option");
    option.setAttribute("value", i + 1);
    option.innerHTML = i + 1;

    selectDate.appendChild(option);
  }

  let submit = document.createElement("div");
  submit.setAttribute("id", "submit");
  submit.setAttribute("class", "Submit");
  submit.innerHTML = "Submit";
  submit.setAttribute("onClick", "addToCal()");

  form.appendChild(labelInfo);
  form.appendChild(inputInfo);
  form.appendChild(labelDate);
  form.appendChild(selectDate);
  form.appendChild(submit);

  document.querySelector("#options").appendChild(form);
}

//TODO
function DeleteAppt() {
  console.log("DeleteAppt");
  clearOptions();
  let selection = document.createElement("div");
  selection.setAttribute("id", "selection");
  selection.setAttribute("class", "selection");

  let form = document.createElement("form");
  form.setAttribute("class", "form");

  for (let i = 0; i < appts.length; ++i) {
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "appt" + i);
    checkbox.setAttribute("value", appts[i].info);
    checkbox.setAttribute("id", "checkbox" + i);
    checkbox.setAttribute("class", "checkbox");

    let cbxLabel = document.createElement("label");
    cbxLabel.setAttribute("for", "appt" + i);
    cbxLabel.innerHTML =
      appts[i].month + " " + appts[i].day + " ➡ " + appts[i].info + "<br>";

    form.appendChild(checkbox);
    form.appendChild(cbxLabel);
  }

  let submit = document.createElement("button");
  submit.setAttribute("id", "submitD");
  submit.setAttribute("class", "SubmitD");
  submit.innerHTML = "Delete";
  submit.setAttribute("onClick", "delFromCal()");

  form.appendChild(submit);

  document.querySelector("#options").appendChild(form);
}

function show(thisId) {
  document.getElementById(thisId + "Content").style.display = "block";
}
function remove(thisId) {
  document.getElementById(thisId + "Content").style.display = "none";
}

function addToCal() {
  console.log("@addToCal");
  let info = document.querySelector("#info").value;
  console.log();

  appts.push({ info: info, month: "March", day: currentDay });
  let myJSON = JSON.stringify(appts);
  localStorage.setItem("Appointment", myJSON);

  let newAppt = document.createElement("div");
  newAppt.setAttribute("id", "Day" + currentDay + "SubContent");
  newAppt.setAttribute("class", "content");

  document
    .querySelector("#Day" + currentDay + "Content")
    .setAttribute("style", "display: none");

  newAppt.innerHTML = "- " + info;
  console.log(newAppt);
  document.querySelector("#Day" + currentDay + "Content").appendChild(newAppt);

  document
    .querySelector("#Day" + currentDay)
    .setAttribute("onmouseover", "show(this.id)");
  document
    .querySelector("#Day" + currentDay)
    .setAttribute("onmouseout", "remove(this.id)");
}

function delFromCal() {
  console.log("@delFromCal");
}

function myNewFunction(sel) {
  currentDay = sel.options[sel.selectedIndex].text;
}

document.querySelector("#add").addEventListener("click", AddAppt);
document.querySelector("#delete").addEventListener("click", DeleteAppt);
SetJumbotron();
Month();
