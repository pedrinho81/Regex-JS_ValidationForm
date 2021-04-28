
const user = document.getElementById("user")

user.addEventListener("keyup", () => {
    let userValue = user.value;
    
    const filter = /^[a-zA-Z]{1,}$/;
    
    if(!filter.test(userValue)) {
        user.value = userValue.substring(0,0);
        user.placeholder = "Verifique se o usuário inserido contém apenas letras."
        user.classList.add("STYLEerror")
    } else {
        user.classList.remove("STYLEerror")
    }
})

const password = document.getElementById("password") 

password.addEventListener("keyup", () => {
    passwordValue = password.value
    
    const filter =/^[0-9]{1,}$/
    
    if(!filter.test(passwordValue)) {
        password.value = passwordValue.substring(0,0)
        password.placeholder = "A senha deve conter apenas números."
        password.classList.add("STYLEerror")
    } else {
        password.classList.remove("STYLEerror")
    }
})

const email = document.getElementById("email")

email.addEventListener("click",() =>{ 
    emailValue = email.value

    const filter = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i

    
    if(!filter.test(emailValue)){
        email.value = emailValue.substring(0,0);
        email.placeholder = "Insira um endereço de e-mail válido."
        email.classList.add("STYLEerror")
    } else {
        email.classList.remove("STYLEerror")
    }
})







