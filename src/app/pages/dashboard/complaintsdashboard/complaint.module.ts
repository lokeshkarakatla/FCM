 
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
import { NgModule } from '@angular/core';


const routes: Routes = [
//   { path: "", redirectTo: "client-consignment", pathMatch: "full" },
//   { path: 'client-consignment', component: ClientConsignmentComponent, data: { breadcrumb: 'Client Consignment', description: 'This page is used to Client Consignment' } },
//   { path: 'client-items', component: ClientItemsComponent, data: { breadcrumb: 'Client Items', description: 'This page is used to Client Items' } }

];


@NgModule({
  declarations: [
    
  ],
  imports: [
     
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
export class ComplaintsNewModule { }
