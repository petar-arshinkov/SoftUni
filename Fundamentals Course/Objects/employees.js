function Employees (data){

    let obj = {};
    for (const name of data) {
        obj.name = name;
        obj.value = name.length;

        console.log(`Name: ${name} -- Personal Number: ${obj.value}`);
    }

    console.log(obj);
}


Employees([
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
])