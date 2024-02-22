let loginBtn = document.getElementById("Login");
let modalTitleLogin = document.getElementById("exampleModalLabel");

let modalBodyLogin = document.getElementsByClassName("modal-body")[0];

let users = [];

fetch("https://65d38018522627d50109056a.mockapi.io/api/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    users = data;
  });

loginBtn.addEventListener("click", () => {
  modalTitleLogin.innerHTML = "Login";
  modalBodyLogin.innerHTML = createLoginForm();
  let submitLoginBtn = document.getElementById("submitBtnLogin");

  submitLoginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let inputArray = document.querySelectorAll("input");
    let emptyField = false;
    inputArray.forEach((element) => {
      if (element.value === "") {
        emptyField = true;
        return;
      }
    });
    if (emptyField) {
      let errorAll = document.getElementById("errorAll");
      errorAll.innerText = "Please fill all of the fields";
      return;
    }

    login();
  });
});

function createLoginForm() {
  return `
    <form class="row g-3 needs-validation dis-flex_justcont-cent width-100" novalidate id="myForm">
    <div class="error" id="errorAll"></div>  
    <div class="col-md-7">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="email" name="email" onblur="validateInput(this)" required>
    <div class="error">      
    </div>
    </div>
    <div class="col-md-7">
    <label for="password" class="form-label">Password</label>
    <input type="password" class="form-control" id="password" name="password" onblur="validateInput(this)"  required>
    <div class="error">      
    </div>
    </div>
      <div class="col-12 dis-flex_justcont-cent">
        <button  class="btn btn-primary" id="submitBtnLogin" type="submit">Login</button>
      </div>
    </form>
    `;
}

function login() {
  let emailUser = document.getElementById("email").value;
  let passwordUser = document.getElementById("password").value;
  let errorAll = document.getElementById("errorAll");

  let user = users.filter((user) => {
    return user.email === emailUser;
  });
if(!user){
  errorAll.innerHTML = "Email is not valid";
  return 
}
if(!user.password === passwordUser){
    errorAll.innerHTML = "Password is not valid";
    return
}
  console.log(user);
}