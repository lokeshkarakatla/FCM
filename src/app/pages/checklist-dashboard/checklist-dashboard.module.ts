import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MetricCheckComponent } from './metric-check/metric-check.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChecklistDashboardComponent } from './checklist-dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuditLogComponent } from './audit-log/audit-log.component';
import { NotesComponent } from './notes/notes.component';
import { AddNotesComponent } from './notes/add-notes/add-notes.component';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { AddChecklistLineitemComponent } from './audit-log/add-checklist-lineitem/add-checklist-lineitem.component';
import { AddTableNotesComponent } from './audit-log/add-table-notes/add-table-notes.component';
import { ImageDisplayComponent } from './audit-log/image-display/image-display.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { RequestTypeComponent } from './audit-log/request-type/request-type.component';

export const routes = [
  { path: '', redirectTo: "issuelog", pathMatch: "full" },
  { path: 'issuelog', component: AuditLogComponent, data: { breadcrumb: 'Sub Audits(AuditStatus/Demerit/Issuelog)', description: 'This page is used to  Issues log' } },
  // {path:'analytics',component:AnalyticsComponent,data:{breadcrumb:'Checklist Issuelog'}},
  // {path:'overview',component:OverviewComponent,data:{breadcrumb:'Checklist Issuelog'}},
  { path: 'notes', component: NotesComponent, data: { breadcrumb: 'Sub Audits(AuditStatus/Demerit/Notes)', description: 'This page is used to  Note' } },
  {
    path: "metricckeck",
    component: MetricCheckComponent,
    loadChildren: () =>
      import("./metric-check/metric-check.module").then((m) => m.MetricCheckModule),
    data: { breadcrumb: 'Metrics', description: 'This page is used to  metrics' }
  },

];

@NgModule({
  declarations: [
    ChecklistDashboardComponent,
    AuditLogComponent,
    NotesComponent,
    AddNotesComponent,
    AddChecklistLineitemComponent,
    AddTableNotesComponent,
    ImageDisplayComponent,
    RequestTypeComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MglTimelineModule,
    SharedModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSliderModule,
  ]
})
export class ChecklistDashboardModule { }
