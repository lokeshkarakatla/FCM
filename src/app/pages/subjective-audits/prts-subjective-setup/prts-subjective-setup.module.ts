import { DragulaModule, DragulaService } from 'ng2-dragula';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubSetupAuditTypesComponent } from './sub-setup-audit-types/sub-setup-audit-types.component';
import { SubSetupModuleMasterComponent } from './sub-setup-module-master/sub-setup-module-master.component';
import { SubSetupFunctionMasterComponent } from './sub-setup-function-master/sub-setup-function-master.component';
import { SubSetupImageGalleryComponent } from './sub-setup-image-gallery/sub-setup-image-gallery.component';
import { SubSetupDefectMasterComponent } from './sub-setup-defect-master/sub-setup-defect-master.component';
import { SubSetupIssuesMasterComponent } from './sub-setup-issues-master/sub-setup-issues-master.component';
import { SubSetupMontlyTargetsComponent } from './sub-setup-montly-targets/sub-setup-montly-targets.component';
import { PrtsSubjectiveSetupComponent } from './prts-subjective-setup.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddSubSetupAuditTypesComponent } from './sub-setup-audit-types/add-sub-setup-audit-types/add-sub-setup-audit-types.component';
import { AddSubSetupDefectMasterComponent } from './sub-setup-defect-master/add-sub-setup-defect-master/add-sub-setup-defect-master.component';
import { AddSubSetupFunctionMasterComponent } from './sub-setup-function-master/add-sub-setup-function-master/add-sub-setup-function-master.component';
import { AddSubSetupImageGalleryComponent } from './sub-setup-image-gallery/add-sub-setup-image-gallery/add-sub-setup-image-gallery.component';
import { AddSubSetupIssuesMasterComponent } from './sub-setup-issues-master/add-sub-setup-issues-master/add-sub-setup-issues-master.component';
import { AddSubSetupModuleMasterComponent } from './sub-setup-module-master/add-sub-setup-module-master/add-sub-setup-module-master.component';
import { AddSubSetupMonthlyTargetsComponent } from './sub-setup-montly-targets/add-sub-setup-monthly-targets/add-sub-setup-monthly-targets.component';
import { AddSubSetupDefectDialogComponent } from './sub-setup-image-gallery/add-sub-setup-defect-dialog/add-sub-setup-defect-dialog.component';
import { DefectMasterIssueDialogComponent } from './sub-setup-defect-master/defect-master-issue-dialog/defect-master-issue-dialog.component';
import { ImageGallaryZoneDialogComponent } from './sub-setup-image-gallery/image-gallary-zone-dialog/image-gallary-zone-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { SectionComponent } from './section/section.component';
import { PartMasterComponent } from './part-master/part-master.component';
import { SectionPopComponent } from './sub-setup-module-master/section-pop/section-pop.component';
import { AddPartComponent } from './part-master/add-part/add-part.component';
import { SubSetupAgencyTargetsComponent } from './sub-setup-agency-targets/sub-setup-agency-targets.component';
import { AddSubSetupAgencyTargetsComponent } from './sub-setup-agency-targets/add-sub-setup-agency-targets/add-sub-setup-agency-targets.component';
import { ModelspopComponent } from './sub-setup-module-master/section-pop/modelspop/modelspop.component';
import { ModulePopComponent } from './sub-setup-defect-master/module-pop/module-pop.component';
import { SetupImgPopComponent } from './sub-setup-module-master/setup-img-pop/setup-img-pop.component';

const routes: Routes = [
  { path: '', redirectTo: 'sub-setup-audit-types', pathMatch: 'full' },
  { path: 'sub-setup-module-master', component: SubSetupModuleMasterComponent },
  {
    path: 'sub-setup-function-master', component: SubSetupFunctionMasterComponent, data: {
      breadcrumb: 'Fuction Master', description: 'Functions for each module for objective audits can be setup and defined here.'
    }
  },
  {
    path: 'sub-setup-defect-master', component: SubSetupDefectMasterComponent, data: {
     
    }
  },
  {
    path: 'sub-setup-issues-master', component: SubSetupIssuesMasterComponent, data: {
     
    }
  },
  { path: 'sub-setup-image-gallery', component: SubSetupImageGalleryComponent },
  { path: 'sub-setup-audit-types', component: SubSetupAuditTypesComponent,  },
  { path: 'sub-setup-monthly-targets', component: SubSetupMontlyTargetsComponent,  },
  { path: 'sub-setup-agency-targets', component: SubSetupAgencyTargetsComponent, },
  { path: 'section', component: SectionComponent, },
  { path: 'part', component: PartMasterComponent},



];

@NgModule({
  declarations: [
    SubSetupAuditTypesComponent,
    SubSetupModuleMasterComponent,
    SubSetupFunctionMasterComponent,
    SubSetupImageGalleryComponent,
    SubSetupDefectMasterComponent,
    SubSetupIssuesMasterComponent,
    SubSetupMontlyTargetsComponent,
    PrtsSubjectiveSetupComponent,
    AddSubSetupAuditTypesComponent,
    AddSubSetupDefectMasterComponent,
    AddSubSetupFunctionMasterComponent,
    AddSubSetupImageGalleryComponent,
    AddSubSetupIssuesMasterComponent,
    AddSubSetupModuleMasterComponent,
    AddSubSetupMonthlyTargetsComponent,
    AddSubSetupDefectDialogComponent,
    DefectMasterIssueDialogComponent,
    ImageGallaryZoneDialogComponent,
    SectionComponent,
    PartMasterComponent,

    SectionPopComponent,
    AddPartComponent,
    SubSetupAgencyTargetsComponent,
    AddSubSetupAgencyTargetsComponent,
    ModelspopComponent,
    ModulePopComponent,
    SetupImgPopComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    SharedModule,
    MatDialogModule,
    MatPaginatorModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
    DragulaModule

  ],
  providers: [DragulaService]
})
export class PrtsSubjectiveSetupModule { }
