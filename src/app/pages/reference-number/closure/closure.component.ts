import { Component } from '@angular/core';
@Component({
  selector: 'app-closure',
  templateUrl: './closure.component.html',
  styleUrls: ['./closure.component.scss']
})
export class ClosureComponent {
  closureDate: string = '';
  closedBy: string = '';
  closureType: string = '';
  customerSatisfied: boolean = false;
  closureRemarks: string = '';

  closureDocs = [
    { name: 'Final Investigation Report.pdf', uploadedBy: 'Quality Team', date: '2024-10-05', size: '2.4 MB' },
    { name: 'Corrective Action Evidence.zip', uploadedBy: 'Manufacturing', date: '2024-10-06', size: '8.1 MB' },
  ];
}
