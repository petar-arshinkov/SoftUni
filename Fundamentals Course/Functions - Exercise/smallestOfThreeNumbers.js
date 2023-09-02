function smallestOfThreeNumbers(int1, int2, int3) {
    if (int1 < int2 && int1 < int3) {
        console.log(int1);
    }
    else if (int2 < int1 && int2 < int3) {
        console.log(int2);
    }

    else {
        console.log(int3);
    }
}


smallestOfThreeNumbers(600,
    342,
    123
    );