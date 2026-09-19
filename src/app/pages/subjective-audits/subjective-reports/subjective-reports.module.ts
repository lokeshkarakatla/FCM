import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ReportsModelComponent } from './reports-model/reports-model.component';
import { ReportsAgencyComponent } from './reports-agency/reports-agency.component';
import { SubAuditTypeTrendComponent } from './sub-audit-type-trend/sub-audit-type-trend.component';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { SubCategoryTypeTrendComponent } from './sub-category-type-trend/sub-category-type-trend.component';
import { SubLocationTrendComponent } from './sub-location-trend/sub-location-trend.component';
import { SubModelTrendComponent } from './sub-model-trend/sub-model-trend.component';
import { SubScatterComponent } from './sub-scatter/sub-scatter.component';
import { SubBellCurveComponent } from './sub-bell-curve/sub-bell-curve.component';
import { MatOptionModule } from '@angular/material/core';
import { FragileSystemComponent } from './fragile-system/fragile-system.component';
import { ParetoComponent } from './pareto/pareto.component';
import { MetricsComponent } from './metrics/metrics.component';
import { SubIssuesComponent } from './sub-issues/sub-issues.component';
import { SubCheckpiontsComponent } from './sub-checkpionts/sub-checkpionts.component';
import { SubImageComponent } from './sub-image/sub-image.component';
import { AddIssesComponent } from './sub-issues/add-isses/add-isses.component';
import { AddPsrPopComponent } from './sub-issues/add-psr-pop/add-psr-pop.component';
import { MatRadioModule } from '@angular/material/radio';

const routes: Routes = [
  { path: "", redirectTo: "dashboard-model", pathMatch: "full" },
  {
    path: "dashboard-model",
    component: ReportsModelComponent,
    loadChildren: () =>
      import("./reports-model/reports-model.module").then((m) => m.ReportsModelModule),
   
  },
  {
    path: "dashboard-agency",
    component: ReportsAgencyComponent,
    loadChildren: () =>
      import("./reports-agency/reports-agency.module").then((m) => m.ReportsAgencyModule),
    
  },
  {
    path: "sub-audit-type-trend",
    component: SubAuditTypeTrendComponent,
    
  },
  {
    path: "sub-category-type-trend",
    component: SubCategoryTypeTrendComponent,
    // data: { breadcrumb: 'Category Trend', description: "Objective Audit Dashboard" }
  },
  {
    path: "sub-location-trend",
    component: SubLocationTrendComponent,
    data: { breadcrumb: 'Location Trend', description: "Objective Audit Dashboard" }
  },
  {
    path: "sub-model-trend",
    component: SubModelTrendComponent,
    // data: { breadcrumb: 'Model Trend', description: "Objective Audit Dashboard" }
  },
  // {
  //   path: "sub-time-series",
  //   component: SubTimeSeriesComponent,
  //   data: { breadcrumb: 'Time Series', description: "Objective Audit Dashboard" }
  // },
  {
    path: "sub-scatter-graph",
    component: SubScatterComponent,
    // data: { breadcrumb: 'Scatter Graph Trend', description: "Objective Audit Dashboard" }
  },
  {
    path: "sub-bellcurve-graph",
    component: SubBellCurveComponent,
    // data: { breadcrumb: 'Scatter Bell Curve Trend' }
  },
  {
    path: "metrics", component: MetricsComponent,
    
    loadChildren: () =>
      import("./metrics/metrics.module").then((m) => m.MetricsModule)
  },
  {
    path: "pareto", component: ParetoComponent,
    //  data: { breadcrumb: 'Pareto', description: "Objective Audit Dashboard" }
  },
  {
    path: "fragile-system", component: FragileSystemComponent,

  },
  {
    path: "issues", component: SubIssuesComponent,
  },
  {
    path: "sub-image", component: SubImageComponent,
  },
];


@NgModule({
  declarations: [
    ReportsModelComponent,
    ReportsAgencyComponent,
    SubAuditTypeTrendComponent,
    SubCategoryTypeTrendComponent,
    SubLocationTrendComponent,
    SubModelTrendComponent,
    // SubTimeSeriesComponent,
    SubScatterComponent,
    SubBellCurveComponent,
    FragileSystemComponent,
    ParetoComponent,
    MetricsComponent,
    SubIssuesComponent,
    SubCheckpiontsComponent,
    SubImageComponent,
    AddIssesComponent,
    AddPsrPopComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatCardModule,
    MatSelectModule,
    NgxChartsModule,
    MatOptionModule,
    NgxChartsModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatDialogModule,
    MatRadioModule

  ]
})
export class SubjectiveReportsModule { }
