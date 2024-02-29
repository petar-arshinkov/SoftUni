function search() {
   const townListRef = document.querySelectorAll("#towns li");
   const searchBoxRef = document.getElementById("searchText");
   const searchButtonRef = document.querySelector("button");
   const result = document.getElementById("result");
   let townsLiArray = Array.from(townListRef);

   let matches = 0;
   for (const li of townsLiArray) {

      if (!searchBoxRef.value) {
         li.style.textDecoration = "none";
         li.style.fontWeight = "normal"
      }

      else if (li.textContent.includes(searchBoxRef.value)) {
         li.style.textDecoration = "underline";
         li.style.fontWeight = "bold"

         matches++;

      }
   }
   searchBoxRef.value = "";
   result.textContent = `${matches} matches found`
}
