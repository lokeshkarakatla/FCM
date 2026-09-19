import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-monitor-dialog',
  templateUrl: './monitor-dialog.component.html',
  styleUrls: ['./monitor-dialog.component.scss']
})
export class MonitorDialogComponent {

  constructor(private dialogRef: MatDialogRef<MonitorDialogComponent>) {}

 close(value: boolean) {
  this.dialogRef.close(value);
}
}