import { Component, OnInit } from '@angular/core';

export interface WhyStep {
  step: number;
  question: string;
  answer: string;
}

export interface FishboneCause {
  category: 'Man' | 'Machine' | 'Method' | 'Material' | 'Measurement' | 'Milieu';
  factor: string;
  isRootCause: boolean;
  status: 'Investigated' | 'Ruled Out' | 'Verified Root Cause';
}

@Component({
  selector: 'app-rca',
  templateUrl: './rca.component.html',
  styleUrls: ['./rca.component.scss']
})
export class RcaComponent implements OnInit {

  // Primary Info
  problemStatement: string = 'Oil leakage observed near rear axle casing seal during field operations under high ambient temperature.';
  rcaMethod: string = '5-Why Analysis';
  rcaLead: string = 'Dr. Anand Verma (Chief Quality Analyst)';
  targetDate: string = '2024-10-05';
  rcaStatus: string = 'Root Cause Identified';
  rcaCategory: string = 'Manufacturing Process';

  // 5-Why Data
  whySteps: WhyStep[] = [
    { step: 1, question: 'Why did the oil leak occur?', answer: 'The oil seal lip ruptured prematurely under operating hydraulic pressure.' },
    { step: 2, question: 'Why did the oil seal lip rupture prematurely?', answer: 'Frictional heat at the shaft-seal contact surface exceeded the rated elastomer temperature limit.' },
    { step: 3, question: 'Why did friction and temperature spike at the seal interface?', answer: 'Shaft journal surface roughness (Ra) measured 0.85 µm, which is significantly rougher than the 0.40 µm design drawing specification.' },
    { step: 4, question: 'Why was the shaft journal surface roughness out of specification?', answer: 'The grinding wheel on the CNC shaft finishing line exceeded its redressed tool-life threshold by 350 cycles.' },
    { step: 5, question: 'Why was the grinding wheel not redressed per standard operating procedure (Root Cause)?', answer: 'The automated tool-wear sensor interlock on Machine #4 was bypassed during the peak production night shift.' }
  ];

  // Fishbone / 6M Data
  active6MCategory: 'Man' | 'Machine' | 'Method' | 'Material' | 'Measurement' | 'Milieu' = 'Machine';
  sixMCategories: Array<'Man' | 'Machine' | 'Method' | 'Material' | 'Measurement' | 'Milieu'> = [
    'Man', 'Machine', 'Method', 'Material', 'Measurement', 'Milieu'
  ];

  fishboneCauses: FishboneCause[] = [
    { category: 'Man', factor: 'Operator did not log tool-wear cycle counter at shift changeover', isRootCause: false, status: 'Investigated' },
    { category: 'Machine', factor: 'Automated tool-wear sensor interlock bypassed on Machine #4', isRootCause: true, status: 'Verified Root Cause' },
    { category: 'Method', factor: 'Preventive maintenance checklist did not mandate physical dress check', isRootCause: false, status: 'Investigated' },
    { category: 'Material', factor: 'Shaft forged alloy composition verified compliant with standard', isRootCause: false, status: 'Ruled Out' },
    { category: 'Measurement', factor: 'Surface roughness profilometer calibrated and accurate', isRootCause: false, status: 'Ruled Out' },
    { category: 'Milieu', factor: 'Ambient summer temperature contributed marginally to peak oil temp', isRootCause: false, status: 'Ruled Out' }
  ];

  newFactorText: string = '';

  // Root Cause Verification & Summary
  rootCauseStatement: string = 'The automated tool-wear sensor interlock on Machine #4 was bypassed during peak shift, allowing grinding wheel tool wear to exceed dressing limits and produce out-of-spec shaft journal surface roughness (Ra 0.85 µm).';
  validationMethod: string = 'Laboratory Surface Profilometer & Batch Re-simulation';
  rootCauseVerified: boolean = true;
  validationRemarks: string = 'Validated via physical profilometer inspection of retained batch #S2408 and reproduction of micro-abrasions under dynamometer testing.';
  rcaDocumentName: string = 'RCA_Report_Axle_Seal_Rev1.pdf';

  isSaved: boolean = false;

  ngOnInit(): void { }

  addWhyStep(): void {
    const nextStep = this.whySteps.length + 1;
    this.whySteps.push({
      step: nextStep,
      question: `Why did step ${nextStep - 1} occur?`,
      answer: ''
    });
  }

  removeWhyStep(index: number): void {
    if (this.whySteps.length > 1) {
      this.whySteps.splice(index, 1);
      // Re-index steps
      this.whySteps.forEach((item, idx) => item.step = idx + 1);
    }
  }

  getFilteredFishboneCauses(): FishboneCause[] {
    return this.fishboneCauses.filter(c => c.category === this.active6MCategory);
  }

  addFishboneFactor(): void {
    if (!this.newFactorText || !this.newFactorText.trim()) return;
    this.fishboneCauses.push({
      category: this.active6MCategory,
      factor: this.newFactorText.trim(),
      isRootCause: false,
      status: 'Investigated'
    });
    this.newFactorText = '';
  }

  deleteFishboneFactor(item: FishboneCause): void {
    const idx = this.fishboneCauses.indexOf(item);
    if (idx > -1) {
      this.fishboneCauses.splice(idx, 1);
    }
  }

  save(): void {
    this.isSaved = true;
    console.log('RCA Data saved successfully:', {
      problemStatement: this.problemStatement,
      rootCauseStatement: this.rootCauseStatement,
      rootCauseVerified: this.rootCauseVerified,
      rcaLead: this.rcaLead,
      targetDate: this.targetDate
    });
    setTimeout(() => {
      this.isSaved = false;
    }, 3000);
  }
}
