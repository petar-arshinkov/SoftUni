function addItem() {
    const selectMenuRef = document.getElementById("menu");
    const textValueRef = document.getElementById("newItemText");
    const keyValueRef = document.getElementById("newItemValue");
    let textValue = textValueRef.value;
    let keyValue = keyValueRef.value;
    let option = document.createElement("option");
    option.value = keyValue;
    option.text=textValue;

    selectMenuRef.appendChild(option);
    textValueRef.value = "";
    keyValueRef.value = "";
}