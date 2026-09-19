import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.scss']
})
export class AddNotesComponent  {

   userForm: any;
    showDialog = false;
  
    constructor(
      @Inject(MAT_DIALOG_DATA) public data: any,
      public dialogRef: MatDialogRef<AddNotesComponent>
    ) { }
  
  
  
    close() {
      this.dialogRef.close();
    }
  
    people = [
      { name: 'Pavan Kalyan', selected: false },
      { name: 'Test1', selected: false },
      { name: 'Navin Malik', selected: false },
      { name: 'Gaurav', selected: false },
      { name: 'Contact OM', selected: false },
      { name: 'Ayush', selected: false },
      { name: 'Santosh', selected: false }
    ];
  

}
