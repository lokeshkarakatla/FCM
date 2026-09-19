import { IssuesGlosterParameterComponent } from './issues-gloster-parameter/issues-gloster-parameter.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuesGlosterComponent } from './issues-gloster.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { IssuesGlosterChecklistComponent } from './issues-gloster-checklist/issues-gloster-checklist.component';
//import { IssuesGlosterChecklistComponent } from './issues-gloster-checklist/issues-gloster-checklist.component';

const routes: Routes = [
  { path: "", redirectTo: "issuesglostercheck", pathMatch: "full" },
  {
    path: "issuesglostercheck",
    component :IssuesGlosterChecklistComponent,
    loadChildren: () =>
      import("./issues-gloster-checklist/issues-gloster-checklist.module").then((m) => m.IssuesGlosterChecklistModule),
      data: { breadcrumb:'issuesglostercheck', description:'This page is used to manage User' }
  },
  {
    path: "issuesglosterpara",
    component : IssuesGlosterParameterComponent,
    loadChildren: () =>
      import("./issues-gloster-parameter/issues-gloster-parameter.module").then((m) => m.IssuesGlosterParameterModule),
      data: { breadcrumb:'issuesglosterpara', description:'This page is used to manage User' }
  },
   
   
  // { path: 'checklist', component:ChecklistComponent, data: { breadcrumb: 'Audit' }},
  // { path: 'parameter', component: ParameterComponent, data: { breadcrumb: 'Audit' }},

 
]

@NgModule({
  declarations: [
    IssuesGlosterComponent,
   // IssuesGlosterChecklistComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  
    SharedModule,
  ]
})
export class IssuesGlosterModule { }
