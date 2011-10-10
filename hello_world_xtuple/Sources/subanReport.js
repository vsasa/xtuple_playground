// Find controls...
var btnClose = mywindow.findChild("btnClose");
var btnOk = mywindow.findChild("btnOk");
var dateFrom = mywindow.findChild("dateFrom");
var dateTo = mywindow.findChild("dateTo");

dateFrom.date = DATE();
dateTo.date = DATE();


// Terminal list connections
btnClose.clicked.connect(mywindow, "close");
btnOk.clicked.connect(generateReport);


// generate report main function
function generateReport() {
    alert("generišem report...");
    return;
};
