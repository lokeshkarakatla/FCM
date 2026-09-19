import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectiveRadarComponent } from './objective-radar.component';
import { RaderHectorComponent } from './rader-hector/rader-hector.component';
import { RaderZvesComponent } from './rader-zves/rader-zves.component';
import { RaderGlosterComponent } from './rader-gloster/rader-gloster.component';
import { RaderAstorComponent } from './rader-astor/rader-astor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { Routes, RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  { path: "", redirectTo: "radar-hector", pathMatch: "full" },
  {
    path: "radar-astor",
    component: RaderAstorComponent,
    data: { breadcrumb: 'Objective Audit Dashboard', description: "Objective Audit Dashboard" }
  },
  {
    path: "radar-gloster",
    component: RaderGlosterComponent,
    data: { breadcrumb: 'Objective Audit Dashboard', description: "Objective Audit Dashboard" }
  },
  {
    path: "radar-hector",
    component: RaderHectorComponent,
    data: { breadcrumb: 'Objective Audit Dashboard', description: "Objective Audit Dashboard" }
  },
  {
    path: "radar-zesv",
    component: RaderZvesComponent,
    data: { breadcrumb: 'Objective Audit Dashboard', description: "Objective Audit Dashboard" }
  },
]

@NgModule({
  declarations: [
    RaderHectorComponent,
    RaderZvesComponent,
    RaderGlosterComponent,
    RaderAstorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NgxChartsModule,
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
export class ObjectiveRadarModule { }
