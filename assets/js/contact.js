// Initialize EmailJS
(function() {
    emailjs.init("9oJmy0rt1dCRA-3Dw"); // Replace with your EmailJS public key
})();

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Prepare the email parameters
    const templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: message,
    };

    // Send the email
    emailjs.send("service_q15ewl8", "template_6oefu7j", templateParams)
        .then(function(response) {
            console.log("SUCCESS!", response.status, response.text);
            document.getElementById("successMessage").style.display = "block";
            document.getElementById("errorMessage").style.display = "none";
            contactForm.reset(); // Reset the form
        }, function(error) {
            console.log("FAILED...", error);
            document.getElementById("successMessage").style.display = "none";
            document.getElementById("errorMessage").style.display = "block";
        });
});