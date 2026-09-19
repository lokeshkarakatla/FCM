import { QualityZsevParameterComponent } from './quality-zsev-parameter/quality-zsev-parameter.component';
import { QualityZsevChecklistComponent } from './quality-zsev-checklist/quality-zsev-checklist.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QaZsevComponent } from './qa-zsev.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  { path: "", redirectTo: "qualityzsevcheck", pathMatch: "full" },
  {
    path: "qualityzsevcheck",
    component : QualityZsevChecklistComponent,
    loadChildren: () =>
      import("./quality-zsev-checklist/quality-zsev-checklist.module").then((m) => m.QualityZsevChecklistModule),
      data: { breadcrumb:'qualityzsevcheck', description:'This page is used to manage User' }
  },
  {
    path: "qualityzsevpara",
    component : QualityZsevParameterComponent,
    loadChildren: () =>
      import("./quality-zsev-parameter/quality-zsev-parameter.module").then((m) => m.QualityZsevParameterModule),
      data: { breadcrumb:'qualityzsevpara', description:'This page is used to manage User' }
  },
   
   
  // { path: 'checklist', component:ChecklistComponent, data: { breadcrumb: 'Audit' }},
  // { path: 'parameter', component: ParameterComponent, data: { breadcrumb: 'Audit' }},

 
]

@NgModule({
  declarations: [
    QaZsevComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  
    SharedModule,
  ]
})
export class QaZsevModule { }
