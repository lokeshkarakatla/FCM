import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { AddVerificationMethodComponent } from './add-verification-method/add-verification-method.component';
import { VerificationMethod, VerificationMasterService } from '../verification-master.service';

@Component({
  selector: 'app-m-verification-methods',
  templateUrl: './m-verification-methods.component.html',
  styleUrls: ['./m-verification-methods.component.scss']
})
export class MVerificationMethodsComponent implements OnInit, OnDestroy {
  filterToggle: boolean = false;
  searchKeyword: string = '';
  statusFilter: string = 'all';

  allMethods: VerificationMethod[] = [];
  filteredList: VerificationMethod[] = [];
  paginatedList: VerificationMethod[] = [];

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
        this.allMethods = methods;
        this.applyFilter();
      })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  applyFilter(): void {
    const keyword = this.searchKeyword.toLowerCase().trim();
    this.filteredList = this.allMethods.filter(item => {
      const matchKeyword =
        !keyword ||
        item.name.toLowerCase().includes(keyword) ||
        (item.description && item.description.toLowerCase().includes(keyword));

      const matchStatus =
        this.statusFilter === 'all' ||
        (this.statusFilter === 'active' && item.status) ||
        (this.statusFilter === 'inactive' && !item.status);

      return matchKeyword && matchStatus;
    });

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
    const end = start + this.pageSize;
    this.paginatedList = this.filteredList.slice(start, end);
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePagination();
  }

  toggleStatus(item: VerificationMethod): void {
    this.verificationService.toggleMethodStatus(item.id);
  }

  openAddEditDialog(item: VerificationMethod | null): void {
    const dialogRef = this.dialog.open(AddVerificationMethodComponent, {
      data: item,
      width: '600px',
      autoFocus: true
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.applyFilter();
      }
    });
  }

  deleteMethod(item: VerificationMethod): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '450px',
      data: {
        title: 'Delete Verification Method',
        content: `Are you sure you want to delete "${item.name}"?`
      }
    });

    dialogRef.afterClosed().subscribe((res: any) => {
      if (res) {
        this.verificationService.deleteMethod(item.id);
      }
    });
  }

  downloadCSV(): void {
    const headers = ['Verification Method', 'Description', 'Status'];
    const rows = this.filteredList.map(item => [
      `"${item.name.replace(/"/g, '""')}"`,
      `"${(item.description || '').replace(/"/g, '""')}"`,
      item.status ? 'Active' : 'Inactive'
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'verification_methods.csv');
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
