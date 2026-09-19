// inspection.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// 1. Import Forms Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

// Components
import { InspectionComponent } from './inspection.component';
import { InspectionAnalyticsComponent } from './inspection-analytics/inspection-analytics.component';
import { InspectionDatatableComponent } from './inspection-datatable/inspection-datatable.component';
import { AddRecordPopComponent } from './add-record-pop/add-record-pop.component';

// Material & Highcharts & NgxCharts
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';         
import { HighchartsChartModule } from 'highcharts-angular';
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { DefectsPopComponent } from './inspection-datatable/defects-pop/defects-pop.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { InspectionCapaComponent } from './inspection-capa/inspection-capa.component';
import { InspectionArchivesComponent } from './inspection-archives/inspection-archives.component';
import { MatPaginatorModule } from "@angular/material/paginator";
import { DefectsPopMasterComponent } from './inspection-datatable/defects-pop-master/defects-pop-master.component';
import { NgxChartsModule } from '@swimlane/ngx-charts'; // <-- Already here, just needed in imports array below

const routes: Routes = [
  {
    path: '',
    component: InspectionComponent,
    children: [
      { path: '', redirectTo: 'analytics', pathMatch: 'full' }, 
      { path: 'analytics', component: InspectionAnalyticsComponent },
      { path: 'datatable', component: InspectionDatatableComponent },
      { path: 'inspectioncapa', component: InspectionCapaComponent },
      { path: 'inspectionarchive', component: InspectionArchivesComponent }
    ]
  }
];

@NgModule({
  declarations: [
    InspectionComponent,
    InspectionAnalyticsComponent,
    InspectionDatatableComponent,
    AddRecordPopComponent,
    DefectsPopComponent,
    InspectionCapaComponent,
    InspectionArchivesComponent,
    DefectsPopMasterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule, 
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    HighchartsChartModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatPaginatorModule,
    NgxChartsModule // ✅ ADDED HERE
]
})
export class InspectionModule { }