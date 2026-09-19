import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActiveGridDialogComponent } from '../../process-audits/paudits-active-audits/activeaudits-reference/active-grid-dialog/active-grid-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AuditDonePopupComponent } from '../../process-audits/paudits-active-audits/activeaudits-reference/active-grid-dialog/audit-done-popup/audit-done-popup.component';

@Component({
  selector: 'app-parts-completed-audits',
  templateUrl: './parts-completed-audits.component.html',
  styleUrls: ['./parts-completed-audits.component.scss']
})
export class PartsCompletedAuditsComponent implements OnInit {

  // 1. ADD THIS: Grab the table container from HTML
  @ViewChild('tableContainer') tableContainer!: ElementRef;

  // Custom Color Schemes
  colorSchemeCommodity: any = { domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060'] };
  colorSchemeAuditor: any = { domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6'] };
  colorSchemeStatus: any = { domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6'] };

  commodityData = [
    { name: 'Casting', value: 40 },
    { name: 'Forging', value: 49 },
    { name: 'Machining', value: 36 },
    { name: 'Fasteners', value: 52 },
    { name: 'Non-Metallic', value: 27 },
    { name: 'Sheet Metal', value: 10 }
  ];

  auditorData = [
    { name: 'Ramesh Kumar', value: 45 },
    { name: 'Suresh Singh', value: 70 },
    { name: 'Sagar Kumar', value: 94 },
    { name: 'Mahesh Kumar Singh', value: 64 }
  ];

  statusData = [
    { name: 'Hold', value: 45 },
    { name: 'WIP', value: 70 },
    { name: 'Completed', value: 94 },
    { name: 'Pending', value: 64 }
  ];

  tableData = [
    { auditRef: '2024/Process/254871', commodity: 'Engine Block', location: 'Chennai Factory', supplier: 'ABC Castings Pvt Ltd', auditor: 'Vijay Mohan', date: '12-09-2024', issues: 4, capa: 2, score: '87 %', status: 'Select Status', done: true },
    { auditRef: '2024/Process/254832', commodity: 'Transmission Case', location: 'Pune Factory', supplier: 'XYZ Industries Ltd', auditor: 'Arjun Sharma', date: '05-09-2024', issues: 5, capa: 3, score: '80 %', status: 'Select Status', done: true },
    { auditRef: '2024/Process/254812', commodity: 'Cylinder Head', location: 'Bangalore Factory', supplier: 'LMN Castings Co', auditor: 'Radhika Iyer', date: '22-08-2024', issues: 3, capa: 1, score: '90 %', status: 'Select Status', done: true },
    { auditRef: '2024/Process/254854', commodity: 'Crankshaft', location: 'Hyderabad Factory', supplier: 'PQR Castings Ltd', auditor: 'Siva Kumar', date: '30-07-2024', issues: 6, capa: 4, score: '75 %', status: 'Select Status', done: true },
    { auditRef: '2024/Process/254865', commodity: 'Camshaft', location: 'Mumbai Factory', supplier: 'DEF Automotive Ltd', auditor: 'Manoj Singh', date: '15-07-2024', issues: 2, capa: 0, score: '95 %', status: 'Select Status', done: true }
  ];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  // 2. ADD THIS: Scroll logic
  scrollLeft(): void {
    if (this.tableContainer && this.tableContainer.nativeElement) {
      this.tableContainer.nativeElement.scrollBy({ left: -350, behavior: 'smooth' });
    }
  }

  scrollRight(): void {
    if (this.tableContainer && this.tableContainer.nativeElement) {
      this.tableContainer.nativeElement.scrollBy({ left: 350, behavior: 'smooth' });
    }
  }

  
  openGridView() {
    this.dialog.open(ActiveGridDialogComponent, {
      width: '650px',
      height: 'auto',
        maxHeight: '90vh',
          panelClass: 'no-scroll-dialog' 
    });
  }

   onDoneClick(event: MouseEvent, audit: any): void {
    event.preventDefault(); // prevents the checkbox from toggling on its own

    const dialogRef = this.dialog.open(AuditDonePopupComponent, {
      width: '480px',
      data: { audit }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        audit.done = !audit.done; // only toggle if user confirmed
      }
    });
  }
}