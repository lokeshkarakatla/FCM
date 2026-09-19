import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-issues-grid-columns',
  templateUrl: './issues-grid-columns.component.html',
  styleUrls: ['./issues-grid-columns.component.scss']
})
export class IssuesGridColumnsComponent {

 

  constructor(
    public dialogRef: MatDialogRef<IssuesGridColumnsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  headers = [
    { Name: 'Actions', IsSelected: true },
    { Name: 'Project', IsSelected: true },
    { Name: 'Product', IsSelected: true },
    { Name: 'Test', IsSelected: true },
    { Name: 'Description', IsSelected: true },
    { Name: 'Failure Hours', IsSelected: true },
    { Name: 'Photograph', IsSelected: true },
    { Name: 'Section', IsSelected: true },
    { Name: 'Lead', IsSelected: true },
    { Name: 'Status', IsSelected: true },
    { Name: 'Document Upload', IsSelected: true },
    { Name: 'Category', IsSelected: true }
  ];

  save() {
    console.log('Selected Headers:', this.headers.filter(h => h.IsSelected));
  }

  close() {
    console.log('Dialog closed');
  }
}
