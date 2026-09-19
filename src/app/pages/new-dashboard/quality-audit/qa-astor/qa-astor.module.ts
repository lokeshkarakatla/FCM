import { QualityAstorParameterComponent } from './quality-astor-parameter/quality-astor-parameter.component';
import { QualityAstorChecklistComponent } from './quality-astor-checklist/quality-astor-checklist.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QaAstorComponent } from './qa-astor.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  { path: "", redirectTo: "qualityastorcheck", pathMatch: "full" },
  {
    path: "qualityastorcheck",
    component : QualityAstorChecklistComponent,
    loadChildren: () =>
      import("./quality-astor-checklist/quality-astor-checklist.module").then((m) => m.QualityAstorChecklistModule),
      data: { breadcrumb:'qualityastorcheck', description:'This page is used to manage User' }
  },
  {
    path: "qualityastorpara",
    component : QualityAstorParameterComponent,
    loadChildren: () =>
      import("./quality-astor-parameter/quality-astor-parameter.module").then((m) => m.QualityAstorParameterModule),
      data: { breadcrumb:'qualityastorpara', description:'This page is used to manage User' }
  },
   
   
  // { path: 'checklist', component:ChecklistComponent, data: { breadcrumb: 'Audit' }},
  // { path: 'parameter', component: ParameterComponent, data: { breadcrumb: 'Audit' }},

 
]

@NgModule({
  declarations: [
    QaAstorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  
    SharedModule,
  ]
})
export class QaAstorModule { }
