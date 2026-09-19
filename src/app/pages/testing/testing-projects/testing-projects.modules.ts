import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material Modules (Import the ones specifically needed by these components)
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { DragDropModule } from '@angular/cdk/drag-drop';

// Components inside testing-projects folder
import { TestingProjectsComponent } from './testing-projects.component';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';
import { AddProjectsComponent } from './add-projects/add-projects.component';
import { AddProjectSectionComponent } from './add-project-section/add-project-section.component';
import { FreezepanesDialogComponent } from './freezepanes-dialog/freezepanes-dialog.component';

// Set up child routes
const routes: Routes = [
  { path: '', component: TestingProjectsComponent }, 
  { 
    path: 'dashboard', 
    loadChildren: () => import('./project-dashboard/project-dashboard.module').then(m => m.ProjectDashboardModule), 
    data: { breadcrumb: 'Dashboard' } 
  } 
];

@NgModule({
  declarations: [
    TestingProjectsComponent,
    // ProjectDashboardComponent,
    AddProjectsComponent,
    AddProjectSectionComponent,
    FreezepanesDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), // Use forChild for feature modules
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    DragDropModule
  ]
})
export class TestingProjectsModule { }