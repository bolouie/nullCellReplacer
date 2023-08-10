# nullCellReplacer
## Google Apps Script to Replace Empty Cells with "null"

This script provides an efficient way to automate the process of replacing empty cells in a Google Sheet with the text "null". It also includes an option to create a Custom Menu in Google Sheets, allowing the user to easily run the script directly from the sheet.

## Features

### Replace Empty Cells with "null"

This script scans the active sheet or a specific range within a Google Sheet, searching for empty cells. When an empty cell is found, it is replaced with the text "null".

### Custom Menu Integration

A Custom Menu can be added to the Google Sheet's toolbar, giving the user a simple way to run the function to replace empty cells. This enhances user experience and allows for easy execution of the script.

## Usage

### Running the Script

1. Open Google Sheets and navigate to `Extensions` > `Apps Script`.
2. Paste the code from `replaceEmptyWithNull.gs`.
3. Save and run the script or reload the sheet if using the Custom Menu.

### Custom Menu Option

To add the Custom Menu option to the Google Sheet:

1. Include the `onOpen()` function from the code file.
2. Save and reload the Google Sheet.
3. A new menu item called "Custom Menu" will appear in the toolbar, with an option to "Replace Empty Cells".




