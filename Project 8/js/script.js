//TODO: Create Year Array of Objects
let year = [
  { Month: "January", Days: 31 },
  { Month: "February", Days: 28 },
  { Month: "March", Days: 31 },
  { Month: "April", Days: 30 },
  { Month: "May", Days: 31 },
  { Month: "June", Days: 30 },
  { Month: "July", Days: 31 },
  { Month: "August", Days: 31 },
  { Month: "September", Days: 30 },
  { Month: "October", Days: 31 },
  { Month: "November", Days: 30 },
  { Month: "December", Days: 31 },
];

let week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let today = new Date();
console.log(today);
let monthEl = document.querySelector("#month");
let fullWeekEl = document.querySelector("#displayWeekName");
let fullMonthEl = document.querySelector("#displayMonth");
let currentMonth = today.getMonth();
document.querySelector("#date").innerHTML = today;
let spacers;

let appointments = [];
let apptDay = [];

//FIXME \\\\\\\
function findSpacers() {
  while (spacers > 7) {
    spacers = spacers - 7;
  }
  spacers = (spacers % today.getDay()) + 1;
}
//FIXME ///////
function setCurrentMonth() {
  monthEl.innerHTML = year[currentMonth].Month;
}
function spacerDays() {
  for (let i = 0; i < spacers; ++i) {
    let box = document.createElement("div");
    box.setAttribute("id", "daySpacer" + (i + 1));

    fullMonthEl.appendChild(box);
  }
}

function add(clicked_id) {
  let info = prompt("What do you want to remember?");
  appointments.push(info);
  apptDay.push(clicked_id);

  let appt = document.createElement("p");
  appt.setAttribute("id", "appt");
  appt.innerHTML = info;
  document.querySelector("#" + clicked_id).appendChild(appt);

  let list = document.createElement("div");
  list.setAttribute("id", "listItem");
  list.innerHTML =
    appointments[appointments.length - 1] + " " + apptDay[apptDay.length - 1];
  document.querySelector("#showList").appendChild(list);
}

function deleteAll() {
  let lengthOfAppts = appointments.length;
  appointments = [];
  apptDay = [];
  resetMonth(lengthOfAppts);
  createDaysContainers();
}

function createDaysContainers() {
  spacers = today.getDate();
  findSpacers();
  spacerDays();

  for (let i = 0; i < year[currentMonth].Days; ++i) {
    let box = document.createElement("div");
    box.setAttribute("id", year[currentMonth].Month + "-" + (i + 1));
    box.setAttribute("class", "box");
    box.innerHTML = i + 1 + ".";
    box.setAttribute("onclick", "add(this.id)");
    if (i === today.getDate() - 1) {
      box.style.border = "2px solid red";
    }
    fullMonthEl.appendChild(box);
  }
  if ((year[currentMonth].Days + spacers) % 7 === 1) {
    spacers = 6;
    spacerDays();
  } else if ((year[currentMonth].Days + spacers) % 7 === 2) {
    spacers = 5;
    spacerDays();
  } else if ((year[currentMonth].Days + spacers) % 7 === 3) {
    spacers = 4;
    spacerDays();
  } else if ((year[currentMonth].Days + spacers) % 7 === 4) {
    spacers = 3;
    spacerDays();
  } else if ((year[currentMonth].Days + spacers) % 7 === 5) {
    spacers = 2;
    spacerDays();
  } else if ((year[currentMonth].Days + spacers) % 7 === 6) {
    spacers = 1;
    spacerDays();
  } else {
    spacers = 0;
    spacerDays();
  }
}
function createWeekContainers() {
  let currentDay = 0;
  for (let i = 0; i < week.length; ++i) {
    let weekDay = document.createElement("div");
    weekDay.setAttribute("id", "weekday" + (i + 1));
    weekDay.innerHTML = week[i];
    fullWeekEl.appendChild(weekDay);
  }
}

function resetMonth(lengthOfAppts) {
  document.querySelector("#displayMonth").innerHTML = "";
  for (let i = 0; i < lengthOfAppts; ++i) {
    document.querySelector("#listItem").remove();
  }
}

function change() {
  console.log("CHANGE");
}

//! DECLARATION OF FUNCTIONS
createWeekContainers();
setCurrentMonth();
createDaysContainers();

//TODO: ADD DELETE & CHANGE FUNCTIONS
//TODO: CLEAR ALL ITEMS FUNCTION
//TODO: Maybe be able to drag the event into a different calandar date
