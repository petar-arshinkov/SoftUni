function ages(age){
    let result = '';
    if(age<0){
        console.log('out of bounds');
    }
    else if(age <=2){
        result = "baby";
        console.log(result);
    }
    else if(age <=13){
        result = "child";
        console.log(result);
    }
    else if(age <=19){
        result = "teenager";
        console.log(result);
    }
    else if(age <=65){
        result = "adult";
        console.log(result);
    }
    else {
        result = "elder";
        console.log(result);
    }
};

ages(20);
ages(1);
ages(100);
ages(-1);