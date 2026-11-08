/*email JavaScript */

/*Connecting EmailJS */


/* Initialize EmailJS with your Public Key */
emailjs.init({
    publicKey: "mlgjY8KbxZ2_Om62M"
});

/* Select your existing contact form */
const contactForm = document.getElementById("contact");

/* Listen for form submissions */
contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get your form data and send it using EmailJS
    emailjs.sendForm(
        "service_o9b7m64",
        "template_qs8kutl",
        contactForm
    )
    .then(function(response) {
        console.log("SUCCESS!", response.status, response.text);

        alert("Your message has been sent successfully!");

        // Clear the form after successful submission
        contactForm.reset();
    })
    .catch(function(error) {
        console.error("FAILED...", error);

        alert("Sorry, your message could not be sent. Please try again.");
    });
});

