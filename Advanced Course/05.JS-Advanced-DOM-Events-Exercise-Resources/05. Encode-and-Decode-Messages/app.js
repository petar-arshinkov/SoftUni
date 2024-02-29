function encodeAndDecodeMessages() {

    let textAreasRef = document.querySelectorAll("textarea");
    let textArea1 = textAreasRef[0];
    let textArea2 = textAreasRef[1];

    let buttonsRef = document.querySelectorAll("button");
    let sendButton = buttonsRef[0];
    let readButton = buttonsRef[1];


    sendButton.addEventListener("click", sendAndEncode);
    readButton.addEventListener("click", readAndDecode);


    function sendAndEncode() {
        let message = textArea1.value;
        let encryptedMessage = ""; 

        for (let i = 0; i < message.length; i++) {
            let charCode = message.charCodeAt(i);
            encryptedMessage += String.fromCharCode(charCode + 1);
        }
        
        textArea1.value = ""; 
        textArea2.value = encryptedMessage; 
    }

  
    function readAndDecode() {
        let encryptedMessage = textArea2.value;
        let decryptedMessage = ""; 

        for (let i = 0; i < encryptedMessage.length; i++) {
            let charCode = encryptedMessage.charCodeAt(i);
            decryptedMessage += String.fromCharCode(charCode - 1);
        }

        textArea2.value = decryptedMessage; 
    }
}
