var email = document.getElementsByName("email")[0];
var fname = document.getElementsByName("fname")[0];
var lname = document.getElementsByName("lname")[0];
var message = document.getElementsByName("message")[0];

document.getElementsByName("submit")[0].onclick = function()
{
	if (email.value.length >= 7 && email.value[email.value.length - 4] == '.')
	{
		
	}
	else if (email.value != "")
	{
		alert("Your email address is invalid.");
		return false;
	}
	else
	{
		alert("An email address is required.");
		return false;
	}
}