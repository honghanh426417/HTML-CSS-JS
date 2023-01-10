let classes = (classes) => document.getElementsByClassName(classes);
let id = (id) => document.getElementById(id);

let Họ = id("first-name"),
    Tên = id("last-name"),
    email = id("email"),
    password = id("password"),
    errorMsg = classes("error"),
    

form.addEventListener("submit", (e) =>{
    e.preventDefault(); //callback() trong js đảm bảo sự kiện k trùng chéo lên nhau
    engine(Họ,0,"Nhập họ và tên")
    engine(Tên,1,"Nhập tên của bạn")
    engine(email,2,"Xin lỗi, tên người dùng của bạn phải nằm trong khoảng độ dài kí tự giữa 6 và 30")
    engine(password,3,"Nhập mật khẩu");
    engine(repassword,4,"Các mật khẩu không khớp. Hãy thử lại!!");
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