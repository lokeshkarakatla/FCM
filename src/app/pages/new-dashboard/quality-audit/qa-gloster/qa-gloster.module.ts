import { QualityGlosterParameterComponent } from './quality-gloster-parameter/quality-gloster-parameter.component';
import { QualityGlosterChecklistComponent } from './quality-gloster-checklist/quality-gloster-checklist.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QaGlosterComponent } from './qa-gloster.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  { path: "", redirectTo: "qualityglostercheck", pathMatch: "full" },
  {
    path: "qualityglostercheck",
    component : QualityGlosterChecklistComponent,
    loadChildren: () =>
      import("./quality-gloster-checklist/quality-gloster-checklist.module").then((m) => m.QualityGlosterChecklistModule),
      data: { breadcrumb:'qualityglostercheck', description:'This page is used to manage User' }
  },
  {
    path: "qualityglosterpara",
    component : QualityGlosterParameterComponent,
    loadChildren: () =>
      import("./quality-gloster-parameter/quality-gloster-parameter.module").then((m) => m.QualityGlosterParameterModule),
      data: { breadcrumb:'qualityglosterpara', description:'This page is used to manage User' }
  },
   
   
  // { path: 'checklist', component:ChecklistComponent, data: { breadcrumb: 'Audit' }},
  // { path: 'parameter', component: ParameterComponent, data: { breadcrumb: 'Audit' }},

 
]

@NgModule({
  declarations: [
    QaGlosterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  
    SharedModule,
  ]
})
export class QaGlosterModule { }
