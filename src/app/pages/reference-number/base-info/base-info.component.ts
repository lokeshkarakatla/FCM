import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { StatusConfirmationDialogComponent } from '../../testing/testing-projects/add-projects/status-confirmation-dialog/status-confirmation-dialog.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-base-info',
  templateUrl: './base-info.component.html',
  styleUrls: ['./base-info.component.scss']
})
export class BaseInfoComponent implements OnInit {

  baseInfoFormGroup!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.baseInfoFormGroup = this.fb.group({
      reference: [''],
      subject: [''],
      distributor: [''],
      serialNo: [''],
      customer: [''],
      description: [''],
      country: [''],
      city: [''],
      model: [''],
      departmentHead: [''],
      failureDate: [''],
      complaintDate: [''],
      dueDate: [''],
      severity: ['']
    });
  }

  onSaveAndNext(): void {
    if (this.baseInfoFormGroup.valid) {
      console.log('Form Data:', this.baseInfoFormGroup.value);
      // Navigate to next step or submit
    } else {
      this.baseInfoFormGroup.markAllAsTouched();
    }
  }

  goBack(): void {
    this.router.navigate(['/app/complaints']);
  }

  notes = [
    { date: '24/09/2024', description: 'My car\'s engine has been stalling unexpectedly while driving', status: 'Active' },
    { date: '24/09/2024', description: 'My brakes have been making a loud squeaking noise...', status: 'Active' },
    { date: '24/09/2024', description: 'Transmission in my car seems to slip between gears', status: 'Active' }
  ];

  openNotes(id: any): void {
    const dialogRef = this.dialog.open(AddNotesComponent, {
      data: id,
      height: 'auto',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe((data: any) => {});
  }

  confirmation(item: any): void {
    this.dialog.open(StatusConfirmationDialogComponent, {
      width: 'auto',
      data: { title: 'Change Status', content: 'Are you sure you want to Change the Status?' }
    });
  }

  deleteConfirmation(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: 'auto',
      data: {
        component: null,
        title: 'Delete Confirmation',
        content: 'Are you sure you want to Delete?',
        isConfirmation: true
      }
    });
    dialogRef.afterClosed().subscribe((data: any) => {
      if (data) {
        // handle delete
      }
    });
  }
}