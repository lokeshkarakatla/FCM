import { ActionGridCalenderComponent } from './action-grid-calender/action-grid-calender.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrtsComponent } from './prts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { AddInitiativeComponent } from './add-initiative/add-initiative.component';
import { BaseInfoComponent } from './base-info/base-info.component';
import { D1Component } from './d1/d1.component';
import { D2Component } from './d2/d2.component';

import { D3Component } from './d3/d3.component';
import { D4Component } from './d4/d4.component';
import { D3BComponent } from './d3-b/d3-b.component';
import { SummaryComponent } from './summary/summary.component';
import { D4BComponent } from './d4-b/d4-b.component';
import { D5Component } from './d5/d5.component';
import { D6Component } from './d6/d6.component';
import { D7Component } from './d7/d7.component';
import { GridPrtsComponent } from './grid-prts/grid-prts.component';
import { GridViewComponent } from './grid-prts/grid-view/grid-view.component';
import { AddintiativeComponent } from './grid-prts/addintiative/addintiative.component';
import { ArchivePrtsComponent } from './grid-prts/archive-prts/archive-prts.component';
import { WhyComponent } from './why/why.component';
import { MonitorComponent } from './monitor/monitor.component';
import { ClosureComponent } from './closure/closure.component';
import { GridColumnComponent } from './grid-prts/grid-column/grid-column.component';
import { NoteComponent } from './note/note.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import { ActionPrtsComponent } from './action-prts/action-prts.component';
import { LogauditresultComponent } from './logauditresult/logauditresult.component';
import { ActionMoniterComponent } from './action-prts/action-moniter/action-moniter.component';
import { ActionDeployComponent } from './action-prts/action-deploy/action-deploy.component';
import { ClosurNoteComponent } from './closure/closur-note/closur-note.component';
import { AddDocumentComponent } from './closure/closur-note/add-document/add-document.component';

import { SkipDialogComponent } from './skip-dialog/skip-dialog.component';
import { AddCuaseComponent } from './add-cuase/add-cuase.component';
import { DiagnosisComponent } from './action-prts/diagnosis/diagnosis.component';
import { FishboneComponent } from './action-prts/fishbone/fishbone.component';
import { AlertsComponent } from './alerts/alerts.component';
import { ActionDocumentComponent } from './action-prts/action-document/action-document.component';
import { AddActionDocumentComponent } from './action-prts/action-document/add-action-document/add-action-document.component';
import { ActionDocumentTwoComponent } from './action-prts/action-document-two/action-document-two.component';
import { ActionDocumentTwoDialogComponent } from './action-prts/action-document-two/action-document-two-dialog/action-document-two-dialog.component';
import { ActionDocumentTypeComponent } from './action-prts/action-document/action-document-type/action-document-type.component';
import { ActionDocumentTwoTypeComponent } from './action-prts/action-document-two/action-document-two-type/action-document-two-type.component';
import { WhyTwoComponent } from './action-prts/why-two/why-two.component';
import { ActionDeployTwoComponent } from './action-prts/action-deploy-two/action-deploy-two.component';
import { ActionMoniterTwoComponent } from './action-prts/action-moniter-two/action-moniter-two.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MonitorDialogComponent } from './monitor/monitor-dialog/monitor-dialog.component';
import { QuillModule } from 'ngx-quill';
import { MitigationComponent } from './mitigation/mitigation.component';
import { ActiveGridDialogComponent } from '../sqm/process-audits/paudits-active-audits/activeaudits-reference/active-grid-dialog/active-grid-dialog.component';
import { AuditDonePopupComponent } from '../sqm/process-audits/paudits-active-audits/activeaudits-reference/active-grid-dialog/audit-done-popup/audit-done-popup.component';
// import { DelayedComponent } from './delayed/delayed.component';



const routes: Routes = [
  { path: "", redirectTo: "base-info", pathMatch: "full" },

  {
    path: "action-grid-calender",
    component: ActionGridCalenderComponent,
    loadChildren: () =>
      import("./action-grid-calender/action-grid-calender.module").then((m) => m.ActionGridCalenderModule),
    data: { breadcrumb: 'Actions Grid view', description: 'This page is used to Actions', hideBreadcrumb: true }

  },
  {
    path: "action",
    component: ActionPrtsComponent,
    pathMatch: "full",
    data: { breadcrumb: 'PRTS(Archives/Subject/Actions) ', description: "Grid view screen", hideBreadcrumb: true }
  },
  {
    path: "alerts",
    component: AlertsComponent,
    pathMatch: "full",
    data: { breadcrumb: 'Alerts', description: "Grid view screen for Alerts", hideBreadcrumb: true }
  },
  {
    path: "actionmoniter",
    component: ActionMoniterComponent,
    pathMatch: "full",
    data: { breadcrumb: 'Monitering', description: "Grid view screen", hideBreadcrumb: true }
  },

  {
    path: "actionmoniter-two",
    component: ActionMoniterTwoComponent,
    pathMatch: "full",
    data: { breadcrumb: 'Monitering', description: "Grid view screen", hideBreadcrumb: true }
  },

  {
    path: "actiondocument",
    component: ActionDocumentComponent,
    pathMatch: "full",
    data: { breadcrumb: 'Document', description: "Grid View Screen", hideBreadcrumb: true }
  },
  {
    path: "fish",
    component: FishboneComponent,
    pathMatch: "full",
    data: { breadcrumb: 'Fishbone', description: "Grid view screen", hideBreadcrumb: true }
  },
  {
    path: "diagnosis",
    component: DiagnosisComponent,
    data: { breadcrumb: 'Diagnosis', description: "Grid view screen", hideBreadcrumb: true }
  },
  {
    path: "actiondocumenttwo",
    component: ActionDocumentTwoComponent,
    data: { breadcrumb: 'Document', description: "Grid view screen", hideBreadcrumb: true }
  },
  {
    path: "deploy",
    component: ActionDeployComponent,
    pathMatch: "full",
    data: { breadcrumb: 'Deployment', description: "Grid view screen", hideBreadcrumb: true }
  },

  {
    path: "deploy-two",
    component: ActionDeployTwoComponent,
    data: { breadcrumb: 'Deployment', description: "Grid view screen", hideBreadcrumb: true }
  },
  {
    path: "grid",
    component: GridPrtsComponent,
    data: { breadcrumb: 'Grid veiw', description: "Grid view screen", hideBreadcrumb: true }
  },
  {
    path: "intiative",
    component: AddintiativeComponent,
    data: { breadcrumb: 'Add ', description: "Grid view screen", hideBreadcrumb: true }
  },
  {
    path: "archive-prts",
    component: ArchivePrtsComponent,
    data: { breadcrumb: 'Grid veiw', description: "Grid view screen", hideBreadcrumb: true }
  },
  {
    path: "gridview",
    component: GridViewComponent,
    data: { breadcrumb: 'Grid veiw', description: "Grid view screen", hideBreadcrumb: true }
  },
  {
    path: "mitigation",
    component: MitigationComponent,
    data: { breadcrumb: 'Mitigation', description: "Mitigation screen", hideBreadcrumb: true }
  },
  {
    path: "prts",
    component: PrtsComponent,
    data: { breadcrumb: 'Grid veiw', description: "Grid view screen", hideBreadcrumb: true }
  },
  {
    path: "base-info",
    component: BaseInfoComponent,
    data: { breadcrumb: 'PRTS(Archives/Subject/Base Information)', description: "Base information screen", hideBreadcrumb: true }
  },
  {
    path: "d1",
    component: D1Component,
    data: {
      breadcrumb: 'PRTS(Archives/Subject/D1) ', description: "This window is used to do analysis as per the checklist below and the exceptions are evaluated further on the next screen in terms of WHY WHY  Analysis, identification of root causes, monitoring and horizontal applications."
      , hideBreadcrumb: true
    }
  },
  {
    path: "d2",
    component: D2Component,
    data: {
      breadcrumb: 'PRTS(Archives/Subject/D2)  ', description: "This window is used to do analysis as per the checklist below and the exceptions are evaluated further on the next screen in terms of WHY WHY  Analysis, identification of root causes, monitoring and horizontal applications."
      , hideBreadcrumb: true
    }

  },
  {
    path: "d3",
    component: D3Component,
    data: {
      breadcrumb: 'PRTS(Archives/Subject/D3-A)  ', description: "This window is used to do analysis as per the checklist below and the exceptions are evaluated further on the next screen in terms of WHY WHY  Analysis, identification of root causes, monitoring and horizontal applications."
      , hideBreadcrumb: true
    }

  },
  {
    path: "d3-b",
    component: D3BComponent,
    data: {
      breadcrumb: 'PRTS(Archives/Subject/D3-B)  ', description: "This window is used to do analysis as per the checklist below and the exceptions are evaluated further on the next screen in terms of WHY WHY  Analysis, identification of root causes, monitoring and horizontal applications."
      , hideBreadcrumb: true
    }

  },
  {
    path: "d4",
    component: D4Component,
    data: {
      breadcrumb: 'PRTS(Archives/Subject/D4-A) ', description: "This window is used to do analysis as per the checklist below and the exceptions are evaluated further on the next screen in terms of WHY WHY  Analysis, identification of root causes, monitoring and horizontal applications."
      , hideBreadcrumb: true
    }
  },
  {
    path: "d4-b",
    component: D4BComponent,
    data: {
      breadcrumb: 'PRTS(Archives/Subject/D4-B)  ', description: "This window is used to do analysis as per the checklist below and the exceptions are evaluated further on the next screen in terms of WHY WHY  Analysis, identification of root causes, monitoring and horizontal applications."
      , hideBreadcrumb: true
    }
  },
  {
    path: "d5",
    component: D5Component,
    data: {
      breadcrumb: 'PRTS(Archives/Subject/D5) ', description: "This window is used to do analysis as per the checklist below and the exceptions are evaluated further on the next screen in terms of WHY WHY  Analysis, identification of root causes, monitoring and horizontal applications."
      , hideBreadcrumb: true
    }
  },
  {
    path: "d6",
    component: D6Component,
    data: {
      breadcrumb: 'PRTS(Archives/Subject/D6) ', description: "This window is used to do analysis as per the checklist below and the exceptions are evaluated further on the next screen in terms of WHY WHY  Analysis, identification of root causes, monitoring and horizontal applications."
      , hideBreadcrumb: true
    }
  },
  {
    path: "d7",
    component: D7Component,
    data: {
      breadcrumb: 'PRTS(Archives/Subject/D7) ', description: "This window is used to do analysis as per the checklist below and the exceptions are evaluated further on the next screen in terms of WHY WHY  Analysis, identification of root causes, monitoring and horizontal applications."
      , hideBreadcrumb: true
    }
  },
  {
    path: "why",
    component: WhyComponent,
    data: { breadcrumb: 'PRTS 5 Why', description: "The summary information about the request comes here.  This cover %WH information as well as well meta data, issue description, assignment and containment details.", hideBreadcrumb: true }
  },

  {
    path: "why-two",
    component: WhyTwoComponent,
    data: { breadcrumb: 'PRTS 5 Why', description: "The summary information about the request comes here.  This cover %WH information as well as well meta data, issue description, assignment and containment details.", hideBreadcrumb: true }
  },
  {
    path: "moniter",
    component: MonitorComponent,
    data: {
      breadcrumb: 'PRTS(Archives/Subject/Matrix)', description: "The list of 7D process steps appear here in a tabular layout and the raiser can navigate the workflow step by step while assigning each stage to a specific role.  There is a facility for the raiser to enter notes that can act as an initial input for the requested step."
      , hideBreadcrumb: true
    }
  },
  {
    path: "closure",
    component: ClosureComponent,
    data: { hideBreadcrumb: true }
  },
  {
    path: "closure-note",
    component: ClosurNoteComponent,
    data: { breadcrumb: ' Closure- Note', description: "Closure", hideBreadcrumb: true }
  },
  {
    path: "summary",
    component: SummaryComponent,
    data: { breadcrumb: 'PRTS(Archives/Subject/Summary) ', description: "Summary Screen", hideBreadcrumb: true }
  },
  // {
  //   path: "monitordialog",
  //   component: MonitorDialogComponent,
  //   data: { breadcrumb: 'PRTS(Archives/Subject/Monitor Dialog) ', description: "Monitor Dialog Screen" }
  // },

]
@NgModule({
  declarations: [
    D3Component,
    PrtsComponent,
    AddInitiativeComponent,
    BaseInfoComponent,
    D1Component,
    D2Component,
    AuditDonePopupComponent,
    D3BComponent,
    D4Component,
    SummaryComponent,
    D4BComponent,
    D5Component,
    D6Component,
    D7Component,
    GridPrtsComponent,
    GridViewComponent,
    AddintiativeComponent,
    ArchivePrtsComponent,
    WhyComponent,
    MonitorComponent,
    ClosureComponent,
    GridColumnComponent,
    NoteComponent,
    ActionPrtsComponent,
    LogauditresultComponent,
    ActionMoniterComponent,
    ActionDeployComponent,
    ActiveGridDialogComponent,

    ClosurNoteComponent,
    AddDocumentComponent,
    D3BComponent,
    SkipDialogComponent,
    AddCuaseComponent,
    DiagnosisComponent,
    FishboneComponent,

    AlertsComponent,
    ActionDocumentComponent,
    AddActionDocumentComponent,
    ActionDocumentTwoComponent,
    ActionDocumentTwoDialogComponent,
    ActionDocumentTypeComponent,
    ActionDocumentTwoTypeComponent,
    WhyTwoComponent,
    ActionDeployTwoComponent,
    ActionMoniterTwoComponent,
    MonitorDialogComponent,
    MitigationComponent,
    // DelayedComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    SharedModule,
    MatDialogModule,
    MatPaginatorModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
    NgxChartsModule,
    QuillModule.forRoot(),


  ]
})
export class PrtsModule { }
