import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDocumentComponent } from './add-document/add-document.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent  {

  constructor(private dialog: MatDialog) { }
  tableData = [
    { date: '24/09/2024', subject: 'Engine Overheating' },
    { date: '24/09/2024', subject: 'Brakes Squeaking' }
  ];

   public openDocument(id: any) {
         console.log('jkhksbdjk');
         let dialogRef = this.dialog.open(AddDocumentComponent, {
           data: id,
           height: 'auto',
           width: '600px',
         });
         dialogRef.afterClosed().subscribe((data: any) => {});
       }


       deleteConfirmation() {
               let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
                 width: 'auto',
                 data: { component: null, title: 'Delete Confirmation', content: 'Are you sure you want to Delete?', isConfirmation: true }
               });
               dialogRef.afterClosed().subscribe(
                 (data: any) => {
                   if (data) {
                   }
                 }
               );
             }

  

}
