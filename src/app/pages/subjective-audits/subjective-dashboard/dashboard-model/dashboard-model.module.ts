import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ModelAstorComponent } from './model-astor/model-astor.component';
import { ModelGlosterComponent } from './model-gloster/model-gloster.component';
import { ModelHectorComponent } from './model-hector/model-hector.component';
import { ModelZesvComponent } from './model-zesv/model-zesv.component';


const routes: Routes = [
  { path: "", redirectTo: "model-astor", pathMatch: "full" },
  {
    path: "model-astor",
    component: ModelAstorComponent,
    data: { breadcrumb: 'Astor', description: "Objective Audit Dashboard" }
  },
  {
    path: "model-gloster",
    component: ModelGlosterComponent,
    data: { breadcrumb: 'Gloster', description: "Objective Audit Dashboard" }
  },
  {
    path: "model-hector",
    component: ModelHectorComponent,
    data: { breadcrumb: 'Hector', description: "Objective Audit Dashboard" }
  },
  {
    path: "model-zesv",
    component: ModelZesvComponent,
    data: { breadcrumb: 'ZESV', description: "Objective Audit Dashboard" }
  },
  // {
  //   path: "sub-time-series",
  //   component: SubTimeSeriesComponent,
  //   data: { breadcrumb: 'Objective Audit Dashboard', description: "Objective Audit Dashboard" }
  // },
];

@NgModule({
  declarations: [
    ModelGlosterComponent,
    ModelHectorComponent,
    ModelZesvComponent,
    ModelAstorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NgxChartsModule,
    SharedModule,
    MatButtonModule,
    MatIconModule,
    SharedModule,
    MatDialogModule,
    MatPaginatorModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
  ]
})
export class DashboardModelModule { }
