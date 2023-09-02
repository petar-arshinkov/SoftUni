function yardGreeningCost(input){
    let area = Number(input[0]);
    let cost = area * 7.61;
    let discount = cost * 0.18;
    let finalCost = cost - discount;
   
    console.log(`The final price is: ${finalCost} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yardGreeningCost(["550"]);