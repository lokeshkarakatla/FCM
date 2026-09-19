import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardModelComponent } from './dashboard-model/dashboard-model.component';
import { DashboardAgencyComponent } from './dashboard-agency/dashboard-agency.component';


const routes: Routes = [
  { path: "", redirectTo: "dashboard-model", pathMatch: "full" },
  {
    path: "dashboard-model",
    component: DashboardModelComponent,
    loadChildren: () =>
      import("./dashboard-model/dashboard-model.module").then((m) => m.DashboardModelModule),
    data: { breadcrumb: 'Model', description: "Objective Audit Dashboard" }
  },
  {
    path: "dashboard-agency",
    component: DashboardAgencyComponent,
    loadChildren: () =>
      import("./dashboard-agency/dashboard-agency.module").then((m) => m.DashboardAgencyModule),
    data: { breadcrumb: 'Agency', description: "Objective Audit Dashboard" }
  },
];

@NgModule({
  declarations: [
    DashboardModelComponent,
    DashboardAgencyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NgxChartsModule,
    SharedModule,
  ]
})
export class SubjectiveDashboardModule { }
