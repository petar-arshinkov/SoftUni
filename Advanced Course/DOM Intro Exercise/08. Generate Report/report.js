function generateReport() {
    let outputArea = document.getElementById("output");
    let tableRef = document.querySelectorAll("table");
    let rowsRef = document.querySelectorAll("tbody tr");
    let rowArray = Array.from(rowsRef);
    let headerRef = document.querySelectorAll("th");
    let headerArray = Array.from(headerRef)

    let report = [];

    rowArray.forEach(row => {
        let rowData = {};
        headerArray.forEach((header, index) => {
            if (header.querySelector('input[type="checkbox"]').checked) {
                let name = header.querySelector('input[type="checkbox"]').name;
                let value = row.cells[index].textContent;
                rowData[name] = value;
            }
        });
        report.push(rowData);
    })

    outputArea.value = JSON.stringify(report);


}