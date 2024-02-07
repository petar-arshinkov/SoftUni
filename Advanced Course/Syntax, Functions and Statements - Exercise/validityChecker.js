function validityChecker(x1, y1, x2, y2) {

    function cartesian(xa, ya, xb, yb) {
        let result = Math.sqrt(Math.pow((xb - xa), 2) + Math.pow((yb - ya), 2))
        if (Number.isInteger(result)) {
            console.log(`{${xa}, ${ya}} to {${xb}, ${yb}} is valid`);
        }
        else{
            console.log(`{${xa}, ${ya}} to {${xb}, ${yb}} is invalid`);
        }
    }

    cartesian(x1,y1,0,0);
    cartesian(x2,y2,0,0);
    cartesian(x1,y1,x2,y2);
    

}


validityChecker(3, 0, 0, 4)
validityChecker(2, 1, 1, 1)



