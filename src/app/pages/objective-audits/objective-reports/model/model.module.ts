import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelComponent } from './model.component';
import { HectorComponent } from './hector/hector.component';
import { GlosterComponent } from './gloster/gloster.component';
import { AstorComponent } from './astor/astor.component';
import { ZevsComponent } from './zevs/zevs.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

const routes: Routes = [
  { path: "", redirectTo: "hector", pathMatch: "full" },

  { path: "hector", component: HectorComponent ,
      
  },
  { path: "gloster", component: GlosterComponent ,
       
  },
  { path: "astor", component: AstorComponent,
       
   },
  { path: "zevs", component: ZevsComponent,
        
   },

]

@NgModule({
  declarations: [
    ModelComponent,
    HectorComponent,
    GlosterComponent,
    AstorComponent,
    ZevsComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NgxChartsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    // SharedModule,
    MatDialogModule,
    MatPaginatorModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
  ]
})
export class ModelModule { }
