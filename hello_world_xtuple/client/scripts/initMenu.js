// Fixed Asset Menu
var accntsMenu = mainwindow.findChild("menu.accnt");
var reptMenu = mainwindow.findChild("menu.accnt.financialreports");

// Suban report
var subanReportMenu = new QMenu(qsTr("Suban reports"), mainwindow);
accntsMenu.insertMenu(reptMenu.menuAction(), subanReportMenu);

// Separator
toolbox.menuInsertSeparator(accntsMenu, reptMenu);

// Add suban reports actions
var listallAction = subanReportMenu.addAction(qsTr("List all suban..."), mainwindow);
subanReportMenu.addSeparator();

function sSubanListAll()
{
  //var param = new Object;
  var wind = toolbox.openWindow("subanReport", mainwindow);
  //wind.set(param);
};

listallAction.triggered.connect(sSubanListAll);

