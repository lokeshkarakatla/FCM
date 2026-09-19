import { OverHectorParameterComponent } from './over-hector-parameter/over-hector-parameter.component';
import { OverHectorChecklistComponent } from './over-hector-checklist/over-hector-checklist.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HectorComponent } from './hector.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  { path: "", redirectTo: "overhectorcheck", pathMatch: "full" },
  {
    path: "overhectorcheck",
    component : OverHectorChecklistComponent,
    loadChildren: () =>
      import("./over-hector-checklist/over-hector-checklist.module").then((m) => m.OverHectorChecklistModule),
      data: { breadcrumb:'overhectorcheck', description:'This page is used to manage User' }
  },
  {
    path: "overhectorpara",
    component : OverHectorParameterComponent,
    loadChildren: () =>
      import("./over-hector-parameter/over-hector-parameter.module").then((m) => m.OverHectorParameterModule),
      data: { breadcrumb:'overhectorpara', description:'This page is used to manage User' }
  },
   
   
  // { path: 'checklist', component:ChecklistComponent, data: { breadcrumb: 'Audit' }},
  // { path: 'parameter', component: ParameterComponent, data: { breadcrumb: 'Audit' }},

 
]

@NgModule({
  declarations: [
    HectorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  
    SharedModule,
  ]
})
export class HectorModule { }
