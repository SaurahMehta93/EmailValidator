document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('emailInput');
    const validateButton = document.getElementById('validateButton');
    const validationMessage = document.getElementById('validationMessage');

    validateButton.addEventListener('click', () => {
        const email = emailInput.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // A common regex for email validation

        validationMessage.classList.remove('success', 'error'); // Clear previous states

        if (emailRegex.test(email)) {
            validationMessage.textContent = 'Valid Email Address!';
            validationMessage.classList.add('success');
        } else {
            validationMessage.textContent = 'Invalid Email Address. Please enter a valid format (e.g., example@domain.com).';
            validationMessage.classList.add('error');
        }
    });
});
