import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DispatchDialogComponent } from '../dialogs/dispatch-dialog/dispatch-dialog.component';

@Component({
  selector: 'app-field-dispatch',
  templateUrl: './field-dispatch.component.html',
  styleUrls: ['./field-dispatch.component.scss']
})
export class FieldDispatchComponent {
  fromDealer: string = 'Mumbai Dealer Center';
  toFactory: string = 'Pune Plant / Assembly Line B';
  trackingNo: string = 'TRK-IND-78234-X';
  dispatchDate: string = '2024-09-12';
  dispatchStatus: string = 'In Transit';

  parts = [
    { partNo: 'FD-001', partName: 'Engine Control Module (ECM)', remarks: 'Intermittent failure reported under load' },
    { partNo: 'FD-002', partName: 'Wiring Harness Section A', remarks: 'Suspected insulation pinch defect' }
  ];
  remarks: string = '';

  constructor(public dialog: MatDialog) {}

  openDispatchDialog(part?: any): void {
    const dialogRef = this.dialog.open(DispatchDialogComponent, {
      width: '600px',
      data: part ? {
        partNumber: part.partNo,
        partName: part.partName,
        trackingNumber: this.trackingNo,
        dispatchDate: this.dispatchDate,
        from: this.fromDealer,
        to: this.toFactory,
        status: this.dispatchStatus,
        remarks: part.remarks || ''
      } : {
        trackingNumber: this.trackingNo,
        dispatchDate: this.dispatchDate,
        from: this.fromDealer,
        to: this.toFactory,
        status: this.dispatchStatus
      }
    });

    dialogRef.afterClosed().subscribe((res: any) => {
      if (res) {
        const item = {
          partNo: res.partNumber,
          partName: res.partName,
          remarks: res.remarks
        };

        if (res.trackingNumber) this.trackingNo = res.trackingNumber;
        if (res.dispatchDate) this.dispatchDate = res.dispatchDate;
        if (res.from) this.fromDealer = res.from;
        if (res.to) this.toFactory = res.to;

        if (part) {
          const index = this.parts.findIndex(p => p === part || p.partNo === part.partNo);
          if (index !== -1) {
            this.parts[index] = item;
          }
        } else {
          this.parts.push(item);
        }
      }
    });
  }

  deletePart(part: any): void {
    const idx = this.parts.findIndex(p => p === part || p.partNo === part.partNo);
    if (idx !== -1) {
      this.parts.splice(idx, 1);
    }
  }

  save(): void {
    console.log('Field dispatch data saved successfully');
  }
}

