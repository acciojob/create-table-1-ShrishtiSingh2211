function insert_Row() {
    //Write your code here
    // Get the table element by its ID
    var table = document.getElementById("sampleTable");

    // Insert a new row at the top of the table
    var newRow = table.insertRow(0);

    // Insert cells into the new row
    var leftCell = newRow.insertCell(0);
    var rightCell = newRow.insertCell(1);

    // Set the cell values
    leftCell.innerHTML = "New Cell1";
    rightCell.innerHTML = "New Cell2";
}

