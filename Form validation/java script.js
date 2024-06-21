document.getElementById('CUSTOMER'S SUPPORT').addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = ''; 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;


    let valid = true;


    if (name.trim() === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        valid = false;
    }


    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        valid = false;
    }

    if (message.trim() === '') {
        document.getElementById('messageError').textContent = 'Message is required.';
        valid = false;
    }

    if (valid) {
        alert('Form submitted successfully!');
    
    }
});