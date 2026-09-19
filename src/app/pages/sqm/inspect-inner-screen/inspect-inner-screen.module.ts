import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Components
import { InspectInnerScreenComponent } from './inspect-inner-screen.component';
import { ActiveRecordsRefComponent } from './active-records-ref/active-records-ref.component';
import { CapaReferenceComponent } from './capa-reference/capa-reference.component';

// Material & Shared Imports (Add more here as needed by your UI)
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from "src/app/shared/shared.module";
import { CapaViewScreenComponent } from './capa-view-screen/capa-view-screen.component';
import { UploadstagepopComponent } from './active-records-ref/uploadstagepop/uploadstagepop.component';
import { UploadListComponent } from './active-records-ref/upload-list/upload-list.component';
import { SamplePopComponent } from './active-records-ref/sample-pop/sample-pop.component';
import { AddSamplesComponent } from './add-samples/add-samples.component';

const routes: Routes = [
  {
    path: '',
    component: InspectInnerScreenComponent,
    children: [
      { path: 'active-records', component: ActiveRecordsRefComponent },
      { path: 'capa-reference', component: CapaReferenceComponent },
         { path: 'capa-view', component: CapaViewScreenComponent },
              { path: 'addsample', component: AddSamplesComponent },
      // Optional: Add a default redirect if you want one of them to load immediately
      // { path: '', redirectTo: 'active-records', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  declarations: [
    InspectInnerScreenComponent,
    ActiveRecordsRefComponent,
    CapaReferenceComponent,
    CapaViewScreenComponent,
    UploadstagepopComponent,
    UploadListComponent,
    SamplePopComponent,
    AddSamplesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class InspectInnerScreenModule { }