import { Component } from '@angular/core';
import { AddInteriorTrimAuditComponent } from './add-interior-trim-audit/add-interior-trim-audit.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-a-interiortrim',
  templateUrl: './a-interiortrim.component.html',
  styleUrls: ['./a-interiortrim.component.scss']
})
export class AInteriortrimComponent  {

  canCreate: any;
    
    filterToggle: any;
    totalSize: any;
    currentPage: any;
    pageSize: any;
    
    
    constructor(private router: Router, private dialog: MatDialog) { }
    
    
      tableList =[
        { trim: 'Z06 3LZ', model: 'Corvette', status: true },
        { trim: 'masterstroke of luxury', model: 'Toyota Camry', status: true },
        { trim: 'Upholstery', model: 'Hyundai', status: true },
        { trim: 'Raw power and aggression', model: 'Ferrari', status: true },
        { trim: "Exquisite leather's", model: 'Lamborghini', status: true },
        { trim: 'Sport Utility Vehicle', model: 'Lexus', status: true },
        { trim: 'Hatchback', model: 'Mahindra XUV700', status: true },
        { trim: 'MUV Speed', model: 'Toyota Fortuner', status: false },
        { trim: 'Sedan More Space', model: 'Hyundai Creta', status: true },
        { trim: 'High Speed', model: 'Tata Nexon', status: true },
        { trim: 'Stylish Car', model: 'Ruby', status: true },
        { trim: 'Sports car', model: 'Valkyrie', status: true },
        { trim: 'Exterior Decoration Moulding Trims', model: 'BMW', status: true },
        { trim: 'DIY 5 Meter Flexible 3D', model: 'Honda City', status: true },
        { trim: 'All', model: 'Isuzu Huvsco', status: false }
      ]
    
      public addmodule(id: any) {
        console.log('jkhksbdjk');
        let dialogRef = this.dialog.open(AddInteriorTrimAuditComponent, {
          data: id,
          height: 'auto',
          width: '600px',
        });
        dialogRef.afterClosed().subscribe((data: any) => {});
      }
 
 }
 