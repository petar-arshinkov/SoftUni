function sortNumbers(n1, n2, n3) {
    let first = 0;
    let second = 0;
    let third = 0;
    for (let index = 0; index < 3; index++) {

        if (n1 >= n2 && n1 >= n3) {
            first = n1;

            if(n2>=n3){
                second= n2;
                third=n3;
            }
            else{
                second= n3;
                third=n2;
            }
        }
        else if (n2 >= n1 && n2 >= n3) {
            first = n2;
            if(n1>=n3){
                second= n1;
                third=n3;
            }
            else{
                second= n3;
                third=n1;
            }
        }
        else if (n3 >= n1 && n3 >= n2){
            first = n3;
            if(n1>=n2){
                second= n1;
                third=n2;
            }
            else{
                second= n2;
                third=n1;
            }
        }
    }
    console.log(first);
    console.log(second);
    console.log(third);
}



sortNumbers(-2, 1, 3);