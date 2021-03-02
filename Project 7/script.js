let person = [{}];

function main() {
  console.log("@main");
}

function signUp() {
  console.log("@signUp");
  let fName = document.querySelector("#firstName").value;
  console.log(fName);
  let lName = document.querySelector("#lastName").value;
  console.log(lName);
  let uName = document.querySelector("#username").value;
  console.log(uName);
  let password = document.querySelector("#createPassword").value;
  console.log(password);
}

function signIn() {
  console.log("@signIn");
}

function displayLoginInfo() {
  console.log("@displayLoginInfo");
}

// CALLING MAIN
main();
