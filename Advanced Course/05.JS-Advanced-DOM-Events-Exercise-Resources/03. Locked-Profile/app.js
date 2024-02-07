function lockedProfile() {
    const buttons = Array.from(document.querySelectorAll("button"));

    buttons.forEach(x=> x.addEventListener("click", onClickHandler));
debugger
    function onClickHandler(event){
        let hiddenInfo = event.currentTarget.parentElement.querySelector("div");
        let currentRadioButton = event.target.parentElement.querySelector("input[type='radio']:checked");

        if(currentRadioButton.value === "unlock"){
            if(event.currentTarget.textContent === "Show more"){
                event.currentTarget.textContent = "Hide it";
                hiddenInfo.style.display ="block";
            }
            else{
                event.currentTarget.textContent ="Show more";
                hiddenInfo.style.display="none";
            }
        }
    }
}