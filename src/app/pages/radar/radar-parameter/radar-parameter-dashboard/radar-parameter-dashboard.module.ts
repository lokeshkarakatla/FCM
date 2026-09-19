import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadarParameterDashboardComponent } from './radar-parameter-dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';



@NgModule({
  declarations: [
    RadarParameterDashboardComponent
  ],
  imports: [
    CommonModule, SharedModule, NgxChartsModule
  ]
})
export class RadarParameterDashboardModule { }
