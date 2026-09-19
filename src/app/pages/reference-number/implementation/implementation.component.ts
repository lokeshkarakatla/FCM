import { Component } from '@angular/core';
@Component({
  selector: 'app-implementation',
  templateUrl: './implementation.component.html',
  styleUrls: ['./implementation.component.scss']
})
export class ImplementationComponent {
  milestones = [
    { id: 1, milestone: 'Updated design specification document', responsible: 'Design Team', targetDate: '2024-09-20', actualDate: '2024-09-19', status: 'Completed' },
    { id: 2, milestone: 'Tooling modification for revised component', responsible: 'Manufacturing', targetDate: '2024-09-25', actualDate: '', status: 'In Progress' },
    { id: 3, milestone: 'First sample production run', responsible: 'Production', targetDate: '2024-10-01', actualDate: '', status: 'Pending' },
  ];
  remarks: string = '';
}
