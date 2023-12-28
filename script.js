const passwordInput1 = document.querySelector("#passwrd");

const passwordInput2 = document.querySelector("#confirm-pass");

const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener('click', () => {
    if (passwordInput1.value != passwordInput2.value) {
        passwordInput1.setAttribute("style", "border-color:red;");
        passwordInput2.setAttribute("style", "border-color:red;");
    }
    else {
        passwordInput1.setAttribute("style", "border-color:blue;");
        passwordInput2.setAttribute("style", "border-color:blue;");
    }
})