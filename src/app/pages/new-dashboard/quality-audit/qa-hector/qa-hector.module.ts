import { QualityHectorParameterComponent } from './quality-hector-parameter/quality-hector-parameter.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QaHectorComponent } from './qa-hector.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { QualityHectorChecklistComponent } from './quality-hector-checklist/quality-hector-checklist.component';
//import { QualityHectorChecklistComponent } from './quality-hector-checklist/quality-hector-checklist.component';

const routes: Routes = [
  { path: "", redirectTo: "qualityhectorcheck", pathMatch: "full" },
  {
    path: "qualityhectorcheck",
    component : QualityHectorChecklistComponent,
    loadChildren: () =>
      import("./quality-hector-checklist/quality-hector-checklist.module").then((m) => m.QualityHectorChecklistModule),
      data: { breadcrumb:'qualityhectorcheck', description:'This page is used to manage User' }
  },
  {
    path: "qualityhectorpara",
    component : QualityHectorParameterComponent,
    loadChildren: () =>
      import("./quality-hector-parameter/quality-hector-parameter.module").then((m) => m.QualityHectorParameterModule),
      data: { breadcrumb:'qualityhectorpara', description:'This page is used to manage User' }
  },
   
   
  // { path: 'checklist', component:ChecklistComponent, data: { breadcrumb: 'Audit' }},
  // { path: 'parameter', component: ParameterComponent, data: { breadcrumb: 'Audit' }},

 
]

@NgModule({
  declarations: [
    QaHectorComponent,
   // QualityHectorChecklistComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  
    SharedModule,
  ]
})
export class QaHectorModule { }
