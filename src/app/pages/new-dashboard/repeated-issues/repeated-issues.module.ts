import { IssuesZsevComponent } from './issues-zsev/issues-zsev.component';
import { IssuesHectorComponent } from './issues-hector/issues-hector.component';
import { IssuesGlosterComponent } from './issues-gloster/issues-gloster.component';
import { IssuesAstorComponent } from './issues-astor/issues-astor.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepeatedIssuesComponent } from './repeated-issues.component';
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
  { path: "", redirectTo: "issues-astor", pathMatch: "full" },
  {
    path: "issues-astor",
    component: IssuesAstorComponent,
    loadChildren: () =>
      import("./issues-astor/issues-astor.module").then((m) => m.IssuesAstorModule),
    data: { breadcrumb: 'issues-astor', description: 'This page is used to manage User' }
  },
  {
    path: "issues-gloster",
    component: IssuesGlosterComponent,
    loadChildren: () =>
      import("./issues-gloster/issues-gloster.module").then((m) => m.IssuesGlosterModule),
    data: { breadcrumb: 'issues-gloster', description: 'This page is used to manage User' }
  },
  {
    path: "issues-hector",
    component: IssuesHectorComponent,
    loadChildren: () =>
      import("./issues-hector/issues-hector.module").then((m) => m.IssuesHectorModule),
    data: { breadcrumb: 'issues-hector', description: 'This page is used to manage User' }
  },
  {
    path: "issues-zsev",
    component: IssuesZsevComponent,
    loadChildren: () =>
      import("./issues-zsev/issues-zsev.module").then((m) => m.IssuesZsevModule),
    data: { breadcrumb: 'issues-zsev', description: 'This page is used to manage User' }
  },


  // { path: 'checklist', component:ChecklistComponent, data: { breadcrumb: 'Audit' }},
  // { path: 'parameter', component: ParameterComponent, data: { breadcrumb: 'Audit' }},


]


@NgModule({
  declarations: [
    RepeatedIssuesComponent
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
export class RepeatedIssuesModule { }
