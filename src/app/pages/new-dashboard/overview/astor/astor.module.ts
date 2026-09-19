import { OverAstorParameterComponent } from './over-astor-parameter/over-astor-parameter.component';
import { OverAstorChecklistComponent } from './over-astor-checklist/over-astor-checklist.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AstorComponent } from './astor.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  { path: "", redirectTo: "overastorcheck", pathMatch: "full" },
  {
    path: "overastorcheck",
    component : OverAstorChecklistComponent,
    loadChildren: () =>
      import("./over-astor-checklist/over-astor-checklist.module").then((m) => m.OverAstorChecklistModule),
      data: { breadcrumb:'checklist', description:'This page is used to manage User' }
  },
  {
    path: "overastorpara",
    component : OverAstorParameterComponent,
    loadChildren: () =>
      import("./over-astor-parameter/over-astor-parameter.module").then((m) => m.OverAstorParameterModule),
      data: { breadcrumb:'parameter', description:'This page is used to manage User' }
  },
   
   
  // { path: 'checklist', component:ChecklistComponent, data: { breadcrumb: 'Audit' }},
  // { path: 'parameter', component: ParameterComponent, data: { breadcrumb: 'Audit' }},

 
]

@NgModule({
  declarations: [
    AstorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  
    SharedModule,
  ]
})
export class AstorModule { }
