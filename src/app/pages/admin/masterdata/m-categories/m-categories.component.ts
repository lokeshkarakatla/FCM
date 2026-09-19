import { Component, OnInit } from '@angular/core';
// import { AddCategoryComponent } from './add-category/add-category.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddCategoryComponent } from 'src/app/pages/setup/subjective-setup/category-master/add-category/add-category.component';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'app-m-categories',
  templateUrl: './m-categories.component.html',
  styleUrls: ['./m-categories.component.scss']
})
export class MCategoriesComponent  {

  canCreate: any;

      filterToggle: any;
      totalSize: any;
      currentPage: any;
      pageSize: any;


      constructor(private router: Router, private dialog: MatDialog) { }


      tableList = [
        { stageName: 'Product Quality', stageCode: 'EM', status: 'Active' },
        { stageName: 'Manager', stageCode: 'I-115', status: 'Active' },
        { stageName: 'RnD', stageCode: 'PNT', status: 'Active' },

      ];

      // Function to get status text
      getStatusText(status: boolean): string {
        return status ? 'Active' : 'Inactive';
      }


      public addmodule(id: any) {
        console.log('jkhksbdjk');
        let dialogRef = this.dialog.open(AddCategoryComponent, {
          data: id,
          height: 'auto',
          width: '600px',
        });
        dialogRef.afterClosed().subscribe((data: any) => { });
      }

        Confirmation() {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: 'auto',
      data: { component: null, title: 'Change Status', content: 'Are you sure you want to Change the Status ?', isConfirmation: true }
    });
    dialogRef.afterClosed().subscribe(
      (data: any) => {
        if (data) {
        }
      }
    );
  }


}
