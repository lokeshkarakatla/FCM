//import { SubjectiveAuditDashboardComponent } from './subjective-audit-dashboard/subjective-audit-dashboard.component';
//import { ObjectiveAuditDashboardComponent } from './objective-audit-dashboard/objective-audit-dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DelayedComponent } from '../../prts/delayed/delayed.component';

const routes: Routes = [
  { path: "", redirectTo: "prts-dashboard", pathMatch: "full" },
  // {
  //   path: "objective-audit-dashboard",
  //   component: ObjectiveAuditDashboardComponent,
  //   loadChildren: () =>
  //     import("./objective-audit-dashboard/objective-audit-dashboard.module").then((m) => m.ObjectiveAuditDashboardModule),
  //   data: { breadcrumb: 'Objective Audit Dashboard', description: "Objective Audit Dashboard" }
  // },
  // {
  //   path: "subjective-audit-dashboard",
  //   component: SubjectiveAuditDashboardComponent,
  //   loadChildren: () =>
  //     import("./subjective-audit-dashboard/subjective-audit-dashboard.module").then((m) => m.SubjectiveAuditDashboardModule),
  //   data: { breadcrum: 'Subjective Audit Dashboard', description: "Subjective Audit Dashboard" }
  // }

  {
    path:"delayed",
    component:DelayedComponent,
    data:{breadcrumb:'Delayed'}
  },

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NgxChartsModule,
  ]
})
export class PrtsDashboardModule { }
