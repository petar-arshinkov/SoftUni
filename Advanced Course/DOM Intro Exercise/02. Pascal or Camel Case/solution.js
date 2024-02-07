function solve() {
  let text = document.getElementById("text").value.toLowerCase();
  let convention = document.getElementById("naming-convention").value;
  const resultRef = document.getElementById("result");
  let result = "";
  //this is an example
  //Camel Case

  switch (convention) {
    case "Camel Case":
      let textArr = text.split(" ");
      result = textArr.shift();
      textArr.forEach(word => {
        result += word[0].toUpperCase() + word.substring(1).toLowerCase();
      });
      break;
    case "Pascal Case":
      let pascalArr = text.split(" ");
      pascalArr.forEach(word => {
        result += word[0].toUpperCase() + word.substring(1).toLowerCase();
      })
      break;
    default:
      result = "Error!"
      break;
  }

  resultRef.textContent = result;
}