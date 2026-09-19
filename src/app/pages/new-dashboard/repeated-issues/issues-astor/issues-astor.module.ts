import { IssuesAstorChecklistComponent } from './issues-astor-checklist/issues-astor-checklist.component';
import { IssuesAstorParameterComponent } from './issues-astor-parameter/issues-astor-parameter.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuesAstorComponent } from './issues-astor.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  { path: "", redirectTo: "issuesastorcheck", pathMatch: "full" },
  {
    path: "issuesastorcheck",
    component :IssuesAstorChecklistComponent,
    loadChildren: () =>
      import("./issues-astor-checklist/issues-astor-checklist.module").then((m) => m.IssuesAstorChecklistModule),
      data: { breadcrumb:'issuesastorcheck', description:'This page is used to manage User' }
  },
  {
    path: "issuesastorpara",
    component : IssuesAstorParameterComponent,
    loadChildren: () =>
      import("./issues-astor-parameter/issues-astor-parameter.module").then((m) => m.IssuesAstorParameterModule),
      data: { breadcrumb:'issuesastorpara', description:'This page is used to manage User' }
  },
   
   
  // { path: 'checklist', component:ChecklistComponent, data: { breadcrumb: 'Audit' }},
  // { path: 'parameter', component: ParameterComponent, data: { breadcrumb: 'Audit' }},

 
]

@NgModule({
  declarations: [
    IssuesAstorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  
    SharedModule,
  ]
})
export class IssuesAstorModule { }
