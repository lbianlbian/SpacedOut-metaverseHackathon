var sheet = SpreadsheetApp.getActiveSheet();
var values = sheet.getDataRange().getValues();

function doGet(e) {
  var nft = e.parameter["nft"];
  var biz = e.parameter["biz"];

  if(e.parameter["mode"] == "add"){
    var lastRow = sheet.getLastRow();
    var toAdd = [nft, biz];
    var wrap = [toAdd];
    sheet.getRange(lastRow + 1, 1, 1, 2).setValues(wrap); //syntax is start row, start column, num rows, num cols
  }

  if(e.parameter["mode"] == "read"){
    for(var x = 0; x < values.length; x++){
      if(values[x][0] == nft && values[x][1] == biz){
        return ContentService.createTextOutput("found").setMimeType(ContentService.MimeType.JSON); 
      }
    }
    return ContentService.createTextOutput("not found").setMimeType(ContentService.MimeType.JSON); 
  }
}