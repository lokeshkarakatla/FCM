import { Component, OnInit } from '@angular/core';
import { AddProcessCategoryPopComponent } from './add-process-category-pop/add-process-category-pop.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-process-audits-categories',
  templateUrl: './process-audits-categories.component.html',
  styleUrls: ['./process-audits-categories.component.scss']
})
export class ProcessAuditsCategoriesComponent implements OnInit {

  showFilters: boolean = false; 
  selectedCategory: string | null = null;
  selectedStatus: string = '';

  tableData = [
    { name: 'Quality Management System', status: 'Active', code : 'QMS', checklist :'12' },
    { name: 'Material and Sub-Supplier Management ', status: 'Active', code : 'MM' , checklist :'12'},
    { name: 'Production Process Control', status: 'Active', code : 'PPC', checklist :'12' },
    { name: 'Preventive Maintenance', status: 'Active', code : 'PM', checklist :'12' },
 
       { name: ' housekeeping ', status: 'Active', code : '5S', checklist :'12' }
  ];
 

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


 addCategory(data: any): void {
  const dialogRef = this.dialog.open(AddProcessCategoryPopComponent, {
    width: '650px',
    disableClose: true  ,     // prevents closing on backdrop click
    data: data
  });

  dialogRef.afterClosed().subscribe((result: { name: string; status: string; }) => {
    if (result) {
      // result = { name: '...', status: '...' }
      // this.tableData.push(result);  // or call your API here
    }
  });
}
}