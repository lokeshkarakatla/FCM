import { Component } from '@angular/core';
@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.scss']
})
export class MonitoringComponent {
  monitoringPeriod: string = '';
  startDate: string = '';
  endDate: string = '';
  monitoredBy: string = '';
  frequency: string = '';

  records = [
    { date: '2024-09-20', metric: 'Defect rate per 1000 units', value: '0.5', target: '<1.0', status: 'In Control' },
    { date: '2024-09-21', metric: 'Defect rate per 1000 units', value: '0.3', target: '<1.0', status: 'In Control' },
    { date: '2024-09-22', metric: 'Defect rate per 1000 units', value: '0.8', target: '<1.0', status: 'In Control' },
  ];
  remarks: string = '';
}
