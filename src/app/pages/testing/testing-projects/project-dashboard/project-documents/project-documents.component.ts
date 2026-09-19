import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddReferralDocComponent } from './add-referral-doc/add-referral-doc.component';

export interface DocumentItem {
  documentType: string;
  documentTitle: string;
  category: string;
  context: string;
  uploadFile: string;
  uploadedDate: string;
  uploadedBy: string;
  remarks: string;
}

const ELEMENT_DATA: DocumentItem[] = [
  { documentType: '', documentTitle: 'HL7 Document', category: '', context: '', uploadFile: 'View', uploadedDate: '05/26/2026 11:08 AM', uploadedBy: 'Omega_Health', remarks: '' },
  { documentType: '', documentTitle: 'PDF Document', category: '', context: '', uploadFile: 'View', uploadedDate: '05/26/2026 11:08 AM', uploadedBy: 'Omega_Health', remarks: '' }
];

@Component({
  selector: 'app-project-documents',
  templateUrl: './project-documents.component.html',
  styleUrls: ['./project-documents.component.scss']
})
export class ProjectDocumentsComponent implements OnInit {

  isGridView: boolean = true;
  displayedColumns: string[] = ['documentType', 'documentTitle', 'category', 'context', 'uploadFile', 'uploadedDate', 'uploadedBy', 'remarks', 'actions'];
  dataSource = ELEMENT_DATA;
  
  // Dummy categories 
  categories: string[] = ['category 1', 'cat 2', 'cat 3'];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  toggleView(): void {
    this.isGridView = !this.isGridView;
  }

  onCardClick(doc: DocumentItem): void {
    console.log('Document Card clicked:', doc.documentTitle);
  }

  // Opens the dialog in ADD mode
  uploaddoc() {
    let dialogRef = this.dialog.open(AddReferralDocComponent, {
      height: 'auto',
      width: '850px'
    });
    dialogRef.afterClosed().subscribe(data => {
      // Handle returned data here if needed
    });
  }

  // Opens the dialog in EDIT mode
  editDocument(doc: DocumentItem, event: Event) {
    // Stop the click from triggering the parent card's onCardClick event
    event.stopPropagation(); 
    
    let dialogRef = this.dialog.open(AddReferralDocComponent, {
      height: 'auto',
      width: '850px',
      data: doc // Passing data triggers isEditMode in the popup
    });
    
    dialogRef.afterClosed().subscribe(result => {
      // Handle returned data here if needed
    });
  }
}