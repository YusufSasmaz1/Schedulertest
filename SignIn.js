const form = document.querySelector('.form');
const username = document.getElementById("username");
const password = document.getElementById("password");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");


form.addEventListener('submit', function (event){
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    window.location.href = "http://127.0.0.1:5500/Scheduler-Inc.-main/MonthCalendar.html";

})

togglePassword.addEventListener('click', function() {
    const icon = togglePassword.querySelector("i");


    const isPassword1 = passwordInput.type === "password";
    
    //toggle text to password (visible to non-visible)
    passwordInput.type = isPassword1 ? "text" : "password";

    icon.classList.toggle("fa-eye");
    icon.classList.toggle("fa-eye-slash");
})  