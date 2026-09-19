import { MatCheckboxModule } from '@angular/material/checkbox';
import { SplPermissionsComponent } from './users/spl-permissions/spl-permissions.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUserComponent } from './manage-user.component';
import { RolesComponent } from './roles/roles.component';
import { UsersComponent } from './users/users.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { ProjPermComponent } from './users/proj-perm/proj-perm.component';
import { ResetPasswordDialogComponent } from './users/reset-password-dialog/reset-password-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddRolesComponent } from './roles/add-roles/add-roles.component';
import { PermissionComponent } from './roles/permission/permission.component';
import { UserAudittypeComponent } from './users/user-audittype/user-audittype.component';
import { ManagerDialogComponent } from './users/manager-dialog/manager-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { JobCodesPopComponent } from './users/job-codes-pop/job-codes-pop.component';



export const routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },

  { path: 'users', component: UsersComponent, data: { breadcrumb: 'Manage Users', description: 'This screen covers comprehensive list of users managed across the application. User profiles can be created, deleted or modified. Each user profile can be assigned to one or more projects and their respective project role(s) can be designated here.' } },
  { path: 'users/proj-perm', component: ProjPermComponent },
  { path: 'users/spl-permissions', component: SplPermissionsComponent },
  { path: 'roles', component: RolesComponent, data: { breadcrumb: 'Manage Roles', description: 'This screen covers comprehensive list of users managed across the application. User profiles can be created, deleted or modified. Each user profile can be assigned to one or more projects and their respective project role(s) can be designated here.' } },
  { path: 'roles/permission', component: PermissionComponent, data: { breadcrumb: 'Permissions', description: 'This page is used to Permission' } }

];


@NgModule({
  declarations: [
    ManageUserComponent,
    RolesComponent,
    UsersComponent,
    EditUserComponent,
    ProjPermComponent,
    ResetPasswordDialogComponent,
    AddRolesComponent,
    PermissionComponent,
    SplPermissionsComponent,
    UserAudittypeComponent,
    ManagerDialogComponent,
    JobCodesPopComponent

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
  ],
})
export class ManageUserModule { }
