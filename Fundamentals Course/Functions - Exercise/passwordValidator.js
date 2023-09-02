function passwordValidator(password) {

let validPassword = true;
    function checkLength(password) {
        if (password.length >= 6 && password.length <= 10) {
            return true;
        }
        else {
            console.log("Password must be between 6 and 10 characters");
            validPassword = false;
        }
    }

    function checkLettersOrDigits(password) {
        for (let i = 0; i < password.length; i++) {
            let currentCode = password.charCodeAt(i);
            let isNumber = currentCode >= 48 && currentCode <= 57;
            let isLetter = currentCode >= 65 && currentCode <= 90 || currentCode >= 97 && currentCode <= 122;
            if(!isNumber && !isLetter){
                console.log("Password must consist only of letters and digits");
                validPassword = false;
                return;
            }
        }
    }

    function checkDigitCount(password){
        let digitCount = 0;
        for (let i = 0; i < password.length; i++) {
            let currentCode = password.charCodeAt(i);
            let isNumber = currentCode >= 48 && currentCode <= 57;
            if(isNumber){
                digitCount++
            }
        }
        if(digitCount<2){
            console.log("Password must have at least 2 digits");
            validPassword = false;
        }
    }

    checkLength(password);
    checkLettersOrDigits(password);
    checkDigitCount(password);


    if(validPassword){
        console.log("Password is valid");
    }
}


passwordValidator('Pa$s$s')