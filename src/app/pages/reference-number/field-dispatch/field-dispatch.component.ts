import { Component } from '@angular/core';
@Component({
  selector: 'app-field-dispatch',
  templateUrl: './field-dispatch.component.html',
  styleUrls: ['./field-dispatch.component.scss']
})
export class FieldDispatchComponent {
  dispatches = [
    { partNo: 'FD-001', partName: 'Engine Control Module', dispatchDate: '2024-09-12', trackingNo: 'TRK-78234', fromDealer: 'Mumbai Central', toFactory: 'Pune Plant', status: 'In Transit' },
    { partNo: 'FD-002', partName: 'Sensor Assembly', dispatchDate: '2024-09-14', trackingNo: 'TRK-78290', fromDealer: 'Delhi Showroom', toFactory: 'Pune Plant', status: 'Received' },
  ];
  remarks: string = '';
}
