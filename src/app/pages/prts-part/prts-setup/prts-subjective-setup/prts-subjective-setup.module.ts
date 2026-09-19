import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';

// Angular Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';

// Components
import { PrtsSubjectiveSetupComponent } from './prts-subjective-setup.component';
import { SubSetupAuditTypesComponent } from './sub-setup-audit-types/sub-setup-audit-types.component';
import { SubSetupModuleMasterComponent } from './sub-setup-module-master/sub-setup-module-master.component';
import { SubSetupFunctionMasterComponent } from './sub-setup-function-master/sub-setup-function-master.component';
import { SubSetupImageGalleryComponent } from './sub-setup-image-gallery/sub-setup-image-gallery.component';
import { SubSetupDefectMasterComponent } from './sub-setup-defect-master/sub-setup-defect-master.component';
import { SubSetupIssuesMasterComponent } from './sub-setup-issues-master/sub-setup-issues-master.component';
import { SubSetupMontlyTargetsComponent } from './sub-setup-montly-targets/sub-setup-montly-targets.component';

// Add Components
import { AddSubSetupAuditTypesComponent } from './sub-setup-audit-types/add-sub-setup-audit-types/add-sub-setup-audit-types.component';
import { AddSubSetupDefectMasterComponent } from './sub-setup-defect-master/add-sub-setup-defect-master/add-sub-setup-defect-master.component';
import { AddSubSetupFunctionMasterComponent } from './sub-setup-function-master/add-sub-setup-function-master/add-sub-setup-function-master.component';
import { AddSubSetupImageGalleryComponent } from './sub-setup-image-gallery/add-sub-setup-image-gallery/add-sub-setup-image-gallery.component';
import { AddSubSetupIssuesMasterComponent } from './sub-setup-issues-master/add-sub-setup-issues-master/add-sub-setup-issues-master.component';
import { AddSubSetupModuleMasterComponent } from './sub-setup-module-master/add-sub-setup-module-master/add-sub-setup-module-master.component';
import { AddSubSetupMonthlyTargetsComponent } from './sub-setup-montly-targets/add-sub-setup-monthly-targets/add-sub-setup-monthly-targets.component';

// Dialog Components
import { AddSubSetupDefectDialogComponent } from './sub-setup-image-gallery/add-sub-setup-defect-dialog/add-sub-setup-defect-dialog.component';
import { DefectMasterIssueDialogComponent } from './sub-setup-defect-master/defect-master-issue-dialog/defect-master-issue-dialog.component';
import { ImageGallaryZoneDialogComponent } from './sub-setup-image-gallery/image-gallary-zone-dialog/image-gallary-zone-dialog.component';

const routes: Routes = [
  { path: '', redirectTo: 'sub-setup-image-gallery', pathMatch: 'full' },
  {
    path: 'sub-setup-module-master',
    component: SubSetupModuleMasterComponent,
    data: {
      breadcrumb: 'Subjective Setup Module Master',
      description: 'Modules for subjective audits can be setup and defined here.'
    }
  },
  {
    path: 'sub-setup-function-master',
    component: SubSetupFunctionMasterComponent,
    data: {
      breadcrumb: 'Subjective Setup Function Master',
      description: 'Functions for each module for subjective audits can be setup and defined here.'
    }
  },
  {
    path: 'sub-setup-defect-master',
    component: SubSetupDefectMasterComponent,
    data: {
      breadcrumb: 'Subjective Setup Defect Master',
      description: 'Manage default issues for each defect. Users can use or override this text during audits.'
    }
  },
  {
    path: 'sub-setup-issues-master',
    component: SubSetupIssuesMasterComponent,
    data: {
      breadcrumb: 'Subjective Setup Issues Master',
      description: 'Issues for each defect can be managed and configured here.'
    }
  },
  {
    path: 'sub-setup-image-gallery',
    component: SubSetupImageGalleryComponent,
    data: {
      breadcrumb: 'Subjective Setup Image Gallery',
      description: 'Manage photos used for subjective audits.'
    }
  },
  {
    path: 'sub-setup-audit-types',
    component: SubSetupAuditTypesComponent,
    data: {
      breadcrumb: 'Subjective Setup Audit Types',
      description: 'Audit types and demerit options can be configured here.'
    }
  },
  {
    path: 'sub-setup-monthly-targets',
    component: SubSetupMontlyTargetsComponent,
    data: {
      breadcrumb: 'Subjective Setup Monthly Targets',
      description: 'Setup monthly score targets based on audit type and model mix.'
    }
  }
];

@NgModule({
  declarations: [
    PrtsSubjectiveSetupComponent,
    SubSetupAuditTypesComponent,
    SubSetupModuleMasterComponent,
    SubSetupFunctionMasterComponent,
    SubSetupImageGalleryComponent,
    SubSetupDefectMasterComponent,
    SubSetupIssuesMasterComponent,
    SubSetupMontlyTargetsComponent,
    AddSubSetupAuditTypesComponent,
    AddSubSetupDefectMasterComponent,
    AddSubSetupFunctionMasterComponent,
    AddSubSetupImageGalleryComponent,
    AddSubSetupIssuesMasterComponent,
    AddSubSetupModuleMasterComponent,
    AddSubSetupMonthlyTargetsComponent,
    AddSubSetupDefectDialogComponent,
    DefectMasterIssueDialogComponent,
    ImageGallaryZoneDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule
  ]
})
export class PrtsSubjectiveSetupModule {}
