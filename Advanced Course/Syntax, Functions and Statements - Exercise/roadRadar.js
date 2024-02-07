function roadRadar(speed,area){
let limit = 0;
let difference =0;
let status = "reckless driving";
    switch (area) {
        case "motorway":
            limit = 130;
            difference = speed - limit;
            

            if(speed<=limit){
                console.log(`Driving ${speed} km/h in a ${limit} zone`);
            }
            else{
                if(difference<=20){
                    status = "speeding";
                }
                else if(difference <=40){
                    status = "excessive speeding";
                }

                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
            }
            break;

            case "interstate":
                limit = 90;
                difference = speed - limit;
                
    
                if(speed<=limit){
                    console.log(`Driving ${speed} km/h in a ${limit} zone`);
                }
                else{
                    if(difference<=20){
                        status = "speeding";
                    }
                    else if(difference <=40){
                        status = "excessive speeding";
                    }
    
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
                }
                break;

                case "city":
                    limit = 50;
                    difference = speed - limit;
                    
        
                    if(speed<=limit){
                        console.log(`Driving ${speed} km/h in a ${limit} zone`);
                    }
                    else{
                        if(difference<=20){
                            status = "speeding";
                        }
                        else if(difference <=40){
                            status = "excessive speeding";
                        }
        
                        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
                    }
                    break;

                    case "residential":
                        limit = 20;
                        difference = speed - limit;
                        
            
                        if(speed<=limit){
                            console.log(`Driving ${speed} km/h in a ${limit} zone`);
                        }
                        else{
                            if(difference<=20){
                                status = "speeding";
                            }
                            else if(difference <=40){
                                status = "excessive speeding";
                            }
            
                            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
                        }
                        break;
    
        default:
            break;
    }
}


roadRadar(200, 'motorway')