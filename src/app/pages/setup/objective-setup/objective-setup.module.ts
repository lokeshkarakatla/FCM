import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectiveSetupComponent } from '../objective-setup/objective-setup.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuditTypesComponent } from './audit-types/audit-types.component';
import { DefectMasterComponent } from './defect-master/defect-master.component';
import { FuctionMasterComponent } from './fuction-master/fuction-master.component';
import { IssueMasterComponent } from './issue-master/issue-master.component';
import { ModuleMasterComponent } from './module-master/module-master.component';
import { MonthyTargetsComponent } from './monthy-targets/monthy-targets.component';
import { AddAuditDiolougeComponent } from './audit-types/add-audit-diolouge/add-audit-diolouge.component';
import { AddDefectComponent } from './defect-master/add-defect/add-defect.component';
import { AddFunctionMasterComponent } from './fuction-master/add-function-master/add-function-master.component';
import { AddModuleMasterComponent } from './module-master/add-module-master/add-module-master.component';
import { AddIssueMasterComponent } from './issue-master/add-issue-master/add-issue-master.component';
import { AddMonthlyTargetsComponent } from './monthy-targets/add-monthly-targets/add-monthly-targets.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { AddPhotoComponent } from './image-gallery/add-photo/add-photo.component';
import { ZonePopComponent } from './defect-master/zone-pop/zone-pop.component';
import { IssuePopComponent } from './defect-master/issue-pop/issue-pop.component';
import { DefectPopupComponent } from './image-gallery/defect-popup/defect-popup.component';
import { ZoneImageDialogComponent } from './image-gallery/zone-image-dialog/zone-image-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
const routes: Routes = [
  { path: '', redirectTo: 'image-gallery', pathMatch: 'full' },
  { path: 'module-master', component: ModuleMasterComponent, data: { breadcrumb: 'Module Master', description: 'Modules for objective audits can be setup and defined here.' } },
  {
    path: 'function-master', component: FuctionMasterComponent, data: {
      breadcrumb: 'Fuction Master', description: 'Functions for each module for objective audits can be setup and defined here.'
    }
  },
  {
    path: 'defect-master', component: DefectMasterComponent, data: {
      breadcrumb: 'Defect Master', description: 'The default list of issues for each defect can be managed here.  User can use default text or over ride it as required while recording the audit.'
    }
  },
  {
    path: 'issue-master', component: IssueMasterComponent, data: {
      breadcrumb: 'Issue Master', description: 'Functions for each module for objective audits can be setup and defined here.'
    }
  },
  { path: 'image-gallery', component: ImageGalleryComponent, data: { breadcrumb: 'Image Gallery', description: 'The list of photos for objective audits can be managed here.' } },
  { path: 'audit-types', component: AuditTypesComponent, data: { breadcrumb: 'Audit Type', description: 'The list of audit types for subjective audits can be managed here.  Demerit options can be setup here for each audit type.' } },
  { path: 'monthly-targets', component: MonthyTargetsComponent, data: { breadcrumb: 'Monthly Targets', description: 'Score targets can be setup here based on audit type and model mix settings for monthly periods.' } }


  // { path: 'checklist', component:ChecklistComponent, data: { breadcrumb: 'Audit' }},
  // { path: 'parameter', component: ParameterComponent, data: { breadcrumb: 'Audit' }},


];

@NgModule({
  declarations: [
    ObjectiveSetupComponent,
    AuditTypesComponent,
    DefectMasterComponent,
    FuctionMasterComponent,
    IssueMasterComponent,
    ModuleMasterComponent,
    MonthyTargetsComponent,
    AddAuditDiolougeComponent,
    AddDefectComponent,
    AddFunctionMasterComponent,
    AddModuleMasterComponent,
    AddMonthlyTargetsComponent,
    AddIssueMasterComponent,
    ImageGalleryComponent,
    AddPhotoComponent,
    ZonePopComponent,
    IssuePopComponent,
    DefectPopupComponent,
    ZoneImageDialogComponent
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
export class ObjectiveSetupModule { }
