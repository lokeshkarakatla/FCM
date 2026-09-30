import { Component, OnInit } from '@angular/core';

export interface FmeaRecord {
  id: number;
  processStep: string;
  failureMode: string;
  failureEffect: string;
  severity: number;
  potentialCause: string;
  occurrence: number;
  currentControls: string;
  detection: number;
  rpn: number;
  recommendedActions: string[];
  responsibility: string;
  actionTaken: string;
  revisedSeverity: number;
  revisedOccurrence: number;
  revisedDetection: number;
  revisedRpn: number;
}

@Component({
  selector: 'app-eval-fmea',
  templateUrl: './fmea.component.html',
  styleUrls: ['./fmea.component.scss']
})
export class FmeaComponent implements OnInit {

  // All 4 real dataset records from img3
  records: FmeaRecord[] = [
    {
      id: 1,
      processStep: 'Sealing/ temperature',
      failureMode: 'Temp. too high',
      failureEffect: 'Burned blister pack',
      severity: 10,
      potentialCause: 'Wrong setting',
      occurrence: 6,
      currentControls: 'Verification of batch record',
      detection: 7,
      rpn: 420,
      recommendedActions: [
        'Provide infrared temperature device to operator',
        'Implement automated thermocouple interlock (SOP-402)'
      ],
      responsibility: 'M. Peña',
      actionTaken: 'Temperature device implemented (8/11)',
      revisedSeverity: 3, // Plotted in Acceptable green zone as in img2 Graph 2
      revisedOccurrence: 2,
      revisedDetection: 2,
      revisedRpn: 80
    },
    {
      id: 2,
      processStep: 'Sealing/ temperature',
      failureMode: 'Temp. too high',
      failureEffect: 'Blister pack not sealed completely',
      severity: 9,
      potentialCause: 'Wrong setting',
      occurrence: 6,
      currentControls: 'Verification of batch record',
      detection: 7,
      rpn: 378,
      recommendedActions: [
        'Provide infrared temperature device to operator'
      ],
      responsibility: 'M. Peña',
      actionTaken: 'Temperature device implemented (8/11)',
      revisedSeverity: 3,
      revisedOccurrence: 2,
      revisedDetection: 2,
      revisedRpn: 72
    },
    {
      id: 3,
      processStep: 'Sealing/ press time',
      failureMode: 'Too much time',
      failureEffect: 'Burned blister pack',
      severity: 10,
      potentialCause: 'Machine not set properly',
      occurrence: 5,
      currentControls: 'Verification of batch record',
      detection: 7,
      rpn: 350,
      recommendedActions: [
        'Provide a visual display to see time elapsed'
      ],
      responsibility: 'J. Rodriguez',
      actionTaken: 'Visual display implemented (10/11)',
      revisedSeverity: 3,
      revisedOccurrence: 2,
      revisedDetection: 2,
      revisedRpn: 60
    },
    {
      id: 4,
      processStep: 'Sealing/ press time',
      failureMode: 'Not enough time',
      failureEffect: 'Blister pack not sealed completely',
      severity: 9,
      potentialCause: 'Machine not set properly',
      occurrence: 5,
      currentControls: 'Verification of batch record',
      detection: 7,
      rpn: 315,
      recommendedActions: [
        'Provide a visual display to see time elapsed'
      ],
      responsibility: 'J. Rodriguez',
      actionTaken: 'Visual display implemented',
      revisedSeverity: 3,
      revisedOccurrence: 2,
      revisedDetection: 2,
      revisedRpn: 54
    }
  ];

  selectedRecordIndex: number = 0;
  selectedRecord: FmeaRecord = this.records[0];

  // Row questions from img3 Row 1
  questions = {
    processStep: 'What is the process step/input under investigation?',
    failureMode: 'In what ways does the key input go wrong?',
    failureEffect: 'What is the impact on the key output variables (customer or internal requirements)?',
    severity: 'How severe is the effect to the customer?',
    potentialCause: 'What causes the key input to go wrong?',
    occurrence: 'How often does cause of failure mode occur?',
    currentControls: 'What are the existing controls and procedures (inspection and test) that prevent the cause of the failure mode? Should include an SOP number.',
    detection: 'How well can you detect cause or failure mode?',
    rpn: 'RPN = Severity × Occurrence × Detection (1 - 1000)',
    recommendedActions: 'What are the actions for reducing the occurrences of the Cause or improving detection?',
    responsibility: "Who's responsible for the recommended action?",
    actionsTaken: 'What are the completed actions taken with the recalculated RPN? Be sure to include completion month/year.',
    revisedSeverity: 'How severe is the effect after implementing corrective actions?',
    revisedOccurrence: 'How often does cause occur after implementing corrective actions?',
    revisedDetection: 'How well can you detect after implementing corrective actions?',
    revisedRpn: 'Recalculated Risk Priority Number (Target < 100)'
  };

  // 10x10 matrix axis levels
  severityLevels: number[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  occurrenceLevels: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  isSaved: boolean = false;
  viewMode: 'both' | 'matrix' | 'table' = 'both';

  ngOnInit(): void {
    this.recalculateAll();
  }

  selectRecord(index: number): void {
    this.selectedRecordIndex = index;
    this.selectedRecord = this.records[this.selectedRecordIndex];
  }

  recalculateAll(): void {
    this.records.forEach(rec => this.calculateRpn(rec));
  }

  calculateRpn(record: FmeaRecord): void {
    record.rpn = (record.severity || 1) * (record.occurrence || 1) * (record.detection || 1);
    record.revisedRpn = (record.revisedSeverity || 1) * (record.revisedOccurrence || 1) * (record.revisedDetection || 1);
  }

  onFieldChange(): void {
    this.calculateRpn(this.selectedRecord);
  }

  addRecommendedAction(): void {
    if (!this.selectedRecord.recommendedActions) {
      this.selectedRecord.recommendedActions = [];
    }
    this.selectedRecord.recommendedActions.push('');
  }

  removeRecommendedAction(index: number): void {
    if (this.selectedRecord.recommendedActions.length > 1) {
      this.selectedRecord.recommendedActions.splice(index, 1);
    }
  }

  addRecord(): void {
    const newId = this.records.length + 1;
    const newRec: FmeaRecord = {
      id: newId,
      processStep: 'Sealing/ new station',
      failureMode: 'Process parameter drift',
      failureEffect: 'Quality threshold escape',
      severity: 8,
      potentialCause: 'Wear & calibration drift',
      occurrence: 5,
      currentControls: 'Visual inspection sampling',
      detection: 6,
      rpn: 240,
      recommendedActions: [
        'Install digital telemetry sensor with alarm threshold'
      ],
      responsibility: 'Quality Eng',
      actionTaken: 'Interlock mechanism scheduled',
      revisedSeverity: 3,
      revisedOccurrence: 2,
      revisedDetection: 2,
      revisedRpn: 12
    };
    this.records.push(newRec);
    this.selectedRecordIndex = this.records.length - 1;
    this.selectedRecord = this.records[this.selectedRecordIndex];
  }

  deleteRecord(index: number, event: Event): void {
    event.stopPropagation();
    if (this.records.length > 1) {
      this.records.splice(index, 1);
      if (this.selectedRecordIndex >= this.records.length) {
        this.selectedRecordIndex = this.records.length - 1;
      }
      this.selectedRecord = this.records[this.selectedRecordIndex];
    }
  }

  save(): void {
    this.isSaved = true;
    setTimeout(() => {
      this.isSaved = false;
    }, 3000);
  }

  // Risk matrix color classification (matching img2 exactly)
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
    return this.selectedRecord.severity === sev && this.selectedRecord.occurrence === occ;
  }

  isRevisedMarker(sev: number, occ: number): boolean {
    return this.selectedRecord.revisedSeverity === sev && this.selectedRecord.revisedOccurrence === occ;
  }

  setInitialCoord(sev: number, occ: number): void {
    this.selectedRecord.severity = sev;
    this.selectedRecord.occurrence = occ;
    this.calculateRpn(this.selectedRecord);
  }

  setRevisedCoord(sev: number, occ: number): void {
    this.selectedRecord.revisedSeverity = sev;
    this.selectedRecord.revisedOccurrence = occ;
    this.calculateRpn(this.selectedRecord);
  }
}
