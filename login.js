function clearErrors(){
	errors=document.getElementsByClassName('error');
	for(let item of errors){
		item.innerHTML="";
	}
}
function seterror(id,error){
	element=document.getElementById(id);
	element.getElementsByClassName('error')[0].innerHTML=error;
}
function validateForm(){
	var returnval=true;
	clearErrors();
	var mail=document.forms['myForm']['email2'].value;
	if(mail.length>12){
seterror("email","*Email length is too long");
returnval=false;
	}
var password=document.forms['myForm']['password'].value;
if(password.length<6){
	seterror("pass","*password should be atleast 6 characters long");
	returnval=false;

}
return returnval;
   }




