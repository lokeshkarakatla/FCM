import { Component } from '@angular/core';

@Component({
  selector: 'app-investigation',
  templateUrl: './investigation.component.html',
  styleUrls: ['./investigation.component.scss']
})
export class InvestigationComponent {
  complaintType: string = '';
  goesToFactory: boolean = false;
  warrantyRequired: boolean = false;
  fieldDispatchRequired: boolean = false;

  initialFindings: string = '';
  investigatedBy: string = '';
  investigationDate: string = '';
  routingDecision: string = '';
  remarks: string = '';
}
