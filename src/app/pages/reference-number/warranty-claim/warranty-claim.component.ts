import { Component } from '@angular/core';

@Component({
  selector: 'app-warranty-claim',
  templateUrl: './warranty-claim.component.html',
  styleUrls: ['./warranty-claim.component.scss']
})
export class WarrantyClaimComponent {
  warrantyRef: string = '';
  claimDate: string = '';
  warrantyExpiry: string = '';
  claimStatus: string = '';
  remarks: string = '';

  spares = [
    { partNo: 'SP-001', partName: 'Brake Pad Assembly', qty: 2, cost: 1200, status: 'Replaced' },
    { partNo: 'SP-002', partName: 'Oil Filter', qty: 1, cost: 450, status: 'Pending' },
  ];

  services = [
    { serviceId: 'SRV-001', description: 'Brake System Inspection', date: '2024-09-10', technician: 'John Doe', status: 'Completed' },
  ];
}
