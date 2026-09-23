import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

export interface GridColConfig {
  key: string;
  label: string;
  visible: boolean;
}

@Component({
  selector: 'app-grid-columns-dialog',
  templateUrl: './grid-columns-dialog.component.html',
  styleUrls: ['./grid-columns-dialog.component.scss']
})
export class GridColumnsDialogComponent implements OnInit {

  searchText: string = '';
  availableColumns: GridColConfig[] = [];
  selectedColumns: GridColConfig[] = [];
  freezeCount: number = 0;

  constructor(
    public dialogRef: MatDialogRef<GridColumnsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { columns: GridColConfig[], freezeCount?: number }
  ) {}

  ngOnInit(): void {
    if (this.data && this.data.columns) {
      // Available columns master list
      this.availableColumns = this.data.columns.map(c => ({ ...c }));

      // Selected columns in their active order
      this.selectedColumns = this.data.columns
        .filter(c => c.visible)
        .map(c => ({ ...c }));

      this.freezeCount = typeof this.data.freezeCount === 'number' ? this.data.freezeCount : 0;
      if (this.freezeCount > this.selectedColumns.length) {
        this.freezeCount = this.selectedColumns.length;
      }
    }
  }

  get filteredAvailableColumns(): GridColConfig[] {
    const term = this.searchText.trim().toLowerCase();
    if (!term) return this.availableColumns;
    return this.availableColumns.filter(c => c.label.toLowerCase().includes(term));
  }

  get freezeOptions(): number[] {
    const options: number[] = [];
    const max = this.selectedColumns.length;
    for (let i = 0; i <= max; i++) {
      options.push(i);
    }
    return options;
  }

  isColumnSelected(col: GridColConfig): boolean {
    return this.selectedColumns.some(c => c.key === col.key);
  }

  toggleColumn(col: GridColConfig): void {
    const idx = this.selectedColumns.findIndex(c => c.key === col.key);
    if (idx !== -1) {
      // Deselect
      this.selectedColumns.splice(idx, 1);
      if (this.freezeCount > this.selectedColumns.length) {
        this.freezeCount = this.selectedColumns.length;
      }
    } else {
      // Select
      this.selectedColumns.push({ ...col, visible: true });
    }
  }

  removeSelected(index: number): void {
    this.selectedColumns.splice(index, 1);
    if (this.freezeCount > this.selectedColumns.length) {
      this.freezeCount = this.selectedColumns.length;
    }
  }

  dropSelected(event: CdkDragDrop<GridColConfig[]>): void {
    moveItemInArray(this.selectedColumns, event.previousIndex, event.currentIndex);
  }

  onFreezeCountChange(val: any): void {
    this.freezeCount = Number(val);
  }

  apply(): void {
    // Construct final master columns array:
    // 1. All selectedColumns in their drag-and-drop order with visible: true
    // 2. Any unselected columns from availableColumns with visible: false
    const reordered: GridColConfig[] = this.selectedColumns.map(c => ({ ...c, visible: true }));
    for (const col of this.availableColumns) {
      if (!this.selectedColumns.some(s => s.key === col.key)) {
        reordered.push({ ...col, visible: false });
      }
    }

    this.dialogRef.close({
      columns: reordered,
      freezeCount: this.freezeCount
    });
  }

  cancel(): void {
    this.dialogRef.close(null);
  }
}
