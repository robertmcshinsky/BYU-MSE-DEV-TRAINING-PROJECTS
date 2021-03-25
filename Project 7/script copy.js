let person = [
  {
    firstName: "test",
    lastName: "test",
    userName: "test",
    password: "test",
  },
];

function signUp2() {
  console.log("@signUp");
  let fName = document.querySelector("#firstName").value;
  console.log(fName);
  let lName = document.querySelector("#lastName").value;
  console.log(lName);
  let uName = document.querySelector("#username").value;
  console.log(uName);
  let password = document.querySelector("#createPassword").value;
  console.log(password);

  person.push({
    firstName: fName,
    lastName: lName,
    userName: uName,
    password: password,
  });
}

export { person };
