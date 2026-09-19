import { Component, OnInit } from '@angular/core';
import { AddModuleAuditComponent } from './add-module-audit/add-module-audit.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-audit-model',
  templateUrl: './audit-model.component.html',
  styleUrls: ['./audit-model.component.scss']
})
export class AuditModelComponent implements OnInit {
  myGroup!: FormGroup;
  modelss: any[] = [];

  canCreate: any;
  filterToggle: any;
  totalSize: any;
  currentPage: any;
  pageSize: any;

  tableList = [
    { name: 'Fortuner', code: ')', status: true },
    { name: 'Toyota LandCruiser', code: '+', status: true },
    { name: 'Toyota Forturner', code: '!', status: true },
    { name: 'Defender 310', code: '#', status: true },
    { name: 'Corvette', code: 'w', status: true },
    { name: 'Toyota Camry', code: 'b', status: true },
    { name: 'Hyundai', code: 'h', status: true },
    { name: 'Ferrari', code: 'u', status: true },
    { name: 'Lamborghini', code: 's', status: true },
    { name: 'Lexus', code: 'q', status: true },
    { name: 'Mahindra XUV700', code: 'p', status: true },
  ];

  constructor(private router: Router, private dialog: MatDialog) {}

  // ✅ Fix: Add OnInit interface + call formInit in ngOnInit
   ngOnInit(): void {
    this.myGroup = new FormGroup({
      Keyword: new FormControl(''),
      ModelName: new FormControl(''),
      Status: new FormControl('')
    });
  }


  formInit() {
    this.myGroup = new FormGroup({
      Keyword: new FormControl(''),
      ModelName: new FormControl(''),
      Status: new FormControl('')
    });
  }

  public addmodule(id: any) {
    console.log('jkhksbdjk');
    let dialogRef = this.dialog.open(AddModuleAuditComponent, {
      data: id,
      height: 'auto',
      width: '800px',
    });
    dialogRef.afterClosed().subscribe((data: any) => {});
  }
}
