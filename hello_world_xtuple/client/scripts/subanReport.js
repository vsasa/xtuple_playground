// Find controls...
var _btnCancel = mywindow.findChild("_btnCancel");
var _btnOk = mywindow.findChild("_btnOk");
var _dateFrom = mywindow.findChild("_dateFrom");
var _dateTo = mywindow.findChild("_dateTo");
var _lblStatus = mywindow.findChild("_lblStatus");
var _view = mywindow.findChild("_view");
var _idKonto = mywindow.findChild("_idKonto");

//_dateFrom.date = DATE();
//_dateTo.date = DATE();

// Terminal list connections
_btnCancel.clicked.connect(mywindow, "close");
_btnOk.clicked.connect(generateReport);

with (_view)
{
    addColumn("Firma",  10, 1, true, "idfirma");
    addColumn("Vrsta naloga",  10, 1, true, "idvn");
    addColumn("Broj naloga",  20, 1, true, "brnal");
    addColumn("Datum",  30, 1, true, "datdok");
    addColumn("D-P",  10, 1, true, "d_p");
    addColumn("Iznos",  40, 1, true, "iznosbhd");
};


// generate report main function
function generateReport() {

    var params = new Object;
    //params.date_from = _dateFrom.date;
    //params.date_to = _dateTo.date;
    //params.id_konto = _idKonto.text;

    var data = toolbox.executeQuery("SELECT * FROM xthelloworld.fin_suban", params);
    try
    {
       _view.populate(data);
    }
    catch (e)
    {
       print(e);
       toolbox.messageBox("critical", mywindow, mywindow.windowTitle, e);
    };

};
