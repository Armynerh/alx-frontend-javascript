/// <reference path="./js/crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './js/crud';

// Create a row object
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva"
};

// Insert the row
const newRowID: RowID = CRUD.insertRow(row);

// Update the row with age
const updatedRow: RowElement = { 
  ...row,
  age: 23
};

// Call updateRow
CRUD.updateRow(newRowID, updatedRow);

// Call deleteRow
CRUD.deleteRow(newRowID);
