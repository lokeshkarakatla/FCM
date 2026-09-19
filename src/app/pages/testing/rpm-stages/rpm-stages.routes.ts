import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RpmStagesWbsComponent } from './rpm-stages-wbs/rpm-stages-wbs.component';

const routes: Routes = [
  { path: 'wbs', component: RpmStagesWbsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
 export class RpmStagesRoutingModule { }