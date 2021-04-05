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
let month = Year.Months[date.getMonth()].name;
let year = date.getFullYear();

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
  constructor(year, month, days, appointments, holidays) {
    this.year = year;
    this.month = month;
    this.days = days;
    this.appointments = appointments;
    this.holidays = holidays;
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
    let everyDay, cardColumnsDays;

    everyDay = document.createElement("div");
    cardColumnsDays = document.createElement("div");

    everyDay.setAttribute("class", "everyDay");
    cardColumnsDays.setAttribute("class", "card-column d-flex");
    cardColumnsDays.setAttribute(
      "style",
      "column-count: 7; width: 90%; margin-left: 5%"
    );

    for (let k = 0; k < 7; ++k) {
      let cardDay = document.createElement("div");
      cardDay.setAttribute("class", "card text-center");
      cardDay.setAttribute("style", "width: 13%; margin-left: 1.1%");

      let cardBodyDay = document.createElement("div");
      cardBodyDay.setAttribute("class", "card-body ");

      let cardTitleDay = document.createElement("h5");
      cardTitleDay.setAttribute("class", "card-title");
      cardTitleDay.innerHTML = k + 1;

      cardBodyDay.appendChild(cardTitleDay);
      cardDay.appendChild(cardBodyDay);
      cardColumnsDays.appendChild(cardDay);
    }
    everyDay.appendChild(cardColumnsDays);

    calendar.appendChild(weekDays);
    calendar.appendChild(everyDay);
    document.querySelector("#main").appendChild(calendar);
  }

  setAppointments() {}
}

let calendar = new Calendar().createCalendar();
