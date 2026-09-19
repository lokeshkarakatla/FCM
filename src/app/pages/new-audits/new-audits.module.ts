import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NewAuditsComponent } from './new-audits.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ChecklistComponent } from './checklist/checklist.component';
import { ParameterComponent } from './parameter/parameter.component';
import { AddChecklistAuditComponent } from './checklist/add-checklist-audit/add-checklist-audit.component';
import { AddParameterAuditComponent } from './parameter/add-parameter-audit/add-parameter-audit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuditDashboadComponent } from './audit-dashboad/audit-dashboad.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PieChartPopComponent } from './audit-dashboad/pie-chart-pop/pie-chart-pop.component';

const routes: Routes = [
  { path: "", redirectTo: "dashborad", pathMatch: "full" },

  { path: 'checklist', component: ChecklistComponent, data: { breadcrumb: 'Objective Audits', description: 'Parameter based audits can be recorded here for a specific vehicle across a hierarchy of modules, functions and defects.  LSL / USL is available for each defect from the setup screen and is compared with real values to guage adherance.' } },
  { path: 'parameter', component: ParameterComponent, data: { breadcrumb: 'Subjective Audits', description: 'Checklist based audits can be recorded here for a specific vehicle across a hierarchy of Categories  and checkpoints.  Issues are recorded and a demerit indicating the severity of the issue is recorded.  Demerit master varies with audit type.' } },
  // {
  //   path: "subjective-audits",
  //   component: SubjectiveAuditsComponent,
  //   loadChildren: () =>
  //     import("./subjective-audits/subjective-audits.module").then((m) => m.SubjectiveAuditsModule),
  //   data: { breadcrumb: 'Subjective Audits', description: 'This page is used to Objective Setup' }
  // },
  // {
  //   path: "objective-audits",
  //   component: ObjectiveAuditsComponent,
  //   loadChildren: () =>
  //     import("./objective-audits/objective-audits.module").then((m) => m.ObjectiveAuditsModule),
  //   data: { breadcrumb: 'Objective Audits', description: 'This page is used to Objective Setup' }
  // },
  { path: 'dashborad', component: AuditDashboadComponent, data: { breadcrumb: 'Dashboard', description: 'Dash BOard  based audits can be recorded here for a specific vehicle across a hierarchy of Categories  and checkpoints.  Issues are recorded and a demerit indicating the severity of the issue is recorded.  Demerit master varies with audit type.' } },


]

@NgModule({
  declarations: [
    // NewAuditsComponent,
    ChecklistComponent,
    ParameterComponent,
    AddChecklistAuditComponent,
    AddParameterAuditComponent,
    // SubjectiveAuditsComponent,
    // ObjectiveAuditsComponent,
    AuditDashboadComponent,
    PieChartPopComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    SharedModule,
    MatDialogModule,
    MatPaginatorModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
    SharedModule,
    FlexLayoutModule,
    NgxChartsModule,

  ]
})
export class NewAuditsModule { }
