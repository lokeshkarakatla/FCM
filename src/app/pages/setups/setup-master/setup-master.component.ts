import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setup-master',
  templateUrl: './setup-master.component.html',
  styleUrls: ['./setup-master.component.scss']
})
export class SetupMasterComponent  {

  canCreate: any;

     filterToggle: any;
     totalSize: any;
     currentPage: any;
     pageSize: any;


     constructor(private router: Router, private dialog: MatDialog) { }


     tableList = [
       { stageName: 'Test', stageCode: 'EM', status: 'Active' },
       { stageName: 'RnD', stageCode: 'I-115', status: 'Active' },
       { stageName: 'QA', stageCode: 'PNT', status: 'Active' },
       { stageName: 'Account', stageCode: 'RM', status: 'Active' },
       { stageName: 'Developer', stageCode: 'LS', status: 'Active' },

     ];

     // Function to get status text
     getStatusText(status: boolean): string {
       return status ? 'Active' : 'Inactive';
     }


     public addmodule(id: any) {
    //    console.log('jkhksbdjk');
    //    let dialogRef = this.dialog.open(AddDepartmentComponent, {
    //      data: id,
    //      height: 'auto',
    //      width: '600px',
    //    });
    //    dialogRef.afterClosed().subscribe((data: any) => { });
    //  }


  }
}
