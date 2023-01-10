var i="";// dùng để lưu những thông tin lỗi mà người dùng mắc phải
var hoten = document.getElementById('name');// khai báo biến họ tên lấy theo địa chỉ id là name.
if(hoten.value == "")// kiểm tra hoten có bỏ trống không
{
i += "Bạn chưa nhập họ tên.<br/>";
}

//Tương tự đối với giới tính:
var gtnam = document.getElementById('Nam');
var gtnu = document.getElementById('Nu');
if((gtnam.checked==false && gtnu.checked==false)||(gtnam.checked==true && gtnu.checked==true))
{
// kiểm tra người dùng có bỏ trống không hay là chọn cả 2
i += "Bạn chọn lại giới tính.<br/>";
}

//Đối với ngày sinh chúng ta chỉ kiểm tra xem người dùng có bỏ trống không và lưu vào biến i;
var namsinh = document.getElementById('namsinh');
if(namsinh.value==""){
i +="Năm sinh không được bỏ trống.<br/>";
}

//Username cũng như trường Họ tên cũng bắt lỗi bỏ trống
var user = document.getElementById('username');
if(user.value=="")
i+= "Username không được bỏ trống.<br/>";

//Đối với password thì chúng ta cần bắt lỗi không được bỏ trống và độ dài phải từ 6-20 ký tự
var pass = document.getElementById('pass');
if(pass.value !=""){
if(pass.value.length<6 || pass.value.length >20)
i+= "Password phải có độ dài từ 6-20 ký tự.<br/>";
}
else
i+="Password không được bỏ trống.<br/>";

//Sau khi nhập password thành công chúng ta cần kiểm tra xem người dùng nhập lại password có đúng không:
var re_pass = document.getElementById('re-pass');
if(pass.value != re_pass.value)
i+= "Password không khớp.<br/>";

//Đối với kiểm tra email chúng ta cần khai báo 1 biến reg_email  chứa khuôn chuẩn của email
var reg_email =/^[A-Za-z0-9]+([_\.\-]?[A-Za-z0-9])*@[A-Za-z0-9]+([\.\-]?[A-Za-z0-9]+)*(\.[A-Za-z]+)+$/;

//Sau đó kiểm tra email nhập vào bỏ trống hay không nếu không thì kiểm tra xem có đúng với  khuôn dạng reg_email không nếu không đúng khuôn dạng sẽ đưa ra thông báo lỗi.
var email = document.getElementById('email');
if(email.value!=""){
if(reg_email.test(email.value)==false)
i+="Email không hợp lệ.<br/>";
}
else{
i+="Không được bỏ trống email.<br/>";

//Sau khi bắt lỗi thành công thì chúng ta sẽ kiểm tra biến i xem có khác rống hay không nếu không thì đưa ra thông báo ở thẻ p có id=”lỗi” là “Đăng ký thành công”. Nếu có thì sẽ hiển thị các lỗi mà người dùng mắc phải
if(i!="")
document.getElementById('loi').innerHTML=i+"\n";
else
document.getElementById('loi').innerHTML="Đăng ký thành công";
}

