/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Original row object
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva"
};

// Insert the row and get its ID
const newRowID: RowID = CRUD.insertRow(row);

// Updated row using spread syntax
const updatedRow: RowElement = { ...row, age: 23 };

// Call updateRow
CRUD.updateRow(newRowID, updatedRow);

// Call deleteRow
CRUD.deleteRow(newRowID);
