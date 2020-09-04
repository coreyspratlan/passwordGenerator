const generatePasswordButon = document.getElementById("generate");
const passwordTextEl = document.getElementById("password");

generatePasswordButon.addEventListener("click", startGenerate);

const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz".split("");
const numberChars = "0123456789".split("");
const specialChars = "~!@#$%^&*()_+=-?><".split("");


function startGenerate() {

    let passwordLength = prompt("Enter the length of your password.");
    passwordLength = parseInt(passwordLength);

    if (passwordLength < 8 || passwordLength > 128) {
        alert("Password must be between 8 and 128 characters in length.");
        return;
    }

    let temporaryPassword = "";
    let includeUpperCase = confirm("Include Upper Case?");
    let includeLowerCase = confirm("Include Lower Case?");
    let includeNumbers = confirm("Include Numbers?");
    let includeSpecialCharacters = confirm("Include Special Characters?");
    let increase = 0;

    if (includeLowerCase) { increase++ }
    if (includeUpperCase) { increase++ }
    if (includeNumbers) { increase++ }
    if (includeSpecialCharacters) { increase++ }

    console.log(parseInt(includeLowerCase));

    if (increase === 0) {
        alert("You must choose at least one of the criteria.");
        return
    }

    for (let i = 0; i < passwordLength; i += increase) {

        if (includeUpperCase) {
            temporaryPassword += getChars(upperCaseChars);
        }
        if (includeLowerCase) {
            temporaryPassword += getChars(lowerCaseChars);
        }
        if (includeNumbers) {
            temporaryPassword += getChars(numberChars);
        }
        if (includeSpecialCharacters) {
            temporaryPassword += getChars(specialChars);
        }

    }

    passwordTextEl.value = temporaryPassword.substr(0, passwordLength);
}

function getChars(arr) {
    return arr[randomNumber(arr.length - 1)];
}

function randomNumber(max) {
    return Math.floor(Math.random() * max);
}