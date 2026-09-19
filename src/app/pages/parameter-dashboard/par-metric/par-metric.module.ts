import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParMetricComponent } from './par-metric.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ParCategoryComponent } from './par-category/par-category.component';
import { ParFueltypeComponent } from './par-fueltype/par-fueltype.component';
import { ParModelComponent } from './par-model/par-model.component';
import { ParTransmissionComponent } from './par-transmission/par-transmission.component';
import { ParVariantComponent } from './par-variant/par-variant.component';
import { ParAuditTypeComponent } from './par-audit-type/par-audit-type.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';

export const routes = [
  { path: '', redirectTo: "audittype-par", pathMatch: "full" },
  { path: 'audittype-par', component: ParAuditTypeComponent, data: { breadcrumb: 'Obj Audits(AuditStatus/Checkpoints/Metrics/Audit Type)', description: 'This page is used to  metrics' } },
  { path: 'category-par', component: ParCategoryComponent, data: { breadcrumb: 'Obj Audits(AuditStatus/Checkpoints/Metrics/Category)' } },
  { path: 'model-par', component: ParModelComponent, data: { breadcrumb: 'Obj Audits(AuditStatus/Checkpoints/Metrics/Model)', description: 'This page is used to  metrics' } },
  { path: 'fueltype-par', component: ParFueltypeComponent, data: { breadcrumb: 'Obj Audits(AuditStatus/Checkpoints/Metrics/Fuel Type)', description: 'This page is used to  metrics' } },
  { path: 'transmissions-par', component: ParTransmissionComponent, data: { breadcrumb: 'Obj Audits(AuditStatus/Checkpoints/Metrics/Transmissions)', description: 'This page is used to  metrics' } },
  { path: 'variant-par', component: ParVariantComponent, data: { breadcrumb: 'Obj Audits(AuditStatus/Checkpoints/Metrics/Variant)', description: 'This page is used to  metrics' } },

];

@NgModule({
  declarations: [
    ParMetricComponent,
    ParCategoryComponent,
    ParFueltypeComponent,
    ParModelComponent,
    ParTransmissionComponent,
    ParVariantComponent,
    ParAuditTypeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
    SharedModule,
  ]
})
export class ParMetricModule { }
