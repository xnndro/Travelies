const form = document.getElementById("form");
const names = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const services = document.getElementById("services");
const message = document.getElementById("messages");

/**
 * 
 * 1. ga boleh kosong (v)
 * 2. panjang (v)
 * 3. berawalan dengan apa (huruf besar dan 08)
 * 4. cek email (v)
 * 5. validasi select (v)
 */
function checkInputs()
{
    const nameValue = names.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const serviceValue = services.value.trim();
    const messageValue = message.value.trim();

    checkName(nameValue);
    checkEmail(emailValue);
    checkPhone(phoneValue);
    checkService(serviceValue);
    checkMessage(messageValue);
}

function checkName(nameValue)
{
    if(nameValue === '')
    {
        setError(names,"Name cannot be empty")
    }else if(nameValue.length < 3)
    {
        setError(names,"Name must be at least 3 characters")
    }else if(nameValue[0] !== nameValue[0].toUpperCase())
    {
        setError(names,"Name must start with a capital letter");
    }else
    {
        setSuccess(names);
    }
}

function checkEmail(emailValue)
{
    if(emailValue === '')
    {
        setError(email,"Email cannot be empty")
    }else if(!isEmail(emailValue))
    {
        setError(email,"Email is not valid")
    }else
    {
        setSuccess(email);
    }
}

function checkPhone(phoneValue)
{
    if(phoneValue === '')
    {
        setError(phone,"Phone cannot be empty")
    }else if(phoneValue.length <10 || phoneValue.length > 12)
    {
        setError(phone,"Phone must be less than 12 characters")
    }else if(!(phoneValue.startsWith('08')))
    {
        setError(phone,"Phone must start with 08")
    }else
    {
        setSuccess(phone);
    }
}

function checkService(serviceValue)
{
    if(serviceValue === '')
    {
        setError(services,"Service cannot be empty")
    }else
    {
        setSuccess(services);
    }
}

function checkMessage(messageValue)
{
    if(messageValue === '')
    {
        setError2(message,"Message cannot be empty")
    }else if(messageValue.length < 10 || messageValue.length > 100)
    {
        setError2(message,"Message must be between 10 and 100 characters")
    }else
    {
        setSuccess2(message);
    }
}

function setError(input,Errmessage)
{
    const formGroup = input.parentElement;
    const errText = formGroup.querySelector('.smalls');
    errText.innerHTML = Errmessage;
    formGroup.className = 'form-group error';
}

function setSuccess(input)
{
    const formGroup = input.parentElement;
    formGroup.className = 'form-group success';
}

function isEmail(email) {
	 // check for @ sign
     var atSymbol = email.indexOf("@");
     if(atSymbol < 1) return false;
     
     var dot = email.indexOf(".");
     if(dot <= atSymbol + 2) return false;
     
     // check that the dot is not at the end
     if (dot === email.length - 1) return false;
     
     return true;
}

function setError2(input,Errmessage)
{
    const formGroup = input.parentElement;
    const errText = formGroup.querySelector('.smalls');
    errText.innerHTML = Errmessage;
    formGroup.className = 'form-group-message error';
}

function setSuccess2(input)
{
    const formGroup = input.parentElement;
    formGroup.className = 'form-group-message success';
}