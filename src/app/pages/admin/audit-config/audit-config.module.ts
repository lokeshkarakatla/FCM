import { MatIconModule } from '@angular/material/icon';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { AuditModelComponent } from './audit-model/audit-model.component';
import { AVariantComponent } from './a-variant/a-variant.component';
import { APlantComponent } from './a-plant/a-plant.component';
import { AAgenciesComponent } from './a-agencies/a-agencies.component';
import { AInteriortrimComponent } from './a-interiortrim/a-interiortrim.component';
import { AColorComponent } from './a-color/a-color.component';
import { ATransmissionComponent } from './a-transmission/a-transmission.component';
import { AFueltypeComponent } from './a-fueltype/a-fueltype.component';
import { AStagesComponent } from './a-stages/a-stages.component';
import { AEnginetypeComponent } from './a-enginetype/a-enginetype.component';
import { ADrivetypeComponent } from './a-drivetype/a-drivetype.component';
import { ADrivegradeComponent } from './a-drivegrade/a-drivegrade.component';
import { AVehicletypeComponent } from './a-vehicletype/a-vehicletype.component';
import { AddModuleAuditComponent } from './audit-model/add-module-audit/add-module-audit.component';
import { AddVariantAuditComponent } from './a-variant/add-variant-audit/add-variant-audit.component';
import { AddPlantAuditComponent } from './a-plant/add-plant-audit/add-plant-audit.component';
import { AddAgencyAuditComponent } from './a-agencies/add-agency-audit/add-agency-audit.component';
import { AddInteriorTrimAuditComponent } from './a-interiortrim/add-interior-trim-audit/add-interior-trim-audit.component';
import { AddColorAuditComponent } from './a-color/add-color-audit/add-color-audit.component';
import { AddTransmissionAuditComponent } from './a-transmission/add-transmission-audit/add-transmission-audit.component';
import { AddFueltypeAuditComponent } from './a-fueltype/add-fueltype-audit/add-fueltype-audit.component';
import { AddStageAuditComponent } from './a-stages/add-stage-audit/add-stage-audit.component';
import { AddEnginetypeAuditComponent } from './a-enginetype/add-enginetype-audit/add-enginetype-audit.component';
import { AddDrivetypeAuditComponent } from './a-drivetype/add-drivetype-audit/add-drivetype-audit.component';
import { AddDrivegradeAuditComponent } from './a-drivegrade/add-drivegrade-audit/add-drivegrade-audit.component';
import { AddVehicletypeAuditComponent } from './a-vehicletype/add-vehicletype-audit/add-vehicletype-audit.component';


const routes: Routes = [
  { path: "", redirectTo: "audit-model", pathMatch: "full" },

  {
    path: 'audit-model', component: AuditModelComponent,
    data: { breadcrumb: 'Models', description: 'List of agencies are managed here.' }
  },
  {
    path: 'audit-variants', component: AVariantComponent,
    data: { breadcrumb: 'Variants', description: 'List of agencies are managed here.' }
  },

  {
    path: 'audit-plants', component: APlantComponent,
    data: { breadcrumb: 'Plants', description: 'List of agencies are managed here.' }
  },
  {
    path: 'audit-agencies', component: AAgenciesComponent,
    data: { breadcrumb: 'Departments', description: 'List of agencies are managed here.' }
  },

  {
    path: 'audit-interior-trim', component: AInteriortrimComponent,
    data: { breadcrumb: 'Colour', description: 'List of agencies are managed here.' }
  },
  {
    path: 'audit-color', component: AColorComponent,
    data: { breadcrumb: 'Color', description: 'List of agencies are managed here.' }
  },

  {
    path: 'audit-model', component: AuditModelComponent,
    data: { breadcrumb: 'Transmission', description: 'List of agencies are managed here.' }
  },
  {
    path: 'audit-transmission', component: ATransmissionComponent,
    data: { breadcrumb: 'Transmission', description: 'List of agencies are managed here.' }
  },

  {
    path: 'audit-fuel-type', component: AFueltypeComponent,
    data: { breadcrumb: 'Fuel Type', description: 'List of agencies are managed here.' }
  },
  {
    path: 'audit-stages', component: AStagesComponent,
    data: { breadcrumb: 'Audit Stages', description: 'List of agencies are managed here.' }
  },

  {
    path: 'audit-engine-type', component: AEnginetypeComponent,
    data: { breadcrumb: 'Engine Type', description: 'List of agencies are managed here.' }
  },
  {
    path: 'audit-drive-type', component: ADrivetypeComponent,
    data: { breadcrumb: 'Drive Type', description: 'List of agencies are managed here.' }
  },
  {
    path: 'audit-drive-grade', component: ADrivegradeComponent,
    data: { breadcrumb: 'Drive Grade', description: 'List of agencies are managed here.' }
  },
  {
    path: 'audit-vehicle-type', component: AVehicletypeComponent,
    data: { breadcrumb: 'Vehicle Type', description: 'List of agencies are managed here.' }
  },



];

@NgModule({
  declarations: [


    AuditModelComponent,
    AVariantComponent,
    APlantComponent,
    AAgenciesComponent,
    AInteriortrimComponent,
    AColorComponent,
    ATransmissionComponent,
    AFueltypeComponent,
    AStagesComponent,
    AEnginetypeComponent,
    ADrivetypeComponent,
    ADrivegradeComponent,
    AVehicletypeComponent,
    AddModuleAuditComponent,
    AddVariantAuditComponent,
    AddPlantAuditComponent,
    AddAgencyAuditComponent,
    AddInteriorTrimAuditComponent,
    AddColorAuditComponent,
    AddTransmissionAuditComponent,
    AddFueltypeAuditComponent,
    AddStageAuditComponent,
    AddEnginetypeAuditComponent,
    AddDrivetypeAuditComponent,
    AddDrivegradeAuditComponent,
    AddVehicletypeAuditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule,
    MatCardModule,
    MatSelectModule,
     
  ],
  entryComponents: [
    // AddHandoverMasterComponent,
    // AddServicePerformanceComponent,
    // AddSupplyPerformanceComponent,
    // AddIndustryComponent,
    // AddStateComponent,
    // AddClosureMasterComponent
  ]
})
export class AuditConfigModule { }
