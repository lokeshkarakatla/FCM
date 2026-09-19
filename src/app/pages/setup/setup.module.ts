import { SubjectiveSetupComponent } from './subjective-setup/subjective-setup.component';
import { ObjectiveSetupModule } from './objective-setup/objective-setup.module';
import { ObjectiveSetupComponent } from './objective-setup/objective-setup.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupComponent } from './setup.component';
import { RouterModule, Routes } from '@angular/router';
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
  { path: "", redirectTo: "subjective", pathMatch: "full" },
  {
    path: "objective",
    component: ObjectiveSetupComponent,
    loadChildren: () =>
      import("./objective-setup/objective-setup.module").then((m) => m.ObjectiveSetupModule),
    data: { breadcrumb: 'Objective Setup', description: 'This page is used to Objective Setup' }
  },
  {
    path: "subjective",
    component: SubjectiveSetupComponent,
    loadChildren: () =>
      import("./subjective-setup/subjective-setup.module").then((m) => m.SubjectiveSetupModule),
    data: { breadcrumb: 'Subjective Setup', description: 'This page is used to Subjective Setup' }
  },




]

@NgModule({
  declarations: [
    SetupComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    SharedModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
    

  ]
})
export class SetupModule { }
