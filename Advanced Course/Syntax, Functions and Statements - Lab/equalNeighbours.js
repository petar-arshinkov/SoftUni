function equalNeighbours(matrix) {
    let findings = 0;
    let rows = matrix.length;
    let cols = matrix[0].length;
    let j = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (j < cols - 1 && matrix[i][j] === matrix[i][j + 1]) {
                findings++;
            };

            if (i < rows - 1 && matrix[i][j] === matrix[i + 1][j]) {
                findings++;
            };

        }


    }

    return findings;
}


console.log(equalNeighbours([['2', '3', '4', '7', '0'],

['2', '0', '5', '3', '4'],

['2', '3', '5', '4', '2'],

['9', '8', '7', '5', '4']]))