const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    const trimText = event.currentTarget.value.trim();
    output.textContent = trimText;
    if (trimText === "") {
        return output.textContent = "Anonymous";
    };
});

textInput.addEventListener("blur", () => {
    textInput.value = "";
    output.textContent = "Anonymous";
});