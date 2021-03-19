let person = [];

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

  person.push({firstName: fName, lastName: lName, userName: uName, password: password})
}

function signIn() {
  console.log("@signIn");
  let uName = document.querySelector("#login").value;
  let password = document.querySelector("#password").value;
  console.log(uName)
  console.log(password)
  for(let i = 0; i < person.length; ++i) {
    console.log(i)
    if (uName === person[i].userName && password === person[i].password) {
      displayLoginInfo(i)
      console.log("YAY")
    } else {
      console.log("Incorrect Username or Password")
    }
  }
}

function displayLoginInfo(i) {
  console.log("@displayLoginInfo");
  //

  document.querySelector("#main").innerHTML = ""
  
  let info = document.createElement('div')
  info.setAttribute("id", "info")

  let fName = document.createElement("div")
  fName.setAttribute("id", "userFirstName")
  fName.innerHTML = person[i].firstName

  let lName = document.createElement('div')
  lName.setAttribute("id", "userLastName")
  lName.innerHTML = person[i].lastName

  let uName = document.createElement('div')
  uName.setAttribute("id", "userUserName")
  uName.innerHTML = person[i].userName

  let password = document.createElement('div')
  password.setAttribute("id", "userPassword")
  password.setAttribute("type", "password")
  password.innerHTML = person[i].password

  info.appendChild(fName)
  info.appendChild(lName)
  info.appendChild(uName)
  info.appendChild(password)

  document.querySelector("#main").appendChild(info)
  //
}


// CALLING MAIN
main();


