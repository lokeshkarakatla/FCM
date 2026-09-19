import { PrtsSubjectiveSetupComponent } from './prts-subjective-setup/prts-subjective-setup.component';
import { PrtsObjectiveSetupComponent } from './prts-objective-setup/prts-objective-setup.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrtsSetupComponent } from './prts-setup.component';
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
import { NgxChartsModule } from '@swimlane/ngx-charts';


const routes: Routes = [
  { path: "", redirectTo: "subjective-setup", pathMatch: "full" },
  {
    path: "objective-setup",
    component: PrtsObjectiveSetupComponent,
    loadChildren: () =>
      import("./prts-objective-setup/prts-objective-setup.module").then((m) => m.PrtsObjectiveSetupModule),
    data: { breadcrumb: 'Objective Setup', description: 'This page is used to Objective Setup' }
  },
  {
    path: "subjective-setup",
    component: PrtsSubjectiveSetupComponent,
    loadChildren: () =>
      import("./prts-subjective-setup/prts-subjective-setup.module").then((m) => m.PrtsSubjectiveSetupModule),
    data: { breadcrumb: 'Subjective Setup', description: 'This page is used to Subjective Setup' }
  },
]

@NgModule({
  declarations: [
    PrtsSetupComponent
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
    NgxChartsModule,
  ]
})
export class PrtsSetupModule { }
