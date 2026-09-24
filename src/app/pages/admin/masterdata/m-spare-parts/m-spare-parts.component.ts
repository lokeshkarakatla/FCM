import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { SparePartMasterItem, WarrantyMasterService } from '../warranty-master.service';
import { AddSparePartComponent } from './add-spare-part/add-spare-part.component';

@Component({
  selector: 'app-m-spare-parts',
  templateUrl: './m-spare-parts.component.html',
  styleUrls: ['./m-spare-parts.component.scss']
})
export class MSparePartsComponent implements OnInit, OnDestroy {
  filterToggle: boolean = false;
  searchKeyword: string = '';
  statusFilter: string = 'all';

  allSpares: SparePartMasterItem[] = [];
  filteredList: SparePartMasterItem[] = [];
  paginatedList: SparePartMasterItem[] = [];

  pageSize: number = 10;
  pageIndex: number = 0;

  private sub!: Subscription;

  constructor(
    private warrantyService: WarrantyMasterService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.sub = this.warrantyService.getSpareParts().subscribe(data => {
      this.allSpares = data || [];
      this.applyFilter();
    });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  applyFilter(): void {
    let result = [...this.allSpares];

    if (this.searchKeyword && this.searchKeyword.trim() !== '') {
      const q = this.searchKeyword.toLowerCase().trim();
      result = result.filter(item =>
        item.partNo.toLowerCase().includes(q) ||
        item.partName.toLowerCase().includes(q) ||
        (item.remarks && item.remarks.toLowerCase().includes(q))
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

  openAddEditDialog(item: SparePartMasterItem | null): void {
    const ref = this.dialog.open(AddSparePartComponent, {
      width: '600px',
      data: item ? { ...item } : null
    });
    ref.afterClosed().subscribe(res => {
      if (res) {
        this.applyFilter();
      }
    });
  }

  toggleStatus(item: SparePartMasterItem): void {
    const newStatus = item.status === 'Active' ? 'Inactive' : 'Active';
    this.warrantyService.updateSparePart(item.id, { status: newStatus });
  }

  deletePart(item: SparePartMasterItem): void {
    if (confirm(`Are you sure you want to delete spare part "${item.partNo} - ${item.partName}"?`)) {
      this.warrantyService.deleteSparePart(item.id);
    }
  }
}
