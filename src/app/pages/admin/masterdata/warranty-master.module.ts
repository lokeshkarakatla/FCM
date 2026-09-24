import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';

import { MSparePartsComponent } from './m-spare-parts/m-spare-parts.component';
import { AddSparePartComponent } from './m-spare-parts/add-spare-part/add-spare-part.component';
import { MJobCodesComponent } from './m-job-codes/m-job-codes.component';
import { AddJobCodeComponent } from './m-job-codes/add-job-code/add-job-code.component';

@NgModule({
  declarations: [
    MSparePartsComponent,
    AddSparePartComponent,
    MJobCodesComponent,
    AddJobCodeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTooltipModule
  ],
  exports: [
    MSparePartsComponent,
    AddSparePartComponent,
    MJobCodesComponent,
    AddJobCodeComponent
  ]
})
export class WarrantyMasterModule { }
