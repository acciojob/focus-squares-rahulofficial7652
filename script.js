const inputField = document.getElementById("fname");
inputField.onblur = () => {
    inputField.value = inputField.value.toUpperCase();
};