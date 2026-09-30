import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface RiskParamDetail {
  key: string;
  name: string;
  rating: number;
  icon: string;
  description: string;
  levelLabel: string;
  colorClass: string;
}

@Component({
  selector: 'app-risk-rating-dialog',
  templateUrl: './risk-rating-dialog.component.html',
  styleUrls: ['./risk-rating-dialog.component.scss']
})
export class RiskRatingDialogComponent implements OnInit {
  complaintTitle: string = '';
  subject: string = '';
  department: string = '';
  role: string = '';
  averageRating: number = 3.5;

  parameters: RiskParamDetail[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<RiskRatingDialogComponent>
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.complaintTitle = this.data.title || this.data.complaint || 'CAPA Item';
      this.subject = this.data.issue || this.data.subject || 'Quality Non-Conformance';
      this.department = this.data.department || 'QA-16949';
      this.role = this.data.role || 'Shift Manager';

      const rp = this.data.riskParameters || {};
      const sev = rp.severity || 4;
      const occ = rp.fieldOccurrence || 3;
      const det = rp.detectionLatency || 3;
      const con = rp.containmentDelay || 4;
      const war = rp.warrantyCostBurden || 3;
      const sup = rp.supplierDefectRate || 4;

      this.parameters = [
        {
          key: 'severity',
          name: 'Severity',
          rating: sev,
          icon: 'report_problem',
          description: 'Potential harm, failure impact, customer safety and operational disruption',
          levelLabel: this.getLevelLabel(sev),
          colorClass: this.getColorClass(sev)
        },
        {
          key: 'fieldOccurrence',
          name: 'Field Occurrence Volume',
          rating: occ,
          icon: 'timeline',
          description: 'Incident recurrence rate and total failure volume recorded across active fleet',
          levelLabel: this.getLevelLabel(occ),
          colorClass: this.getColorClass(occ)
        },
        {
          key: 'detectionLatency',
          name: 'Detection Latency',
          rating: det,
          icon: 'timer',
          description: 'Time elapsed between vehicle dispatch and initial telemetry defect logging',
          levelLabel: this.getLevelLabel(det),
          colorClass: this.getColorClass(det)
        },
        {
          key: 'containmentDelay',
          name: 'Containment Delay',
          rating: con,
          icon: 'security',
          description: 'Turnaround duration to establish complete physical or software containment',
          levelLabel: this.getLevelLabel(con),
          colorClass: this.getColorClass(con)
        },
        {
          key: 'warrantyCostBurden',
          name: 'Warranty Cost Burden',
          rating: war,
          icon: 'attach_money',
          description: 'Direct repair cost, recall liabilities, and total warranty financial exposure',
          levelLabel: this.getLevelLabel(war),
          colorClass: this.getColorClass(war)
        },
        {
          key: 'supplierDefectRate',
          name: 'Supplier Defect Rate',
          rating: sup,
          icon: 'precision_manufacturing',
          description: 'Failure frequency and incoming quality PPM from OEM component supplier',
          levelLabel: this.getLevelLabel(sup),
          colorClass: this.getColorClass(sup)
        }
      ];

      if (this.data.riskRating) {
        this.averageRating = Number(this.data.riskRating);
      } else {
        const sum = sev + occ + det + con + war + sup;
        this.averageRating = parseFloat((sum / 6).toFixed(1));
      }
    }
  }

  getLevelLabel(rating: number): string {
    switch (rating) {
      case 1: return 'Level 1 - Minimal';
      case 2: return 'Level 2 - Low';
      case 3: return 'Level 3 - Moderate';
      case 4: return 'Level 4 - High';
      case 5: return 'Level 5 - Critical';
      default: return `Level ${rating}`;
    }
  }

  getColorClass(rating: number): string {
    if (rating >= 5) return 'rating-level-5';
    if (rating === 4) return 'rating-level-4';
    if (rating === 3) return 'rating-level-3';
    if (rating === 2) return 'rating-level-2';
    return 'rating-level-1';
  }

  getOverallRiskBadgeClass(): string {
    if (this.averageRating >= 4.0) return 'badge-risk-critical';
    if (this.averageRating >= 3.0) return 'badge-risk-high';
    if (this.averageRating >= 2.0) return 'badge-risk-medium';
    return 'badge-risk-low';
  }

  getOverallRiskTitle(): string {
    if (this.averageRating >= 4.5) return 'Critical Risk Profile';
    if (this.averageRating >= 3.5) return 'High Risk Profile';
    if (this.averageRating >= 2.5) return 'Moderate Risk Profile';
    return 'Low Risk Profile';
  }

  getHighestRiskParameter(): RiskParamDetail | null {
    if (!this.parameters || this.parameters.length === 0) return null;
    return this.parameters.reduce((prev, curr) => (curr.rating > prev.rating ? curr : prev), this.parameters[0]);
  }

  close(): void {
    this.dialogRef.close();
  }
}
