import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PsrComponent } from './psr/psr.component';
import { OnePagerComponent } from './one-pager/one-pager.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PrtsComponent } from '../../prts/prts.component';

const routes: Routes = [
  { path: "", redirectTo: "psr", pathMatch: "full" },

  { path: 'psr', component: PsrComponent, data: { breadcrumb: 'PSR', description: 'Dashboard  based audits can be recorded here for a specific vehicle across a hierarchy of Categories  and checkpoints.  Issues are recorded and a demerit indicating the severity of the issue is recorded.  Demerit master varies with audit type.' } },
  { path: 'one-pager', component: OnePagerComponent, data: { breadcrumb: 'One Pager', description: 'Dashboard  based audits can be recorded here for a specific vehicle across a hierarchy of Categories  and checkpoints.  Issues are recorded and a demerit indicating the severity of the issue is recorded.  Demerit master varies with audit type.' } },
  

]

@NgModule({
  declarations: [
    PsrComponent,
    OnePagerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatSelectModule,
    MatOptionModule,
    MatCheckboxModule,
    MatPaginatorModule,
    NgxChartsModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class PrtsNewIssueModule { }
