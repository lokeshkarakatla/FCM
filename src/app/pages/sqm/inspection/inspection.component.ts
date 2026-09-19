import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddRecordPopComponent } from './add-record-pop/add-record-pop.component';
import { DefectsPopComponent } from './inspection-datatable/defects-pop/defects-pop.component';

@Component({
  selector: 'app-inspection',
  templateUrl: './inspection.component.html',
  styleUrls: ['./inspection.component.scss']
})
export class InspectionComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }


  openheatmap(item: any) {
    this.dialog.open(DefectsPopComponent, {
      width: '700px',
      height: 'auto',
      data: item 
    });
  }

}
