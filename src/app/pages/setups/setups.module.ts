1// import { TestMasterDataModule } from './../testing/test-master-data/test-master-data.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { SetupMasterComponent } from './setup-master/setup-master.component';
import { AuditConfigComponent } from '../admin/audit-config/audit-config.component';
import { TestMasterDataComponent } from './test-master-data/test-master-data.component';




const routes: Routes = [  
    { path: "", redirectTo: "setup-masterdata", pathMatch: "full" },

   {
       path: "setup-masterdata", component: TestMasterDataComponent,
          loadChildren:()=> import("./test-master-data/test-master-data.module").then((m)=> m.TestMasterDataModule),
       data: { breadcrumb: 'Master Data', description: "Grid view screen" }
     },

      {
       path: "setup-audit", component: AuditConfigComponent,
      loadChildren:()=> import("./audit-config/audit-config.module").then((m)=> m.AuditConfigModule),
       data: { breadcrumb: 'Audit Config', description: "Grid view screen" }
     },






]

@NgModule({
    declarations: [




    SetupMasterComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatIconModule,
        NgxChartsModule,
        MatButtonModule,
        MatTooltipModule,
        MatCardModule,
        HighchartsChartModule,
        MatToolbarModule,
        MatPaginatorModule,
        MatDialogModule,
 RouterModule
    ]
})
export class TestingModule { }
