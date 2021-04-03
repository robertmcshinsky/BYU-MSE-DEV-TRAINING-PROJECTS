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

class Appointment {
  constructor(year, month, day, info, id) {
    this.year = year;
    this.month = month;
    this.day = day;
    this.info = info;
    this.id = id;
  }
  setAppointment() {
    let appointment = {
      year: this.year,
      month: this.month,
      day: this.day,
      info: this.info,
      id: this.id,
    };
    console.log(appointment);
  }
}

let newCal = new Appointment(2021, "Jan", 23).setAppointment();
