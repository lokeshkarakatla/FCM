import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';


import { MCategoriesComponent } from '../../admin/masterdata/m-categories/m-categories.component';
import { AddContinentComponent } from '../../admin/masterdata/m-continents/add-continent/add-continent.component';
import { MContinentsComponent } from '../../admin/masterdata/m-continents/m-continents.component';
import { AddCountrysComponent } from '../../admin/masterdata/m-country/add-countrys/add-countrys.component';
import { MCountryComponent } from '../../admin/masterdata/m-country/m-country.component';
import { AddCriticalityComponent } from '../../admin/masterdata/m-criticality/add-criticality/add-criticality.component';
import { MCriticalityComponent } from '../../admin/masterdata/m-criticality/m-criticality.component';
import { AddDepartmentComponent } from '../../admin/masterdata/m-departments/add-department/add-department.component';
import { MDepartmentsComponent } from '../../admin/masterdata/m-departments/m-departments.component';
import { MSectionsComponent } from '../../admin/masterdata/m-sections/m-sections.component';
import { AddStatusmasterComponent } from '../../admin/masterdata/m-status-master/add-statusmaster/add-statusmaster.component';
import { MStatusMasterComponent } from '../../admin/masterdata/m-status-master/m-status-master.component';
import { AddStepsComponent } from '../../admin/masterdata/m-step/add-steps/add-steps.component';
import { MStepComponent } from '../../admin/masterdata/m-step/m-step.component';

import { AddCategoryComponent } from '../../setup/subjective-setup/category-master/add-category/add-category.component';
// import { AddSectionComponent } from '../../subjective-audits/prts-subjective-setup/section/add-section/add-section.component';
import { MdataDeptsComponent } from './mdata-depts/mdata-depts.component';
import { TestMasterDataComponent } from './test-master-data.component';
import { DistributorComponent } from '../../admin/masterdata/distributor/distributor.component';
import { AddDistributorComponent } from '../../admin/masterdata/distributor/add-distributor/add-distributor.component';



import { AuditConfigModule } from '../audit-config/audit-config.module';
import { AuditModelComponent } from '../audit-config/audit-model/audit-model.component';
import { AVariantComponent } from '../audit-config/a-variant/a-variant.component';
import { APlantComponent } from '../audit-config/a-plant/a-plant.component';
import { AColorComponent } from '../audit-config/a-color/a-color.component';
import { ATransmissionComponent } from '../audit-config/a-transmission/a-transmission.component';
import { AFueltypeComponent } from '../audit-config/a-fueltype/a-fueltype.component';
import { AStagesComponent } from '../audit-config/a-stages/a-stages.component';
import { AEnginetypeComponent } from '../audit-config/a-enginetype/a-enginetype.component';
import { ADrivetypeComponent } from '../audit-config/a-drivetype/a-drivetype.component';
import { ADrivegradeComponent } from '../audit-config/a-drivegrade/a-drivegrade.component';
import { AVehicletypeComponent } from '../audit-config/a-vehicletype/a-vehicletype.component';

import { VerificationMasterModule } from '../../admin/masterdata/verification-master.module';
import { MVerificationMethodsComponent } from '../../admin/masterdata/m-verification-methods/m-verification-methods.component';
import { MVerificationChecklistComponent } from '../../admin/masterdata/m-verification-checklist/m-verification-checklist.component';
import { WarrantyMasterModule } from '../../admin/masterdata/warranty-master.module';
import { MSparePartsComponent } from '../../admin/masterdata/m-spare-parts/m-spare-parts.component';
import { MJobCodesComponent } from '../../admin/masterdata/m-job-codes/m-job-codes.component';

export const routes: Routes = [
  { path: "", redirectTo: "status-master", pathMatch: "full" },
  { path: 'status-master', component: MStatusMasterComponent, data: { breadcrumb: 'Status Master', description: 'List of agencies are managed here.' }},
  { path: 'verification-methods', component: MVerificationMethodsComponent, data: { breadcrumb: 'Verification Methods', description: 'List of verification methods are managed here.' }},
  { path: 'verification-checklist', component: MVerificationChecklistComponent, data: { breadcrumb: 'Verification Checklist', description: 'Verification checklist relationship mapping is managed here.' }},
  { path: 'spare-parts', component: MSparePartsComponent, data: { breadcrumb: 'Spare Parts Master', description: 'Spare Parts catalog and unit rates' }},
  { path: 'job-codes', component: MJobCodesComponent, data: { breadcrumb: 'Job Code Master', description: 'Job Codes and labor unit rates' }},
  { path: 'models', component: AuditModelComponent, data: { breadcrumb: 'Models', description: 'List of vehicle models are managed here.' }},
  { path: 'variants', component: AVariantComponent, data: { breadcrumb: 'Variants', description: 'List of variants are managed here.' }},
  { path: 'plants', component: APlantComponent, data: { breadcrumb: 'Plant', description: 'List of plants are managed here.' }},
  { path: 'color', component: AColorComponent, data: { breadcrumb: 'Color', description: 'List of colors are managed here.' }},
  { path: 'transmission', component: ATransmissionComponent, data: { breadcrumb: 'Transmission', description: 'List of transmissions are managed here.' }},
  { path: 'fuel-type', component: AFueltypeComponent, data: { breadcrumb: 'Fuel Type', description: 'List of fuel types are managed here.' }},
  { path: 'stages', component: AStagesComponent, data: { breadcrumb: 'Stages', description: 'List of stages are managed here.' }},
  { path: 'engine-type', component: AEnginetypeComponent, data: { breadcrumb: 'Engine Type', description: 'List of engine types are managed here.' }},
  { path: 'drive-type', component: ADrivetypeComponent, data: { breadcrumb: 'Drive Type', description: 'List of drive types are managed here.' }},
  { path: 'drive-grade', component: ADrivegradeComponent, data: { breadcrumb: 'Drive Grade', description: 'List of drive grades are managed here.' }},
  { path: 'vehicle-type', component: AVehicletypeComponent, data: { breadcrumb: 'Vehicle Type', description: 'List of vehicle types are managed here.' }},
  { path: 'departments', component: MdataDeptsComponent, data: { breadcrumb: 'Departments', description: 'List of agencies are managed here.' }},
  { path: 'sections', component: MSectionsComponent, data: { breadcrumb: 'Sections', description: 'List of agencies are managed here.' }},
  { path: 'categories', component: MCategoriesComponent, data: { breadcrumb: 'Categories', description: 'List of agencies are managed here.' }},
  { path: 'country', component: MCountryComponent, data: { breadcrumb: 'Countries', description: 'List of agencies are managed here.' }},
  { path: 'criticality', component: MCriticalityComponent, data: { breadcrumb: 'Criticality', description: 'List of agencies are managed here.' }},
  { path: 'step', component: MStepComponent, data: { breadcrumb: 'Steps', description: 'List of agencies are managed here.' }},
  { path: 'distributor', component: DistributorComponent, data: { breadcrumb: 'Distributors', description: 'List of agencies are managed here.' }},
  { path: 'department', component: MDepartmentsComponent, data: { breadcrumb: 'Department', description: 'List of departments are managed here.' }},
];


@NgModule({
  declarations: [
    MDepartmentsComponent,
    MStatusMasterComponent,

    MCategoriesComponent,
    MContinentsComponent,
    MCountryComponent,
    MCriticalityComponent,
    MStepComponent,
    AddDepartmentComponent,
    AddStatusmasterComponent,
    // AddSectionComponent,
    // AddCategoryComponent,
    AddContinentComponent,
    AddCountrysComponent,
    AddCriticalityComponent,
    AddStepsComponent,
   // MdataDeptsComponent,
    TestMasterDataComponent,
    AddDistributorComponent,
    DistributorComponent
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
    AuditConfigModule,
    VerificationMasterModule,
    WarrantyMasterModule
  ],

})
export class TestMasterDataModule { }
