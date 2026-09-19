import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { Routes, RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RaderAstorComponent } from './rader-astor/rader-astor.component';
import { RaderGlosterComponent } from './rader-gloster/rader-gloster.component';
import { RaderHectorComponent } from './rader-hector/rader-hector.component';
import { RaderZvesComponent } from './rader-zves/rader-zves.component';
import { AgencyTrendComponent } from './agency-trend/agency-trend.component';
import { AgencyTypeTrendComponent } from './agency-type-trend/agency-type-trend.component';
import { LocationTrendComponent } from './location-trend/location-trend.component';
import { ModelTrendComponent } from './model-trend/model-trend.component';
import { TimeSeriesComponent } from './time-series/time-series.component';
import { ObjScatterComponent } from './obj-scatter/obj-scatter.component';
import { ObjBellCurveComponent } from './obj-bell-curve/obj-bell-curve.component';
import { ModelComponent } from './model/model.component';
import { FragileComponent } from './fragile/fragile.component';
import { ParetoComponent } from './pareto/pareto.component';
import { MetricsComponent } from './metrics/metrics.component';
import { ObjCheckpontsComponent } from './obj-checkponts/obj-checkponts.component';
import { PopupComponent } from './obj-checkponts/popup/popup.component';
import { ObjModuleImgComponent } from './obj-module-img/obj-module-img.component';
import { AddPsrPopComponent } from './obj-checkponts/add-psr-pop/add-psr-pop.component';
import { MatRadioModule } from '@angular/material/radio';
// import { SharedModule } from 'src/app/shared/shared.module';


const routes: Routes = [
  { path: "", redirectTo: "model", pathMatch: "full" },

  {
    path: "model",
    component: ModelComponent,
    loadChildren: () =>
      import("./model/model.module").then((m) => m.ModelModule)
  },
  {
    path: "radar-astor",
    component: RaderAstorComponent,
    // data: { breadcrumb: 'Objective Audit Dashboard', description: "Objective Audit Dashboard" }
  },
  {
    path: "radar-gloster",
    component: RaderGlosterComponent,
    // data: { breadcrumb: 'Objective Audit Dashboard', description: "Objective Audit Dashboard" }
  },
  {
    path: "radar-hector",
    component: RaderHectorComponent,
    // data: { breadcrumb: 'Objective Audit Dashboard', description: "Objective Audit Dashboard" }
  },
  {
    path: "radar-zesv",
    component: RaderZvesComponent,
    // data: { breadcrumb: 'Objective Audit Dashboard', description: "Objective Audit Dashboard" }
  },
  {
    path: "agency-trend",
    component: AgencyTrendComponent,
    // data: { breadcrumb: 'Objective Audit Dashboard', description: "Objective Audit Dashboard" }
  },
  {
    path: "agency-type-trend",
    component: AgencyTypeTrendComponent,
    // data: { breadcrumb: 'Audit Type', description: "Objective Audit Dashboard" }
  },
  {
    path: "location-trend",
    component: LocationTrendComponent,
    // data: { breadcrumb: 'Objective Audit Dashboard', description: "Objective Audit Dashboard" }
  },
  {
    path: "model-trend",
    component: ModelTrendComponent,
    // data: { breadcrumb: 'Model Distribution', description: "Objective Audit Dashboard" }
  },
  {
    path: "time-series",
    component: TimeSeriesComponent,
    // data: { breadcrumb: 'Objective Audit Dashboard', description: "Objective Audit Dashboard" }
  },
  {
    path: "obj-scatter-graph",
    component: ObjScatterComponent,
    // data: { breadcrumb: 'Scatter Graph Trend', description: "Objective Audit Dashboard" }
  },
  {
    path: "obj-bellcurve-graph",
    component: ObjBellCurveComponent,
    // data: { breadcrumb: 'Bell Curve Trend', description: "Objective Audit Dashboard" }
  },
  { path: "fragile", component: FragileComponent, },
  { path: "pareto", component: ParetoComponent, },
  { path: "checkpoints", component: ObjCheckpontsComponent,  },
  { path: "obj-module", component: ObjModuleImgComponent,   },

  {
    path: "metrics",
    component: MetricsComponent,
     
    loadChildren: () =>
      import("./metrics/metrics.module").then((m) => m.MetricsModule)
  },
]

@NgModule({
  declarations: [
    RaderZvesComponent,
    RaderGlosterComponent,
    RaderAstorComponent,
    RaderHectorComponent,
    AgencyTrendComponent,
    AgencyTypeTrendComponent,
    LocationTrendComponent,
    ModelTrendComponent,
    TimeSeriesComponent,
    ObjScatterComponent,
    ObjBellCurveComponent,
    FragileComponent,
    ParetoComponent,
    ObjCheckpontsComponent,
    PopupComponent,
    ObjModuleImgComponent,
    AddPsrPopComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NgxChartsModule,
    // SharedModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    // SharedModule,
    MatRadioModule,
    MatDialogModule,
    MatPaginatorModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
  ]
})
export class  ObjectiveReportsModule { }
