function solve(arr){
        let pattern = /((#|$|%|\*|&)(?<name>[A-Za-z]+)\2)=(?<length>\d+)!!(?<code>.+)/gm;
        let decrypted ='';
        for(let i = 0; i < arr.length; i++) {
            let match = pattern.exec(arr[i]);
            if(match){
                let len = +match.groups.length;
                if(match.groups.code.length === len){
                    for(let i = 0; i < match.groups.code.length; i++){
                        decrypted += String.fromCharCode(match.groups.code.charCodeAt(i) + len);
                    }
                    console.log(`Coordinates found! ${match.groups.name} -> ${decrypted}`);
                    break;
                } else{
                    console.log('Nothing found!');
                }  
            } else{
                console.log('Nothing found!');
            } 
        }
    }
    solve([
        'Ian6Hutchinson=7!!\\(58ycb4',
        "#MikeHailwood#!!'gfzxgu6768=11",
        'slop%16!!plkdek/.8x11ddkc',
        '$Steve$=9Hhffjh',
        "*DavMolyneux*=15!!efgk#'_$&UYV%h%",
        'RichardQ^uayle=16!!fr5de5kd'
      ])