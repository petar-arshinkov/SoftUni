function changePlayers(K, L, M, N) {
    let count = 0;

    for (let i = K; i <= 8; i += 2) {
        for (let j = 9; j <= L; j += 2) {
            for (let k = M; k <= 8; k += 2) {
                for (let l = 9; l <= N; l += 2) {
                    if (i === k && j === l) {
                        console.log("Cannot change the same player.");
                    } else {
                        console.log(`${i}${j} - ${k}${l}`);
                        count++;
                        if (count >= 6) {
                            return;
                        }
                    }
                }
            }
        }
    }
}

  

changePlayers(["7",
    "6",
    "8",
    "5"])

    changePlayers(["6",
    "7",
    "5",
    "6"])
