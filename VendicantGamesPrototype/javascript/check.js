var email = document.getElementsByName("email")[0];
var fname = document.getElementsByName("fname")[0];
var lname = document.getElementsByName("lname")[0];
var message = document.getElementsByName("message")[0];

document.getElementsByName("submit")[0].onclick = function()
{
	/*For Email*/
	var check = [false, true];
	if (email.value.length >= 7 && email.value[email.value.length - 4] == '.')
	{
		for (var index = 0; index < email.value.length; index++)
		{
			if (email.value[index] == '@' && index <= email.value.length - 6 && index > 0 && check[0] == false)
			{
				check[0] = true;
			}
			else if (email.value[index] == '@' && check[0] == true)
			{
				check[0] = false;
			}
		}
	}
	if (email.value != "" && check[0] == false)
	{
		alert("Your email address is invalid.");
	}
	else if (email.value == "")
	{
		alert("An email address is required.");
	}
	/*For Name*/
	if (fname.value == "" || lname.value == "")
	{
		alert("You must enter a first and last name.");
		check[1] = false;
	}
	/*For Message*/
	message.innerHTML = message.innerHTML.trim();
	for (var index = 0; index < message.innerHTML.length; index++)
	{
		if (index < message.innerHTML.length - 1)
		{
			if (message.innerHTML[index] == ' ' && message.innerHTML[index + 1] == ' ')
			{
				message.innerHTML.splice(index, 1);
			}
		}
	}
	if (message.innerHTML == "")
	{
		alert("You must type in a message");
		check[1] = false;
	}
	/*Return Verdict*/
	if (check[0] == true && check[1] == true)
	{
		alert("You message has been submited.");
		return true;
	}
	else
	{
		alert("The form was not compleated correctly; no message has been sent.");
		return false;
	}
}