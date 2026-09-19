import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { Onepager } from '../../Onepager';
import { AddActionGridViewComponent } from './add-action-grid-view/add-action-grid-view.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { AddCapaComponent } from 'src/app/pages/capa/add-capa/add-capa.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-action-grid-view',
  templateUrl: './action-grid-view.component.html',
  styleUrls: ['./action-grid-view.component.scss']
})
export class ActionGridViewComponent implements OnInit {

   totalSize = 0;
  filterToggle: boolean = false;
    fromPage: string | null = null;
  constructor(private router: Router,  private route: ActivatedRoute,private dialog: MatDialog) {
     this.route.queryParams.subscribe(params => {
      this.fromPage = params['from'] || null;
    });
   }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  data = [
    {
      title: "High-Performance Nissan Ariya NISMO Debuts on World EV (FIELD/2024/09/6)",
      role: "Shop Head",
      department: "QA",
      issue: "Engine Overheating",
      details: "enginee getting sound",
      date: "2024-09-30",
      completion: "2024-08-20",
      status: "Open",
      actions: { edit: true, delete: true }
    },
    {
      title: "High-Performance Nissan Ariya NISMO Debuts on World EV (FIELD/2024/09/6)",
      role: "Shift Manager",
      department: "Quality",
      issue: "Brakes Squeaking not working",
      details: "Brakes Squeaking not working",
      date: "2024-09-26",
      completion: "2024-09-30",
      status: "Pending",
      actions: { edit: true, delete: true }
    },
    {
      title: "This road hazard service is part of Bosch’s connected map issue (FIELD/2024/09/8)",
      role: "Shop Head",
      department: "QA",
      issue: "Transmission Slipping",
      details: "Transmission Slipping is not good",
      date: "2024-09-29",
      completion: "2024-09-24",
      status: "WIP",
      actions: { edit: true, delete: true }
    },
    {
      title: "High-Performance Nissan Ariya NISMO Debuts on World EV (FIELD/2024/09/6)",
      role: "Shop Head",
      department: "Account",
      issue: "Transmission Slipping",
      details: "Transmission Slipping",
      date: "2024-09-20",
      completion: "2024-09-24",
      status: "WIP",
      actions: { edit: true, delete: true }
    },
    {
      title: "High-Performance Nissan Ariya NISMO Debuts on World EV (FIELD/2024/09/6)",
      role: "Shift Manager",
      department: "Developer",
      issue: "Battery Draining",
      details: "Battery Draining",
      date: "2024-09-19",
      completion: "2024-09-24",
      status: "Pending",
      actions: { edit: true, delete: true }
    },
    {
      title: "Global fleet of connected vehicles (FIELD/2024/09/3)",
      role: "Shift Manager",
      department: "QA",
      issue: "Unusual Vibrations",
      details: "Unusual Vibrations",
      date: "2024-09-24",
      completion: "2024-10-11",
      status: "Open",
      actions: { edit: true, delete: true }
    },
    {
      title: "High-Performance Nissan Ariya NISMO Debuts on World EV (FIELD/2024/09/6)",
      role: "Shift Manager",
      department: "Quality",
      issue: "Brakes Squeaking not working",
      details: "Brakes Squeaking not working",
      date: "2024-09-24",
      completion: "2025-09-24",
      status: "Open",
      actions: { edit: true, delete: true }
    },
    {
      title: "High-Performance Nissan Ariya NISMO Debuts on World EV (FIELD/2024/09/6)",
      role: "Shift Manager",
      department: "Quality",
      issue: "Brakes Squeaking not getting",
      details: "Brakes Squeaking not working",
      date: "2024-09-24",
      completion: "2024-09-24",
      status: "Pending",
      actions: { edit: true, delete: true }
    }
  ];

  // goBack() {
  //   this.router.navigate(['/app/complaints']);
  // }
  goBack() {
    
      this.router.navigate(['/app/prts-part/prtsissuestatus/one-pager']);
   
  }

   openCAPA(id: any, index?: number) {
  let dialogRef = this.dialog.open(AddCapaComponent, {
    data: id,
    width: '800px'
  });

  dialogRef.afterClosed().subscribe((result: any) => {
    if (result) {
      // update your row
      this.data[index!].completion = result.completion;
    }
  });
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

   isDueGreater(item: any): boolean {
  const due = new Date(item.date);
  const completion = new Date(item.completion);

  if (isNaN(due.getTime()) || isNaN(completion.getTime())) {
    return false;
  }

  return due > completion; // 👈 condition
}


scrollGrid(direction: 'left' | 'right') {
  const container = document.getElementById('capa-table-container');
  if (container) {
    const scrollAmount = 300; // adjust as needed
    if (direction === 'right') {
      container.scrollLeft += scrollAmount;
    } else {
      container.scrollLeft -= scrollAmount;
    }
  }
}


}
