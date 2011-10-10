// Find controls...
var _btnCancel = mywindow.findChild("_btnCancel");
var _btnOk = mywindow.findChild("_btnOk");
var _dateFrom = mywindow.findChild("_dateFrom");
var _dateTo = mywindow.findChild("_dateTo");
var _lblStatus = mywindow.findChild("_lblStatus");
var _view = mywindow.findChild("_view");
var _idKonto = mywindow.findChild("_idKonto");

with (_view)
{
   setColumn("Firma",  20, 1, true, "idfirma");
   setColumn("Vrsta naloga",  20, 1, true, "idvn");
   setColumn("Broj naloga",  20, 1, true, "brnal");
   setColumn("Id konto",  40, 1, true, "idkonto");
}

//toolbox.messageBox("critical", mywindow, mywindow.windowTitle, "created");

//_dateFrom.date = DATE();
//_dateTo.date = DATE();

// Terminal list connections
_btnCancel.clicked.connect(mywindow, "close");
_btnOk.clicked.connect(generateReport);



// generate report main function
function generateReport() {

    var params = new Object;
    params.date_from = _dateFrom.date;
    params.date_to = _dateTo.date;

    if (_idKonto.text != '') {
        params.id_konto = _idKonto.text;
    };

    toolbox.printReport("getSubanSpec", params);

};


function fill_data() {

    var params = new Object;
    //params.date_from = _dateFrom.date;
    //params.date_to = _dateTo.date;
    //params.id_konto = _idKonto.text;

    if (hasData()) {
        _lblStatus.text = "Status: ima zapisa";
    };

    var data = toolbox.executeQuery("SELECT idfirma, idvd as idvd, brnal as brnal, idkonto as idkonto FROM xthelloworld.fin_suban LIMIT 10");
    try
    {
      _view.populate(data);
       toolbox.messageBox("critical", mywindow, mywindow.windowTitle, "populating");
    }
    catch (e)
    {
       print(e);
       toolbox.messageBox("critical", mywindow, mywindow.windowTitle, e);
    };

};


function hasData()
{
  var cparam = new Object();
  var data = toolbox.executeQuery('SELECT count(*) as count FROM xthelloworld.fin_suban', cparam);
  if (data.first())
  {
   if (data.value("count") > 0)
   {
     return true;
   } else {
     return false;
   }
  }
}

