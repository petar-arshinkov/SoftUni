function storeCalculator(input) {
    let arrayOfProducts = [];
    let currentInitialPrinted = "";


    for (let el of input) {
        let [name, price] = el.split(" : ");
        price = Number(price);
        let initial = name[0];
        arrayOfProducts.push({ name, price, initial });
    }

    let sortedArray = arrayOfProducts.sort((a, b) => a.name.localeCompare(b.name))

    sortedArray.forEach((product) => {
        if (currentInitialPrinted !== product.name[0]) {
            currentInitialPrinted = product.name[0];
            console.log(currentInitialPrinted);
            console.log(`  ${product.name}: ${product.price}`);
        }
        else{
            console.log(`  ${product.name}: ${product.price}`);
        }
    })


}



// storeCalculator(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10'])

storeCalculator(['Banana : 2', "Rubic`s Cube : 5", 'Raspberry P : 4999', 'Rolex : 100000', 'Rollon : 10', 'Rali Car : 2000000', 'Pesho : 0.000001', 'Barrel : 10'])