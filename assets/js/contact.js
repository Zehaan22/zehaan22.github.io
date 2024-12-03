document.getElementById("contactForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const successMessage = document.getElementById("successMessage");
    const errorMessage = document.getElementById("errorMessage");

    try {
        const response = await fetch("https://example.com/send-mail-endpoint", { // Replace with your mail API endpoint
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, subject, message }),
        });

        if (response.ok) {
            successMessage.style.display = "block";
            errorMessage.style.display = "none";
            document.getElementById("contactForm").reset();
        } else {
            throw new Error("Failed to send message.");
        }
    } catch (error) {
        successMessage.style.display = "none";
        errorMessage.style.display = "block";
    }
});