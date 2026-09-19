import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsModelComponent } from './reports-model.component';
import { RepModelAstorComponent } from './rep-model-astor/rep-model-astor.component';
import { RepModelGlosterComponent } from './rep-model-gloster/rep-model-gloster.component';
import { RepModelHectorComponent } from './rep-model-hector/rep-model-hector.component';
import { RepModelZesvComponent } from './rep-model-zesv/rep-model-zesv.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  { path: "", redirectTo: "model-astor", pathMatch: "full" },
  {
    path: "model-astor",
    component: RepModelAstorComponent,
    // data: { breadcrumb: 'Model/Astor', description: "Objective Audit Dashboard" }
  },
  {
    path: "model-gloster",
    component: RepModelGlosterComponent,
    // data: { breadcrumb: 'Model/Gloster', description: "Objective Audit Dashboard" }
  },
  {
    path: "model-hector",
    component: RepModelHectorComponent,
    // data: { breadcrumb: 'Model/Hector', description: "Objective Audit Dashboard" }
  },
  {
    path: "model-zesv",
    component: RepModelZesvComponent,
    // data: { breadcrumb: 'Model/Zesv', description: "Objective Audit Dashboard" }
  },
  // {
  //   path: "sub-time-series",
  //   component: SubTimeSeriesComponent,
  //   data: { breadcrumb: 'Objective Audit Dashboard', description: "Objective Audit Dashboard" }
  // },
];

@NgModule({
  declarations: [
    // ReportsModelComponent,
    RepModelAstorComponent,
    RepModelGlosterComponent,
    RepModelHectorComponent,
    RepModelZesvComponent
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
export class ReportsModelModule { }
