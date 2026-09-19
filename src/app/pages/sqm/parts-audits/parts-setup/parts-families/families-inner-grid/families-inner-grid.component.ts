import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-families-inner-grid',
  templateUrl: './families-inner-grid.component.html',
  styleUrls: ['./families-inner-grid.component.scss']
})
export class FamiliesInnerGridComponent implements OnInit {

addchecklistaudit() {
throw new Error('Method not implemented.');
}
opendocpop() {
throw new Error('Method not implemented.');
}
opennotes() {
throw new Error('Method not implemented.');
}
editParameter(_t51: any) {
throw new Error('Method not implemented.');
}


  
    constructor(private location:Location,
      public dialog: MatDialog,
    ) { }



      goBack(): void {
    this.location.back();
  }
    // Top Categories
categories = [
    { name: ' QMS (4)', tooltip: 'Quality Management System  ' },
    { name: 'MM (5)', tooltip: 'Material Management ' },
    { name: 'PPC(3)', tooltip: 'Production Planning & Control ' },
    { name: 'IME (5)', tooltip: 'Inspection & Measurement Engineering ' },
    { name: 'CAPA(4)', tooltip: 'Corrective and Preventive Actions' }
  ];
  selectedCategory = ' QMS (4)'; // Keeps track of the active name string

  // Set active category tab
  selectCategory(catName: string) {
    this.selectedCategory = catName;
  }
  
    // Pagination
    pageSize = 4;
    pageIndex = 0;
    pagedData: any[] = [];
  
    // Table Data based  
    tableData = [
      {
        parameter: 'UTER DIAMETER', spec: '457.0±0.8', min: 23, max: 27, actionLink: 'View', special: 'General', method: 'Thermocouple',
        s1: 24.5, s2: 25.0, s3: 26.0, s4: 25.5, s5: 24.8, okay: true
      },
      {
        parameter: 'OTAL LENGTH', spec: '4.747 / 34.798', min: 6.5, max: 7.5, actionLink: 'View', special: 'General', method: 'pH Meter',
        s1: 7.1, s2: 6.9, s3: 7.2, s4: 6.8, s5: 7.0, okay: true
      },
      {
        parameter: 'WIDTH', spec: '20.0±0.2', min: 1000, max: 2000, actionLink: 'View', special: 'General', method: 'Conductivity Meter',
        s1: 1400, s2: 1500, s3: 1600, s4: 1550, s5: 1450, okay: false
      },
      {
        parameter: 'ACE TO HOLE CENTER', spec: '5.0±0.3', min: 7, max: 9, actionLink: 'View', special: 'General', method: 'DO Meter',
        s1: 8.2, s2: 7.8, s3: 8.0, s4: 7.5, s5: 8.1, okay: true
      },
      {
        parameter: 'ACE TO GROOVE CENTER', spec: '0.0±0.2', min: 0, max: 10, actionLink: 'View', special: 'General', method: 'MICROMETER',
        s1: 3.0, s2: 4.5, s3: 5.0, s4: 2.5, s5: 3.5, okay: true
      }
    ];
  
  
  
    ngOnInit(): void {
      this.updatePage();
    }
  
    // Set active category tab
    // selectCategory(cat: string) {
    //   this.selectedCategory = cat;
    // }
  
    // Pagination Logic
    onPageChange(event: PageEvent): void {
      this.pageIndex = event.pageIndex;
      this.pageSize = event.pageSize;
      this.updatePage();
    }
  
    private updatePage(): void {
      const start = this.pageIndex * this.pageSize;
      this.pagedData = this.tableData.slice(start, start + this.pageSize);
    }
  
  // addchecklistaudit() {
  //   let dialogRef = this.dialog.open(PartsAddParameterComponent, {
  //     height: 'auto',
  //     width: '850px'
  //   });
  //   dialogRef.afterClosed().subscribe(data => {});
  // }




  // editParameter(item: any) {
  //   let dialogRef = this.dialog.open(PartsAddParameterComponent, {
  //     height: 'auto',
  //     width: '850px',
  //     data: item // <--- This tells the popup it's in Edit mode
  //   });
  //   dialogRef.afterClosed().subscribe(data => {
  //     // Handle any updates after popup closes if necessary
  //   });
  // }
  
  
  //     opendocpop() {
  //        {
  //     this.dialog.open(ViewDocPhotosComponent, {
  //       width: '600px',
  //       height: '450px',
        
  //     });
  //   }
  // }

//  opennotes() {
//   this.dialog.open(AuditrefRemarksPopComponent, {
//     width: '500px',
     
//     height: 'auto'
//   });
// }

}
