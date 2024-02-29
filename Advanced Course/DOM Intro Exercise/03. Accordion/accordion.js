function toggle() {
    let buttonRef = document.querySelector("span.button");
    let paragraph = document.getElementById("extra");

    if(paragraph.style.display === "none"){
        paragraph.style.display = "block";
        buttonRef.textContent ="Less";
    }
    else{
        paragraph.style.display = "none";
        buttonRef.textContent ="More";
    }
    

}