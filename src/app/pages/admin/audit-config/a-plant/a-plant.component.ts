import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddPlantAuditComponent } from './add-plant-audit/add-plant-audit.component';

@Component({
  selector: 'app-a-plant',
  templateUrl: './a-plant.component.html',
  styleUrls: ['./a-plant.component.scss']
})
export class APlantComponent {

  canCreate: any;
  
  filterToggle: any;
  totalSize: any;
  currentPage: any;
  pageSize: any;
  
  
  constructor(private router: Router, private dialog: MatDialog) { }
  
  
    tableList =[
      { name: 'Kondapoor', typeCode: '+', status: 'Active' },
      { name: 'Gulbarga', typeCode: '9', status: 'Active' },
      { name: 'Bangalore', typeCode: '2', status: 'Active' },
      { name: 'Bangalore', typeCode: '7', status: 'Active' },
      { name: 'Ahmedabad G', typeCode: 'A', status: 'Active' },
      { name: 'Raipur', typeCode: 'R', status: 'Active' },
      { name: 'Delhi', typeCode: 'D', status: 'Active' },
      { name: 'Hyderabad', typeCode: 'H', status: 'Active' },
      { name: 'Vizag', typeCode: 'V', status: 'Active' },
      { name: 'Kolkatta', typeCode: 'K', status: 'Active' },
      { name: 'Indore', typeCode: 'I', status: 'Active' }
    ]
  
    public addmodule(id: any) {
      console.log('jkhksbdjk');
      let dialogRef = this.dialog.open(AddPlantAuditComponent, {
        data: id,
        height: 'auto',
        width: '600px',
      });
      dialogRef.afterClosed().subscribe((data: any) => {});
    }
  
  }
  