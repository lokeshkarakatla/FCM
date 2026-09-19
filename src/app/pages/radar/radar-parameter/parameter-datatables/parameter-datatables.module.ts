import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParameterDatatablesComponent } from './parameter-datatables.component';
import { ParameterAuditTypeTrendComponent } from './parameter-audit-type-trend/parameter-audit-type-trend.component';
import { ParameterLocationTrendComponent } from './parameter-location-trend/parameter-location-trend.component';
import { ParameterCategoryTrendComponent } from './parameter-category-trend/parameter-category-trend.component';
import { ParameterModelTrendComponent } from './parameter-model-trend/parameter-model-trend.component';
import { ParameterTimeTrendComponent } from './parameter-time-trend/parameter-time-trend.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

export const routes = [
  { path: "", redirectTo: "parameter-pa-audittype-trend", pathMatch: "full" },

  { path: 'parameter-pa-audittype-trend', component: ParameterAuditTypeTrendComponent, data: { breadcrumb: 'Audit type', description: 'This screen provides the summary of audit activity across locations.' } },
  { path: 'parameter-pa-location-trend', component: ParameterLocationTrendComponent, data: { breadcrumb: 'Location trend', description: 'This screen provides the summary of audit activity across locations.' } },
  { path: 'parameter-pa-model-trend', component: ParameterModelTrendComponent, data: { breadcrumb: 'Model trend', description: 'This screen provides the summary of audit activity across locations.' } },
  { path: 'parameter-pa-category-trend', component: ParameterCategoryTrendComponent, data: { breadcrumb: 'Category trend', description: 'This screen provides the summary of audit activity across locations.' } },
  { path: 'parameter-pa-time-series', component: ParameterTimeTrendComponent, data: { breadcrumb: 'Time series', description: 'This screen provides the summary of audit activity across locations.' } },
]

@NgModule({
  declarations: [
    ParameterDatatablesComponent,
    ParameterAuditTypeTrendComponent,
    ParameterLocationTrendComponent,
    ParameterCategoryTrendComponent,
    ParameterModelTrendComponent,
    ParameterTimeTrendComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    SharedModule,
  ]
})
export class ParameterDatatablesModule { }
