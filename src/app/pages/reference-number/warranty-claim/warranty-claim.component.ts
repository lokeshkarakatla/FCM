import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SpareDialogComponent } from '../dialogs/spare-dialog/spare-dialog.component';
import { ServiceDialogComponent } from '../dialogs/service-dialog/service-dialog.component';

@Component({
  selector: 'app-warranty-claim',
  templateUrl: './warranty-claim.component.html',
  styleUrls: ['./warranty-claim.component.scss']
})
export class WarrantyClaimComponent {
  warrantyRef: string = 'WC-2024-8841';
  claimDate: string = '2024-09-12';
  warrantyExpiry: string = '2025-09-12';
  claimStatus: string = 'Approved';
  remarks: string = '';

  spares = [
    { partNo: 'SP-001', partName: 'Brake Pad Assembly', qty: 2, unitRate: 600, cost: 1200, status: 'Replaced' },
    { partNo: 'SP-002', partName: 'Oil Filter Cartridge', qty: 1, unitRate: 450, cost: 450, status: 'Pending' },
  ];

  services = [
    { serviceId: 'SRV-001', jobCode: 'SRV-001', description: 'Brake System Inspection and Calibration', qty: 1, unitRate: 850, cost: 850, date: '2024-09-10', technician: 'John Doe', status: 'Completed' },
  ];

  getTotalSpareCost(): number {
    return this.spares.reduce((sum, item) => sum + (Number(item.cost) || 0), 0);
  }

  getTotalServiceCost(): number {
    return this.services.reduce((sum, item) => sum + (Number(item.cost) || 0), 0);
  }

  getTotalClaimCost(): number {
    return this.getTotalSpareCost() + this.getTotalServiceCost();
  }

  constructor(public dialog: MatDialog) {}

  openSpareDialog(spare?: any): void {
    const dialogRef = this.dialog.open(SpareDialogComponent, {
      width: '600px',
      data: spare ? { ...spare } : null
    });

    dialogRef.afterClosed().subscribe((res: any) => {
      if (res) {
        if (spare) {
          const index = this.spares.findIndex(s => s === spare || s.partNo === spare.partNo);
          if (index !== -1) {
            this.spares[index] = { ...this.spares[index], ...res };
          }
        } else {
          this.spares.push(res);
        }
      }
    });
  }

  deleteSpare(spare: any): void {
    const idx = this.spares.findIndex(s => s === spare || s.partNo === spare.partNo);
    if (idx !== -1) {
      this.spares.splice(idx, 1);
    }
  }

  openServiceDialog(svc?: any): void {
    const dialogRef = this.dialog.open(ServiceDialogComponent, {
      width: '600px',
      data: svc ? { ...svc } : null
    });

    dialogRef.afterClosed().subscribe((res: any) => {
      if (res) {
        if (svc) {
          const index = this.services.findIndex(s => s === svc || s.serviceId === svc.serviceId);
          if (index !== -1) {
            this.services[index] = { ...this.services[index], ...res };
          }
        } else {
          this.services.push(res);
        }
      }
    });
  }

  deleteService(svc: any): void {
    const idx = this.services.findIndex(s => s === svc || s.serviceId === svc.serviceId);
    if (idx !== -1) {
      this.services.splice(idx, 1);
    }
  }

  save(): void {
    console.log('Warranty claim data saved successfully');
  }
}

