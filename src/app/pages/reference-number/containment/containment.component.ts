import { Component } from '@angular/core';
@Component({
  selector: 'app-containment',
  templateUrl: './containment.component.html',
  styleUrls: ['./containment.component.scss']
})
export class ContainmentComponent {
  recallRequired: boolean = false;
  affectedProducts: string = '';
  containmentDate: string = '';
  containmentBy: string = '';

  actions = [
    { id: 1, action: 'Halt production line B for inspection', responsible: 'Production Manager', targetDate: '2024-09-15', status: 'Completed' },
    { id: 2, action: 'Quarantine affected batch #4521', responsible: 'Quality Lead', targetDate: '2024-09-16', status: 'In Progress' },
  ];
  remarks: string = '';
}
