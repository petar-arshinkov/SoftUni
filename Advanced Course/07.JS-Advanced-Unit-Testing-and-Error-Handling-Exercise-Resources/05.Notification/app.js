function notify(message) {
  let notificationDivRef = document.getElementById("notification");
  let buttonRef = document.querySelector("button");
  notificationDivRef.textContent = message;

  notificationDivRef.style.display = "block";

  notificationDivRef.addEventListener("click", hideMessage);


  function hideMessage(e) {

    notificationDivRef.style.display = "none";

  }
}




