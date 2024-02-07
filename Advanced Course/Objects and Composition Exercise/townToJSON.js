function townToJSON(arr) {
    let regex = /\s*[|]\s*/;
    let result = [];


    for (let i = 1; i < arr.length; i++) {
        let [empty, town, lat, long] = arr[i].split(regex);
        lat = Number(lat)
        long = Number(long)
        let obj = {
            Town: town,
            Latitude: Math.round(lat*100)/100,
            Longitude: Math.round(long*100)/100
        }

        result.push(obj)
    }
    console.log(JSON.stringify(result));
}


townToJSON(['| Town | Latitude | Longitude |',

    '| Sofia | 42.696552 | 23.32601 |',

    '| Beijing | 39.913818 | 116.363625 |']);