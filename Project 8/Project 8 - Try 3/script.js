//const { stringify } = require("qs");

const Year = {
  Months: [
    {
      name: "January",
      days: "31",
      holidays: [
        {
          name: "ABC holiday",
          date: 10,
        },
        {
          name: "DEF holiday",
          date: 20,
        },
      ],
    },
    {
      name: "February",
      days: "30",
      holidays: [
        {
          name: "ABC holiday",
          date: 10,
        },
        {
          name: "DEF holiday",
          date: 20,
        },
      ],
    },
    {
      name: "March",
      days: "31",
      holidays: [
        {
          name: "ABC holiday",
          date: 10,
        },
        {
          name: "DEF holiday",
          date: 20,
        },
      ],
    },
    {
      name: "April",
      days: "30",
      holidays: [
        {
          name: "ABC holiday",
          date: 10,
        },
        {
          name: "DEF holiday",
          date: 20,
        },
      ],
    },
    {
      name: "May",
      days: "31",
      holidays: [
        {
          name: "ABC holiday",
          date: 10,
        },
        {
          name: "DEF holiday",
          date: 20,
        },
      ],
    },
    {
      name: "June",
      days: "30",
      holidays: [
        {
          name: "ABC holiday",
          date: 10,
        },
        {
          name: "DEF holiday",
          date: 20,
        },
      ],
    },
    {
      name: "July",
      days: "31",
      holidays: [
        {
          name: "ABC holiday",
          date: 10,
        },
        {
          name: "DEF holiday",
          date: 20,
        },
      ],
    },
    {
      name: "August",
      days: "30",
      holidays: [
        {
          name: "ABC holiday",
          date: 10,
        },
        {
          name: "DEF holiday",
          date: 20,
        },
      ],
    },
    {
      name: "September",
      days: "31",
      holidays: [
        {
          name: "ABC holiday",
          date: 10,
        },
        {
          name: "DEF holiday",
          date: 20,
        },
      ],
    },
    {
      name: "October",
      days: "30",
      holidays: [
        {
          name: "ABC holiday",
          date: 10,
        },
        {
          name: "DEF holiday",
          date: 20,
        },
      ],
    },
    {
      name: "November",
      days: "31",
      holidays: [
        {
          name: "ABC holiday",
          date: 10,
        },
        {
          name: "DEF holiday",
          date: 20,
        },
      ],
    },
    {
      name: "December",
      days: "30",
      holidays: [
        {
          name: "ABC holiday",
          date: 10,
        },
        {
          name: "DEF holiday",
          date: 20,
        },
      ],
    },
  ],
  Week: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
};
let date = new Date();
let day = date.getDate();
console.log("day: " + day);
let month = Year.Months[date.getMonth()].name;
let year = date.getFullYear();
let weekDay = date.getDay();
console.log("today: " + weekDay);
let fullDate = day + " / " + month + " / " + year;

document.querySelector("#fullDate").innerHTML = fullDate;

let apptList;
let account = [];
if (JSON.parse(localStorage.getItem("Appointments")) === "") {
  apptList = JSON.parse(localStorage.getItem("Appointments"));
  console.log(appList);
} else {
  apptList = [];
}
class Appointment {
  constructor(year, month, day, info, id) {
    this.year = year;
    this.month = month;
    this.day = day;
    this.info = info;
    this.id = id;
  }
  makeAppointment() {
    let appointment = {
      year: this.year,
      month: this.month,
      day: this.day,
      info: this.info,
      id: this.id,
    };

    console.log(appointment);
    apptList.push(appointment);
    localStorage.setItem("Appointments", JSON.stringify(apptList));
  }
}

class Login {
  constructor(userName, password) {
    this.userName = userName;
    this.password = password;
  }
}

class SignUp {
  constructor(firstName, lastName, userName, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.password = password;
  }
}
class Calendar {
  constructor(year, month, days, appointments, holidays, weekDay) {
    this.year = year;
    this.month = month;
    this.days = days;
    this.appointments = appointments;
    this.holidays = holidays;
    this.weekDay = weekDay;
  }

  createCalendar() {
    let calendar, weekDays, cardColumns;

    // Creating the Elements
    calendar = document.createElement("div");
    weekDays = document.createElement("div");
    cardColumns = document.createElement("div");

    // Setting the attributes for each Element
    calendar.setAttribute("class", "calendar");
    calendar.setAttribute("style", "display: block");
    weekDays.setAttribute("class", "weekDays");
    cardColumns.setAttribute("class", "card-columns");
    cardColumns.setAttribute(
      "style",
      "column-count: 7; width: 90%; margin-left: 5%"
    );

    // Creating each Weekday Card
    for (let i = 0; i < 7; ++i) {
      let card = document.createElement("div");
      card.setAttribute("class", "card");
      card.setAttribute("style", "border-bottom: 1px solid black");

      let cardBody = document.createElement("div");
      cardBody.setAttribute("class", "card-body text-center");

      let cardTitle = document.createElement("h5");
      cardTitle.setAttribute("class", "card-title");
      cardTitle.innerHTML = Year.Week[i];

      cardBody.appendChild(cardTitle);
      card.appendChild(cardBody);
      cardColumns.appendChild(card);
    }

    weekDays.appendChild(cardColumns);

    /*-------------------------------*/
    let everyDay, cardC1, cardC2, cardC3, cardC4, cardC5;

    everyDay = document.createElement("div");

    cardC1 = document.createElement("div");
    cardC2 = document.createElement("div");
    cardC3 = document.createElement("div");
    cardC4 = document.createElement("div");
    cardC5 = document.createElement("div");

    everyDay.setAttribute("class", "everyDay");
    cardC1.setAttribute("class", "grid-container allCards");

    let dayNum = 1;
    for (let k = 0; k < 42; ++k) {
      let cardDay = document.createElement("div");
      cardDay.setAttribute("class", "card text-center grid-item");
      cardDay.setAttribute("id", "card" + (k + 1));

      let cardBodyDay = document.createElement("div");
      cardBodyDay.setAttribute("class", "card-body");

      let cardTitleDay = document.createElement("h5");
      cardTitleDay.setAttribute("class", "card-title");
      let spacer;

      let plusEl = document.createElement("div");
      let plus = document.createElement("div");
      plus.setAttribute("class", "fa fa-plus-circle");
      plus.setAttribute(
        "style",
        "margin-left: 35%; position: absolute;  margin-top: 2%; "
      );
      plus.setAttribute("draggable", "true");

      let viewApptEl = document.createElement("div");
      let viewAppt = document.createElement("div");
      viewAppt.setAttribute("class", "fa fa-bars");
      viewAppt.setAttribute(
        "style",
        "position: absolute; margin-left: -45%; margin-top: 2%;"
      );
      viewAppt.setAttribute("draggable", "true");

      let firstDay = new Date(year, month, 1);
      spacer = (day % 7) + firstDay;
      if (k > spacer) {
        cardTitleDay.innerHTML = dayNum;
        plusEl.appendChild(plus);
        viewApptEl.appendChild(viewAppt);
        ++dayNum;
      }
      if (k > Year.Months[date.getMonth()].days) {
        console.log("HERE");
        cardTitleDay.innerHTML = "";
      }
      cardBodyDay.appendChild(cardTitleDay);
      cardBodyDay.appendChild(viewApptEl);
      cardBodyDay.appendChild(plusEl);
      cardDay.appendChild(cardBodyDay);
      cardC1.appendChild(cardDay);
    }
    /*
    for (let j = 0; j < fcNum; ++j) {
      let fakeCard = document.createElement("div");
      fakeCard.setAttribute("class", "card text-center");

      let cdBody = document.createElement("div");
      cdBody.setAttribute("class", "card-body ");

      let cTDay = document.createElement("h5");
      cTDay.setAttribute("class", "card-title");

      cdBody.appendChild(cTDay);
      fakeCard.appendChild(cdBody);
      cardC1.appendChild(fakeCard);
    }*/
    everyDay.insertAdjacentHTML("beforeend", "</br>");

    everyDay.appendChild(cardC1);
    //calendar.appendChild(monthSwitch) //TODO Create Month switch buttons
    calendar.appendChild(weekDays);
    calendar.appendChild(everyDay);
    document.querySelector("#main").appendChild(calendar);
  }

  setAppointments() {}
}

function addToAppts() {}

let calendar = new Calendar().createCalendar();
