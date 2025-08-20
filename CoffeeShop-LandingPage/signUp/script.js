
const formBody = document.querySelector(".form-body");
const username = document.querySelector(".username");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirm-password");

formBody.addEventListener("submit", function(e){

    
   const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
const regExpEmail = new RegExp(/^[\w]+@[a-z]+\.[a-z]{2,}$/);
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

if(username.value === ""){
   alert("Name field cannot be empty.");
    e.preventDefault();
   return false;
}

else if(email.value ===""){
    alert("Email field cannot be empty.");
     e.preventDefault();
    return false;
}

else if(password.value ===""){
    alert("Password field cannot be empty");
     e.preventDefault();
    return false;
}

else if(confirmPassword ===""){
    alert("Please confirm your password");
     e.preventDefault();
    return false;

}

else if(!usernameRegex.test(username.value)){
    alert("Wrong username format.");
    return false;
     e.preventDefault();
}

else if(!regExpEmail.test(email.value)){
    alert("Wrong email format.");
     e.preventDefault();
    return false;
}

else if(!passwordRegex.test(password.value)){
    alert("Wrong password format.");
     e.preventDefault();
    return false;
}

else if (password.value !== confirmPassword.value) {
    alert("Password does not match");
     e.preventDefault();
     return false;

}

return true;


});


