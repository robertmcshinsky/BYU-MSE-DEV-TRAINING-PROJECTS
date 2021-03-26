// TIME I HAVE WORKED ON THIS PROJECT -- ( 130 ) Minutes
// Goal: 360 min totol
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

console.log(week);
console.log(months);

// All time elements

const date = new Date();
let thisMonth = date.getMonth();
let today = date.getDate();
let weekDay = date.getDay();
let year = date.getFullYear();

function SetJumbotron() {
  document.querySelector("#title").innerHTML = "Calendar";
  document.querySelector("#monthName").innerHTML = months[thisMonth].month;
  document.querySelector("#date").innerHTML = today;
  document.querySelector("#login").innerHTML = "Login";
}

// Create the days inside each month
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
    day.setAttribute("id", "Day " + (k + 1));
    day.setAttribute("onClick", "AddAppt(this.id)");
    day.innerHTML = k + 1;

    content.setAttribute("id", "Day " + (k + 1) + " Content");
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

function AddAppt(thisId) {
  console.log("AddAppt " + thisId);
}

function show(thisId) {
  document.getElementById(thisId + " Content").style.display = "block";
}
function remove(thisId) {
  document.getElementById(thisId + " Content").style.display = "none";
}

SetJumbotron();
Month();
