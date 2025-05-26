const form = document.querySelector('.form');
const togglePassword = document.getElementById("togglePassword");
const togglePasswordConfirm = document.getElementById("togglePasswordConfirm");
const passwordInput = document.getElementById("password");
const passwordConfirmInput = document.getElementById("passwordConfirm");

form.addEventListener('submit', function (event) {

    event.preventDefault();

    firstName = document.getElementById("firstName").value;
    lastName = document.getElementById("lastName").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    cpassword = document.getElementById("passwordConfirm").value;

    // formating the error message
    const errorElement = document.getElementById("errorPassword");
    errorElement.style.color = "red";
    errorElement.style.fontSize = "14px";
    errorElement.style.fontFamily = "Poppins, sans-serif";

    if (!email.includes("@") && !email.includes(".")) {
        errorElement.textContent = "Please enter a valid email";
    } else if (password !== cpassword) {
        errorElement.textContent = "Passwords do not match";
    } else if (password.length < 8) {
        errorElement.textContent = "Minimum 8 character password";
    } else {

        console.log({ firstName, lastName, email, password });
        document.getElementById("errorPassword").textContent ="";
        form.reset();

        const userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };

        alert("Register Succesful");
        window.location.href="http://127.0.0.1:5500/Scheduler-Inc.-main/SignInPage_Scheduler.html";


    }

})

togglePassword.addEventListener('click', function() {
    const icon = togglePassword.querySelector("i");
    const isPassword1 = passwordInput.type === "password";
    
    //toggle text to password (visible to non-visible)
    passwordInput.type = isPassword1 ? "text" : "password";

    icon.classList.toggle("fa-eye");
    icon.classList.toggle("fa-eye-slash");
})


togglePasswordConfirm.addEventListener('click', function() {
    const icon = togglePasswordConfirm.querySelector("i");


    const isPassword2 = passwordConfirmInput.type === "password";
    
    //toggle text to password (visible to non-visible)
    passwordConfirmInput.type = isPassword2 ? "text" : "password";

    icon.classList.toggle("fa-eye");
    icon.classList.toggle("fa-eye-slash");
})
