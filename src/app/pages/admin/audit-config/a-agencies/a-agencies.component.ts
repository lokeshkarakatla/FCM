import { Component } from '@angular/core';
import { AddAgencyAuditComponent } from './add-agency-audit/add-agency-audit.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-a-agencies',
  templateUrl: './a-agencies.component.html',
  styleUrls: ['./a-agencies.component.scss']
})
export class AAgenciesComponent  {

  canCreate: any;
   
   filterToggle: any;
   totalSize: any;
   currentPage: any;
   pageSize: any;
   
   
   constructor(private router: Router, private dialog: MatDialog) { }
   
   
     tableList =[
      { agency: 'HD', code: '=', status: true },
      { agency: 'Test', code: 'test', status: true },
      { agency: 'Manufacture', code: 'mfg', status: true },
      { agency: 'HR Department', code: 'HR100', status: true },
      { agency: 'IT Department', code: 'IT-DEPT', status: true },
      { agency: 'Painting Department', code: 'PD', status: false },
      { agency: 'Component-Shop', code: 'C-Shop', status: true },
      { agency: 'Assembly line', code: 'A-Line', status: false },
      { agency: 'Paint Shop', code: 'P-Shop', status: true },
      { agency: 'Body Shop', code: 'BS', status: false }
     ]
   
     public addmodule(id: any) {
       console.log('jkhksbdjk');
       let dialogRef = this.dialog.open(AddAgencyAuditComponent, {
         data: id,
         height: 'auto',
         width: '600px',
       });
       dialogRef.afterClosed().subscribe((data: any) => {});
     }

     addcheckpoint(item) {
      this.router.navigate(['/app/setup/subjective/overview']);
     
    }

}
