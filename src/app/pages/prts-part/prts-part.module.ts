import { PrtsSetupComponent } from './prts-setup/prts-setup.component';
import { SetupComponent } from '../setup/setup.component';
import { GridViewComponent } from '../prts/grid-prts/grid-view/grid-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrtsPart1Component } from './prts-part.component';
import { PrtsDashboardComponent } from './prts-dashboard/prts-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { SharedModule } from 'src/app/shared/shared.module';
import { PrtsNewIssueComponent } from './prts-new-issue/prts-new-issue.component';
import { PrtsNewAlertsComponent } from './prts-new-alerts/prts-new-alerts.component';
import { PrtsNewArchiveComponent } from './prts-new-archive/prts-new-archive.component';
//import { SubjectiveAuditDashboardComponent } from './prts-dashboard/subjective-audit-dashboard/subjective-audit-dashboard.component';
//import { ObjectiveAuditDashboardComponent } from './prts-dashboard/objective-audit-dashboard/objective-audit-dashboard.component';
import { PrtsDRolesComponent } from './prts-d-roles/prts-d-roles.component';
import { AddPrtsDescriptionComponent } from './prts-d-roles/add-prts-description/add-prts-description.component';
import { AddPrtsDocumentComponent } from './prts-d-roles/add-prts-document/add-prts-document.component';
import { AddPrtsRolesComponent } from './prts-d-roles/add-prts-roles/add-prts-roles.component';
import { AddPrtsPillarComponent } from './prts-d-roles/add-prts-pillar/add-prts-pillar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PrtsIssueStatusComponent } from './prts-issue-status/prts-issue-status.component';
import { PrtsIssueNewComponent } from './prts-issue-new/prts-issue-new.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
// import { NgxChartsModule } from '@swimlane/ngx-charts';
const routes: Routes = [
  { path: "", redirectTo: "newissue", pathMatch: "full" },


  {
    path: "prts-d-role",
    component: PrtsDRolesComponent,
    pathMatch: "full",
    data:{hideBreadcrumb: true}
  },
  {
    path: "prtsdashboard",
    component: PrtsDashboardComponent,
    loadChildren: () =>
      import("./prts-dashboard/prts-dashboard.module").then((m) => m.PrtsDashboardModule),
    data: { description: 'PRTS-Dashboard',hideBreadcrumb: true }
  },
  {
    path: "prtsnewissue",
    component: PrtsNewIssueComponent,
    loadChildren: () =>
      import("./prts-new-issue/prts-new-issue.module").then((m) => m.PrtsNewIssueModule),
    data: { breadcrumb: 'PRTS-New Issue', description: "PRTS-New Issue",hideBreadcrumb: true }
  },
  {
    path: "prtsissuestatus",
    component: PrtsIssueStatusComponent,
    loadChildren: () =>
      import("./prts-issue-status/prts-issue-status.module").then((m) => m.PrtsIssueStatusModule),
  data:{hideBreadcrumb: true}
  },
  {
    path: "grid-one",
    component: GridViewComponent,
    pathMatch: "full",
    data: { breadcrumb: 'Grid-View', description: "Grid-View",hideBreadcrumb: true }
  },
  {
    path: "newissue",
    component: PrtsIssueNewComponent,
    pathMatch: "full",
    data:{hideBreadcrumb: true}

  },
  {
    path: "new-alerts",
    component: PrtsNewAlertsComponent,
    pathMatch: "full",
    data: { breadcrumb: 'Alerts', description: "Alerts",hideBreadcrumb: true }
  },
  {
    path: "new-archive",
    component: PrtsNewArchiveComponent,
    pathMatch: "full",
    data:{hideBreadcrumb: true}

  },
  {
    path: "prtssetup",
    component: PrtsSetupComponent,
    loadChildren: () =>
      import("./prts-setup/prts-setup.module").then((m) => m.PrtsSetupModule),
    data: { breadcrumb: 'Setup', description: 'This page is used to Objective Setup',hideBreadcrumb: true }
  },
]


@NgModule({
  declarations: [
    PrtsPart1Component,
    PrtsDashboardComponent,
    PrtsNewIssueComponent,
    PrtsNewAlertsComponent,
    PrtsNewArchiveComponent,
    //SubjectiveAuditDashboardComponent,
    // ObjectiveAuditDashboardComponent,
    PrtsDRolesComponent,
    AddPrtsDescriptionComponent,
    AddPrtsDocumentComponent,
    AddPrtsRolesComponent,
    AddPrtsPillarComponent,
    PrtsIssueNewComponent
  ],
  imports: [
    MatSelectModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule,
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,

    //NgxChartsModule,
    // OwlDateTimeModule,
    // OwlNativeDateTimeModule,
    CalendarModule.forRoot({
      provide: DateAdapter,

      useFactory: adapterFactory,
    }),
    SharedModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
    NgxChartsModule,
  ]
})
export class PrtsPartModule { }
