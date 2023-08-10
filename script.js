function replaceEmptyWithNull() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet(); // Get active sheet
  var range = sheet.getDataRange(); // Get range of the data
  var values = range.getValues(); // Get values of the data

  // Loop through all the rows and columns
  for (var row = 0; row < values.length; row++) {
    for (var col = 0; col < values[row].length; col++) {
      if (values[row][col] === '') { // If the cell is empty
        values[row][col] = 'null'; // Replace with "null"
      }
    }
  }

  range.setValues(values); // Set the updated values back to the sheet
}

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Custom Menu')
      .addItem('Replace Empty Cells', 'replaceEmptyWithNull')
      .addToUi();
}
