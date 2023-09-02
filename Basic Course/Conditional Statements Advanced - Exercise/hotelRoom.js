function hotelRoom(input) {
    let month = input[0];
    let numberOfNights = Number(input[1]);
    let apPrice = 0;
    let stPrice = 0;

    switch (month) {
        case "May":
        case "October":

            apPrice = 65 * numberOfNights;
            stPrice = 50 * numberOfNights;

            if(numberOfNights > 7 && numberOfNights <=14 ){
                stPrice = stPrice - 5/100 * stPrice;
            }

            else if(numberOfNights>14){
                stPrice = stPrice- 30/100 * stPrice;
                apPrice = apPrice - 10/100 * apPrice;
            }



            console.log(`Apartment: ${apPrice.toFixed(2)} lv.`);
            console.log(`Studio: ${stPrice.toFixed(2)} lv.`)
            break;
        case "June":
        case "September":

        apPrice = 68.70 * numberOfNights;
        stPrice = 75.20 * numberOfNights;


        if(numberOfNights>14){
            stPrice = stPrice- 20/100 * stPrice;
            apPrice = apPrice - 10/100 * apPrice;
        }



        console.log(`Apartment: ${apPrice.toFixed(2)} lv.`);
        console.log(`Studio: ${stPrice.toFixed(2)} lv.`)
            break;
        case "July":
        case "August":

        apPrice = 77 * numberOfNights;
        stPrice = 76 * numberOfNights;

     
        if(numberOfNights>14){
            apPrice = apPrice - 10/100 * apPrice;
        }



        console.log(`Apartment: ${apPrice.toFixed(2)} lv.`);
        console.log(`Studio: ${stPrice.toFixed(2)} lv.`)
            break;
    }

}

hotelRoom(["May",

    "15"])

hotelRoom(["June",

    "14"])

    hotelRoom (["August", "20"])