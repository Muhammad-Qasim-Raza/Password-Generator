function generatePassword() {
    const length = document.getElementById('passwordLength').value;
    const passwordElement = document.getElementById('password');
    const password = generateRandomPassword(length);
    passwordElement.textContent = password;
}

function generateRandomPassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }
    return password;
}

function copyToClipboard() {
    const passwordElement = document.getElementById('password');
    const password = passwordElement.textContent;

    navigator.clipboard.writeText(password).then(function () {
        alert('Password copied to clipboard!');
    });
}

document.getElementById('passwordLength').addEventListener('input', function () {
    document.getElementById('lengthValue').textContent = this.value;
});