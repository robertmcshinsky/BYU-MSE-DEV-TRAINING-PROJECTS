const Year = require("./year.json");

class Appointment {
  constructor(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
  setAppointment() {
    let appointment = {
      year: this.year,
      month: this.month,
      day: this.day,
    };
    console.log(appointment);
  }
}

let newCal = new Appointment(2021, "Jan", 23).setAppointment();
