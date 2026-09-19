import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface NextReviewData {
  ref: string;
  subject: string;
  currentReviewDate?: string;
}

@Component({
  selector: 'app-next-review-dialog',
  templateUrl: './next-review-dialog.component.html',
  styleUrls: ['./next-review-dialog.component.scss']
})
export class NextReviewDialogComponent implements OnInit {

  selectedOption: string = '1 Week';
  nextReviewDate: string = '';
  isCustom: boolean = false;

  timeframeOptions = [
    [
      { label: '1 Day', days: 1 },
      { label: '2 Days', days: 2 },
      { label: '3 Days', days: 3 },
      { label: '4 Days', days: 4 },
      { label: '5 Days', days: 5 }
    ],
    [
      { label: '1 Week', days: 7 },
      { label: '10 Days', days: 10 },
      { label: '2 Weeks', days: 14 },
      { label: '1 Month', days: 30 },
      { label: 'Custom', days: 0 }
    ]
  ];

  constructor(
    public dialogRef: MatDialogRef<NextReviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: NextReviewData
  ) { }

  ngOnInit(): void {
    this.applyOption('1 Week', 7);
  }

  selectOption(option: { label: string, days: number }): void {
    this.selectedOption = option.label;
    if (option.label === 'Custom') {
      this.isCustom = true;
    } else {
      this.isCustom = false;
      this.applyOption(option.label, option.days);
    }
  }

  applyOption(label: string, days: number): void {
    const today = new Date();
    today.setDate(today.getDate() + days);
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    this.nextReviewDate = `${yyyy}-${mm}-${dd}`;
  }

  save(): void {
    this.dialogRef.close({
      selectedOption: this.selectedOption,
      nextReviewDate: this.nextReviewDate,
      reviewed: true
    });
  }

  close(): void {
    this.dialogRef.close(null);
  }
}
