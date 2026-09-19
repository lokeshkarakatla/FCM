import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetricCheckComponent } from './metric-check.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AgencyComponent } from './agency/agency.component';
import { FuelTypeComponent } from './fuel-type/fuel-type.component';
import { ModelComponent } from './model/model.component';
import { ModuleComponent } from './module/module.component';
import { SeverityComponent } from './severity/severity.component';
import { TransmissionComponent } from './transmission/transmission.component';
import { VariantComponent } from './variant/variant.component';
import { AuditTypeComponent } from './audit-type/audit-type.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';

export const routes = [
  { path: '', redirectTo: "audittype", pathMatch: "full" },
  { path: 'audittype', component: AuditTypeComponent, data: { breadcrumb: 'Sub Audits(AuditStatus/Demerit/Metrics/Audit Type)', description: 'This page is used to  metrics' } },
  { path: 'severity', component: SeverityComponent, data: { breadcrumb: 'Sub Audits(AuditStatus/Demerit/Metrics/Severity)', description: 'This page is used to  metrics' } },
  { path: 'agency', component: AgencyComponent, data: { breadcrumb: 'Sub Audits(AuditStatus/Demerit/Metrics/Department)', description: 'This page is used to  metrics' } },
  { path: 'model', component: ModelComponent, data: { breadcrumb:'Sub Audits(AuditStatus/Demerit/Metrics/Model)', description: 'This page is used to  metrics' } },
  { path: 'fuel-type', component: FuelTypeComponent, data: { breadcrumb: 'Sub Audits(AuditStatus/Demerit/Metrics/Fuel Type)', description: 'This page is used to  metrics' } },
  { path: 'transmissions', component: TransmissionComponent, data: { breadcrumb: 'Sub Audits(AuditStatus/Demerit/Metrics/transmissions)', description: 'This page is used to  metrics' } },
  { path: 'variant', component: VariantComponent, data: { breadcrumb: 'Sub Audits(AuditStatus/Demerit/Metrics/Variant)', description: 'This page is used to  metrics' } },
  { path: 'module', component: ModuleComponent, data: { breadcrumb: 'Sub Audits(AuditStatus/Demerit/Metrics/Module)', description: 'This page is used to  metrics' } },

];

@NgModule({
  declarations: [
    MetricCheckComponent,
    AgencyComponent,

    FuelTypeComponent,
    ModelComponent,
    ModuleComponent,
    SeverityComponent,
    TransmissionComponent,
    VariantComponent,
    AuditTypeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
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
export class MetricCheckModule { }
