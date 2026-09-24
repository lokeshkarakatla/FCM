import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { AddVerificationChecklistComponent } from './add-verification-checklist/add-verification-checklist.component';
import {
  VerificationChecklistItem,
  VerificationMethod,
  VerificationMasterService
} from '../verification-master.service';

@Component({
  selector: 'app-m-verification-checklist',
  templateUrl: './m-verification-checklist.component.html',
  styleUrls: ['./m-verification-checklist.component.scss']
})
export class MVerificationChecklistComponent implements OnInit, OnDestroy {
  filterToggle: boolean = false;
  searchKeyword: string = '';
  selectedMethodFilter: string = 'all';
  statusFilter: string = 'all';

  methods: VerificationMethod[] = [];
  allChecklists: VerificationChecklistItem[] = [];
  filteredList: VerificationChecklistItem[] = [];
  paginatedList: VerificationChecklistItem[] = [];

  pageSize: number = 5;
  pageIndex: number = 0;

  private sub: Subscription = new Subscription();

  constructor(
    private dialog: MatDialog,
    private verificationService: VerificationMasterService
  ) {}

  ngOnInit(): void {
    this.sub.add(
      this.verificationService.methods$.subscribe((methods: VerificationMethod[]) => {
        this.methods = methods;
      })
    );

    this.sub.add(
      this.verificationService.checklists$.subscribe((items: VerificationChecklistItem[]) => {
        this.allChecklists = items;
        this.applyFilter();
      })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onMethodSelectorChange(): void {
    this.applyFilter();
  }

  applyFilter(): void {
    const keyword = this.searchKeyword.toLowerCase().trim();
    this.filteredList = this.allChecklists.filter(item => {
      const matchKeyword =
        !keyword ||
        item.item.toLowerCase().includes(keyword) ||
        item.methodName.toLowerCase().includes(keyword);

      const matchMethod =
        this.selectedMethodFilter === 'all' || item.methodId === this.selectedMethodFilter;

      const matchStatus =
        this.statusFilter === 'all' ||
        (this.statusFilter === 'active' && item.status) ||
        (this.statusFilter === 'inactive' && !item.status);

      return matchKeyword && matchMethod && matchStatus;
    });

    this.pageIndex = 0;
    this.updatePagination();
  }

  clearFilter(): void {
    this.searchKeyword = '';
    this.selectedMethodFilter = 'all';
    this.statusFilter = 'all';
    this.applyFilter();
  }

  updatePagination(): void {
    const start = this.pageIndex * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedList = this.filteredList.slice(start, end);
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePagination();
  }

  toggleStatus(item: VerificationChecklistItem): void {
    this.verificationService.toggleChecklistStatus(item.id);
  }

  openAddEditDialog(item: VerificationChecklistItem | null): void {
    const dialogRef = this.dialog.open(AddVerificationChecklistComponent, {
      data: {
        item: item,
        defaultMethodId: this.selectedMethodFilter !== 'all' ? this.selectedMethodFilter : undefined
      },
      width: '600px',
      autoFocus: true
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.applyFilter();
      }
    });
  }

  deleteItem(item: VerificationChecklistItem): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '450px',
      data: {
        title: 'Delete Checklist Item',
        content: `Are you sure you want to remove this checklist item from "${item.methodName}"?`
      }
    });

    dialogRef.afterClosed().subscribe((res: any) => {
      if (res) {
        this.verificationService.deleteChecklistItem(item.id);
      }
    });
  }

  downloadCSV(): void {
    const headers = ['Verification Method', 'Checklist Item Description', 'Status'];
    const rows = this.filteredList.map(item => [
      `"${item.methodName.replace(/"/g, '""')}"`,
      `"${item.item.replace(/"/g, '""')}"`,
      item.status ? 'Active' : 'Inactive'
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'verification_checklist.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  uploadCSV(): void {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.csv';
    input.onchange = (e: any) => {
      const file = e.target.files[0];
      if (file) {
        alert(`File "${file.name}" selected for upload.`);
      }
    };
    input.click();
  }
}
