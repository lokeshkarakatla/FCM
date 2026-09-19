import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrtsIssueStatusComponent } from './prts-issue-status.component';
import { PsrIssueStatusComponent } from './psr-issue-status/psr-issue-status.component';
import { OnepagerIssueStatusComponent } from './onepager-issue-status/onepager-issue-status.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PrtsComponent } from '../../prts/prts.component';

const routes: Routes = [
  { path: "", redirectTo: "psr", pathMatch: "full" },

  { path: 'psr', component: PsrIssueStatusComponent,  },
  { path: 'one-pager', component: OnepagerIssueStatusComponent,  },
  // {
  //               path: 'prtsnavbar', component: PrtsComponent, loadChildren: () =>
  //                   import("../../prts/prts.module").then((m) => m.PrtsModule),


  //           }

]

@NgModule({
  declarations: [
    PrtsIssueStatusComponent,
    PsrIssueStatusComponent,
    OnepagerIssueStatusComponent
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
    MatButtonModule,
    MatTooltipModule
  ]
})
export class PrtsIssueStatusModule { }
