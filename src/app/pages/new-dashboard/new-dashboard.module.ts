import { RepeatedIssuesComponent } from './repeated-issues/repeated-issues.component';
import { QualityAuditComponent } from './quality-audit/quality-audit.component';
import { OverviewComponent } from './overview/overview.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewDashboardComponent } from './new-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';

const routes: Routes = [
  { path: "", redirectTo: "overview", pathMatch: "full" },
  {
    path: "overview",
    component: OverviewComponent,
    loadChildren: () =>
      import("./overview/overview.module").then((m) => m.OverviewModule),
    data: { breadcrumb: 'Overview', description: 'This page is used to manage User' }
  },
  {
    path: "quality-audit",
    component: QualityAuditComponent,
    loadChildren: () =>
      import("./quality-audit/quality-audit.module").then((m) => m.QualityAuditModule),
    data: { breadcrumb: 'Quality-Audit', description: 'This page is used to manage User' }
  },
  {
    path: "repeated-issues",
    component: RepeatedIssuesComponent,
    loadChildren: () =>
      import("./repeated-issues/repeated-issues.module").then((m) => m.RepeatedIssuesModule),
    data: { breadcrumb: 'Repeated-Issues', description: 'This page is used to manage User' }
  },
]

@NgModule({
  declarations: [
    NewDashboardComponent
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
    SharedModule,
  ]
})
export class NewDashboardModule { }
