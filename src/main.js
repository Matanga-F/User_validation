let elUsername = document.getElementById("username");

function checkLength(minLength){
    let elMsg = document.getElementById("invalid");
    if (elUsername.value.length < minLength && elUsername.value != ""){
        elMsg.textContent = "Username must be " + minLength + " characters long or more."
    }else{
        elMsg.textContent = ""; 
    }
}
//Password Length

let elPasswordLength = document.getElementById("new_password");
function passwordLength(minLength){

    let elMsg = document.getElementById("password_length");

    if (elPasswordLength.value >= minLength){
        elMsg.textContent = "";
    }else{
        elMsg.textContent = "passward must be "+ minLength + " charators long or more!";
    }

}

// Password Validation.
let elPassword = document.getElementById("new_password");
let elConfirmPassword = document.getElementById("confirm_password");

function passwordConfirm() {
    let elMsg = document.getElementById("invalid_password");
    if (elPassword.value != elConfirmPassword.value && elConfirmPassword.value != "") {
        elMsg.textContent = "Password don't match!!";
    }else {
        elMsg.textContent = ""; 
    }
}



elUsername.addEventListener("blur", () =>{ 
    checkLength(5);
}, false);

elPasswordLength.addEventListener("focus", () => {
    passwordLength(8);
}, false)
elConfirmPassword.addEventListener("blur", passwordConfirm, false);

function toggleView(){
    let elButton = document.getElementById("view_form")
    if (elButton.value == "Log in"){

    }
}