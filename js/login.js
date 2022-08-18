document.getElementById('login-btn').addEventListener("click", function(){
    const userEmailField = document.getElementById('user-email');
    const userEmail = userEmailField.value;

    const userPasswordField = document.getElementById("user-password");
    const userPassword = userPasswordField.value;
    if(userEmail === 'onichan@gmail.com' && userPassword ==="yamatekudasi"){
        window.location.href="bank.html";
    }
    else{
        alert("invalid user")
    }
})