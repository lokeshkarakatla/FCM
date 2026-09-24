import { Component, OnInit } from '@angular/core';
import { WarrantyMasterService, SparePartMasterItem, JobCodeMasterItem } from './warranty-master.service';

@Component({
  selector: 'app-masterdata',
  templateUrl: './masterdata.component.html',
  styleUrls: ['./masterdata.component.scss']
})
export class MasterdataComponent implements OnInit {

  tabs = [
    'Verification Methods', 'Verification Checklist',
    'Spare Parts', 'Job Codes',
    'Models', 'Variants', 'Plant', 'Color', 'Transmission',
    'Fuel Type', 'Stages', 'Engine Type', 'Drive Type', 'Drive Grade', 'Vehicle Type'
  ];

  activeTab: string = 'Verification Methods';

  // Spare Parts Master State
  sparesList: SparePartMasterItem[] = [];
  filteredSpares: SparePartMasterItem[] = [];
  spareKeyword: string = '';
  spareStatusFilter: string = 'all';
  spareFilterToggle: boolean = false;

  // Job Codes Master State
  jobCodesList: JobCodeMasterItem[] = [];
  filteredJobCodes: JobCodeMasterItem[] = [];
  jobKeyword: string = '';
  jobStatusFilter: string = 'all';
  jobFilterToggle: boolean = false;

  // Models Placeholder Data
  modelsData = [
    { name: 'Fortuner', code: ')', status: 'Inactive' },
    { name: 'Toyota LandCruiser', code: '+', status: 'Inactive' },
    { name: 'Toyota Fortuner', code: '!', status: 'Inactive' },
    { name: 'Defender 310', code: '#', status: 'Inactive' },
    { name: 'Corvette', code: 'w', status: 'Inactive' },
    { name: 'Toyota Camry', code: 'b', status: 'Inactive' },
    { name: 'Hyundai', code: 'h', status: 'Inactive' },
    { name: 'Ferrari', code: 'u', status: 'Inactive' },
    { name: 'Lamborghini', code: 's', status: 'Inactive' }
  ];

  constructor(private warrantyMasterService: WarrantyMasterService) { }

  ngOnInit(): void {
    this.loadSpares();
    this.loadJobCodes();
  }

  selectTab(tab: string) {
    this.activeTab = tab;
  }

  // --- Spare Parts Master Methods ---
  loadSpares(): void {
    this.warrantyMasterService.getSpareParts().subscribe(data => {
      this.sparesList = data;
      this.applySpareFilter();
    });
  }

  applySpareFilter(): void {
    const kw = (this.spareKeyword || '').toLowerCase().trim();
    this.filteredSpares = this.sparesList.filter(s => {
      const matchKw = !kw || s.partNo.toLowerCase().includes(kw) || s.partName.toLowerCase().includes(kw) || (s.remarks && s.remarks.toLowerCase().includes(kw));
      const matchSt = this.spareStatusFilter === 'all' || s.status.toLowerCase() === this.spareStatusFilter.toLowerCase();
      return matchKw && matchSt;
    });
  }

  clearSpareFilter(): void {
    this.spareKeyword = '';
    this.spareStatusFilter = 'all';
    this.applySpareFilter();
  }

  addSparePrompt(): void {
    const partNo = prompt('Enter Spare Part Code (e.g. SP-007):');
    if (!partNo) return;
    const partName = prompt('Enter Spare Part Name:');
    if (!partName) return;
    const rateStr = prompt('Enter Unit Rate (₹):', '500');
    const unitRate = parseFloat(rateStr || '0') || 0;
    const remarks = prompt('Enter Remarks / Description:', '') || '';
    this.warrantyMasterService.addSparePart({
      partNo,
      partName,
      unitRate,
      remarks,
      status: 'Active'
    });
  }

  editSparePrompt(item: SparePartMasterItem): void {
    const partName = prompt('Update Part Name:', item.partName);
    if (!partName) return;
    const rateStr = prompt('Update Unit Rate (₹):', item.unitRate.toString());
    const unitRate = parseFloat(rateStr || '0') || item.unitRate;
    const remarks = prompt('Update Remarks:', item.remarks) || '';
    this.warrantyMasterService.updateSparePart(item.id, { partName, unitRate, remarks });
  }

  deleteSpare(id: string): void {
    if (confirm('Are you sure you want to delete this Spare Part?')) {
      this.warrantyMasterService.deleteSparePart(id);
    }
  }

  // --- Job Codes Master Methods ---
  loadJobCodes(): void {
    this.warrantyMasterService.getJobCodes().subscribe(data => {
      this.jobCodesList = data;
      this.applyJobFilter();
    });
  }

  applyJobFilter(): void {
    const kw = (this.jobKeyword || '').toLowerCase().trim();
    this.filteredJobCodes = this.jobCodesList.filter(j => {
      const matchKw = !kw || j.jobCode.toLowerCase().includes(kw) || j.serviceName.toLowerCase().includes(kw) || (j.description && j.description.toLowerCase().includes(kw));
      const matchSt = this.jobStatusFilter === 'all' || j.status.toLowerCase() === this.jobStatusFilter.toLowerCase();
      return matchKw && matchSt;
    });
  }

  clearJobFilter(): void {
    this.jobKeyword = '';
    this.jobStatusFilter = 'all';
    this.applyJobFilter();
  }

  addJobPrompt(): void {
    const jobCode = prompt('Enter Job Code (e.g. SRV-006):');
    if (!jobCode) return;
    const serviceName = prompt('Enter Service / Operation Name:');
    if (!serviceName) return;
    const rateStr = prompt('Enter Standard Labor Unit Rate (₹):', '900');
    const unitRate = parseFloat(rateStr || '0') || 0;
    const description = prompt('Enter Description:', '') || '';
    this.warrantyMasterService.addJobCode({
      jobCode,
      serviceName,
      description,
      unitRate,
      status: 'Active'
    });
  }

  editJobPrompt(item: JobCodeMasterItem): void {
    const serviceName = prompt('Update Service Name:', item.serviceName);
    if (!serviceName) return;
    const description = prompt('Update Description:', item.description) || '';
    const rateStr = prompt('Update Unit Rate (₹):', item.unitRate.toString());
    const unitRate = parseFloat(rateStr || '0') || item.unitRate;
    this.warrantyMasterService.updateJobCode(item.id, { serviceName, description, unitRate });
  }

  deleteJobCode(id: string): void {
    if (confirm('Are you sure you want to delete this Job Code?')) {
      this.warrantyMasterService.deleteJobCode(id);
    }
  }
}
