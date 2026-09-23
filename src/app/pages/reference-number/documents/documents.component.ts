import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';

import { AddDocumentComponent } from './add-document/add-document.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';

export interface DocumentItem {
  documentType: string;
  documentTitle: string;
  category: string;
  context: string;
  description?: string;
  uploadFile: string;
  uploadedDate: string;
  uploadedBy: string;
  remarks: string;
}

const ELEMENT_DATA: DocumentItem[] = [
  {
    documentType: 'Inspection Report',
    documentTitle: 'Wiring Harness Defect Inspection',
    category: 'Quality',
    context: 'Detailed microscopic analysis of insulation rupture',
    description: 'Detailed microscopic analysis of insulation rupture',
    uploadFile: 'View',
    uploadedDate: '24/09/2024 10:30 AM',
    uploadedBy: 'Rajesh_Kumar',
    remarks: 'Verified batch crimping specs'
  },
  {
    documentType: 'Warranty Claim',
    documentTitle: 'Dealer Return Claim Dossier',
    category: 'Warranty',
    context: 'Dealer repair notes and sensor replacement logs',
    description: 'Dealer repair notes and sensor replacement logs',
    uploadFile: 'View',
    uploadedDate: '24/09/2024 11:15 AM',
    uploadedBy: 'Anita_Desai',
    remarks: 'Preformulation & DoE results'
  },
  {
    documentType: 'Analytical',
    documentTitle: 'Engine Overheating Thermal Test',
    category: 'Testing',
    context: 'Radiator flow and coolant temp sensor calibration curves',
    description: 'Radiator flow and coolant temp sensor calibration curves',
    uploadFile: 'View',
    uploadedDate: '25/09/2024 02:20 PM',
    uploadedBy: 'Amit_Patel',
    remarks: 'Thermal stress validation complete'
  },
  {
    documentType: 'Manufacturing',
    documentTitle: 'Assembly Line Torque Audit',
    category: 'Production',
    context: 'Fastener torque verification on alternator bracket',
    description: 'Fastener torque verification on alternator bracket',
    uploadFile: 'View',
    uploadedDate: '26/09/2024 09:45 AM',
    uploadedBy: 'Neha_Sharma',
    remarks: 'Tool calibration within +/-2%'
  },
  {
    documentType: 'Validation',
    documentTitle: 'Containment Action Validation Record',
    category: 'Quality',
    context: '100% sorting results for supplier batch SP-4091',
    description: '100% sorting results for supplier batch SP-4091',
    uploadFile: 'View',
    uploadedDate: '27/09/2024 03:10 PM',
    uploadedBy: 'Arun_Joseph',
    remarks: 'Zero defects detected in 500 samples'
  },
  {
    documentType: 'Regulatory',
    documentTitle: 'Safety Standard Compliance Certificate',
    category: 'Compliance',
    context: 'Automotive electrical safety standard ISO-26262 audit',
    description: 'Automotive electrical safety standard ISO-26262 audit',
    uploadFile: 'View',
    uploadedDate: '28/09/2024 04:00 PM',
    uploadedBy: 'Lakshmi_Devi',
    remarks: 'Standard compliance verified'
  }
];

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  activeView: 'grid' | 'card' = 'grid';

  displayedColumns: string[] = [
    'actions',
    'documentType',
    'documentTitle',
    'description',
    'uploadFile',
    'uploadedDate',
    'uploadedBy',
    'remarks'
  ];

  dataSource: DocumentItem[] = [...ELEMENT_DATA];
  filteredDataSource: DocumentItem[] = [...ELEMENT_DATA];
  paginatedDocuments: DocumentItem[] = [];

  pageSize: number = 10;
  currentPage: number = 0;

  categories: string[] = [];
  filterKeyword: string = '';
  selectedCategory: string | null = null;
  filterToggle: boolean = false;

  refNo: string = 'FIELD/2024/09/3';
  subject: string = 'Global fleet of connected vehicles';

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.categories = Array.from(new Set(this.dataSource.map(d => d.category).filter(Boolean)));
    this.applyDocFilter();
  }

  setView(view: 'grid' | 'card'): void {
    this.activeView = view;
  }

  applyDocFilter(): void {
    let list = [...this.dataSource];
    if (this.filterKeyword) {
      const kw = this.filterKeyword.toLowerCase().trim();
      list = list.filter(d =>
        (d.documentTitle && d.documentTitle.toLowerCase().includes(kw)) ||
        (d.documentType && d.documentType.toLowerCase().includes(kw)) ||
        (d.category && d.category.toLowerCase().includes(kw)) ||
        (d.context && d.context.toLowerCase().includes(kw)) ||
        (d.description && d.description.toLowerCase().includes(kw)) ||
        (d.uploadedBy && d.uploadedBy.toLowerCase().includes(kw))
      );
    }
    if (this.selectedCategory) {
      list = list.filter(d => d.category === this.selectedCategory);
    }
    this.filteredDataSource = list;
    this.updatePagination();
  }

  clearDocFilter(): void {
    this.filterKeyword = '';
    this.selectedCategory = null;
    this.applyDocFilter();
  }

  updatePagination(): void {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedDocuments = this.filteredDataSource.slice(startIndex, endIndex);
  }

  handlePageEvent(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePagination();
  }

  viewPdf(doc: DocumentItem): void {
    alert('Viewing document: ' + (doc.documentTitle || 'Document') + '.pdf');
  }

  downloadPdf(doc: DocumentItem): void {
    alert('Downloading document: ' + (doc.documentTitle || 'Document') + '.pdf');
  }

  deleteDocument(doc: DocumentItem, event?: Event): void {
    if (event) {
      event.stopPropagation();
    }

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: 'auto',
      data: {
        title: 'Delete Confirmation',
        content: 'Are you sure you want to delete this document record?',
        isConfirmation: true
      }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.dataSource = this.dataSource.filter(d => d !== doc);
        this.categories = Array.from(new Set(this.dataSource.map(d => d.category).filter(Boolean)));
        this.applyDocFilter();
      }
    });
  }

  onCardClick(doc: DocumentItem): void {
    this.editDocument(doc);
  }

  // Opens the dialog in ADD mode
  uploaddoc(): void {
    const dialogRef = this.dialog.open(AddDocumentComponent, {
      height: 'auto',
      width: '850px',
      maxWidth: '95vw',
      data: null
    });

    dialogRef.afterClosed().subscribe((data: any) => {
      if (data) {
        this.dataSource.unshift({
          documentType: data.documentType || 'Other',
          documentTitle: data.documentTitle || 'New Document',
          category: data.category || 'General',
          context: data.context || data.description || '',
          description: data.description || data.context || '',
          uploadFile: data.uploadFile || 'View',
          uploadedDate: new Date().toLocaleDateString('en-GB') + ' ' + new Date().toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
          }),
          uploadedBy: 'QA_Lead',
          remarks: data.remarks || ''
        });
        this.categories = Array.from(new Set(this.dataSource.map(d => d.category).filter(Boolean)));
        this.applyDocFilter();
      }
    });
  }

  // Opens the dialog in EDIT mode
  editDocument(doc: DocumentItem, event?: Event): void {
    if (event) {
      event.stopPropagation();
    }

    const dialogRef = this.dialog.open(AddDocumentComponent, {
      height: 'auto',
      width: '850px',
      maxWidth: '95vw',
      data: doc
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        doc.documentType = result.documentType;
        doc.documentTitle = result.documentTitle;
        doc.category = result.category;
        doc.context = result.context;
        doc.description = result.context;
        doc.remarks = result.remarks;
        if (result.uploadFile) {
          doc.uploadFile = result.uploadFile;
        }
        this.categories = Array.from(new Set(this.dataSource.map(d => d.category).filter(Boolean)));
        this.applyDocFilter();
      }
    });
  }

  scrollRight(): void {
    const container = document.getElementById('grid-table-container');
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  }

  scrollLeft(): void {
    const container = document.getElementById('grid-table-container');
    if (container) {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    }
  }

  goBack(): void {
    this.router.navigate(['/app/complaints/monitor']);
  }
}
