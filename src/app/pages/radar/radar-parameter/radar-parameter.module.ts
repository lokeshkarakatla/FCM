import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadarParameterComponent } from './radar-parameter.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { RadarPaAgencyTrendComponent } from './radar-pa-agency-trend/radar-pa-agency-trend.component';
import { RadarPaAudittypeTrendComponent } from './radar-pa-audittype-trend/radar-pa-audittype-trend.component';
import { RadarPaCategoryTrendComponent } from './radar-pa-category-trend/radar-pa-category-trend.component';
import { RadarPaLocationTrendComponent } from './radar-pa-location-trend/radar-pa-location-trend.component';
import { RadarPaModelTrendComponent } from './radar-pa-model-trend/radar-pa-model-trend.component';
import { RadarPaTimeSeriesComponent } from './radar-pa-time-series/radar-pa-time-series.component';

import { ParameterDatatablesComponent } from './parameter-datatables/parameter-datatables.component';
import { RadarParameterDashboardComponent } from './radar-parameter-dashboard/radar-parameter-dashboard.component';
import { ChecklistDashboardComponent } from '../radar-checklist/checklist-dashboard/checklist-dashboard.component';

export const routes = [

  { path: "", redirectTo: "parameter-dashboard", pathMatch: "full" },
  { path: 'parameter-dashboard', component: ChecklistDashboardComponent, data: { breadcrumb: 'Objective Audit Dashboard', description: 'This screen provides the summary of Objective Audit dashboard' } },
  {
    path: "parameter-datatables",
    component: ParameterDatatablesComponent,
    loadChildren: () =>
      import("./parameter-datatables/parameter-datatables.module").then((m) => m.ParameterDatatablesModule),
  },
  // { path: "", redirectTo: "radar-pa-audittype-trend", pathMatch: "full" },

  // {path:'radar-pa-audittype-trend',component:RadarPaAudittypeTrendComponent,data:{breadcrumb:'Audit type',description:'This screen provides the summary of audit activity across locations.'}},
  // {path:'radar-pa-location-trend',component:RadarPaLocationTrendComponent,data:{breadcrumb:'Location trend',description:'This screen provides the summary of audit activity across locations.'}},
  // {path:'radar-pa-model-trend',component:RadarPaModelTrendComponent,data:{breadcrumb:'Model trend',description:'This screen provides the summary of audit activity across locations.'}},
  // {path:'radar-pa-category-trend',component:RadarPaCategoryTrendComponent,data:{breadcrumb:'Category trend',description:'This screen provides the summary of audit activity across locations.'}},
  // {path:'radar-pa-time-series',component:RadarPaTimeSeriesComponent,data:{breadcrumb:'Time series',description:'This screen provides the summary of audit activity across locations.'}},
];

@NgModule({
  declarations: [
    RadarParameterComponent,
    RadarPaAgencyTrendComponent,
    RadarPaAudittypeTrendComponent,
    RadarPaCategoryTrendComponent,
    RadarPaLocationTrendComponent,
    RadarPaModelTrendComponent,
    RadarPaTimeSeriesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    SharedModule,
  ]
})
export class RadarParameterModule { }
