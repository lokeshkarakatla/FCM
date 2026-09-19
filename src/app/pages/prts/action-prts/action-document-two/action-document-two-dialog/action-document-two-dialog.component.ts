import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-action-document-two-dialog',
  templateUrl: './action-document-two-dialog.component.html',
  styleUrls: ['./action-document-two-dialog.component.scss']
})
export class ActionDocumentTwoDialogComponent implements OnInit {

 
  constructor(public dialogRef: MatDialogRef<ActionDocumentTwoDialogComponent>) { }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close();
  }

  documentTypes: string[] = [
  'Containment Log',
'Quality Alert',
'Non-Conformance Report (NCR)'
];

selectedDocType: string = '';

onFileSelected(event: any) {
  const file = event.target.files[0];
  if (file) {
    console.log('Selected file:', file.name);
  }
}

}
