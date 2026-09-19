import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { AddComplaintComponent } from './add-complaint/add-complaint.component';
import { ComplaintsService } from './complaints.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.scss']
})
export class ComplaintsComponent {

  totalSize = 0;
  filterToggle: boolean = false;
  currentPage: string = '';

  selectedView: 'graph' | 'grid' = 'grid'; // 👈 default view

 

 constructor(
  private router: Router,
  private dialog: MatDialog,
  private route: ActivatedRoute,
  private complaintsService: ComplaintsService   // 👈 add this
) { }



complaintsData: any[] = [];


ngOnInit() {
  this.complaintsData = this.complaintsService.getComplaints();
  console.log(this.complaintsData);
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
      height: '500px',
      width: '950px'
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
    const scrollAmount = 210; // Adjust this value as needed

    if (ele) {
      // Check if ele is not null
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
