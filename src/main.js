let elUsername = document.getElementById("username");
let elButton = document.getElementById("view_form")

function checkLength(minLength){
    let elMsg = document.getElementById("invalid");
    if (elUsername.value.length < minLength && elUsername.value != ""){
        elMsg.textContent = "Username must be " + minLength + " characters long or more."
    }else{
        elMsg.textContent = ""; 
    }
}

// Password Checker.
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
    checkLength(5)
}, false);

elConfirmPassword.addEventListener("blur", passwordConfirm, false);

function toggleView(){
    return null;
}