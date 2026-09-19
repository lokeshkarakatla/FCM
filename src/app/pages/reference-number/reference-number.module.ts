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
import { BaseInfoComponent } from './base-info/base-info.component';
import { SummaryComponent } from './summary/summary.component';
import { UpdatesComponent } from './updates/updates.component';
import { CapaaaComponent } from './capaaa/capaaa.component';
import { DocumentsComponent } from './documents/documents.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddNotesComponent } from './base-info/add-notes/add-notes.component';
import { AddDocumentComponent } from './documents/add-document/add-document.component';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NotesComponent } from './notes/notes.component';
import { TimelineComponent } from './timeline/timeline.component';

import { NoteComponent } from '../prts/note/note.component';





const routes: Routes = [
  { path: "", redirectTo: "base-info", pathMatch: "full" },


  {
    path: "base-info",
    component: BaseInfoComponent,
    pathMatch: "full",
    data: { breadcrum: 'Base-info()' }
  },
  {
    path: "summary",
    component: SummaryComponent,

    data: { breadcrumb: 'Summary', }
  },
  {
    path: "updates",
    component: UpdatesComponent,

    data: { breadcrumb: 'Updates', }
  },
  {
    path: "capaa",
    component: CapaaaComponent,

    data: { breadcrumb: 'CAPA' }
  },
  {
    path: "documnets",
    component: DocumentsComponent,
    pathMatch: "full",
    data: { breadcrumb: 'Documents', description: "Grid-View", }
  },
  {
    path: "notes",
    component: NotesComponent,
    pathMatch: "full",
    data: { breadcrumb: 'Notes' }

  },
  {
    path: "timeline",
    component: TimelineComponent,
    pathMatch: "full",
    data: { breadcrumb: 'Timeline', description: "Alerts", }
  },

]


@NgModule({
  declarations: [




    BaseInfoComponent,
    SummaryComponent,
    UpdatesComponent,
    CapaaaComponent,
    DocumentsComponent,
    AddNotesComponent,
    AddDocumentComponent,
    NotesComponent,
    TimelineComponent
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
    ReactiveFormsModule,
    MatSelectModule,
    FormsModule,
    MatCheckboxModule

  ]
})
export class ReferenceModule { }
