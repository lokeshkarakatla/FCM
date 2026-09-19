import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EscalationComponent } from './escalation.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { DragulaModule } from 'ng2-dragula';
import { AddAlertEscalationComponent } from './add-alert-escalation/add-alert-escalation.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';

const routes: Routes = [
  { path: "", redirectTo: "manage-users", pathMatch: "full" },
]

@NgModule({
  declarations: [
    EscalationComponent,
    AddAlertEscalationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
    DragulaModule,
  ]
})
export class EscalationModule { }
