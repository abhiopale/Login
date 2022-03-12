let btnlLogin = document.getElementById("login")
let btsSignUp = document.getElementById("signup")

let signIn =document.querySelector(".signin");
let signUp =document.querySelector(".signup");

btnlLogin.onclick = function(){
    signIn.classList.add("active");
    signUp.classList.add("inActive");
}
btnlSignUp.onclick = function(){
    signIn.classList.remove("active");
    signUp.classList.remove("inActive");
}