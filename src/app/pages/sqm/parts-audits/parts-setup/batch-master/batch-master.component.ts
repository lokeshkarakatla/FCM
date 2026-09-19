import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddBatchPopComponent } from './add-batch-pop/add-batch-pop.component';

@Component({
  selector: 'app-batch-master',
  templateUrl: './batch-master.component.html',
  styleUrls: ['./batch-master.component.scss']
})
export class BatchMasterComponent implements OnInit {

  mockdata: any[] = [];

  showFilters: boolean = false; 



    toggleFilters(): void {
    this.showFilters = !this.showFilters;
  }

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.generateMockData();
  }

  generateMockData() {
    this.mockdata = [
      { PartFamily: 'Engine Components', PartNumber: 'ENG-PN-001', BatchNumber: 'BCH-2026-001', BatchDate: '01/06/2026' },
      { PartFamily: 'Transmission',      PartNumber: 'TRN-PN-014', BatchNumber: 'BCH-2026-002', BatchDate: '03/06/2026' },
      { PartFamily: 'Electrical',        PartNumber: 'ELE-PN-022', BatchNumber: 'BCH-2026-003', BatchDate: '05/06/2026' },
      { PartFamily: 'Body Panels',       PartNumber: 'BDP-PN-009', BatchNumber: 'BCH-2026-004', BatchDate: '08/06/2026' },
      { PartFamily: 'Interior',          PartNumber: 'INT-PN-031', BatchNumber: 'BCH-2026-005', BatchDate: '10/06/2026' },
      { PartFamily: 'Chassis',           PartNumber: 'CHS-PN-007', BatchNumber: 'BCH-2026-006', BatchDate: '12/06/2026' },
      { PartFamily: 'Braking System',    PartNumber: 'BRK-PN-018', BatchNumber: 'BCH-2026-007', BatchDate: '14/06/2026' },
      { PartFamily: 'Engine Components', PartNumber: 'ENG-PN-002', BatchNumber: 'BCH-2026-008', BatchDate: '16/06/2026' }
    ];
  }

  addbatchpop(data: any) {
    this.dialog.open(AddBatchPopComponent, {
      width: '600px',
      height: 'auto',
      data: data
    });
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

}