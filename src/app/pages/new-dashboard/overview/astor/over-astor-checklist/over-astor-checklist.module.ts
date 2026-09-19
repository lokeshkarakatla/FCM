import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverAstorChecklistComponent } from './over-astor-checklist.component';
// import { AstorBodyAuditComponent } from './astor-body-audit/astor-body-audit.component';
// import { AstorPaintAuditComponent } from './astor-paint-audit/astor-paint-audit.component';
// import { AstorPaqAuditComponent } from './astor-paq-audit/astor-paq-audit.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

export const routes = [
  // {path:'',component:AstorPaqAuditComponent,data:{breadcrumb:'Dashboard'}},
  // { path:'astor-pqa',component:AstorPaqAuditComponent, data: { breadcrumb: 'Dashboard' } },
  // { path:'astor-body',component:AstorBodyAuditComponent, data: { breadcrumb: 'Dashboard' } },
  // { path:'astor-paint',component:AstorPaintAuditComponent, data: { breadcrumb: 'Dashboard' } },
  
]

@NgModule({
  declarations: [
    OverAstorChecklistComponent,
    // AstorBodyAuditComponent,
    // AstorPaintAuditComponent,
    // AstorPaqAuditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  
    SharedModule,
  ]
})
export class OverAstorChecklistModule { }
