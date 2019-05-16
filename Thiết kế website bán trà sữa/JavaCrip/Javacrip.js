// JavaScript Document
function KTthongtin(){
	var hovaten=document.getElementById("hovaten");
	if (hovaten.value=="")
	{
		alert("*Vui lòng nhập họ tên của bạn.*");
		hovaten.focus();
		return false;
	}
	var namsinh=document.getElementById("namsinh");
	if (namsinh.value=="")
	{
		alert("*Vui lòng nhập năm sinh.*");
		namsinh.focus();
		return false;
	}
	if (intnamsinh(namsinh.value)==true)
	{
		alert("Nam sinh phai la so.");
		namsinh.value="";
		namsinh.focus();
		return false;
	}
	
	var diachi=document.getElementById("diachi");
	if (diachi.value=="")
	{
		alert("*Vui lòng nhập địa chỉ.*");
		diachi.focus();
		return false;
	}
	var sodt=document.getElementById("sodt");
	if (sodt.value=="")
	{
		alert("*Vui lòng nhập địa chỉ.*");
		sodt.focus();
		return false;
	}
	if (intsodt(sodt.value)==true)
	{
		alert("Nam sinh phai la so.");
		sodt.value="";
		sodt.focus();
		return false;
	}
	var email=window.document.dangky.txtemail;
	re=/\w+@\w+\.\w+/;
	if (diachi.value=="")
	{
		alert("*Vui lòng nhập địa chỉ email.*");
		email.focus();
		return false;
	}
	else
		if(re.test(email.value)==false)
		{
			alert("email khong dung dinh dang!");
			email.focus();
			return false;
		}
	alert("Dang ky thanh cong !!!");
	return true;
}
function ShowDangky()
{
	window.open("http://sachvip123.somee.com/Dangky.html");
	return;
}