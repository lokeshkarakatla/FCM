import { ParMetricComponent } from './par-metric/par-metric.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParameterDashboardComponent } from './parameter-dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ParAuditlogComponent } from './par-auditlog/par-auditlog.component';
import { ParNotesComponent } from './par-notes/par-notes.component';
import { AddParnotesComponent } from './par-notes/add-parnotes/add-parnotes.component';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { PopEditImageComponent } from './par-auditlog/pop-edit-image/pop-edit-image.component';
import { AddNotesTableComponent } from './par-auditlog/add-notes-table/add-notes-table.component';
import { AddParameterLineitemComponent } from './par-auditlog/add-parameter-lineitem/add-parameter-lineitem.component';
import { LogissueInnerFormComponent } from './par-auditlog/logissue-inner-form/logissue-inner-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';

export const routes = [
  { path: '', redirectTo: "par-auditlog", pathMatch: "full" },
  { path: 'notes-par', component: ParNotesComponent, data: { breadcrumb: 'Obj Audits(AuditStatus/Checkpoints/Notes)', description: 'This page is used to  notes' } },
  { path: 'inner-form', component: LogissueInnerFormComponent, data: { breadcrumb: 'Parameter Issuelog' } },
  // {path:'overview-par',component:ParOverviewComponent,data:{breadcrumb:'Parameter Issuelog'}},
  {
    path: "metricpara",
    component: ParMetricComponent,
    loadChildren: () =>
      import("./par-metric/par-metric.module").then((m) => m.ParMetricModule),
    data: { breadcrumb: ' Metrics', description: 'This page is used to  metric' }
  },
  {
    path: "par-auditlog",
    component: ParAuditlogComponent,
    loadChildren: () =>
      import("./par-auditlog/par-auditlog.module").then((m) => m.ParAuditlogModule),
    data: { breadcrumb: ' Issue Log', description: 'This page is used to  metric' }
  },
];

@NgModule({
  declarations: [
    ParameterDashboardComponent,
    ParAuditlogComponent,
    ParNotesComponent,
    AddParnotesComponent,
    PopEditImageComponent,
    AddNotesTableComponent,
    AddParameterLineitemComponent,
    LogissueInnerFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
    SharedModule, MglTimelineModule
  ]
})
export class ParameterDashboardModule { }
