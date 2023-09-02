function substitute(input) {
    let K = Number(input[0]);
    let L = Number(input[1]);
    let M = Number(input[2]);
    let N = Number(input[3]);


    let isValid = false;
    let isPossible = false;
    count = 0;

    for (let k = K; k <= 8; k++) {
        for (let l = 9; l >= L; l--) {
            for (let m = M; m <= 8; m++) {
                for (let n = 9; n >= N; n--) {
                    if (k % 2 === 0 && l % 2 === 1 && m % 2 === 0 && n % 2 === 1) {
                        if (!(k === m && l === n)) {
                            console.log(`${k}${l} - ${m}${n}`);
                            count++
                        }
                        else {
                            console.log("Cannot change the same player.")
                        }

                        if (count === 6) {
                            return;
                        }
                    }

                }
            }

        }

    }




}



substitute(["7",
    "6",
    "8",
    "5"])



