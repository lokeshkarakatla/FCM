import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgencyGaComponent } from './agency-ga/agency-ga.component';
import { AgencyPaintComponent } from './agency-paint/agency-paint.component';
import { AgencyBodyComponent } from './agency-body/agency-body.component';
import { AgencySqeComponent } from './agency-sqe/agency-sqe.component';
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
import { AgencyProcessComponent } from './agency-process/agency-process.component';
import { AgencyPeComponent } from './agency-pe/agency-pe.component';
import { AgencyPressComponent } from './agency-press/agency-press.component';

const routes: Routes = [
  { path: "", redirectTo: "agency-ga", pathMatch: "full" },
  {
    path: "agency-paint",
    component: AgencyPaintComponent,
    data: { breadcrumb: 'Agency/Paint', description: "Subjective Audit Dashboard" }
  },
  {
    path: "agency-ga",
    component: AgencyGaComponent,
    data: { breadcrumb: 'Agency/GA', description: "Subjective Audit Dashboard" }
  },
  {
    path: "agency-body",
    component: AgencyBodyComponent,
    data: { breadcrumb: 'Agency/Body', description: "Subjective Audit Dashboard" }
  },
  {
    path: "agency-sqe",
    component: AgencySqeComponent,
    data: { breadcrumb: 'Agency/SQE', description: "Subjective Audit Dashboard" }
  },
  {
    path: "agency-press",
    component: AgencyPressComponent,
    data: { breadcrumb: 'Agency/Press', description: "Subjective Audit Dashboard" }
  },
  {
    path: "agency-pe",
    component: AgencyPeComponent,
    data: { breadcrumb: 'Agency/PE', description: "Subjective Audit Dashboard" }
  },
  {
    path: "agency-process",
    component: AgencyProcessComponent,
    data: { breadcrumb: 'Agency/Process', description: "Subjective Audit Dashboard" }
  },
  // {
  //   path: "sub-time-series",
  //   component: SubTimeSeriesComponent,
  //   data: { breadcrumb: 'Objective Audit Dashboard', description: "Objective Audit Dashboard" }
  // },
];

@NgModule({
  declarations: [
    AgencyGaComponent,
    AgencyPaintComponent,
    AgencyBodyComponent,
    AgencySqeComponent,
    AgencyProcessComponent,
    AgencyPeComponent,
    AgencyPressComponent
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
export class DashboardAgencyModule { }
