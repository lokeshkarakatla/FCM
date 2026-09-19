import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrtsOnePagerComponent } from './prts-one-pager.component';
import { RouterModule, Routes } from '@angular/router';
import { AlertComponent } from './alert/alert.component';
import { ActionComponent } from './action/action.component';
import { BaseInfoOnePagerComponent } from './base-info-one-pager/base-info-one-pager.component';
import { UpdatesOnePagerComponent } from './updates-one-pager/updates-one-pager.component';
import { MitigationOnePagerComponent } from './mitigation-one-pager/mitigation-one-pager.component';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { AddMitigationComponent } from './mitigation-one-pager/add-mitigation/add-mitigation.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DocumentsOnePagerComponent } from './documents-one-pager/documents-one-pager.component';
import { AddDocumentsComponent } from './documents-one-pager/add-documents/add-documents.component';
import { AddUpdateComponent } from './updates-one-pager/add-update/add-update.component';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: "", redirectTo: "base-info", pathMatch: "full" },

  // { path: 'action', component: ActionComponent, data: { breadcrumb: 'PSR', description: 'Dashboard  based audits can be recorded here for a specific vehicle across a hierarchy of Categories  and checkpoints.  Issues are recorded and a demerit indicating the severity of the issue is recorded.  Demerit master varies with audit type.' } },
  {
    path: "action",
    component: ActionComponent,
    loadChildren: () =>
      import("./action/action.module").then((m) => m.ActionModule)
  },
  { path: 'alert', component: AlertComponent, },
  { path: 'base-info', component: BaseInfoOnePagerComponent },
  { path: 'updates', component: UpdatesOnePagerComponent,  },
  { path: 'mitigation', component: MitigationOnePagerComponent, },
  { path: 'document', component: DocumentsOnePagerComponent, },


]

@NgModule({
  declarations: [
    PrtsOnePagerComponent,
    AlertComponent,
    ActionComponent,
    BaseInfoOnePagerComponent,
    UpdatesOnePagerComponent,
    MitigationOnePagerComponent,
    AddMitigationComponent,
    DocumentsOnePagerComponent,
    AddDocumentsComponent,
    AddUpdateComponent,
    MitigationOnePagerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
    MatSelectModule,
    MatOptionModule,
    MatCheckboxModule,
    MatCardModule,
    MatDialogModule,
    QuillModule.forRoot(),
     FormsModule,
  ]
})
export class PrtsOnePagerModule { }
