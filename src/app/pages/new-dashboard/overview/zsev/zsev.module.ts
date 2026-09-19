import { OverZsevParameterComponent } from './over-zsev-parameter/over-zsev-parameter.component';
import { OverZsevChecklistComponent } from './over-zsev-checklist/over-zsev-checklist.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZsevComponent } from './zsev.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  { path: "", redirectTo: "overzsevcheck", pathMatch: "full" },
  {
    path: "overzsevcheck",
    component : OverZsevChecklistComponent,
    loadChildren: () =>
      import("./over-zsev-checklist/over-zsev-checklist.module").then((m) => m.OverZsevChecklistModule),
      data: { breadcrumb:'overzsevcheck', description:'This page is used to manage User' }
  },
  {
    path: "overzsevpara",
    component : OverZsevParameterComponent,
    loadChildren: () =>
      import("./over-zsev-parameter/over-zsev-parameter.module").then((m) => m.OverZsevParameterModule),
      data: { breadcrumb:'overzsevpara', description:'This page is used to manage User' }
  },
   
   
  // { path: 'checklist', component:ChecklistComponent, data: { breadcrumb: 'Audit' }},
  // { path: 'parameter', component: ParameterComponent, data: { breadcrumb: 'Audit' }},

 
]

@NgModule({
  declarations: [
    ZsevComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  
    SharedModule,
  ]
})
export class ZsevModule { }
