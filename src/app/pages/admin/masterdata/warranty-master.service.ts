import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface SparePartMasterItem {
  id: string;
  partNo: string;
  partName: string;
  unitRate: number;
  remarks: string;
  status: 'Active' | 'Inactive';
}

export interface JobCodeMasterItem {
  id: string;
  jobCode: string;
  serviceName: string;
  description: string;
  unitRate: number;
  status: 'Active' | 'Inactive';
}

@Injectable({
  providedIn: 'root'
})
export class WarrantyMasterService {

  // Default Spare Parts Master Repository
  private sparesList: SparePartMasterItem[] = [
    { id: 'SP-01', partNo: 'SP-001', partName: 'Brake Pad Assembly (Heavy Duty)', unitRate: 600, remarks: 'OEM standard disc brake friction pads', status: 'Active' },
    { id: 'SP-02', partNo: 'SP-002', partName: 'Oil Filter Cartridge (Spin-on)', unitRate: 450, remarks: 'High efficiency hydraulic/lube filter', status: 'Active' },
    { id: 'SP-03', partNo: 'SP-003', partName: 'Hydraulic Lift Cylinder Seal Kit', unitRate: 1400, remarks: 'Fluoroelastomer high-pressure dual seals', status: 'Active' },
    { id: 'SP-04', partNo: 'SP-004', partName: 'Starter Motor Solenoid Switch', unitRate: 1800, remarks: '12V 2.8kW waterproof heavy starter drive', status: 'Active' },
    { id: 'SP-05', partNo: 'SP-005', partName: 'PTO Clutch Friction Plate Set', unitRate: 2300, remarks: 'Cerametallic dual stage PTO disc', status: 'Active' },
    { id: 'SP-06', partNo: 'SP-006', partName: 'Coolant Expansion Tank Cap & Neck', unitRate: 950, remarks: '1.1 bar pressurized composite reservoir assembly', status: 'Active' }
  ];

  // Default Job Codes (Services) Master Repository
  private jobCodesList: JobCodeMasterItem[] = [
    { id: 'JB-01', jobCode: 'SRV-001', serviceName: 'Brake System Inspection and Calibration', description: 'Complete dynamic brake torque & caliper line bleed verification', unitRate: 850, status: 'Active' },
    { id: 'JB-02', jobCode: 'SRV-002', serviceName: 'Hydraulic Pressure Telemetry & Leak Test', description: 'Flow meter transducer check and relief valve pressure calibration', unitRate: 1200, status: 'Active' },
    { id: 'JB-03', jobCode: 'SRV-003', serviceName: 'ECU Firmware & Fuel Map Re-flash', description: 'Diagnostic scan tool connection and stage 2 calibration flash', unitRate: 950, status: 'Active' },
    { id: 'JB-04', jobCode: 'SRV-004', serviceName: 'Differential Lock & Axle Alignment', description: '4WD front hub backlash and differential lash measurement', unitRate: 1500, status: 'Active' },
    { id: 'JB-05', jobCode: 'SRV-005', serviceName: 'Field Emergency Dispatch & Diagnostic Labor', description: 'On-site breakdown troubleshooting & teardown inspection', unitRate: 2000, status: 'Active' }
  ];

  private sparesSubject = new BehaviorSubject<SparePartMasterItem[]>(this.sparesList);
  private jobCodesSubject = new BehaviorSubject<JobCodeMasterItem[]>(this.jobCodesList);

  getSpareParts(): Observable<SparePartMasterItem[]> {
    return this.sparesSubject.asObservable();
  }

  getSparePartsSync(): SparePartMasterItem[] {
    return [...this.sparesList];
  }

  addSparePart(item: Omit<SparePartMasterItem, 'id'>): void {
    const newItem: SparePartMasterItem = {
      ...item,
      id: 'SP-' + (this.sparesList.length + 1).toString().padStart(2, '0')
    };
    this.sparesList.unshift(newItem);
    this.sparesSubject.next([...this.sparesList]);
  }

  updateSparePart(id: string, updated: Partial<SparePartMasterItem>): void {
    const idx = this.sparesList.findIndex(s => s.id === id || s.partNo === updated.partNo);
    if (idx !== -1) {
      this.sparesList[idx] = { ...this.sparesList[idx], ...updated };
      this.sparesSubject.next([...this.sparesList]);
    }
  }

  deleteSparePart(id: string): void {
    this.sparesList = this.sparesList.filter(s => s.id !== id);
    this.sparesSubject.next([...this.sparesList]);
  }

  getJobCodes(): Observable<JobCodeMasterItem[]> {
    return this.jobCodesSubject.asObservable();
  }

  getJobCodesSync(): JobCodeMasterItem[] {
    return [...this.jobCodesList];
  }

  addJobCode(item: Omit<JobCodeMasterItem, 'id'>): void {
    const newItem: JobCodeMasterItem = {
      ...item,
      id: 'JB-' + (this.jobCodesList.length + 1).toString().padStart(2, '0')
    };
    this.jobCodesList.unshift(newItem);
    this.jobCodesSubject.next([...this.jobCodesList]);
  }

  updateJobCode(id: string, updated: Partial<JobCodeMasterItem>): void {
    const idx = this.jobCodesList.findIndex(j => j.id === id || j.jobCode === updated.jobCode);
    if (idx !== -1) {
      this.jobCodesList[idx] = { ...this.jobCodesList[idx], ...updated };
      this.jobCodesSubject.next([...this.jobCodesList]);
    }
  }

  deleteJobCode(id: string): void {
    this.jobCodesList = this.jobCodesList.filter(j => j.id !== id);
    this.jobCodesSubject.next([...this.jobCodesList]);
  }
}
