import { OverGlosterParameterComponent } from './over-gloster-parameter/over-gloster-parameter.component';
import { OverGlosterChecklistComponent } from './over-gloster-checklist/over-gloster-checklist.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlosterComponent } from './gloster.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  { path: "", redirectTo: "overglostercheck", pathMatch: "full" },
  {
    path: "overglostercheck",
    component : OverGlosterChecklistComponent,
    loadChildren: () =>
      import("./over-gloster-checklist/over-gloster-checklist.module").then((m) => m.OverGlosterChecklistModule),
      data: { breadcrumb:'overglostercheck', description:'This page is used to manage User' }
  },
  {
    path: "overglosterpara",
    component : OverGlosterParameterComponent,
    loadChildren: () =>
      import("./over-gloster-parameter/over-gloster-parameter.module").then((m) => m.OverGlosterParameterModule),
      data: { breadcrumb:'overglosterpara', description:'This page is used to manage User' }
  },
   
   
  // { path: 'checklist', component:ChecklistComponent, data: { breadcrumb: 'Audit' }},
  // { path: 'parameter', component: ParameterComponent, data: { breadcrumb: 'Audit' }},

 
]

@NgModule({
  declarations: [
    GlosterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  
    SharedModule,
  ]
})
export class GlosterModule { }
