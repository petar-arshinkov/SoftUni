function storeProvision(firstArray, secondArray) {
    let storeStorage = {};

    for (let index = 0; index < firstArray.length; index += 2) {
        let product = firstArray[index];
        let quantity = Number(firstArray[index+1])
        storeStorage[product] = quantity;

    }

    for (let index = 0; index < secondArray.length; index += 2) {
        let product = secondArray[index];
        let quantity = Number(secondArray[index+1])

        if(!storeStorage.hasOwnProperty(product)){
            storeStorage[product] = 0;
        }
            storeStorage[product] +=quantity;
  
    }

    for (const key in storeStorage) {
        console.log(`${key} -> ${storeStorage[key]}`);
    }
}


storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30'
    ]
)