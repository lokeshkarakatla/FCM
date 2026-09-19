import { IssuesHectorParameterComponent } from './issues-hector-parameter/issues-hector-parameter.component';
import { IssuesHectorChecklistComponent } from './issues-hector-checklist/issues-hector-checklist.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuesHectorComponent } from './issues-hector.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  { path: "", redirectTo: "issueshectorcheck", pathMatch: "full" },
  {
    path: "issueshectorcheck",
    component : IssuesHectorChecklistComponent,
    loadChildren: () =>
      import("./issues-hector-checklist/issues-hector-checklist.module").then((m) => m.IssuesHectorChecklistModule),
      data: { breadcrumb:'issueshectorcheck', description:'This page is used to manage User' }
  },
  {
    path: "issueshectorpara",
    component : IssuesHectorParameterComponent,
    loadChildren: () =>
      import("./issues-hector-parameter/issues-hector-parameter.module").then((m) => m.IssuesHectorParameterModule),
      data: { breadcrumb:'issueshectorpara', description:'This page is used to manage User' }
  },
   
   
  // { path: 'checklist', component:ChecklistComponent, data: { breadcrumb: 'Audit' }},
  // { path: 'parameter', component: ParameterComponent, data: { breadcrumb: 'Audit' }},

 
]

@NgModule({
  declarations: [
    IssuesHectorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  
    SharedModule,
  ]
})
export class IssuesHectorModule { }
