import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RespareasComponent } from './respareas/respareas.component';
import { SubGroupsComponent } from './sub-groups/sub-groups.component';
import { CategoryComponent } from './category/category.component';
import { DetectionComponent } from './detection/detection.component';
import { DeparmentsComponent } from './deparments/deparments.component';
import { ScoreMatrixComponent } from './score-matrix/score-matrix.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

import { AddcategoryComponent } from './category/addcategory/addcategory.component';
import { AddeditdeparmentComponent } from './deparments/addeditdeparment/addeditdeparment.component';
import { AdddetectionComponent } from './detection/adddetection/adddetection.component';
import { AddresparasComponent } from './respareas/addresparas/addresparas.component';
import { AddeditscorematrixComponent } from './score-matrix/addeditscorematrix/addeditscorematrix.component';
import { AddeditsubgroupComponent } from './sub-groups/addeditsubgroup/addeditsubgroup.component';
import { JobCodeComponent } from './job-code/job-code.component';
import { AddJobcodePopComponent } from './job-code/add-jobcode-pop/add-jobcode-pop.component';

const routes: Routes = [
  { path: '', redirectTo: 'category', pathMatch: 'full' },
  {
    path: 'respareas',
    component: RespareasComponent
  },
  {
    path: 'sub-group',
    component: SubGroupsComponent
  },
  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: 'detection',
    component: DetectionComponent
  },
  {
    path: 'deparmentsxxx',
    component: DeparmentsComponent
  },
  {
    path: 'score-matrix',
    component: ScoreMatrixComponent
  },
   {
    path: 'job-code',
    component: JobCodeComponent
  },

]


@NgModule({
  declarations: [
    AddcategoryComponent,
    AddeditdeparmentComponent,
    AdddetectionComponent,
    AddresparasComponent,
    AddeditscorematrixComponent,
    AddeditsubgroupComponent,
    ScoreMatrixComponent, DeparmentsComponent, DetectionComponent, CategoryComponent, SubGroupsComponent, RespareasComponent, JobCodeComponent, AddJobcodePopComponent],
  imports: [

    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule,
    MatCardModule,
    MatSelectModule
  ]
})
export class MasterdataModule { }
