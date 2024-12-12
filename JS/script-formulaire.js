document.querySelector('.contact-form').addEventListener('submit', async function (event) {
    event.preventDefault(); 

    const formData = new FormData(event.target);


    try {
        const response = await fetch('send_email.php', {
            method: 'POST',
            body: formData
        });
        const result = await response.json();


        const responseMessage = document.getElementById('responseMessage');
        responseMessage.textContent = result.message;
        responseMessage.style.color = result.status === 'success' ? 'green' : 'red';
    } catch (error) {

        const responseMessage = document.getElementById('responseMessage');
        responseMessage.textContent = "Une erreur est survenue lors de l'envoi du message.";
        responseMessage.style.color = 'red';
    }
});
