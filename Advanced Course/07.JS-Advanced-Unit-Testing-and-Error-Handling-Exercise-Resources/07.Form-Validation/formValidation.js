function validate() {
    //get references
    const userNameRef = document.getElementById("username");
    const emailRef = document.getElementById("email");
    const passwordRef = document.getElementById("password");
    const confirmPasswordRef = document.getElementById("confirm-password");
    const submitButtonRef = document.getElementById("submit");
    const companyRef = document.getElementById("company");
    const companyInfoRef = document.getElementById("companyInfo");
    const companyNumberRef = document.getElementById("companyNumber");
    const validDiv = document.getElementById("valid");
    let show = true;

    companyRef.addEventListener("change", checkCheckbox)
    submitButtonRef.addEventListener("click", checkFields);


    function checkCheckbox() {
        if (companyRef.checked) {
            companyInfoRef.style.display = "block"
        } else {
            companyInfoRef.style.display = "none"
        }
    }

    function checkFields(event) {
        event.preventDefault();


        changeStyle(userNameRef, checkUsername());
        changeStyle(passwordRef, checkPassword());
        changeStyle(confirmPasswordRef, checkPassword());
        changeStyle(emailRef, checkEmail());
        if (companyRef.checked) {
            changeStyle(companyNumberRef, checkCompanyInfo());
        }


        if (show) {
            validDiv.style.display = "block";

        }
        else {
            validDiv.style.display = "none";
        }
    }

    // check username

    function checkUsername() {
        let isInvalid = false;
        let regex = /^[a-zA-Z0-9]+$/
        if (userNameRef.value.length < 3 || userNameRef.value.length > 20) {
            isInvalid = true;
        }
        else if (!regex.test(userNameRef.value)) {
            isInvalid = true;
        }

        return isInvalid
    }
    //check email
    function checkEmail() {
        let isInvalid = false;
        let regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z]+/
        if (!regex.test(emailRef.value)) {
            isInvalid = true;
        }
        return isInvalid
    }
    //check password
    function checkPassword() {
        let isInvalid = false;
        let regex = /^[\w]+$/
        if (passwordRef.value.length < 5 || passwordRef.value.length > 15) {
            isInvalid = true;
        }
        else if (!regex.test(passwordRef.value)) {
            isInvalid = true;
        }
        else if (!(passwordRef.value == confirmPasswordRef.value)) {
            isInvalid = true;
        }
        return isInvalid
    }
    //check is company
    function checkCompanyInfo() {

        let isInvalid = true;
        let number = Number(companyNumberRef.value)
        if (number < 1000 || number > 9999 && companyRef.checked) {
            isInvalid = true;
        }
        else {
            isInvalid = false;
        }

        return isInvalid

    }

    //change style

    function changeStyle(p, flag) {

        if (flag) {
            p.style.borderColor = "red";
            show = false;

        }
        else {
            p.style.border = "none"
            show = true;
        };
    }

}

