function doGet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();
  const headers = data.shift();

  const json = data.map(row => {
    let obj = {};
    headers.forEach((key, i) => obj[key] = row[i]);
    return obj;
  });

  return ContentService.createTextOutput(JSON.stringify(json))
    .setMimeType(ContentService.MimeType.JSON);
}
