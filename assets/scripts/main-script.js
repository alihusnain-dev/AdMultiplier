document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded'); // Verify the event listener is set up

    // Check if the form was submitted (after page reload)
    const formSubmitted = localStorage.getItem('formSubmitted');
    if (formSubmitted === 'true') {
        console.log('Form was previously submitted, showing success message');
        const successMessage = document.getElementById('success-message');
        if (successMessage) {
            successMessage.style.display = 'flex';
            // Clear the flag after showing the message to prevent it from showing on manual reloads
            localStorage.removeItem('formSubmitted');
        } else {
            console.error('Success message element not found');
        }
    }

    // Verify the form element exists
    const form = document.getElementById('contact-form');
    if (!form) {
        console.error('Form with ID "contact-form" not found');
        return;
    }

    // Handle form submission
    form.addEventListener('submit', function (e) {
        console.log('Form submitted'); // Verify the submit event is triggered
        e.preventDefault(); // Prevent default form submission

        // Show the success message
        const successMessage = document.getElementById('success-message');
        if (successMessage) {
            console.log('Showing success message');
            successMessage.style.display = 'flex';
        } else {
            console.error('Success message element not found');
        }

        // Set a flag in localStorage to indicate the form was submitted
        localStorage.setItem('formSubmitted', 'true');
        console.log('Set formSubmitted flag in localStorage');

        // Reload the page
        setTimeout(function () {
            console.log('Reloading page');
            window.location.reload(); // Reload the page
        }, 1000); // Delay to ensure the message is visible
    });
});

// Function to close the success message and clear the flag
function closeSuccessMessage() {
    console.log('Closing success message');
    document.getElementById('success-message').style.display = 'none';
    localStorage.removeItem('formSubmitted'); // Clear the flag
    console.log('Cleared formSubmitted flag from localStorage');
}


const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const firstNameError = document.getElementById('first-name-error');
const lastNameError = document.getElementById('last-name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

// First Name validation on blur
firstNameInput.addEventListener('blur', () => {
    const firstNameValue = firstNameInput.value.trim();
    if (!firstNameValue) {
        firstNameError.textContent = 'Please enter your first name';
    } else {
        firstNameError.textContent = '';
    }
});

firstNameInput.addEventListener('input', () => {
    firstNameError.textContent = '';
});

// Last Name validation on blur
lastNameInput.addEventListener('blur', () => {
    const lastNameValue = lastNameInput.value.trim();
    if (!lastNameValue) {
        lastNameError.textContent = 'Please enter your last name';
    } else {
        lastNameError.textContent = '';
    }
});

lastNameInput.addEventListener('input', () => {
    lastNameError.textContent = '';
});

// Email validation on blur
emailInput.addEventListener('blur', () => {
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValue) {
        emailError.textContent = 'Please enter your email';
    } else if (!emailPattern.test(emailValue)) {
        emailError.textContent = 'Please enter a valid email address';
    } else {
        emailError.textContent = '';
    }
});

emailInput.addEventListener('input', () => {
    emailError.textContent = '';
});

// Message validation on blur
messageInput.addEventListener('blur', () => {
    const messageValue = messageInput.value.trim();
    if (!messageValue) {
        messageError.textContent = 'Please enter your message';
    } else {
        messageError.textContent = '';
    }
});

messageInput.addEventListener('input', () => {
    messageError.textContent = '';
});

// Existing close success message function (assuming it exists elsewhere)
function closeSuccessMessage() {
    document.getElementById('success-message').style.display = 'none';
}


function playVideo() {
    var video = document.getElementById('video-player');
    video.play();  // Start playing the video
    document.querySelector('.play-circle').style.display = 'none'; // Hide the play button after click
}