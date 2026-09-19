import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPartCategoryComponent } from './add-part-category/add-part-category.component';

@Component({
  selector: 'app-audit-categories',
  templateUrl: './audit-categories.component.html',
  styleUrls: ['./audit-categories.component.scss']
})
export class AuditCategoriesComponent implements OnInit {

  showFilters: boolean = false; 
  selectedCategory: string | null = null;
  selectedStatus: string = '';

  tableData = [
    { name: 'Dimensional Clock ', code: 'DC001', status: 'Active', parameter :'12' },
    { name: 'Surface Finish', code: 'SF001', status: 'Active', parameter :'8' },
    { name: 'Performance', code: 'PE001', status: 'Active', parameter :'10' },
    { name: 'Metallurgical', code: 'MT001', status: 'Active', parameter :'15' },
    { name: 'Mechanical', code: 'MC001', status: 'Active', parameter :'20' }
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

  addCategory(data:any) {
    const dialogRef = this.dialog.open(AddPartCategoryComponent, {
      width: '650px',
      disableClose: true,
      data: data 
    });
  }

  // --- ADD THIS NEW METHOD ---
  downloadTemplate(): void {
    // 1. Define the headers and sample data for your CSV template
    const csvHeader = "Category Name,Category Code,Status,Parameters\n";
    const csvSampleRow = "Sample Category,SAM001,Active,10\n";
    const csvData = csvHeader + csvSampleRow;

    // 2. Create a Blob from the CSV string
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);

    // 3. Create a hidden <a> tag to trigger the download
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'Parts_Audit_Category_Template.csv');
    link.style.display = 'none';

    // 4. Append to body, click it, and clean up
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }

}