import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPartsFamilypopComponent } from './add-parts-familypop/add-parts-familypop.component';

@Component({
  selector: 'app-parts-families',
  templateUrl: './parts-families.component.html',
  styleUrls: ['./parts-families.component.scss']
})
export class PartsFamiliesComponent implements OnInit {

  showFilters: boolean = false; 
  selectedCategory: string | null = null;
  selectedStatus: string = '';

tableData = [
  { name: 'Engine Components',    code: 'PF001', status: 'Active',   parameters: 12 },
  { name: 'Transmission Systems', code: 'PF002', status: 'Active',   parameters: 8 },
  { name: 'Chassis and Frame',    code: 'PF003', status: 'Inactive', parameters: 0 },
  { name: 'Suspension Parts',     code: 'PF004', status: 'Active',   parameters: 15 },
  { name: 'Electrical Systems',   code: 'PF005', status: 'Inactive', parameters: 0 },
  { name: 'Braking Systems',      code: 'PF006', status: 'Active',   parameters: 10 },
  { name: 'Body and Cabin',       code: 'PF007', status: 'Active',   parameters: 20 },
  { name: 'Fuel Systems',         code: 'PF008', status: 'Inactive', parameters: 0 },
  { name: 'Cooling Systems',      code: 'PF009', status: 'Active',   parameters: 12 },
  { name: 'Steering Systems',     code: 'PF010', status: 'Active',   parameters: 8 }
];
selectedKeyword: any;
 

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {}

  toggleFilters(): void {
    this.showFilters = !this.showFilters;
  }

  onClear(): void {
    this.selectedCategory = null;
    this.selectedStatus = '';
  }

  onGo(): void {
    console.log('Filters Applied:', { category: this.selectedCategory, status: this.selectedStatus });
  }

  addCommodity(data:any) {
   const dialogRef = this.dialog.open(AddPartsFamilypopComponent, {
       width: '650px',
       disableClose: true ,
       data:data       // prevents closing on backdrop click
     });
   
  //    dialogRef.afterClosed().subscribe((result: { name: string; status: string; }) => {
  //      if (result) {
  //        // result = { name: '...', status: '...' }
  //        this.tableData.push(result);  // or call your API here
  //      }
  //    });
  // }
}
}
