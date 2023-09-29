import * as config from "../../config.js"

export function createOutputField() {


    const passwordOutput = document.createElement('div');
    passwordOutput.id = 'passwordOutput';

    const passwordSpecs = document.createElement('p');
    passwordSpecs.className = 'loginRegisterPasswordSpecs';
    passwordSpecs.textContent = 'Your Password needs at least:';

    const passwordSpecsList = document.createElement('ul');
    passwordSpecsList.className = 'loginRegisterPasswordSpecsList';

    const requirementsIds = [
        'passwordLength',
        'passwordUppercaseLetter',
        'passwordLowercaseLetter',
        'passwordNumber',
        'passwordSpecialChar'
    ];

    const requirements = [
        'A length of at least 8',
        'One uppercase letter',
        'One lowercase letter',
        'One number',
        'One special character'
    ];

    requirements.forEach((requirementText, index) => {
        const listItem = document.createElement('li');
        listItem.id = requirementsIds[index];
        listItem.textContent = requirementText;
        passwordSpecsList.appendChild(listItem);
    });

    passwordOutput.appendChild(passwordSpecs);
    passwordOutput.appendChild(passwordSpecsList);
    config.outputField.appendChild(passwordOutput);
}

export function removeOutputField () {
    const passwordOutput = document.getElementById('passwordOutput');
    passwordOutput.remove();
    console.log("%cDeleted: " + passwordOutput, "color: orange")
}

/*function hiExamlple () {
    const errorOutput = document.createElement('p');
    errorOutput.className = 'loginRegisterErrorText';
    errorOutput.id = 'errorOutput';
    errorOutput.textContent = 'hello';
}*/