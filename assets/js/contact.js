document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form's default submission behavior

    const serviceID = "service_q15ewl8"; // Replace with your EmailJS Service ID
    const templateID = "template_6oefu7j"; // Replace with your EmailJS Template ID
    const publicKey = "9oJmy0rt1dCRA-3Dw"; // Replace with your EmailJS Public Key

    // Initialize EmailJS
    emailjs.init(publicKey);

    // Send form data
    emailjs
        .sendForm(serviceID, templateID, this)
        .then(
            () => {
                alert("Message sent successfully!");
                document.getElementById("contactForm").reset(); // Clear the form
            },
            (error) => {
                alert("Failed to send message. Please try again.");
                console.error("EmailJS Error:", error);
            }
        );
});
