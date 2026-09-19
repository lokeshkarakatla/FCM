import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsAgencyComponent } from './reports-agency.component';
import { RepAgencyBodyComponent } from './rep-agency-body/rep-agency-body.component';
import { RepAgencyGaComponent } from './rep-agency-ga/rep-agency-ga.component';
import { RepAgencyPaintComponent } from './rep-agency-paint/rep-agency-paint.component';
import { RepAgencyPeComponent } from './rep-agency-pe/rep-agency-pe.component';
import { RepAgencyPressComponent } from './rep-agency-press/rep-agency-press.component';
import { RepAgencyProcessComponent } from './rep-agency-process/rep-agency-process.component';
import { RepAgencySqeComponent } from './rep-agency-sqe/rep-agency-sqe.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { Routes, RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import { SharedModule } from 'src/app/shared/shared.module';


const routes: Routes = [
  { path: "", redirectTo: "agency-ga", pathMatch: "full" },
  {
    path: "agency-paint",
    component: RepAgencyPaintComponent,
    // data: { breadcrumb: 'Agency/Paint', description: "Subjective Audit Dashboard" }
  },
  {
    path: "agency-ga",
    component: RepAgencyGaComponent,
    // data: { breadcrumb: 'Agency/GA', description: "Subjective Audit Dashboard" }
  },
  {
    path: "agency-body",
    component: RepAgencyBodyComponent,
    // data: { breadcrumb: 'Agency/Body', description: "Subjective Audit Dashboard" }
  },
  {
    path: "agency-sqe",
    component: RepAgencySqeComponent,
    // data: { breadcrumb: 'Agency/SQE', description: "Subjective Audit Dashboard" }
  },
  {
    path: "agency-press",
    component: RepAgencyPressComponent,
    // data: { breadcrumb: 'Agency/Press', description: "Subjective Audit Dashboard" }
  },
  {
    path: "agency-pe",
    component: RepAgencyPeComponent,
    // data: { breadcrumb: 'Agency/PE', description: "Subjective Audit Dashboard" }
  },
  {
    path: "agency-process",
    component: RepAgencyProcessComponent,
    // data: { breadcrumb: 'Agency/Process', description: "Subjective Audit Dashboard" }
  },
  // {
  //   path: "sub-time-series",
  //   component: SubTimeSeriesComponent,
  //   data: { breadcrumb: 'Objective Audit Dashboard', description: "Objective Audit Dashboard" }
  // },
];

@NgModule({
  declarations: [
    // ReportsAgencyComponent,
    RepAgencyBodyComponent,
    RepAgencyGaComponent,
    RepAgencyPaintComponent,
    RepAgencyPeComponent,
    RepAgencyPressComponent,
    RepAgencyProcessComponent,
    RepAgencySqeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NgxChartsModule,
    SharedModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ]
})
export class ReportsAgencyModule { }
