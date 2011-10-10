// Find controls...
var btnCancel = mywindow.findChild("btnCancel");
var btnOk = mywindow.findChild("btnOk");
var dateFrom = mywindow.findChild("dateFrom");
var dateTo = mywindow.findChild("dateTo");

//dateFrom.date = DATE();
//dateTo.date = DATE();


// Terminal list connections
btnCancel.clicked.connect(mywindow, "close");
btnOk.clicked.connect(generateReport);


// generate report main function
function generateReport() {
    if (btnCancel.enabled) {
        btnCancel.enabled = false;
    }
    else
    {
        btnCancel.enabled = true;
    };
};
