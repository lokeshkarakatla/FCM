import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { AddTestsComponent } from './add-tests/add-tests.component';

@Component({
  selector: 'app-testing-tests',
  templateUrl: './testing-tests.component.html',
  styleUrls: ['./testing-tests.component.scss']
})
export class TestingTestsComponent implements OnInit {

  filterToggle: boolean = false;
     totalSize = 0;
   
     @ViewChild(MatPaginator) paginator!: MatPaginator;
     constructor(public dialog: MatDialog) { }
   
     ngOnInit(): void {
     }
   
     tableList = [
       {
 
        department:'RnD',
         status: 'Active',
         serial:'132425',
         ProjectName: 'Tests',
         ProductName: 'KIA',
         config: 'Test',
         TestId: 2,
         Subject: 'Testing',
         Description: 'Tasing',
         FailureHours: 11,
         DocURL: 'photo-url-1',
         SectionName: 'Electronics manufacturing',
         UserName: 'Sharanya',
         StatusName: 'Open',
         DocURL1: 'document-url-1',
         CategoryName: 'RnD'
       },
       {
        department:'Developer',
         serial:'132426',
         status: 'Inactive',
         ProjectName: 'Sample1',
         ProductName: 'Test Product',
         config:'Error',
         TestId: 1,
         Subject: 'Royal Enfield Inaugurates',
         Description: 'Google Scholar provides a simple way to broadly search for scholarly literature.',
         FailureHours: 2,
         DocURL: 'photo-url-2',
         SectionName: 'Chemical manufacturing',
         UserName: 'Shailaja',
         StatusName: 'Closed',
         DocURL1: 'document-url-2',
         CategoryName: 'Product Quality'
       },
       {
          department:'Account',
         serial:'132427',
         status: 'Active',
         ProjectName: 'Mahindra',
         ProductName: 'KIA',
         config:'Error',
         TestId: 1,
         Subject: 'Royal Enfield Inaugurates',
         Description: 'Meet your business challenges with cloud computing services from Google.',
         FailureHours: 5,
         DocURL: 'photo-url-3',
         SectionName: 'Electrical Industry',
         UserName: 'Sharanya',
         StatusName: 'Pending',
         DocURL1: 'document-url-3',
         CategoryName: 'Manager'
       },
       {
        department:'RnD',
         serial:'132428',
         status: 'Active',
         ProjectName: 'Telsa',
         ProductName: 'Test product',
         config:'Test',
         TestId: 2,
         Subject: 'Testing',
         Description: 'Tasing',
         FailureHours: 11,
         DocURL: 'photo-url-1',
         SectionName: 'Paper manufacturing',
         UserName: 'Satya',
         StatusName: 'Open',
         DocURL1: 'document-url-1',
         CategoryName: 'RnD'
       },
       {
        department:'Developer',
         serial:'132429',
         status: 'Inactive',
         ProjectName: 'KIA Motors',
         ProductName: 'KIA',
         config:'Error',
         TestId: 1,
         Subject: 'Royal Enfield Inaugurates',
         Description: 'Google Scholar provides a simple way to broadly search for scholarly literature.',
         FailureHours: 2,
         DocURL: 'photo-url-2',
         SectionName: 'Chemical manufacturing',
         UserName: 'Shailaja',
         StatusName: 'Closed',
         DocURL1: 'document-url-2',
         CategoryName: 'Product Quality'
       },
     ];
   
    
   
     addTests(applicant: any) {
       console.log('Edit:', applicant);
     }
   
     deleteConfirmation(applicant: any) {
       console.log('Delete:', applicant);
     }
   
     imageSource1(url: string) {
       window.open(url, '_blank');
     }
   
     public openTest(id: any) {
       console.log('jkhksbdjk');
       let dialogRef = this.dialog.open(AddTestsComponent, {
         data: id,
         height: 'auto',
         width: '800px',
       });
       dialogRef.afterClosed().subscribe((data: any) => {});
     }
 
     openConfirmDialog(applicant: any): void {
       const dialogRef = this.dialog.open(AddTestsComponent, {
         width: '300px',
         data: { status: applicant.status }
       });
   
       dialogRef.afterClosed().subscribe(result => {
         if (result) {
           applicant.status = applicant.status === 'Active' ? 'Inactive' : 'Active';
         }
       });
     }
 

}
