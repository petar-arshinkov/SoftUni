function rounding (n,p){
    if(p>15){
        p = 15;
    }

    console.log(parseFloat(n.toFixed(p)) );
}

rounding(3.1415926535897932384626433832795,2);

    rounding(10.5,3);