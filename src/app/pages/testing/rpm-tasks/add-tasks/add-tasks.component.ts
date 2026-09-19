import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.scss']
})
export class AddTasksComponent implements OnInit {

 constructor(public dialogRef: MatDialogRef<AddTasksComponent>) { }
 
   ngOnInit(): void {
   }
 
   close(): void {
     this.dialogRef.close();
   }

   onFileSelected(event: Event): void {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    const file = input.files[0];
    // handle the file
    console.log('Selected file:', file);
  }
}

activeStep: number = 1;

}
