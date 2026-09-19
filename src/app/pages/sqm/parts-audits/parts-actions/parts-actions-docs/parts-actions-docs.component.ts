import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-parts-actions-docs',
  templateUrl: './parts-actions-docs.component.html',
  styleUrls: ['./parts-actions-docs.component.scss']
})
export class PartsActionsDocsComponent implements OnInit {

  
  // Mock data to match the screenshot
  documents = [
    { title: 'Document check', date: '12-07-2024' }
  ];

  pagedDocs: any[] = [];
  pageSize = 5;
  pageIndex = 0;

  constructor(public dialogRef: MatDialogRef<PartsActionsDocsComponent>) { }

  ngOnInit(): void {
    this.updatePage();
  }

  // Handle Pagination
  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePage();
  }

  updatePage(): void {
    const start = this.pageIndex * this.pageSize;
    this.pagedDocs = this.documents.slice(start, start + this.pageSize);
  }

  // Close the dialog
  closeDialog(): void {
    this.dialogRef.close();
  }


}
