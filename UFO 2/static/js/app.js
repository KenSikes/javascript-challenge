  
// from data.js
var tableData = data;

// YOUR CODE HERE!
var button = d3.select("#filter-btn");

var button = d3.select("#filter-btn");


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
    
        var inputDate = d3.select("#datetime").property("value");
        var inputCity = d3.select("#city").property("value").toLowerCase();
        var inputState = d3.select("#state").property("value").toLowerCase();
        var inputCountry = d3.select("#country").property("value").toLowerCase();
        var inputShape = d3.select("#shape").property("value").toLowerCase();

        