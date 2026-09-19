import { BreadcrumbComponent } from './../../theme/components/breadcrumb/breadcrumb.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientLoginComponent } from './client-login.component';
import { ClientConsignmentComponent } from './client-consignment/client-consignment.component';
import { ClientItemsComponent } from './client-items/client-items.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';


const routes: Routes = [
  { path: "", redirectTo: "client-consignment", pathMatch: "full" },
  { path: 'client-consignment', component: ClientConsignmentComponent, data: { breadcrumb: 'Client Consignment', description: 'This page is used to Client Consignment' } },
  { path: 'client-items', component: ClientItemsComponent, data: { breadcrumb: 'Client Items', description: 'This page is used to Client Items' } }

];


@NgModule({
  declarations: [
    ClientLoginComponent,
    ClientConsignmentComponent,
    ClientItemsComponent
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
  ]
})
export class ClientLoginModule { }
