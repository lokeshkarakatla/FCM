import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { AddComplaintComponent } from './add-complaint/add-complaint.component';
import { ComplaintsService } from './complaints.service';
import { RouterLink } from '@angular/router';
import { GridColumnsDialogComponent, GridColConfig } from './grid-columns-dialog/grid-columns-dialog.component';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.scss']
})
export class ComplaintsComponent {

  totalSize = 0;
  filterToggle: boolean = false;
  currentPage: string = '';
  maskInactive: boolean = false;

  selectedView: 'graph' | 'grid' = 'grid'; // 👈 default view

  columns: GridColConfig[] = [
    { key: 'action', label: 'Action', visible: true },
    { key: 'referenceNumber', label: 'Reference No', visible: true },
    { key: 'subject', label: 'Subject', visible: true },
    { key: 'capa', label: 'CAPA', visible: true },
    { key: 'steps', label: 'Steps', visible: true },
    { key: 'progress', label: 'Progress', visible: true },
    { key: 'status', label: 'Status', visible: true },
    { key: 'severity', label: 'Severity', visible: true },
    { key: 'department', label: 'Department', visible: true },
    { key: 'description', label: 'Description', visible: true },
    { key: 'country', label: 'Country', visible: true },
    { key: 'responsibility', label: 'Responsibility', visible: true },
    { key: 'complaintDate', label: 'Complaint Date', visible: true },
    { key: 'dueDate', label: 'Due Date', visible: true }
  ];

  freezeCount: number = 3;

  colWidths: { [key: string]: number } = {
    action: 65,
    referenceNumber: 150,
    subject: 220,
    capa: 75,
    steps: 85,
    progress: 140,
    status: 110,
    severity: 125,
    department: 140,
    description: 320,
    country: 100,
    responsibility: 130,
    complaintDate: 120,
    dueDate: 110
  };

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private complaintsService: ComplaintsService
  ) { }

  complaintsData: any[] = [];

  ngOnInit() {
    this.complaintsData = this.complaintsService.getComplaints();
    this.totalSize = this.complaintsData.length;
    console.log(this.complaintsData);
  }

  get visibleColumns(): GridColConfig[] {
    return this.columns.filter(c => c.visible);
  }

  isColVisible(key: string): boolean {
    const col = this.columns.find(c => c.key === key);
    return col ? col.visible : true;
  }

  getStickyLeft(colIdx: number): number {
    let left = 0;
    const vis = this.visibleColumns;
    for (let i = 0; i < colIdx && i < vis.length; i++) {
      left += (this.colWidths[vis[i].key] || 100);
    }
    return left;
  }

  isColFrozen(colIdx: number): boolean {
    return colIdx < this.freezeCount;
  }

  isLastFrozen(colIdx: number): boolean {
    return this.freezeCount > 0 && colIdx === this.freezeCount - 1;
  }

  getHeaderStyle(col: GridColConfig, colIdx: number): any {
    const width = (this.colWidths[col.key] || 100) + 'px';
    const style: any = {
      'min-width': width,
      'width': width
    };

    if (this.isColFrozen(colIdx)) {
      style['position'] = 'sticky';
      style['left'] = this.getStickyLeft(colIdx) + 'px';
      style['top'] = '0';
      style['z-index'] = '30';
      style['background-color'] = '#37474f';
      if (this.isLastFrozen(colIdx)) {
        style['border-right'] = '2px solid #78909c';
      }
    } else {
      style['position'] = 'sticky';
      style['top'] = '0';
      style['z-index'] = '10';
    }
    return style;
  }

  getCellStyle(col: GridColConfig, colIdx: number): any {
    const width = (this.colWidths[col.key] || 100) + 'px';
    const style: any = {
      'min-width': width,
      'width': width
    };

    if (this.isColFrozen(colIdx)) {
      style['position'] = 'sticky';
      style['left'] = this.getStickyLeft(colIdx) + 'px';
      style['z-index'] = '5';
      style['background-color'] = '#ffffff';
      if (this.isLastFrozen(colIdx)) {
        style['border-right'] = '2px solid #b0bec5';
        style['box-shadow'] = '4px 0 8px -2px rgba(0, 0, 0, 0.14)';
      }
    }
    return style;
  }

  openGridColumnsDialog(): void {
    const dialogRef = this.dialog.open(GridColumnsDialogComponent, {
      width: '780px',
      autoFocus: false,
      data: {
        columns: this.columns,
        freezeCount: this.freezeCount
      }
    });

    dialogRef.afterClosed().subscribe((res: any) => {
      if (res && res.columns) {
        this.columns = res.columns;
        if (typeof res.freezeCount === 'number') {
          this.freezeCount = res.freezeCount;
        }
      }
    });
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Closed':
        return 'status-closed';
      case 'Process':
      case 'In Progress':
        return 'status-process';
      case 'Hold':
        return 'status-hold';
      case 'Pending':
      default:
        return 'status-pending';
    }
  }

  clearFilter(): void {
    this.complaintsData = this.complaintsService.getComplaints();
  }

  getTests(): void {
    // Refresh or filter logic
    this.complaintsData = this.complaintsService.getComplaints();
  }

  // ngOnInit() {
  //   this.route.queryParams.subscribe(params => {
  //     this.currentPage = params['page'] || 'default';
  //   });
  // }
  goToAddComplaint() {
    // this.router.navigate(['/app/complaints/add-complaints']);
    let dialogRef = this.dialog.open(AddComplaintComponent, {
      data: null,
      height: 'auto',
      width: '850px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {

      console.log(data, "data")
      if (data === "SAVE") {

        // this.getallusers();
      }
    });
  }
  gotoCAPA() {
    this.router.navigate(['/app/complaints/capa']);
  }
  gotoAttendance() {
    this.router.navigate(['/app/complaints/attendance']);
  }
  gotoMeeting() {
    this.router.navigate(['/app/complaints/meeting']);
  }
  gotodashboard() {
    this.router.navigate(['/app/complaints/complaintsdashboard']);
  }
  gotocomplaints() {
    this.router.navigate(['/app/complaints']);
  }

  gotoReferenceNumber() {
    this.router.navigate(['/app/complaints/reference-number']);
  }
  openCAPA() {
    this.router.navigate(['/app/complaints/reference-number/capaa']);

  }

 
  gotokanban() {
    this.router.navigate(['/app/complaints/kanban']);
  }

   gotoupdate(){
    this.router.navigate(['/app/complaints/reference-number/updates']);
  }


  deleteConfirmation(item: any) {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: 'auto',
      data: { ProjectId: item.ProjectId, title: 'Delete Confirmation', content: 'Are you sure you want to Delete?' }
    });
  }



  scrollGrid(side: 'left' | 'right') {
    const ele = document.getElementById('grid-table-container');
    const scrollAmount = 300;

    if (ele) {
      if (side === 'right') {
        ele.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      } else {
        ele.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    }
  }


 getRangeStyle(value: number, index: number) {

  // ✅ First row = red
  if (index === 0) {
    return { 'accent-color': 'red' };
  }

  let color = 'gray';

  if (value > 0 && value <= 40) {
    color = 'blue';
  } else if (value > 40 && value <= 93) {
    color = '#FFC107';
  } else if (value > 93) {
    color = 'green';
  }

  return {
    'accent-color': color
  };
}


}
