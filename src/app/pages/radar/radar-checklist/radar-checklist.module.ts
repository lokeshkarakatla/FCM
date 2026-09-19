import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadarChecklistComponent } from './radar-checklist.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { AgencyTrendComponent } from './agency-trend/agency-trend.component';
import { AuditTypeTrendComponent } from './audit-type-trend/audit-type-trend.component';
import { LocationTrendComponent } from './location-trend/location-trend.component';
import { ModelTrendComponent } from './model-trend/model-trend.component';
import { TimeSeriesComponent } from './time-series/time-series.component';
import { ChecklistDashboardComponent } from './checklist-dashboard/checklist-dashboard.component';
import { ChecklistDatatablesComponent } from './checklist-datatables/checklist-datatables.component';

export const routes = [
  { path: "", redirectTo: "checklist-dashboard", pathMatch: "full" },
  { path: 'checklist-dashboard', component: ChecklistDashboardComponent, data: { breadcrumb: 'Objective Audit Dashboard', description: 'This screen provides the summary of Objective Audit dashboard' } },
  {
    path: "checklist-datatables",
    component: ChecklistDatatablesComponent,
    loadChildren: () =>
      import("./checklist-datatables/checklist-datatables.module").then((m) => m.ChecklistDatatablesModule),
  },
  //{ path: 'checklist-datatables', component: ChecklistDatatablesComponent, data: { breadcrumb: 'Objective Audit Datatables', description: 'This screen provides the summary of Objective Audit datables' } },
  // { path: 'checklist', component:ChecklistComponent, data: { breadcrumb: 'Audit' }},
  // { path: 'parameter', component: ParameterComponent, data: { breadcrumb: 'Audit' }},
  // {path:'',component:AuditTypeTrendComponent,data:{breadcrumb:'Dashboard'}},
  // { path: 'radar-ca-audittype-trend', component: AuditTypeTrendComponent, data: { breadcrumb: 'Audit type', description: 'This screen provides the summary of audit activity across locations.' } },
  // { path: 'radar-ca-location-trend', component: LocationTrendComponent, data: { breadcrumb: 'Locaton trend', description: 'This screen provides the summary of audit activity across locations.' } },
  // { path: 'radar-ca-model-trend', component: ModelTrendComponent, data: { breadcrumb: 'Model trend', description: 'This screen provides the summary of audit activity across locations.' } },
  // { path: 'radar-agency-trend', component: AgencyTrendComponent, data: { breadcrumb: 'Agency trend', description: 'This screen provides the summary of audit activity across locations.' } },
  // { path: 'radar-ca-time-series', component: TimeSeriesComponent, data: { breadcrumb: 'Time series', description: 'This screen provides the summary of audit activity across locations.' } },
];
@NgModule({
  declarations: [
    RadarChecklistComponent,
    AgencyTrendComponent,
    AuditTypeTrendComponent,
    LocationTrendComponent,
    ModelTrendComponent,
    TimeSeriesComponent,
    ChecklistDashboardComponent,
    ChecklistDatatablesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    SharedModule,
  ]
})
export class RadarChecklistModule { }
