import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-defect-master-issue-dialog',
  templateUrl: './defect-master-issue-dialog.component.html',
  styleUrls: ['./defect-master-issue-dialog.component.scss']
})
export class DefectMasterIssueDialogComponent implements OnInit {

  // This array will hold the data for our dynamic textboxes
  // It starts with one empty textbox by default.
  public issues: any[] = [{ description: '' }];

  constructor(
    public dialogRef: MatDialogRef<DefectMasterIssueDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    // We can leave this empty or use it for initialization if needed
    
  }

  /**
   * Adds a new, empty textbox field to the UI.
   */
  addIssueField(): void {
    this.issues.push({ description: '' });
  }

  /**
   * Removes a specific textbox field from the UI.
   * @param index The index of the item to remove from the issues array.
   */
  removeIssueField(index: number): void {
    // Prevents removing the very last textbox
    if (this.issues.length > 1) {
      this.issues.splice(index, 1);
    }
  }

  /**
   * Closes the dialog.
   */
  close(): void {
    this.dialogRef.close();
  }

  /**
   * You can use this function to get the final list of issues
   * when you want to save the data.
   */
  saveIssues(): void {
    // Filters out any empty issue descriptions before closing
    const finalIssues = this.issues
      .map(issue => issue.description)
      .filter(description => description.trim() !== '');

    console.log('Issues to be saved:', finalIssues);
    // You can pass the data back when closing the dialog
    // this.dialogRef.close(finalIssues);
  }
}