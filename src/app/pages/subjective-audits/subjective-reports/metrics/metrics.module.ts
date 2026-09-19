import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetricsAgencyComponent } from './metrics-agency/metrics-agency.component';
import { MetricsAuditTypeComponent } from './metrics-audit-type/metrics-audit-type.component';
import { MetricsFuelTypeComponent } from './metrics-fuel-type/metrics-fuel-type.component';
import { MetricsModelComponent } from './metrics-model/metrics-model.component';
import { MetricsModuleComponent } from './metrics-module/metrics-module.component';
import { MetricsSecurityComponent } from './metrics-security/metrics-security.component';
import { MetricsTransmissionComponent } from './metrics-transmission/metrics-transmission.component';
import { MetricsVariantComponent } from './metrics-variant/metrics-variant.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HighchartsChartModule } from 'highcharts-angular';

const routes: Routes = [
  { path: "", redirectTo: "audit-type", pathMatch: "full" },

  { path: "audit-type",    
 component: MetricsAuditTypeComponent },
  { path: "severity", component: MetricsSecurityComponent },
  { path: "agency", component: MetricsAgencyComponent },
  { path: "model", component: MetricsModelComponent },
  { path: "fuel-type", component: MetricsFuelTypeComponent },
  { path: "transmission", component: MetricsTransmissionComponent },
  { path: "variant",component: MetricsVariantComponent },
  { path: "module", component: MetricsModuleComponent },
]

@NgModule({
  declarations: [
    MetricsAgencyComponent,
    MetricsAuditTypeComponent,
    MetricsFuelTypeComponent,
    MetricsModelComponent,
    MetricsModuleComponent,
    MetricsSecurityComponent,
    MetricsTransmissionComponent,
    MetricsVariantComponent
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
