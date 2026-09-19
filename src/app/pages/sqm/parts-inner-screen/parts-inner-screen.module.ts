import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatCardModule } from "@angular/material/card";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatIconModule } from "@angular/material/icon";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatDialogModule } from "@angular/material/dialog"; // ← ADD THIS
import { MatFormFieldModule } from "@angular/material/form-field"; // ← ADD THIS
import { MatInputModule } from "@angular/material/input"; // ← ADD THIS

import { PartsInnerScreenComponent } from "./parts-inner-screen.component";
import { PartsAuditDetailsComponent } from "./parts-audit-details/parts-audit-details.component";
import { PartsAuditReferenceComponent } from "./parts-audit-reference/parts-audit-reference.component";
import { PartsCompletedReferenceComponent } from "./parts-completed-reference/parts-completed-reference.component";
import { AuditrefRemarksPopComponent } from "./parts-audit-reference/auditref-remarks-pop/auditref-remarks-pop.component";
// import { MatDialogModule } from "@angular/material/dialog";

const routes: Routes = [
  {
    path: "",
    component: PartsInnerScreenComponent,
    children: [
      { path: "parts-audit-details", component: PartsAuditDetailsComponent },
      {
        path: "parts-audit-reference",
        component: PartsAuditReferenceComponent,
      },
      {
        path: "parts-completed-reference",
        component: PartsCompletedReferenceComponent,
      },
      { path: "", redirectTo: "parts-audit-details", pathMatch: "full" },
    ],
  },
];

@NgModule({
  declarations: [
    PartsInnerScreenComponent,
    PartsAuditDetailsComponent,
    PartsAuditReferenceComponent,
    PartsCompletedReferenceComponent,
    AuditrefRemarksPopComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatPaginatorModule,
    MatIconModule,
    MatCheckboxModule,
    MatSelectModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule, // ← FIXES mat-dialog-actions in AuditrefRemarksPopComponent
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [RouterModule],
})
export class PartsInnerScreen {}
