function deleteByEmail() {
    const input = document.querySelector('[name="email"]');
    const rows = Array.from(document.querySelectorAll("#customers tbody tr"));
    const output = document.getElementById("result");
    let success = false;
debugger
    for (let row of rows){
        if(row.children[1].textContent == input.value){
            row.remove();
            success = true;
            input.value = "";
        }
    }
if(success){
    output.textContent = "Deleted.";
}
else{
    output.textContent = "Not found.";
}
}