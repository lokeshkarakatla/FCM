import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChecklistAgencyTrendComponent } from './checklist-agency-trend/checklist-agency-trend.component';
import { ChecklistAuditTypeTrendComponent } from './checklist-audit-type-trend/checklist-audit-type-trend.component';
import { ChecklistLocationTrendComponent } from './checklist-location-trend/checklist-location-trend.component';
import { ChecklistModelTrendComponent } from './checklist-model-trend/checklist-model-trend.component';
import { ChecklistTimeSeriesComponent } from './checklist-time-series/checklist-time-series.component';


export const routes = [
  { path: "", redirectTo: "checklist-ca-audittype-trend", pathMatch: "full" },

  { path: 'checklist-ca-audittype-trend', component: ChecklistAuditTypeTrendComponent, data: { breadcrumb: 'Audit type', description: 'This screen provides the summary of audit activity across locations.' } },
  { path: 'checklist-ca-location-trend', component: ChecklistLocationTrendComponent, data: { breadcrumb: 'Location trend', description: 'This screen provides the summary of audit activity across locations.' } },
  { path: 'checklist-ca-model-trend', component: ChecklistModelTrendComponent, data: { breadcrumb: 'Model trend', description: 'This screen provides the summary of model activity across locations.' } },
  { path: 'checklist-ca-agency-trend', component: ChecklistAgencyTrendComponent, data: { breadcrumb: 'Agency trend', description: 'This screen provides the summary of agency activity across locations.' } },
  { path: 'checklist-ca-time-series', component: ChecklistTimeSeriesComponent, data: { breadcrumb: 'Time series', description: 'This screen provides the summary of time activity across locations.' } },
]
@NgModule({
  declarations: [
    ChecklistAgencyTrendComponent,
    ChecklistAuditTypeTrendComponent,
    ChecklistLocationTrendComponent,
    ChecklistModelTrendComponent,
    ChecklistTimeSeriesComponent
  ],
  imports: [
    CommonModule,

    RouterModule.forChild(routes),

    SharedModule,
  ]
})
export class ChecklistDatatablesModule { }
