import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { AddProductsComponent } from './add-products/add-products.component';

@Component({
  selector: 'app-testing-products',
  templateUrl: './testing-products.component.html',
  styleUrls: ['./testing-products.component.scss']
})
export class TestingProductsComponent implements OnInit {

   filterToggle: boolean = false;
    totalSize = 0;
  
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    constructor(public dialog: MatDialog) { }
  
    ngOnInit(): void {
    }
  
    tableList = [
      {

        status: 'Active',
        serial:'132425',
        ProjectName: 'Tests',
        ProductName: 'Test product',
        config: 'Test',
        TestId: 2,
        Subject: 'Testing',
        Description: 'Tasing',
        FailureHours: 11,
        DocURL: 'photo-url-1',
        SectionName: 'Chemical manufacturing',
        UserName: 'Sharanya',
        StatusName: 'Open',
        DocURL1: 'document-url-1',
        CategoryName: 'RnD'
      },
      {
        serial:'132426',
        status: 'Inactive',
        ProjectName: 'Sample1',
        ProductName: 'KIA',
        config:'Error',
        TestId: 1,
        Subject: 'Royal Enfield Inaugurates',
        Description: 'Google Scholar provides a simple way to broadly search for scholarly literature.',
        FailureHours: 2,
        DocURL: 'photo-url-2',
        SectionName: 'Chemical manufacturing',
        UserName: 'Sharanya',
        StatusName: 'Closed',
        DocURL1: 'document-url-2',
        CategoryName: 'Product Quality'
      },
      {
        serial:'132427',
        status: 'Active',
        ProjectName: 'Sample1',
        ProductName: 'KIA',
        config:'Error',
        TestId: 1,
        Subject: 'Royal Enfield Inaugurates',
        Description: 'Meet your business challenges with cloud computing services from Google.',
        FailureHours: 5,
        DocURL: 'photo-url-3',
        SectionName: 'Chemical manufacturing',
        UserName: 'Sharanya',
        StatusName: 'Pending',
        DocURL1: 'document-url-3',
        CategoryName: 'Manager'
      },
      {
        serial:'132428',
        status: 'Active',
        ProjectName: 'Tests',
        ProductName: 'Test product',
        config:'Test',
        TestId: 2,
        Subject: 'Testing',
        Description: 'Tasing',
        FailureHours: 11,
        DocURL: 'photo-url-1',
        SectionName: 'Chemical manufacturing',
        UserName: 'Sharanya',
        StatusName: 'Open',
        DocURL1: 'document-url-1',
        CategoryName: 'RnD'
      },
      {
        serial:'132429',
        status: 'Inactive',
        ProjectName: 'Sample1',
        ProductName: 'KIA',
        config:'Error',
        TestId: 1,
        Subject: 'Royal Enfield Inaugurates',
        Description: 'Google Scholar provides a simple way to broadly search for scholarly literature.',
        FailureHours: 2,
        DocURL: 'photo-url-2',
        SectionName: 'Chemical manufacturing',
        UserName: 'Sharanya',
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
  
    public openProduct(id: any) {
      console.log('jkhksbdjk');
      let dialogRef = this.dialog.open(AddProductsComponent, {
        data: id,
        height: 'auto',
        width: '800px',
      });
      dialogRef.afterClosed().subscribe((data: any) => {});
    }

    openConfirmDialog(applicant: any): void {
      const dialogRef = this.dialog.open(AddProductsComponent, {
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
