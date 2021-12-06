// checking for name validation
const text = document.querySelector('#name');
const textError = document.querySelector('.text-error');
text.addEventListener('input', function() {
    let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if (nameRegex.test(text.value))textError.textContent = "";
    else textError.textContent = "Incorrect Name";
});

// checking for address validation
const address = document.querySelector('#address');
const addressError = document.querySelector('.address-error');
address.addEventListener('input', function () {
    let addressRegex = RegExp("[a-z]{3,}+$");
    if (addressRegex.test(address.value)) addressError.textContent = "";
    else addressError.textContent = "Incorrect Address";
});

// checking for phone number validation
const phone = document.querySelector('#phoneNumber');
const phoneNumberError = document.querySelector('.phoneNumber-error');
phone.addEventListener('input', function () {
    let phoneRegex = RegExp('^(?=.+)[0-9]{0,3}[0-9]{10}$');
    if (phoneRegex.test(phone.value)) phoneError.textContent = "";
    else phoneNumberError.textContent = "Incorrect Phone Number";
});
