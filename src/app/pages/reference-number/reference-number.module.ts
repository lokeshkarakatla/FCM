import { HighchartsChartModule } from 'highcharts-angular';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { BaseInfoComponent } from './base-info/base-info.component';
import { SummaryComponent } from './summary/summary.component';
import { UpdatesComponent } from './updates/updates.component';
import { CapaaaComponent } from './capaaa/capaaa.component';
import { DocumentsComponent } from './documents/documents.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddNotesComponent } from './base-info/add-notes/add-notes.component';
import { AddDocumentComponent } from './documents/add-document/add-document.component';
import { UploadDocumentsComponent } from './notes/upload-documents/upload-documents.component';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NotesComponent } from './notes/notes.component';
import { TimelineComponent } from './timeline/timeline.component';

import { NoteComponent } from '../prts/note/note.component';

// New 8D Process components
import { InvestigationComponent } from './investigation/investigation.component';
import { WarrantyClaimComponent } from './warranty-claim/warranty-claim.component';
import { FieldDispatchComponent } from './field-dispatch/field-dispatch.component';
import { TechnicalReviewComponent } from './technical-review/technical-review.component';
import { ContainmentComponent } from './containment/containment.component';
import { SupplierActionComponent } from './supplier-action/supplier-action.component';
import { ImplementationComponent } from './implementation/implementation.component';
import { VerificationComponent } from './verification/verification.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { PreventionComponent } from './prevention/prevention.component';
import { RecognitionComponent } from './recognition/recognition.component';
import { ClosureComponent } from './closure/closure.component';

// 8D Action Dialogs
import { ContainmentActionDialogComponent } from './dialogs/containment-action-dialog/containment-action-dialog.component';
import { SupplierActionDialogComponent } from './dialogs/supplier-action-dialog/supplier-action-dialog.component';
import { ActivityDialogComponent } from './dialogs/activity-dialog/activity-dialog.component';
import { SpareDialogComponent } from './dialogs/spare-dialog/spare-dialog.component';
import { ServiceDialogComponent } from './dialogs/service-dialog/service-dialog.component';
import { DispatchDialogComponent } from './dialogs/dispatch-dialog/dispatch-dialog.component';
import { MonitoringDialogComponent } from './dialogs/monitoring-dialog/monitoring-dialog.component';
import { PreventionDialogComponent } from './dialogs/prevention-dialog/prevention-dialog.component';
import { RecognitionDialogComponent } from './dialogs/recognition-dialog/recognition-dialog.component';



const routes: Routes = [
  { path: "", redirectTo: "base-info", pathMatch: "full" },

  {
    path: "base-info",
    component: BaseInfoComponent,
    pathMatch: "full",
    data: { breadcrumb: 'Base Info' }
  },
  {
    path: "summary",
    component: SummaryComponent,
    data: { breadcrumb: 'Summary' }
  },
  {
    path: "timeline",
    component: TimelineComponent,
    pathMatch: "full",
    data: { breadcrumb: 'Timeline', description: "Alerts", }
  },
  {
    path: "investigation",
    component: InvestigationComponent,
    pathMatch: "full",
    data: { breadcrumb: 'Investigation' }
  },
  {
    path: "warranty-claim",
    component: WarrantyClaimComponent,
    pathMatch: "full",
    data: { breadcrumb: 'Warranty Claim' }
  },
  {
    path: "field-dispatch",
    component: FieldDispatchComponent,
    pathMatch: "full",
    data: { breadcrumb: 'Field Dispatch' }
  },
  {
    path: "technical-review",
    component: TechnicalReviewComponent,
    pathMatch: "full",
    data: { breadcrumb: 'Technical Review' }
  },
  {
    path: "containment",
    component: ContainmentComponent,
    pathMatch: "full",
    data: { breadcrumb: 'Containment' }
  },
  {
    path: "supplier-action",
    component: SupplierActionComponent,
    pathMatch: "full",
    data: { breadcrumb: 'Supplier Action' }
  },
  {
    path: "capa",
    component: CapaaaComponent,
    data: { breadcrumb: 'CAPA' }
  },
  // Keep old route for backwards compatibility
  {
    path: "capaa",
    redirectTo: "capa",
    pathMatch: "full"
  },
  {
    path: "implementation",
    component: ImplementationComponent,
    pathMatch: "full",
    data: { breadcrumb: 'Implementation' }
  },
  {
    path: "verification",
    component: VerificationComponent,
    pathMatch: "full",
    data: { breadcrumb: 'Verification' }
  },
  {
    path: "monitoring",
    component: MonitoringComponent,
    pathMatch: "full",
    data: { breadcrumb: 'Monitoring' }
  },
  {
    path: "prevention",
    component: PreventionComponent,
    pathMatch: "full",
    data: { breadcrumb: 'Prevention' }
  },
  {
    path: "recognition",
    component: RecognitionComponent,
    pathMatch: "full",
    data: { breadcrumb: 'Recognition' }
  },
  {
    path: "closure",
    component: ClosureComponent,
    pathMatch: "full",
    data: { breadcrumb: 'Closure' }
  },
  {
    path: "documents",
    component: DocumentsComponent,
    pathMatch: "full",
    data: { breadcrumb: 'Documents', description: "Grid-View", }
  },
  // Keep old route for backwards compatibility
  {
    path: "documnets",
    redirectTo: "documents",
    pathMatch: "full"
  },
  {
    path: "notes",
    component: NotesComponent,
    pathMatch: "full",
    data: { breadcrumb: 'Notes' }
  },
  {
    path: "updates",
    component: UpdatesComponent,
    data: { breadcrumb: 'Updates', }
  },
]


@NgModule({
  declarations: [
    BaseInfoComponent,
    SummaryComponent,
    UpdatesComponent,
    CapaaaComponent,
    DocumentsComponent,
    AddNotesComponent,
    AddDocumentComponent,
    NotesComponent,
    TimelineComponent,
    // New 8D Process components
    InvestigationComponent,
    WarrantyClaimComponent,
    FieldDispatchComponent,
    TechnicalReviewComponent,
    ContainmentComponent,
    SupplierActionComponent,
    ImplementationComponent,
    VerificationComponent,
    MonitoringComponent,
    PreventionComponent,
    RecognitionComponent,
    ClosureComponent,
    // 8D Action Dialogs
    ContainmentActionDialogComponent,
    SupplierActionDialogComponent,
    ActivityDialogComponent,
    SpareDialogComponent,
    ServiceDialogComponent,
    DispatchDialogComponent,
    MonitoringDialogComponent,
    PreventionDialogComponent,
    RecognitionDialogComponent,
    UploadDocumentsComponent,
  ],
  entryComponents: [
    ContainmentActionDialogComponent,
    SupplierActionDialogComponent,
    ActivityDialogComponent,
    SpareDialogComponent,
    ServiceDialogComponent,
    DispatchDialogComponent,
    MonitoringDialogComponent,
    PreventionDialogComponent,
    RecognitionDialogComponent,
    UploadDocumentsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    NgxChartsModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    HighchartsChartModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSelectModule,
    FormsModule,
    MatCheckboxModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class ReferenceModule { }
