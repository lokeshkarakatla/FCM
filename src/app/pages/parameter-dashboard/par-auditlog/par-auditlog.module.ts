import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from './../../../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatchingComponent } from './matching/matching.component';
import { SealingComponent } from './sealing/sealing.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ImgClickPopComponent } from '../../setup/subjective-setup/checkpoint-master/checkpoint-check/img-click-pop/img-click-pop.component';
import { ImgPopComponent } from './matching/img-pop/img-pop.component';
import { ImgPopSealingComponent } from './sealing/img-pop-sealing/img-pop-sealing.component';
import { AddCheckpointRequestComponent } from './sealing/add-checkpoint-request/add-checkpoint-request.component';
import { AddRequestComponent } from './matching/add-request/add-request.component';

export const routes = [
  { path: '', redirectTo: "sealing", pathMatch: "full" },
  { path: 'sealing', component: SealingComponent, data: { breadcrumb: 'Obj Audits(AuditStatus/Checkpoints/Sealing)', description: 'This page is used to  notes' } },
  { path: 'matching', component: MatchingComponent, data: { breadcrumb: 'Obj Audits(AuditStatus/Checkpoints/Matching) ', description: 'This page is used to  notes' } },
];

@NgModule({
  declarations: [
    SealingComponent,
    MatchingComponent,
    ImgPopComponent,
    ImgPopSealingComponent,
    AddCheckpointRequestComponent,
    AddRequestComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatCardModule,
    SharedModule,
    MatIconModule,

  ]
})
export class ParAuditlogModule { }
