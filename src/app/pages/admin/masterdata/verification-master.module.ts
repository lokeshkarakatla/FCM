import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';

import { MVerificationMethodsComponent } from './m-verification-methods/m-verification-methods.component';
import { AddVerificationMethodComponent } from './m-verification-methods/add-verification-method/add-verification-method.component';
import { MVerificationChecklistComponent } from './m-verification-checklist/m-verification-checklist.component';
import { AddVerificationChecklistComponent } from './m-verification-checklist/add-verification-checklist/add-verification-checklist.component';

@NgModule({
  declarations: [
    MVerificationMethodsComponent,
    AddVerificationMethodComponent,
    MVerificationChecklistComponent,
    AddVerificationChecklistComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTooltipModule
  ],
  exports: [
    MVerificationMethodsComponent,
    AddVerificationMethodComponent,
    MVerificationChecklistComponent,
    AddVerificationChecklistComponent
  ]
})
export class VerificationMasterModule { }
