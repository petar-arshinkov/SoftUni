function makeADictionary(input) {

    class Entry {
        constructor(term, definition){
        this.term = term;
        this.definition = definition;
    }
    }

    let dictionary = {};




    input.forEach(line => {
        let jsonLine = JSON.parse(line);

        let term = Object.keys(jsonLine)[0]
        let definition = Object.values(jsonLine)[0]
  

        dictionary[term] = definition;

    });


    let keys = Object.keys(dictionary);
    keys.sort((a,b) => a.localeCompare(b));

    for (const key of keys) {
        console.log(`Term: ${key} => Definition: ${dictionary[key]}`)
    }

}


makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
)