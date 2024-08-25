const registerForm = document.querySelector(".login-form");
registerForm.addEventListener("submit", handleSubmit);
function handleSubmit (event) {
    event.preventDefault();
    const form = event.target;
    const userEmail = form.elements.email.value;
    const userPassword = form.elements.password.value;
    if (userEmail === "" || userPassword === "") {
        return console.log(`All form fields must be filled in`);
    };
    console.log(`email: ${userEmail.trim()}, password: ${userPassword.trim()}`);
    form.reset();
};
