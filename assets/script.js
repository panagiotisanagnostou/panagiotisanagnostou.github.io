document.getElementById('notify-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Fetch all form data
    var formData = new FormData(event.target);

    // Display a loading or processing message
    var confirmationMessage = document.getElementById('confirmation-message');
    confirmationMessage.textContent = "Sending your message...";

     // Use setTimeout to delay submission (note: this does not delay the form submission itself but shows the user a message before the page starts the submission process)
    

    // Use Fetch API to submit the form data to Formspree
    fetch('https://formspree.io/f/xwkgnjer', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        },
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Something went wrong');
        }
    })
    .then(data => {
        console.log(data);
        setTimeout(function() {
            // This function is set to run after 1 second, but note that the actual form submission is not delayed. 
            // For a real delay in submission, you would need to handle submission asynchronously via JavaScript (e.g., using Fetch API and prevent the default form submission).
            // Update the confirmation message upon success
            confirmationMessage.textContent = "Thank you for your message! We will be in touch soon.";
        }, 700);
        
    })
    .catch(error => {
        console.error(error);
        setTimeout(function() {
            // This function is set to run after 1 second, but note that the actual form submission is not delayed. 
            // For a real delay in submission, you would need to handle submission asynchronously via JavaScript (e.g., using Fetch API and prevent the default form submission).
            // Update the message upon failure
            confirmationMessage.textContent = "Oops! There was a problem submitting your form.";
        }, 700);
    });
});