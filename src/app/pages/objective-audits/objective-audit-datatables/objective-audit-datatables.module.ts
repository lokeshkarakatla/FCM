import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgencyTypeTrendComponent } from './agency-type-trend/agency-type-trend.component';
import { LocationTrendComponent } from './location-trend/location-trend.component';
import { ModelTrendComponent } from './model-trend/model-trend.component';
import { AgencyTrendComponent } from './agency-trend/agency-trend.component';
import { TimeSeriesComponent } from './time-series/time-series.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SharedModule } from 'src/app/shared/shared.module';
import { ObjScatterComponent } from './obj-scatter/obj-scatter.component';
import { ObjBellCurveComponent } from './obj-bell-curve/obj-bell-curve.component';

const routes: Routes = [
  { path: "", redirectTo: "agency-type-trend", pathMatch: "full" },
  {
    path: "agency-trend",
    component: AgencyTrendComponent,
    data: { breadcrumb: 'Objective Audit Dashboard', description: "Objective Audit Dashboard" }
  },
  {
    path: "agency-type-trend",
    component: AgencyTypeTrendComponent,
    data: { breadcrumb: 'Objective Audit Dashboard', description: "Objective Audit Dashboard" }
  },
  {
    path: "location-trend",
    component: LocationTrendComponent,
    data: { breadcrumb: 'Objective Audit Dashboard', description: "Objective Audit Dashboard" }
  },
  {
    path: "model-trend",
    component: ModelTrendComponent,
    data: { breadcrumb: 'Objective Audit Dashboard', description: "Objective Audit Dashboard" }
  },
  {
    path: "time-series",
    component: TimeSeriesComponent,
    data: { breadcrumb: 'Objective Audit Dashboard', description: "Objective Audit Dashboard" }
  },
  {
    path: "obj-scatter-graph",
    component: ObjScatterComponent,
    data: { breadcrumb: 'Scatter Graph Trend', description: "Objective Audit Dashboard" }
  },
  {
    path: "obj-bellcurve-graph",
    component: ObjBellCurveComponent,
    data: { breadcrumb: 'Scatter Bell Curve Trend', description: "Objective Audit Dashboard" }
  },
];

@NgModule({
  declarations: [
    AgencyTypeTrendComponent,
    LocationTrendComponent,
    ModelTrendComponent,
    AgencyTrendComponent,
    TimeSeriesComponent,
    ObjScatterComponent,
    ObjBellCurveComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NgxChartsModule,
    SharedModule

  ]
})
export class ObjectiveAuditDatatablesModule { }
