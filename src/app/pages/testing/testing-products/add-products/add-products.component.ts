import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {

 
   constructor(
     @Inject(MAT_DIALOG_DATA) public data: any,
     public dialogRef: MatDialogRef<AddProductsComponent>
   ) {}
 
   ngOnInit() {}
 
   close() {
     this.dialogRef.close();
   }
 

}
