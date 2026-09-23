import { Component } from '@angular/core';
@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent {
  verifiedBy: string = '';
  verificationDate: string = '';
  verificationMethod: string = '';
  result: string = '';
  checklist = [
    { item: 'Root cause addressed', checked: true },
    { item: 'Corrective action implemented', checked: true },
    { item: 'No recurrence in test samples', checked: false },
    { item: 'Documentation updated', checked: false },
    { item: 'Stakeholders informed', checked: false },
  ];
  remarks: string = '';

  save(): void {
    console.log('Verification data saved successfully');
  }
}

