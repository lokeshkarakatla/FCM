import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// --- ADDED FORMS MODULES (Required for formControlName and ngModel) ---
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

// --- ANGULAR MATERIAL IMPORTS ---
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';   // <-- FIXES THE BUTTONS
import { MatTooltipModule } from '@angular/material/tooltip'; // <-- FIXES TOOLTIPS ON ICONS

// Import your components
 
 
import { ProcessAuditDetailsComponent } from './process-audit-details/process-audit-details.component';
 
import { ProcessInnerScreenComponent } from './process-inner-screen.component';
import { ProcessAuditReferenceComponent } from './process-audit-reference/process-audit-reference.component';
import { ProcessCompletedReferenceComponent } from './process-completed-reference/process-completed-reference.component';

const routes: Routes = [
  {
    path: '',
    component: ProcessInnerScreenComponent, 
    children: [
       
      { path: 'process-audit-details', component: ProcessAuditDetailsComponent },
      { path: 'process-audit-reference', component: ProcessAuditReferenceComponent },
       { path: 'process-completed-reference', component: ProcessCompletedReferenceComponent },
 
      
      { path: '', redirectTo: 'process-audit-details', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    
    // --- ADD THE MISSING MODULES HERE ---
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatPaginatorModule,
    MatIconModule,
    MatCheckboxModule,
    MatSelectModule,
    MatButtonModule,  
    MatTooltipModule  
  ],
  exports: [RouterModule],
  declarations: [
    ProcessAuditDetailsComponent,
    ProcessAuditReferenceComponent,
    ProcessCompletedReferenceComponent
  ]
})
export class ProcessInnerScreen { }