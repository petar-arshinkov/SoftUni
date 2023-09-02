function addAndSubtract(firstInt,secondInt,thirdInt){
    function sum(firstInt,secondInt){
        return firstInt + secondInt;
    }

    function subtract(){
        return sum(firstInt,secondInt) - thirdInt;
    }

    console.log(subtract())
}



addAndSubtract(1,
    17,
    30
    );