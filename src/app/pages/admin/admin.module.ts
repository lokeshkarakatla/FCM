import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { EscalationComponent } from './escalation/escalation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventLogComponent } from './event-log/event-log.component';
import { LookupComponent } from './lookup/lookup.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { SettingsComponent } from './settings/settings.component';
import { Routes, RouterModule } from '@angular/router';
import { AddLookupDialogComponent } from './lookup/add-lookup-dialog/add-lookup-dialog.component';
import { DragulaModule, DragulaService } from 'ng2-dragula';
import { CredentialsComponent } from './credentials/credentials.component';
import { AuditConfigComponent } from './audit-config/audit-config.component';
import { MasterdataComponent } from './masterdata/masterdata.component';
import { DistributorComponent } from './masterdata/distributor/distributor.component';
import { AddDistributorComponent } from './masterdata/distributor/add-distributor/add-distributor.component';
import { MDepartmentsComponent } from './masterdata/m-departments/m-departments.component';
import { MdataDeptsComponent } from '../setups/test-master-data/mdata-depts/mdata-depts.component';
  // for mat-raised-button and button features



const routes: Routes = [
  { path: "", redirectTo: "manage-users", pathMatch: "full" },

  {
    path: "manage-users",
    component: ManageUserComponent,
    loadChildren: () =>
      import("./manage-user/manage-user.module").then((m) => m.ManageUserModule),
    data: { breadcrumb: 'Manage Users', description: 'This page is used to manage User' }
  },
  {
    path: "escalation",
    component: EscalationComponent,
    loadChildren: () =>
      import("./escalation/escalation.module").then((m) => m.EscalationModule),
    data: { breadcrumb: 'Escalation Matrix', description: 'The delay thresholds that drives 4 levels of escalation for the action items are configured on this screen' }
  },




  {
    path: "settings",
    component: SettingsComponent,
    pathMatch: "full",
    data: { breadcrumb: 'Preferences', description: "Default settings that apply across the entire application are updated here." }
  },
  {
    path: "lookups",
    component: LookupComponent,
    pathMatch: "full",
    data: { breadcrumb: 'Lookup Options', description: "Choices that appear in drop down select boxes are updated here." }
  },
   {
    path: "departments",
    component: MdataDeptsComponent,
    pathMatch: "full",
    data: { breadcrumb: 'Departments', description: "Choices that appear in drop down select boxes are updated here." }
  },
  {
    path: 'event-log',
    component: EventLogComponent,
    pathMatch: "full",
    data: { breadcrumb: 'Event Log', description: "Actions performed by various users across the project are logged here and can be filtered by role, date range, module and event type" }
  },

  {
    path: "audit-config",
    component: AuditConfigComponent,
    loadChildren: () =>
      import("./audit-config/audit-config.module").then((m) => m.AuditConfigModule
      ),
    data: { breadcrumb: 'Audit Config', description: "Choices that appear in drop down select boxes are updated here." }
  },

  {
    path: 'credentials',
    component: CredentialsComponent,
    pathMatch: "full",
    data: { breadcrumb: 'Credentials', description: "This page is used to view Credentials" }
  }

];

@NgModule({
  declarations: [
    EventLogComponent,
    LookupComponent,
    SettingsComponent,
    AddLookupDialogComponent,
    CredentialsComponent,
    AuditConfigComponent,
    MasterdataComponent,
    MdataDeptsComponent
   
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule,
    MatCardModule,
    MatSelectModule,
     FormsModule
  ],
  // entryComponents: [],
  providers: [DragulaService]
})
export class AdminModule { }
