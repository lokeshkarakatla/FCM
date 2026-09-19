import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-obj-image-dialog',
  templateUrl: './obj-image-dialog.component.html',
  styleUrls: ['./obj-image-dialog.component.scss']
})
export class ObjImageDialogComponent implements OnInit {

  ImageObj: any; // Holds the structured object passed from parent
  uploadedImageSrc: string | ArrayBuffer | null = null;
  file: File | null = null;

  // Set the 11x8 grid layout
  gridRows = Array(8).fill(0);
  gridCols = Array(11).fill(0);
  
  // Track dynamically clicked cells using a "row-col" string key
  selectedCells: string[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ObjImageDialogComponent>
  ) { }

  ngOnInit(): void {
    this.ImageObj = this.data?.image;
  }

  close() {
    this.dialogRef.close();
  }

  // Pre-loaded highlighted cells logic
  getCellData(rowIndex: number, colIndex: number) {
    if (!this.ImageObj || !this.ImageObj.highlightedCells) return null;
    return this.ImageObj.highlightedCells.find(
      (cell: any) => cell.row === rowIndex && cell.col === colIndex
    );
  }

  // Interactive selection logic
  selectCell(rowIndex: number, colIndex: number) {
    const key = `${rowIndex}-${colIndex}`;
    if (this.selectedCells.includes(key)) {
      this.selectedCells = this.selectedCells.filter(x => x !== key);
    } else {
      this.selectedCells.push(key);
    }
  }

  // Check if cell was clicked interactively
  isCellSelected(rowIndex: number, colIndex: number): boolean {
    return this.selectedCells.includes(`${rowIndex}-${colIndex}`);
  }

  // File Drag & Drop Logic
  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer?.files.length) {
      this.handleFile(event.dataTransfer.files[0]);
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.handleFile(input.files[0]);
    }
  }

  handleFile(file: File) {
    this.file = file;
    const reader = new FileReader();

    reader.onload = () => {
      this.uploadedImageSrc = reader.result;
    };

    reader.readAsDataURL(file);
  }

  save() {
    if (!this.file) {
      alert('Please upload a file before saving.');
      return;
    }
    console.log('Saving file:', this.file.name);
  }


  isPreHighlighted(rowIndex: number, colIndex: number): boolean {
    if (!this.ImageObj || !this.ImageObj.highlightedCells) return false;
    
    // Check if the current row and col exist in the parent's highlightedCells array
    return this.ImageObj.highlightedCells.some(
      (cell: any) => cell.row === rowIndex && cell.col === colIndex
    );
  }
}