import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

// Component Imports
import { PartsSetupComponent } from './parts-setup.component';
import { PartsFamiliesComponent } from './parts-families/parts-families.component';
import { PartsMasterComponent } from './parts-master/parts-master.component';
import { AddPartsFamilypopComponent } from './parts-families/add-parts-familypop/add-parts-familypop.component';
import { AddPartspopComponent } from './parts-master/add-partspop/add-partspop.component';
import { SharedModule } from "src/app/shared/shared.module";
import { PartsMasterSuppliersComponent } from './parts-master/parts-master-suppliers/parts-master-suppliers.component';
import { PartsauditcatInnergridComponent } from './audit-categories/partsauditcat-innergrid/partsauditcat-innergrid.component';
import { FamiliesInnerGridComponent } from './parts-families/families-inner-grid/families-inner-grid.component';
import { BatchMasterComponent } from './batch-master/batch-master.component';
import { AddBatchPopComponent } from './batch-master/add-batch-pop/add-batch-pop.component';
import { DefectsMasterComponent } from './defects-master/defects-master.component';
import { PartsFamilyPopComponent } from './defects-master/parts-family-pop/parts-family-pop.component';
import { AddDefectsPopComponent } from './defects-master/add-defects-pop/add-defects-pop.component';
import { VenderRatingComponent } from './vender-rating/vender-rating.component';

// ❌ REMOVED AuditCategoriesComponent, AddPartCategoryComponent, and PartsauditcatInnergridComponent imports from here

const routes: Routes = [
  {
    path: '',
    component: PartsSetupComponent,
    children: [
      { 
        path: 'parts-cat', 
        loadChildren: () => import('./audit-categories/audit-categories.module').then(m => m.AuditCategoriesModule) 
      },
      { 
        path: 'families', 
        children: [
          { path: '', component: PartsFamiliesComponent }, // Default view when hitting /families
          { path: 'families-inner-grid', component: FamiliesInnerGridComponent } // Child view
        ]
      },
      { path: 'master', component: PartsMasterComponent },
         { path: 'batchmaster', component: BatchMasterComponent },
           { path: 'defectsmaster', component: DefectsMasterComponent },
           { path: 'vender-rating', component: VenderRatingComponent },
      { path: '', redirectTo: 'parts-cat', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  declarations: [
    PartsSetupComponent,
    PartsFamiliesComponent,
    PartsMasterComponent,
    AddPartsFamilypopComponent,
    AddPartspopComponent,
    PartsMasterSuppliersComponent,
    FamiliesInnerGridComponent,
    BatchMasterComponent,
    AddBatchPopComponent,
    DefectsMasterComponent,
    PartsFamilyPopComponent,
    AddDefectsPopComponent,
    VenderRatingComponent
 
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatPaginatorModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    SharedModule,
 
  ]
})
export class PartsSetupModule { }