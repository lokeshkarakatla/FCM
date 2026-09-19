import { QaZsevComponent } from './qa-zsev/qa-zsev.component';
import { QaHectorComponent } from './qa-hector/qa-hector.component';
import { QaGlosterComponent } from './qa-gloster/qa-gloster.component';
import { QaAstorComponent } from './qa-astor/qa-astor.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QualityAuditComponent } from './quality-audit.component';
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
  { path: "", redirectTo: "qa-astor", pathMatch: "full" },
  {
    path: "qa-astor",
    component: QaAstorComponent,
    loadChildren: () =>
      import("./qa-astor/qa-astor.module").then((m) => m.QaAstorModule),
    data: { breadcrumb: 'qa-astor', description: 'This page is used to manage User' }
  },
  {
    path: "qa-gloster",
    component: QaGlosterComponent,
    loadChildren: () =>
      import("./qa-gloster/qa-gloster.module").then((m) => m.QaGlosterModule),
    data: { breadcrumb: 'qa-gloster', description: 'This page is used to manage User' }
  },
  { path: "", redirectTo: "objective", pathMatch: "full" },
  {
    path: "qa-hector",
    component: QaHectorComponent,
    loadChildren: () =>
      import("./qa-hector/qa-hector.module").then((m) => m.QaHectorModule),
    data: { breadcrumb: 'qa-hector', description: 'This page is used to manage User' }
  },
  {
    path: "qa-zsev",
    component: QaZsevComponent,
    loadChildren: () =>
      import("./qa-zsev/qa-zsev.module").then((m) => m.QaZsevModule),
    data: { breadcrumb: 'qa-zsev', description: 'This page is used to manage User' }
  },

  // { path: 'checklist', component:ChecklistComponent, data: { breadcrumb: 'Audit' }},
  // { path: 'parameter', component: ParameterComponent, data: { breadcrumb: 'Audit' }},


]



@NgModule({
  declarations: [
    QualityAuditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,

    MatDialogModule,
    MatPaginatorModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
    SharedModule,
  ]
})
export class QualityAuditModule { }
