import { Component, OnInit } from '@angular/core';
import { AddCommodityPopComponent } from './add-commodity-pop/add-commodity-pop.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commodity-master',
  templateUrl: './commodity-master.component.html',
  styleUrls: ['./commodity-master.component.scss']
})
export class CommodityMasterComponent implements OnInit {

  showFilters: boolean = false; 
  selectedCategory: string | null = null;
  selectedStatus: string = '';

  tableData = [
    { name: 'Casting', status: 'Active',code : 6498,target : '4' },
    { name: 'Forging', status: 'Inactive',code : 4265 ,target : '3'},
    { name: 'Machining', status: 'Active',code : 1284,target : '7' },
    { name: 'Fasteners', status: 'Inactive',code : 1685,target : '2'},
    { name: 'Non-Metallic', status: 'Active',code : 2586 ,target : '7'},
    { name: 'Sheet Metal', status: 'Active',code : 6547,target : '5' }
  ];
selectedKeyword: any;
 

  constructor(private dialog: MatDialog,  public router: Router) { }

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

  addCommodity(data: any): void {
   const dialogRef = this.dialog.open(AddCommodityPopComponent, {
       width: '650px',
       disableClose: true   ,
       data:data     // prevents closing on backdrop click
     });
   
     dialogRef.afterClosed().subscribe((result: { name: string; status: string; }) => {
       if (result) {
         // result = { name: '...', status: '...' }
        //  this.tableData.push(result);  // or call your API here
       }
     });
  }

  isMasterRoute(): boolean {
  // Checks if the URL ends exactly with '/commodity' (or whatever your base path is)
  // Adjust the string to match your exact route path if needed
  return this.router.url.endsWith('/commodity'); 
}
}