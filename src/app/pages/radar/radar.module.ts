
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadarComponent } from './radar.component';

import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { RadarStatisticComponent } from './radar-statistic/radar-statistic.component';
import { RadarChecklistComponent } from './radar-checklist/radar-checklist.component';
import { RadarParameterComponent } from './radar-parameter/radar-parameter.component';

const routes: Routes = [
  { path: "", redirectTo: "radarchecklist", pathMatch: "full" },

  //{ path: 'statistic', component: RadarStatisticComponent, data: { breadcrumb: 'Radar', description: 'The summary statistics, trends and scores for audits are available here as charts with a wide range of filter criteria covering audit type, model mix, date range and categoies / modules.' } },
  // { path: 'parameter', component: ParameterComponent, data: { breadcrumb: 'Audit' }},
  {
    path: "radarchecklist",
    component: RadarChecklistComponent,
    loadChildren: () =>
      import("./radar-checklist/radar-checklist.module").then((m) => m.RadarChecklistModule),
    data: { breadcrumb: ' Objective Audit', description: 'This screen provides the summary of Radar activity across locations.' }
  },
  {
    path: "radarparameter",
    component: RadarParameterComponent,
    loadChildren: () =>
      import("./radar-parameter/radar-parameter.module").then((m) => m.RadarParameterModule),
    data: { breadcrumb: ' Objective Audit', description: 'This screen provides the summary of Radar activity across locations.' }
  },


]

@NgModule({
  declarations: [
    RadarComponent,
    RadarStatisticComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    SharedModule,
  ]
})
export class RadarModule { }
