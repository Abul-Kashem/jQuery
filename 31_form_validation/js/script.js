
$(document).ready(function () {

  $('#myForm').submit(function (event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Perform form validation
    var name = $('#name').val();
    var email = $('#email').val();
    var password = $('#password').val();

    // Regular expressions for validation
    var nameRegex = /^[a-zA-Z\s]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    // Validate name field
    if (name === '') {
      alert('Please enter your name');
      return;
    } else if (!nameRegex.test(name)) {
      alert('Name can only contain letters');
      return;
    }

    // Validate email field
    if (email === '') {
      alert('Please enter your email');
      return;
    } else if (!emailRegex.test(email)) {
      alert('Please enter a valid email');
      return;
    }

    // Validate password field
    if (password === '') {
      alert('Please enter your password');
      return;
    } else if (!passwordRegex.test(password)) {
      alert('Password must contain at least one lowercase letter, one uppercase letter, one digit, and be at least 6 characters long');
      return;
    }

    // Submit the form if validation passes
    alert('Form submitted successfully');
    $('#myForm')[0].reset();

  });


});