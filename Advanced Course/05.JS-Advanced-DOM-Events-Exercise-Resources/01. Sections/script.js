function create(words) {
   const contentRef = document.getElementById("content");
   for(let word of words){
      let divEl = document.createElement("div");

      let pEl = document.createElement("p");
      pEl.textContent = word;
      pEl.style.display = "none";

      divEl.appendChild(pEl);
      contentRef.appendChild(divEl);
      divEl.addEventListener("click",clickHandler);
   }

   function clickHandler(event){
      debugger
      event.currentTarget.children[0].style.display="block";
   }
}