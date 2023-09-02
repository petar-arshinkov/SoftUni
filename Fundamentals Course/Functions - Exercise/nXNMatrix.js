function nXNMatrix(n){

    function generateRow(n){
        let row = "";

        for(let j = 1; j<=n; j++){
            row += `${n} `
        }
        console.log(row);

    }
    for(let i = 1; i<=n; i++){
        generateRow(n)
    }


}

nXNMatrix(7)