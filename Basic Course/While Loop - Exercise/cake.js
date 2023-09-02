function cake(input){
let width = Number(input[0]);
let length = Number(input[1]);
let pieces = width*length;
let index = 2;

    while(pieces>0){
        if(input[index]==="STOP"){
            console.log(`${pieces} pieces are left.`)
          break;  
        }

        pieces -=Number(input[index]);
        index++
    }

    if(pieces<=0){
        console.log(`No more cake left! You need ${Math.abs(pieces)} pieces more.`)
    }

}



cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])

cake(["10",
"2",
"2",
"4",
"6",
"STOP"])
