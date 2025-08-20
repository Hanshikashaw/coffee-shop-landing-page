const formBodyTwo = document.querySelector(".form-body-two");
const username = document.querySelector(".username");
const password = document.querySelector(".password");

formBodyTwo.addEventListener("submit", function(e){

const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    
if(username.value === ""){
   alert("Name field cannot be empty.");
    e.preventDefault();
   return false;
}

else if(password.value ===""){
    alert("Password field cannot be empty");
     e.preventDefault();
    return false;
}

else if(!usernameRegex.test(username.value)){
    alert("Wrong username format.");
     e.preventDefault();
     return false;
}

else if(!passwordRegex.test(password.value)){
    alert("Wrong password format.");
     e.preventDefault();
    return false;
}

return true;


});