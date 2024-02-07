function addItem() {
   const input = document.getElementById("newItemText");
   const liElement = document.createElement("li");
   liElement.textContent = input.value;
   if(input.value.length == 0){
    return;
   }

   const list = document.getElementById("items");

   list.appendChild(liElement);
   input.value = "";

}