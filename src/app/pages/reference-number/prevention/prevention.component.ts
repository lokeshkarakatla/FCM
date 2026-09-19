import { Component } from '@angular/core';
@Component({
  selector: 'app-prevention',
  templateUrl: './prevention.component.html',
  styleUrls: ['./prevention.component.scss']
})
export class PreventionComponent {
  measures = [
    { id: 1, measure: 'Update incoming inspection checklist for brake sensors', type: 'Process Change', owner: 'Quality Dept', targetDate: '2024-10-01', status: 'Planned' },
    { id: 2, measure: 'Add torque verification step in assembly SOP', type: 'SOP Update', owner: 'Manufacturing', targetDate: '2024-10-05', status: 'Planned' },
    { id: 3, measure: 'Supplier audit schedule revised to quarterly', type: 'System Improvement', owner: 'Procurement', targetDate: '2024-10-10', status: 'Planned' },
  ];
  remarks: string = '';
}
