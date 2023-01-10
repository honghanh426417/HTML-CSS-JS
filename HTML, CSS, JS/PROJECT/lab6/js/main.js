//let errorMsg = document.getElementsByClassName("error"),
//    successIcon = document.getElementsByClassName("success-icon"),
//    failIcon = document.getElementsByClassName("fail-icon");

let classes = (classes) => document.getElementsByClassName(classes);

//let id = document.getElementById("username"),
//    email = document.getElementById("email"),
//    password = document.getElementById("password");
//same cai ben duoi
let id = (id) => document.getElementById(id);

let username = id("username"),
    email = id("email"),
    password = id("password"),
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failIcon = classes("fail-icon");

form.addEventListener("submit", (e) =>{
    e.preventDefault(); //callback() trong js đảm bảo sự kiện k trùng chéo lên nhau
    engine(username,0,"Username can not be blank!")
    engine(email,1,"Email can not be blank");
    engine(password,2,"Password cannot blank");
});

let engine = (id, serial, message) => {
     if(id.value.trim()===""){
        errorMsg[serial].innerHTML = message;
        id.style.border ="2px solid red";
        successIcon[serial].style.opacity="0";
        failIcon[serial].style.opacity="1";
     } 
     else{
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";
        successIcon[serial].style.opacity = "1";
        failIcon[serial].style.opacity = "0";
     }
     
}