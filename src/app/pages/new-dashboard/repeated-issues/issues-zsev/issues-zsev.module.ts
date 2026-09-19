import { IssuesZsevParameterComponent } from './issues-zsev-parameter/issues-zsev-parameter.component';
import { IssuesZsevChecklistComponent } from './issues-zsev-checklist/issues-zsev-checklist.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuesZsevComponent } from './issues-zsev.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  { path: "", redirectTo: "issueszsevcheck", pathMatch: "full" },
  {
    path: "issueszsevcheck",
    component : IssuesZsevChecklistComponent,
    loadChildren: () =>
      import("./issues-zsev-checklist/issues-zsev-checklist.module").then((m) => m.IssuesZsevChecklistModule),
      data: { breadcrumb:'issueszsevcheck', description:'This page is used to manage User' }
  },
  {
    path: "issueszsevpara",
    component : IssuesZsevParameterComponent,
    loadChildren: () =>
      import("./issues-zsev-parameter/issues-zsev-parameter.module").then((m) => m.IssuesZsevParameterModule),
      data: { breadcrumb:'issueszsevpara', description:'This page is used to manage User' }
  },
   
   
  // { path: 'checklist', component:ChecklistComponent, data: { breadcrumb: 'Audit' }},
  // { path: 'parameter', component: ParameterComponent, data: { breadcrumb: 'Audit' }},

 
]

@NgModule({
  declarations: [
    IssuesZsevComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  
    SharedModule,]
})
export class IssuesZsevModule { }
