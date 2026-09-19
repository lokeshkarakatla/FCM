import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SubAuditTypeTrendComponent } from './sub-audit-type-trend/sub-audit-type-trend.component';
import { SubCategoryTypeTrendComponent } from './sub-category-type-trend/sub-category-type-trend.component';
import { SubLocationTrendComponent } from './sub-location-trend/sub-location-trend.component';
import { SubModelTrendComponent } from './sub-model-trend/sub-model-trend.component';
import { SubTimeSeriesComponent } from './sub-time-series/sub-time-series.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SubScatterComponent } from './sub-scatter/sub-scatter.component';
import { SubBellCurveComponent } from './sub-bell-curve/sub-bell-curve.component';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { NgxChartsModule } from '@swimlane/ngx-charts';

const routes: Routes = [
  { path: "", redirectTo: "sub-audit-type-trend", pathMatch: "full" },
  {
    path: "sub-audit-type-trend",
    component: SubAuditTypeTrendComponent,
    data: { breadcrumb: 'Audit Type Trend', description: "Objective Audit Dashboard" }
  },
  {
    path: "sub-category-type-trend",
    component: SubCategoryTypeTrendComponent,
    data: { breadcrumb: 'Category Trend', description: "Objective Audit Dashboard" }
  },
  {
    path: "sub-location-trend",
    component: SubLocationTrendComponent,
    data: { breadcrumb: 'Location Trend', description: "Objective Audit Dashboard" }
  },
  {
    path: "sub-model-trend",
    component: SubModelTrendComponent,
    data: { breadcrumb: 'Model Trend', description: "Objective Audit Dashboard" }
  },
  {
    path: "sub-time-series",
    component: SubTimeSeriesComponent,
    data: { breadcrumb: 'Time Series', description: "Objective Audit Dashboard" }
  },
  {
    path: "sub-scatter-graph",
    component: SubScatterComponent,
    data: { breadcrumb: 'Scatter Graph Trend', description: "Objective Audit Dashboard" }
  },
  {
    path: "sub-bellcurve-graph",
    component: SubBellCurveComponent,
    data: { breadcrumb: 'Scatter Bell Curve Trend', description: "Objective Audit Dashboard" }
  },
];

@NgModule({
  declarations: [
    SubAuditTypeTrendComponent,
    SubCategoryTypeTrendComponent,
    SubLocationTrendComponent,
    SubModelTrendComponent,
    SubTimeSeriesComponent,
    SubScatterComponent,
    SubBellCurveComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatCardModule,
    MatSelectModule,
    NgxChartsModule,
    // SharedModule,
  ]
})
export class SubjectiveAuditDatatablesModule { }
