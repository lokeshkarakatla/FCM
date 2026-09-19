import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetricsComponent } from './metrics.component';
import { AgencyComponent } from './agency/agency.component';
import { AuditTypeComponent } from './audit-type/audit-type.component';
import { FuelTypeComponent } from './fuel-type/fuel-type.component';
import { ModelComponent } from './model/model.component';
import { ModuleComponent } from './module/module.component';
import { SecurityComponent } from './security/security.component';
import { TransmissionComponent } from './transmission/transmission.component';
import { VariantComponent } from './variant/variant.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { HighchartsChartModule } from 'highcharts-angular';

const routes: Routes = [
  { path: "", redirectTo: "audit-type", pathMatch: "full" },

  { path: "audit-type",
    //  data: { breadcrumb: 'Metrics/Audit-type', description: "Objective Audit Dashboard" },
      component: AuditTypeComponent },
  { path: "severity",
        //  data: { breadcrumb: 'Metrics/Severity', description: "Objective Audit Dashboard" },
 component: SecurityComponent },
  { path: "agency",
        //  data: { breadcrumb: 'Metrics/Agency', description: "Objective Audit Dashboard" },
 component: AgencyComponent },
  { path: "model",
        //  data: { breadcrumb: 'Metrics/Model', description: "Objective Audit Dashboard" },
 component: ModelComponent },
  { path: "fuel-type",
        //  data: { breadcrumb: 'Metrics/Fuel-type', description: "Objective Audit Dashboard" },
 component: FuelTypeComponent },
  { path: "transmission",
        //  data: { breadcrumb: 'Metrics/Transmission', description: "Objective Audit Dashboard" },
 component: TransmissionComponent },
  { path: "variant",
        //  data: { breadcrumb: 'Metrics/Variant', description: "Objective Audit Dashboard" },
 component: VariantComponent },
  { path: "module",
        //  data: { breadcrumb: 'Metrics/Modules', description: "Objective Audit Dashboard" },
 component: ModuleComponent },
]

@NgModule({
  declarations: [
    MetricsComponent,
    AgencyComponent,
    AuditTypeComponent,
    FuelTypeComponent,
    ModelComponent,
    ModuleComponent,
    SecurityComponent,
    TransmissionComponent,
    VariantComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    HighchartsChartModule
  ]
})
export class MetricsModule { }
