import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { JobCodeMasterItem, WarrantyMasterService } from '../warranty-master.service';
import { AddJobCodeComponent } from './add-job-code/add-job-code.component';

@Component({
  selector: 'app-m-job-codes',
  templateUrl: './m-job-codes.component.html',
  styleUrls: ['./m-job-codes.component.scss']
})
export class MJobCodesComponent implements OnInit, OnDestroy {
  filterToggle: boolean = false;
  searchKeyword: string = '';
  statusFilter: string = 'all';

  allJobs: JobCodeMasterItem[] = [];
  filteredList: JobCodeMasterItem[] = [];
  paginatedList: JobCodeMasterItem[] = [];

  pageSize: number = 10;
  pageIndex: number = 0;

  private sub!: Subscription;

  constructor(
    private warrantyService: WarrantyMasterService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.sub = this.warrantyService.getJobCodes().subscribe(data => {
      this.allJobs = data || [];
      this.applyFilter();
    });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  applyFilter(): void {
    let result = [...this.allJobs];

    if (this.searchKeyword && this.searchKeyword.trim() !== '') {
      const q = this.searchKeyword.toLowerCase().trim();
      result = result.filter(item =>
        item.jobCode.toLowerCase().includes(q) ||
        item.serviceName.toLowerCase().includes(q) ||
        (item.description && item.description.toLowerCase().includes(q))
      );
    }

    if (this.statusFilter !== 'all') {
      result = result.filter(item =>
        this.statusFilter === 'active' ? item.status === 'Active' : item.status === 'Inactive'
      );
    }

    this.filteredList = result;
    this.pageIndex = 0;
    this.updatePagination();
  }

  clearFilter(): void {
    this.searchKeyword = '';
    this.statusFilter = 'all';
    this.applyFilter();
  }

  updatePagination(): void {
    const start = this.pageIndex * this.pageSize;
    this.paginatedList = this.filteredList.slice(start, start + this.pageSize);
  }

  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.updatePagination();
  }

  openAddEditDialog(item: JobCodeMasterItem | null): void {
    const ref = this.dialog.open(AddJobCodeComponent, {
      width: '600px',
      data: item ? { ...item } : null
    });
    ref.afterClosed().subscribe(res => {
      if (res) {
        this.applyFilter();
      }
    });
  }

  toggleStatus(item: JobCodeMasterItem): void {
    const newStatus = item.status === 'Active' ? 'Inactive' : 'Active';
    this.warrantyService.updateJobCode(item.id, { status: newStatus });
  }

  deleteJob(item: JobCodeMasterItem): void {
    if (confirm(`Are you sure you want to delete job code "${item.jobCode} - ${item.serviceName}"?`)) {
      this.warrantyService.deleteJobCode(item.id);
    }
  }
}
