import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.scss']
})
export class AddDocumentComponent  {

  userForm: any;
     showDialog = false;
   
     constructor(
       @Inject(MAT_DIALOG_DATA) public data: any,
       public dialogRef: MatDialogRef<AddDocumentComponent>
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
