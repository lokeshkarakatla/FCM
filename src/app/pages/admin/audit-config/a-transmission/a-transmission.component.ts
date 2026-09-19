import { Component, OnInit } from '@angular/core';
import { AddTransmissionAuditComponent } from './add-transmission-audit/add-transmission-audit.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-a-transmission',
  templateUrl: './a-transmission.component.html',
  styleUrls: ['./a-transmission.component.scss']
})
export class ATransmissionComponent {

 canCreate: any;
  
  filterToggle: any;
  totalSize: any;
  currentPage: any;
  pageSize: any;
  
  
  constructor(private router: Router, private dialog: MatDialog) { }
  
  
    tableList =[
      { transmissionName: 'Speed manual transmission', transmissionCode: 'Q', model: 'Verna EV 1.50', status: 'Active' },
      { transmissionName: 'Direct Shift Gearbox', transmissionCode: '2', model: 'Corvette', status: 'Active' },
      { transmissionName: 'Intelligent Manual Transmission', transmissionCode: '1', model: 'Toyota Camry', status: 'Active' },
      { transmissionName: 'Torque Converter Gearbox', transmissionCode: '7', model: 'Hyundai', status: 'Active' },
      { transmissionName: 'Tiptronic Transmission', transmissionCode: 'T', model: 'Ferrari', status: 'Active' },
      { transmissionName: 'Automated manual transmission', transmissionCode: 'a', model: 'Lamborghini', status: 'Active' },
      { transmissionName: 'Manual Transmission', transmissionCode: '5', model: 'Lexus', status: 'Active' },
      { transmissionName: 'Continuously Variable Transmission', transmissionCode: '4', model: 'Mahindra XUV700', status: 'Active' },
      { transmissionName: 'Torque converter transmissions', transmissionCode: '3', model: 'Toyota Fortuner', status: 'Active' },
      { transmissionName: 'Dual-Clutch Transmission', transmissionCode: '2', model: 'Hyundai Creta', status: 'Active' },
      { transmissionName: 'DCT Automatic', transmissionCode: '1', model: 'Tata Nexon', status: 'Active' },
      { transmissionName: 'Four-Strock Engine', transmissionCode: '7', model: 'Ruby', status: 'Active' },
      { transmissionName: 'speed Ricardo transmission', transmissionCode: '7', model: 'Valkyrie', status: 'Active' },
      { transmissionName: 'Tiptronic transmission', transmissionCode: 'b', model: 'BMW', status: 'Active' },
      { transmissionName: 'Speed Four stroock Manual', transmissionCode: 'z', model: 'Honda City', status: 'Active' }
   ];
 
   // Function to get status text
   getStatusText(status: boolean): string {
     return status ? 'Active' : 'Inactive';
   }
    
  
    public addmodule(id: any) {
      console.log('jkhksbdjk');
      let dialogRef = this.dialog.open(AddTransmissionAuditComponent, {
        data: id,
        height: 'auto',
        width: '600px',
      });
      dialogRef.afterClosed().subscribe((data: any) => {});
    }
  
 

}
