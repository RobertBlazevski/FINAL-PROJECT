
let login = document.getElementById("login");
let modalTitle = document.getElementById("exampleModalLabel");
let modalFooter = document.getElementsByClassName("modal-footer")[0];
let modalBody = document.getElementsByClassName("modal-body")[0];

login.addEventListener("click", () => {
    modalTitle.innerText = "Login";

    modalBody.innerHTML = createLogIn();

    let submitBtn = document.getElementById("submitBtn");

        loginBtn.addEventListener("click", (e) => {
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
            postFormLogIn();
        })
})


function createLogIn (){
        return `
          <form class="row g-3 needs-validation dis-flex_justcont-cent width-100" novalidate id="myForm">
      <div class="error" id="errorAll"></div>  
      <div class="col-md-7">
          <label for="email" class="form-label">E-mail</label>
          <input type="email" class="form-control" id="email" name="firstName" onblur="validateInput(this)" required>
      
          <div class="error">    
          </div>
        
      <div class="col-md-7">
      <label for="password" class="form-label">Password</label>
      <input type="password" class="form-control" id="password" name="password" onblur="validateInput(this)"  required>
      <div class="error">      
      </div>
      </div>
        
      </form>
          `;
      
}

function postFormLogIn () {
    let form = document.getElementById("myForm");
    form.submit();
}