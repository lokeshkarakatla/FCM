import { Component, OnInit } from '@angular/core';
import { AddDrivetypeAuditComponent } from './add-drivetype-audit/add-drivetype-audit.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-a-drivetype',
  templateUrl: './a-drivetype.component.html',
  styleUrls: ['./a-drivetype.component.scss']
})
export class ADrivetypeComponent {

   canCreate: any;
    filterToggle: any;
    totalSize: any;
    currentPage: any;
    pageSize: any;
  
  
    constructor(private router: Router, private dialog: MatDialog) { }
  
  
    tableList = [
      { name: 'Automation Driver', status: 'Active' },
    { name: 'Four Wheel Drive.', status: 'Active' },
    { name: 'All Wheel Drive', status: 'Active' },
    { name: 'Front Wheel Drive', status: 'Active' },
    { name: 'Rear Wheel Drive', status: 'Active' }
    ];
  
    // Function to get status text
    getStatusText(status: boolean): string {
      return status ? 'Active' : 'Inactive';
    }
  
  
    public addmodule(id: any) {
      console.log('jkhksbdjk');
      let dialogRef = this.dialog.open(AddDrivetypeAuditComponent, {
        data: id,
        height: 'auto',
        width: '600px',
      });
      dialogRef.afterClosed().subscribe((data: any) => { });
    }
  
  
  
  }
  