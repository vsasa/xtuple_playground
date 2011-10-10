// Accounting menu
var accountingMenu = mainwindow.findChild("menu.accounting");
var utilitiesMenu = mainwindow.findChild("menu.accounting.utilities");

// My custom reports menu
var myCustomReportMenu = toolbox.menuInsertMenu(accountingMenu, utilitiesMenu, "My custom reports menu");

// Separator
toolbox.menuInsertSeparator(accountingMenu, utilitiesMenu);

// Subanalitic report action
var subanRptAction = toolbox.menuAddAction(myCustomReportMenu, "Subanalitic report",
                        (privileges.value("MaintainSubanaliticReports")));

