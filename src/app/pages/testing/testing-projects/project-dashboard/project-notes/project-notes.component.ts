import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UploadDocumentComponent } from './upload-document/upload-document.component';

export interface NoteData {
  actions: string;
  date: string;
  postedBy: string;
  message: string;
  document: string;
  tags: string;
}

const ELEMENT_DATA: NoteData[] = []; // Empty array to trigger the "No data available" state

@Component({
  selector: 'app-project-notes',
  templateUrl: './project-notes.component.html',
  styleUrls: ['./project-notes.component.scss']
})
export class ProjectNotesComponent implements OnInit {

  displayedColumns: string[] = ['actions', 'date', 'postedBy', 'message', 'document', 'tags'];
  dataSource = ELEMENT_DATA;
  
  // Sample tags for the dropdown
  availableTags: string[] = ['Side View', 'Face View', 'Demerit','Process Stage'];

  constructor(private location :Location, private dialog:MatDialog) { }

  ngOnInit(): void {
  }


  
  goBack(): void {
    this.location.back();
  }

  uploaddoc(value: any) {
    this.dialog.open(UploadDocumentComponent, {
      data: value,
      height: 'auto',
      width: '500px',
    });
  }


}