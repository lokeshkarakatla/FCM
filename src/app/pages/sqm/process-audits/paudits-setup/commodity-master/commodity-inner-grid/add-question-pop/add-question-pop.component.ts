import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-question-pop',
  templateUrl: './add-question-pop.component.html',
  styleUrls: ['./add-question-pop.component.scss']
})
export class AddQuestionPopComponent implements OnInit {
  
  questionText: string = '';
  guidelineText: string = '';
  isMandatory: boolean = false;
  isPriority: boolean = false;
  isEditMode: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<AddQuestionPopComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    // Check if the dialog was opened in edit mode
    this.isEditMode = this.data?.isEdit;

    // If editing, populate the fields with the existing item data
    if (this.isEditMode && this.data?.item) {
      this.questionText = this.data.item.question || '';
      this.guidelineText = this.data.item.guideline || ''; 
      this.isMandatory = this.data.item.mandatory === 'Yes';
      
      // Handles boolean or string mapping depending on your parent grid's data
      this.isPriority = this.data.item.priority === 'High' || this.data.item.priority === true;
    }
  }

  onCancel(): void {
    // Closes the dialog without returning data
    this.dialogRef.close();
  }

  onSave(): void {
    // Bundle all the data, including the new guideline field, and pass it back
    const result = {
      question: this.questionText,
      guideline: this.guidelineText,
      mandatory: this.isMandatory ? 'Yes' : 'No', 
      priority: this.isPriority ? 'High' : 'Normal' 
    };
    
    this.dialogRef.close(result);
  }
}