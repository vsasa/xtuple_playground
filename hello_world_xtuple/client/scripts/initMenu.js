/*
 * This file is part of the knowhow ERP, a free and open source
 * Enterprise Resource Planning software suite,
 * Copyright (c) 2010-2011 by bring.out doo Sarajevo.
 * It is licensed to you under the Common Public Attribution License
 * version 1.0, the full text of which (including knowhow-specific Exhibits)
 * is available in the file LICENSE_CPAL_bring.out_knowhow.md located at the
 * root directory of this source code archive.
 * By using this software, you agree to be bound by its terms.
 */

// # This is the starting point of hello world package

// Getting the menu items, for create new menu
// Find "accounting" menu
var accntsMenu = mainwindow.findChild("menu.accnt");
// Find "accounting-financial reports" menu
var reptMenu = mainwindow.findChild("menu.accnt.financialreports");

// This will be a new menu
var subanReportMenu = new QMenu(qsTr("Suban reports"), mainwindow);
// Insert menu
accntsMenu.insertMenu(reptMenu.menuAction(), subanReportMenu);

// Add separator
toolbox.menuInsertSeparator(accntsMenu, reptMenu);

// Add actions for newly created menu...
var listallAction = subanReportMenu.addAction(qsTr("List all suban..."), mainwindow);
// Add separator
subanReportMenu.addSeparator();

// opening window "subanReport"
function sSubanListAll()
{
  var wind = toolbox.openWindow("subanReport", mainwindow);
};

// add trigger to the listallAction
listallAction.triggered.connect(sSubanListAll);

