import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'question-pop.component',
  templateUrl: './question-pop.component.html',
  styleUrls: ['./question-pop.component.scss']
})


export class QuestionPopComponent implements OnInit {

  isEditMode: boolean = false;
  questionText: string = '';
  isMandatory: boolean = false;
  isPriority: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<QuestionPopComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    // Check if we passed the edit flag from the parent
    this.isEditMode = this.data?.isEdit;

    // If editing, populate the fields with the existing item data
    if (this.isEditMode && this.data.item) {
      this.questionText = this.data.item.question;
      this.isMandatory = this.data.item.mandatory === 'Yes';

      // Your mock data uses 'High' for priority, but the checkbox expects a boolean
      this.isPriority = this.data.item.priority === 'High' || this.data.item.priority === true;
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    const result = {
      question: this.questionText,
      mandatory: this.isMandatory ? 'Yes' : 'No',
      priority: this.isPriority ? 'High' : 'Normal'
    };

    this.dialogRef.close(result);
  }
}  