document.getElementById('contactForm').addEventListener('submit', function(event) {
    var isValid = true;
    // Name validation
    var name = document.getElementById('name').value;
    var nameError = document.getElementById('nameError');
    if (/\d/.test(name)) {
        nameError.classList.add('active');
        isValid = false;
    } else {
        nameError.classList.remove('active');
    }

    // Phone number validation
    var number = document.getElementById('number').value;
    var numberError = document.getElementById('numberError');
    if (!/^\d{10}$/.test(number)) {
        numberError.classList.add('active');
        isValid = false;
    } else {
        numberError.classList.remove('active');
    }

    // Email validation
    var email = document.getElementById('email').value;
    var emailError = document.getElementById('emailError');
    if (!/@/.test(email)) {
        emailError.classList.add('active');
        isValid = false;
    } else {
        emailError.classList.remove('active');
        alert("We Will Get Back To You...");
    }

    if (!isValid) {
        event.preventDefault();
    }
});