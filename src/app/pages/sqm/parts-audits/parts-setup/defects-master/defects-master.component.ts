import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PartsFamilyPopComponent } from './parts-family-pop/parts-family-pop.component';
import { AddDefectsPopComponent } from './add-defects-pop/add-defects-pop.component';

@Component({
  selector: 'app-defects-master',
  templateUrl: './defects-master.component.html',
  styleUrls: ['./defects-master.component.scss']
})
export class DefectsMasterComponent implements OnInit {

  mockdata: any[] = [];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.generateMockData();
  }

  generateMockData() {
    this.mockdata = [
      { defectname: 'Oil Leak', PartFamily: '5/10', PartNumber: 'ENG-PN-001', BatchNumber: 'BCH-2026-001', BatchDate: '01/06/2026' },
      { defectname: 'Gear Slippage', PartFamily: '4/10', PartNumber: 'TRN-PN-014', BatchNumber: 'BCH-2026-002', BatchDate: '03/06/2026' },
      { defectname: 'Short Circuit', PartFamily: '6/10', PartNumber: 'ELE-PN-022', BatchNumber: 'BCH-2026-003', BatchDate: '05/06/2026' },
      { defectname: 'Paint Peeling', PartFamily: '8/10', PartNumber: 'BDP-PN-009', BatchNumber: 'BCH-2026-004', BatchDate: '08/06/2026' },
      { defectname: 'Torn Upholstery', PartFamily: '7/10', PartNumber: 'INT-PN-031', BatchNumber: 'BCH-2026-005', BatchDate: '10/06/2026' },
      { defectname: 'Corrosion', PartFamily: '8/10', PartNumber: 'CHS-PN-007', BatchNumber: 'BCH-2026-006', BatchDate: '12/06/2026' },
      { defectname: 'Worn Pads', PartFamily: '4/10', PartNumber: 'BRK-PN-018', BatchNumber: 'BCH-2026-007', BatchDate: '14/06/2026' },
      { defectname: 'Overheating', PartFamily: '7/10', PartNumber: 'ENG-PN-002', BatchNumber: 'BCH-2026-008', BatchDate: '16/06/2026' }
    ];
  }

  openEditDialog(item: any) {
    console.log('Edit clicked for:', item);
    // Add logic here to open the popup with existing data
  }

  deleteConfirmation(item: any) {
    console.log('Delete clicked for:', item);
    // Add delete logic here
  }

  archiveRecord(item: any) {
    console.log('Archive clicked for:', item);
    // Add archive logic here
  }



  openpartspop(data: any) {
    this.dialog.open(PartsFamilyPopComponent, {
      width: '600px',
      height: 'auto',
      data: data
    });
  }




showFilters: boolean = false; 



    toggleFilters(): void {
    this.showFilters = !this.showFilters;
  }



    adddefects(data: any) {
    this.dialog.open(AddDefectsPopComponent, {
      width: '600px',
      height: 'auto',
      data: data
    });
  }





}