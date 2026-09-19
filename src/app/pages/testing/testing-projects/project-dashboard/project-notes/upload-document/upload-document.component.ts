import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.scss']
})
export class UploadDocumentComponent implements OnInit {
closeDialog() {
throw new Error('Method not implemented.');
}
// Reference to the hidden file input in the template
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  
  selectedFile: File | null = null;

  constructor(public dialogRef: MatDialogRef<UploadDocumentComponent>) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // Triggers the native file selector
  onBrowseClick(): void {
    this.fileInput.nativeElement.click();
  }

  // Handles the file once the user selects it
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onUpdate(): void {
    // Closes the dialog and passes the selected file back to the parent component
    this.dialogRef.close(this.selectedFile);
  }

}
