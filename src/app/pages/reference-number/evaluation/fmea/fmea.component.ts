import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eval-fmea',
  templateUrl: './fmea.component.html',
  styleUrls: ['./fmea.component.scss']
})
export class FmeaComponent implements OnInit {

  // Process and Failure Details (Populated from img1 with expanded realistic FMEA data)
  processStep: string = 'Sealing/ temperature & dwell time control';
  failureModes: string[] = [
    'Temp. too high',
    'Temperature variations beyond ±5°C tolerance',
    'Non-uniform heat distribution across upper and lower sealing jaws',
    'Delayed thermal recovery after high-speed foil feeding cycle'
  ];
  failureEffects: string[] = [
    'Burned blister pack',
    'Blister pack not sealed completely',
    'Micro-channel leakage causing loss of sterile barrier packaging',
    'Deformed blister cavity profile leading to customer visual complaints'
  ];
  severity: number | null = 10;
  potentialCauses: string[] = [
    'Wrong setting',
    'Machine not set properly',
    'PID temperature controller calibration drift over operating hours',
    'Heater cartridge degradation and uneven resistive heating'
  ];
  occurrence: number | null = 6;
  currentControls: string[] = [
    'Verification of batch record',
    'Periodic manual temperature check (SOP-402)',
    'Inline automated visual seal width inspection camera system',
    'Pre-shift blister vacuum chamber dye penetration test'
  ];
  detection: number | null = 7;

  // Rating Options from img2 (Detection), img3 (Severity), img4 (Occurrence)
  severityOptions = [
    { value: 10, label: 'Dangerous without warning' },
    { value: 9, label: 'Dangerous with warning' },
    { value: 8, label: 'Very high' },
    { value: 7, label: 'High' },
    { value: 6, label: 'Moderate' },
    { value: 5, label: 'Low' },
    { value: 4, label: 'Very low' },
    { value: 3, label: 'Minor' },
    { value: 2, label: 'Very minor' },
    { value: 1, label: 'None' }
  ];

  occurrenceOptions = [
    { value: 10, label: 'Very High: Failure is almost inevitable.' },
    { value: 9, label: 'High: Failures occur almost as often as not.' },
    { value: 8, label: 'High: Repeated failures.' },
    { value: 7, label: 'High: Failures occur often.' },
    { value: 6, label: 'Moderately High: Frequent failures.' },
    { value: 5, label: 'Moderate: Occasional failures.' },
    { value: 4, label: 'Moderately Low: Infrequent failures.' },
    { value: 3, label: 'Low: Relatively few failures.' },
    { value: 2, label: 'Low: Failures are few and far between.' },
    { value: 1, label: 'Remote: Failure is unlikely.' }
  ];

  detectionOptions = [
    { value: 10, label: 'Absolute Uncertainty' },
    { value: 9, label: 'Very Remote' },
    { value: 8, label: 'Remote' },
    { value: 7, label: 'Very Low' },
    { value: 6, label: 'Low' },
    { value: 5, label: 'Moderately' },
    { value: 4, label: 'Moderately High' },
    { value: 3, label: 'High' },
    { value: 2, label: 'Very High' },
    { value: 1, label: 'Almost Certain' }
  ];

  get rpn(): number | null {
    if (this.severity !== null && this.occurrence !== null && this.detection !== null) {
      return Number(this.severity) * Number(this.occurrence) * Number(this.detection);
    }
    return null;
  }

  // Mitigation and Post-Action Details (Populated from img1 with expanded realistic FMEA data)
  recommendedActions: string[] = [
    'Provide infrared temperature device to operator',
    'Provide a visual display to see time elapsed',
    'Install automated interlock cutoff switch for out-of-spec temperature deviations',
    'Establish bi-weekly preventive maintenance calibration schedule for heating elements'
  ];

  // Responsibility: Department and Role dropdowns
  selectedDepartment: string = 'Quality Assurance';
  selectedRole: string = 'Process Engineer';

  departmentOptions: string[] = [
    'Quality Assurance',
    'Production / Operations',
    'Packaging & Sealing',
    'Engineering & Maintenance',
    'R&D / Process Development',
    'Testing & Validation',
    'Supply Chain & SQA'
  ];

  roleOptions: string[] = [
    'Process Engineer',
    'Quality Lead / Specialist',
    'Production Supervisor',
    'Maintenance Engineer',
    'Packaging Specialist',
    'Line Lead / Operator',
    'Plant Quality Manager',
    'Validation Specialist'
  ];

  responsibility: string = 'Quality Assurance - Process Engineer';
  revisedSeverity: number | null = 3;
  revisedOccurrence: number | null = 2;
  revisedDetection: number | null = 2;

  get revisedRpn(): number | null {
    if (this.revisedSeverity !== null && this.revisedOccurrence !== null && this.revisedDetection !== null) {
      return Number(this.revisedSeverity) * Number(this.revisedOccurrence) * Number(this.revisedDetection);
    }
    return null;
  }

  // 10x10 matrix axis levels
  severityLevels: number[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  occurrenceLevels: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Questions from Img2 (RPN and Revised items are blank in Img2; Actions Taken removed)
  questions = {
    processStep: 'What is the process step/input under investigation?',
    failureMode: 'In what ways does the key input go wrong?',
    failureEffect: 'What is the impact on the key output variables (customer or internal requirements)?',
    severity: 'How severe is the effect to the customer?',
    potentialCause: 'What causes the key input to go wrong?',
    occurrence: 'How often does cause of failure mode occur?',
    currentControls: 'What are the existing controls and procedures (inspection and test) that prevent the cause of the failure mode? Should include an SOP number.',
    detection: 'How well can you detect cause or failure mode?',
    rpn: '',
    recommendedActions: 'What are the actions for reducing the occurrences of the Cause or improving detection?',
    responsibility: "Who's responsible for the recommended action?",
    revisedSeverity: '',
    revisedOccurrence: '',
    revisedDetection: '',
    revisedRpn: ''
  };

  isSaved: boolean = false;

  ngOnInit(): void {}

  save(): void {
    this.isSaved = true;
    setTimeout(() => {
      this.isSaved = false;
    }, 3000);
  }

  addEntry(list: string[]): void {
    if (list) {
      list.push('');
    }
  }

  removeEntry(list: string[], index: number): void {
    if (list && list.length > 1) {
      list.splice(index, 1);
    }
  }

  addRecommendedAction(): void {
    this.addEntry(this.recommendedActions);
  }

  removeRecommendedAction(index: number): void {
    this.removeEntry(this.recommendedActions, index);
  }

  // Risk matrix color classification (matching img2):
  // Green (Acceptable): sum <= 8
  // Yellow (Consideration): sum 9 to 10
  // Red (Need Corrective Action): sum >= 11
  getCellClass(sev: number, occ: number): string {
    const sum = sev + occ;
    if (sum <= 8) {
      return 'cell-acceptable';
    } else if (sum <= 10) {
      return 'cell-consideration';
    } else {
      return 'cell-corrective';
    }
  }

  isInitialMarker(sev: number, occ: number): boolean {
    return this.severity !== null && this.occurrence !== null && this.severity === sev && this.occurrence === occ;
  }

  isRevisedMarker(sev: number, occ: number): boolean {
    return this.revisedSeverity !== null && this.revisedOccurrence !== null && this.revisedSeverity === sev && this.revisedOccurrence === occ;
  }

  setInitialCoord(sev: number, occ: number): void {
    this.severity = sev;
    this.occurrence = occ;
  }

  setRevisedCoord(sev: number, occ: number): void {
    this.revisedSeverity = sev;
    this.revisedOccurrence = occ;
  }
}
