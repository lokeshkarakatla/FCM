import { BreadcrumbComponent } from './../../theme/components/breadcrumb/breadcrumb.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { ComplaintsComponent } from './complaints.component';
import { AddComplaintComponent } from './add-complaint/add-complaint.component';
import { AttendanceComponent } from '../attendance/attendance.component';
import { CapaComponent } from '../capa/capa.component';
import { MeetingComponent } from '../meeting/meeting.component';
import { RadarComplaintComponent } from './radar-complaint/radar-complaint.component';
import { KanbanComponent } from './kanban/kanban.component';
import { DragDropModule } from '@angular/cdk/drag-drop';



const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'complaintsdashboard', component: ComplaintsComponent }, // your current main table
      { path: 'add-complaints', component: AddComplaintComponent },
      { path: 'capa', component: CapaComponent },
      { path: 'kanban', component: KanbanComponent },
      { path: 'attendance', component: AttendanceComponent },
      { path: 'meeting', component: MeetingComponent },
      { path: '', redirectTo: 'complaintsdashboard', pathMatch: 'full' },
      { path: 'radar-complaints', component: RadarComplaintComponent },
    ]
  }
];



@NgModule({
  declarations: [


    RadarComplaintComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
    DragDropModule,

  ]
})
export class ComplaintsNewModule { }
