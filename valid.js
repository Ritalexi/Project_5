 const form = document.getElementById("form");
const ferrorMessage = form.querySelector(".firstname_error_message");
const lerrorMessage = form.querySelector(".lastname_error_message");
const emailerrorMessage = form.querySelector(".email_error_message");
const passworderrorMessage = form.querySelector(".password_error_message");
var errorIcon = document.querySelectorAll(".error_icon");

 function validatefName(){
    var firstName = document.getElementById("firstname");

    if(firstName.value === "" || firstName.value == null || firstName.value.length < 2)
    {
        firstName.style.borderColor = "hsl(0, 100%, 74%)";
      errorIcon[0].classList.add("active");
ferrorMessage.innerText = "First Name cannot be empty";
return false;
    }
    if(firstName.value.length > 2)
    {
        firstName.style.borderColor = "hsl(246, 25%, 77%)";
        errorIcon[0].classList.remove("active");
ferrorMessage.innerText = "";
return true;
    }
}

 function validatelName(){
    var lastName = document.getElementById("lastname");
   if(lastName.value === "" || lastName.value  == null || lastName.value.length < 2)
    {
        lastName.style.borderColor = "hsl(0, 100%, 74%)";
        errorIcon[1].classList.add("active");
lerrorMessage.innerText = "Last Name cannot be empty";
return false;
    }
    if(lastName.value.length > 2)
    {
        lastName.style.borderColor = "hsl(246, 25%, 77%)";
        errorIcon[1].classList.remove("active");
lerrorMessage.innerText = "";
return true;
    }
}

    function validateemail(){
        var email = document.getElementById("email");
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(email.value === "" || email.value == null)
        {
            email.style.borderColor = "hsl(0, 100%, 74%)";
            errorIcon[2].classList.add("active");
    email.innerText = "Looks like this is not an email";
    return false;
        }
        if(!email.value.match(mailformat))
    {
        email.style.borderColor = "hsl(0, 100%, 74%)";
        errorIcon[2].classList.add("active");
emailerrorMessage.innerText = "Looks like this is not an email";
return false;
    }
    if(email.value.match(mailformat))
    {
        email.style.borderColor = "hsl(246, 25%, 77%)";
        errorIcon[2].classList.remove("active");
emailerrorMessage.innerText = "";
return true;
    }
    }
  
      function validatepassword(){
        var password = document.getElementById("password");
         if(password.value === "" || password.value == null)
        {
            password.style.borderColor = "hsl(0, 100%, 74%)";
            errorIcon[3].classList.add("active");
    passworderrorMessage.innerText = "Password cannot be empty";
    return false;
        }
        if(password.value.length < 6)
        {
            password.style.borderColor = "hsl(0, 100%, 74%)";
            errorIcon[3].classList.add("active");
    passworderrorMessage.innerText = "Password cannot be less thman 6 characters";
    return false;
        }
        if(password.value.length >= 6)
        {
            password.style.borderColor = "hsl(246, 25%, 77%)";
            errorIcon[3].classList.remove("active");
    passworderrorMessage.innerText = "";
    return true;
        }
    }

