import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-paudits-help-desk',
  templateUrl: './paudits-help-desk.component.html',
  styleUrls: ['./paudits-help-desk.component.scss']
})
export class PauditsHelpDeskComponent implements OnInit {

  subject: string = '';
  description: string = '';

  constructor(private dialogRef: MatDialogRef<PauditsHelpDeskComponent>) { }

  ngOnInit(): void { }

  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    if (!this.subject.trim()) {
      alert('Please enter a subject.');
      return;
    }

    const auditData = {
      subject: this.subject.trim(),
      description: this.description.trim()
    };

    this.dialogRef.close(auditData);
  }

}