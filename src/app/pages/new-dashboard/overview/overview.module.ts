import { ZsevComponent } from './zsev/zsev.component';
import { HectorComponent } from './hector/hector.component';
import { GlosterComponent } from './gloster/gloster.component';
import { AstorComponent } from './astor/astor.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview.component';
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
  { path: "", redirectTo: "astor", pathMatch: "full" },
  {
    path: "astor",
    component: AstorComponent,
    loadChildren: () =>
      import("./astor/astor.module").then((m) => m.AstorModule),
    data: { breadcrumb: 'astor', description: 'This page is used to manage User' }
  },
  {
    path: "gloster",
    component: GlosterComponent,
    loadChildren: () =>
      import("./gloster/gloster.module").then((m) => m.GlosterModule),
    data: { breadcrumb: 'gloster', description: 'This page is used to manage User' }
  },
  {
    path: "hector",
    component: HectorComponent,
    loadChildren: () =>
      import("./hector/hector.module").then((m) => m.HectorModule),
    data: { breadcrumb: 'HectorModule', description: 'This page is used to manage User' }
  },
  {
    path: "zsev",
    component: ZsevComponent,
    loadChildren: () =>
      import("./zsev/zsev.module").then((m) => m.ZsevModule),
    data: { breadcrumb: 'zsev', description: 'This page is used to manage User' }
  },


  // { path: 'checklist', component:ChecklistComponent, data: { breadcrumb: 'Audit' }},
  // { path: 'parameter', component: ParameterComponent, data: { breadcrumb: 'Audit' }},


]


@NgModule({
  declarations: [
    OverviewComponent
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
export class OverviewModule { }
