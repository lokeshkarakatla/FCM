import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-audit',
  templateUrl: './new-audit.component.html',
  styleUrls: ['./new-audit.component.scss']
})
export class NewAuditComponent implements OnInit {

  isEditMode: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<NewAuditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.isEditMode = this.data === 1;
  }

  close(): void {
    this.dialogRef.close();
  }

  selectedFiles: File[] = [];

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) this.addFiles(input.files);
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    (event.currentTarget as HTMLElement).style.borderColor = '#3b82f6';
  }

  onDragLeave(event: DragEvent): void {
    (event.currentTarget as HTMLElement).style.borderColor = '#b5b5b5';
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    (event.currentTarget as HTMLElement).style.borderColor = '#b5b5b5';

    if (event.dataTransfer?.files) {
      this.addFiles(event.dataTransfer.files);
    }
  }

  addFiles(files: FileList): void {
    Array.from(files).forEach(f => {
      if (!this.selectedFiles.find(x => x.name === f.name)) {
        this.selectedFiles.push(f);
      }
    });
  }

  removeFile(index: number): void {
    this.selectedFiles.splice(index, 1);
  }

}