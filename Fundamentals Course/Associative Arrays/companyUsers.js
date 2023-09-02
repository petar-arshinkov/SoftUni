function companyUsers(input) {

    let companies = {};

    input.forEach(element => {
        let [company, id] = element.split(" -> "); 
        if(!companies.hasOwnProperty(company)){
            companies[company] = [];
        }
        companies[company].push(id);
    });

    let sorted = Object.entries(companies).sort((a,b) => a[0].localeCompare(b[0]))

    sorted.forEach(element => {
        let companyName = element[0];
        console.log(companyName)
        let set = new Set (element[1]);

        set.forEach(id => {
            console.log(`-- ${id}`);
        });
    });

}


companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
])