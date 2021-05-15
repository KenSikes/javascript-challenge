  
// from data.js
var tableData = data;

// YOUR CODE HERE!
var button = d3.select("#filter-btn");

var button = d3.select("#filter-btn");

// Reference to the table body
var tbody = d3.select("tbody");

function displayTable(datafortable) {
    datafortable.forEach((tableData) => {
        var row = tbody.append("tr");
        Object.entries(tableData).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    })
};



displayTable(tableData);

button.on("click", function() {
    var filteredData = tableData;