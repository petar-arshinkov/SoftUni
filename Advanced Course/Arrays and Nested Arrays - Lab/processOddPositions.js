function processOddPositions(arr) {
    const filtered = arr.filter((e, i) => i % 2)

    const doubled = filtered.map(e => e*2).reverse();
    
    const result = doubled.join(" ");
    console.log(result);}


processOddPositions([10, 15, 20, 25])