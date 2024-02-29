function solve() {
  let textAreaRef = document.getElementById("input");
  let sentences = textAreaRef.value.split(".").filter((sentence) => sentence.length > 0)
  let outputRef = document.getElementById("output");

  let count = 0;
  let text = "";

  for (let i = 0; i < sentences.length; i++) {

    text += sentences[i] + ".";

    if ((i + 1) % 3 === 0 || i === sentences.length - 1) {
      let paragraph = `<p>${text}</p>`;
      outputRef.innerHTML += paragraph; 
      text = ""; 
    }
  }




}