import { Component, OnInit } from '@angular/core';

export interface FlowNode {
  stepNum: number;
  type: 'box' | 'diamond';
  phase: 'preliminary' | 'planning' | 'cause_effect' | 'ranking' | 'implementation' | 'sustaining';
  phaseName: string;
  text: string;
  yesLabel?: boolean;
}

@Component({
  selector: 'app-eval-guidelines',
  templateUrl: './guidelines.component.html',
  styleUrls: ['./guidelines.component.scss']
})
export class GuidelinesComponent implements OnInit {

  activeView: 'all' | 'infographic' | 'flowchart' = 'all';

  // Interactive RPN Simulator
  calcS: number = 8;
  calcO: number = 6;
  calcD: number = 5;

  get calcRPN(): number {
    return this.calcS * this.calcO * this.calcD;
  }

  get calcRiskLevel(): { label: string; class: string; action: string } {
    const val = this.calcRPN;
    if (val >= 200 || this.calcS >= 9) {
      return { label: 'CRITICAL / HIGH RISK', class: 'risk-high', action: 'Immediate Containment & Redesign Required' };
    } else if (val >= 100) {
      return { label: 'MEDIUM RISK', class: 'risk-medium', action: 'Corrective Action Plan Mandatory' };
    } else {
      return { label: 'LOW RISK', class: 'risk-low', action: 'Acceptable / Standard Quality Control' };
    }
  }

  // PFMEA Table Example Rows (from img2)
  pfmeaTable = [
    {
      processStep: 'Drilling',
      icon: 'construction',
      failureMode: 'Hole out of spec size',
      effect: 'Loose fit, leakage, customer complaint',
      s: 8,
      cause: 'Tool wear, wrong speed, material variation',
      o: 6,
      controls: 'In-process inspection, Tool change schedule',
      d: 5,
      rpn: 240,
      action: 'Reduce tool change interval, Train operator',
      resp: 'Production Eng',
      targetDate: '31-May-2025',
      actionTaken: 'Tool change reduced, Training done',
      newRpn: 96,
      reductionPct: '60%'
    },
    {
      processStep: 'Assembly',
      icon: 'build',
      failureMode: 'Bolt not tightened',
      effect: 'Vibration, noise, Product failure',
      s: 9,
      cause: 'Operator error, No torque check',
      o: 5,
      controls: 'Visual check, Torque tool available',
      d: 6,
      rpn: 270,
      action: 'Implement torque check, Poka-Yoke fixture',
      resp: 'Quality Eng',
      targetDate: '15-Jun-2025',
      actionTaken: 'Torque tool with alarm installed',
      newRpn: 90,
      reductionPct: '67%'
    },
    {
      processStep: 'Painting',
      icon: 'format_paint',
      failureMode: 'Paint peel off',
      effect: 'Corrosion, poor appearance',
      s: 7,
      cause: 'Poor surface prep, Wrong paint',
      o: 4,
      controls: 'Surface cleaning, Coating thickness check',
      d: 4,
      rpn: 112,
      action: 'Improve surface prep, Check paint mix ratio',
      resp: 'Process Eng',
      targetDate: '10-Jun-2025',
      actionTaken: 'Prep process improved',
      newRpn: 56,
      reductionPct: '50%'
    }
  ];

  // Flowchart Columns Data (from img3)
  flowchartCol1: FlowNode[] = [
    { stepNum: 1, type: 'box', phase: 'preliminary', phaseName: 'Preliminary', text: 'Identify a business necessity to conduct FMEA.' },
    { stepNum: 2, type: 'diamond', phase: 'preliminary', phaseName: 'Preliminary', text: 'Is this a new product or process?', yesLabel: true },
    { stepNum: 3, type: 'diamond', phase: 'preliminary', phaseName: 'Preliminary', text: 'Is this an existing product or process with low maturity? (with no previous FMEA)', yesLabel: true },
    { stepNum: 4, type: 'box', phase: 'preliminary', phaseName: 'Preliminary', text: 'Identify FMEA ownership.' },
    { stepNum: 5, type: 'box', phase: 'preliminary', phaseName: 'Preliminary', text: 'FMEA owner reviews the product or process to be assessed.' },
    { stepNum: 6, type: 'box', phase: 'preliminary', phaseName: 'Preliminary', text: 'FMEA owner identifies the core cross functional team, SME and extended team.' },
    { stepNum: 7, type: 'box', phase: 'preliminary', phaseName: 'Preliminary', text: 'FMEA owner reviews team skill sets and arranges any training to address the gaps.' },
    { stepNum: 8, type: 'box', phase: 'preliminary', phaseName: 'Preliminary', text: 'Team collectively identifies the inputs for FMEA development and sources of data.' },
    { stepNum: 9, type: 'box', phase: 'preliminary', phaseName: 'Preliminary', text: 'Team reviews any existing SOD scale descriptions applicable to product or process.' },
    { stepNum: 10, type: 'box', phase: 'preliminary', phaseName: 'Preliminary', text: 'If necessary, customize the SOD scale descriptions to make them more appropriate.' }
  ];

  flowchartCol2: FlowNode[] = [
    { stepNum: 11, type: 'box', phase: 'planning', phaseName: 'Planning', text: 'Walk the team through a comparable product or process build to gain familiarity.' },
    { stepNum: 12, type: 'box', phase: 'planning', phaseName: 'Planning', text: 'Get management buy-in to conduct a blitz approach and arrange logistics.' },
    { stepNum: 13, type: 'box', phase: 'cause_effect', phaseName: 'Cause & Effect', text: 'Cause and effect phase starts as a team reviews product and process functions.' },
    { stepNum: 14, type: 'box', phase: 'cause_effect', phaseName: 'Cause & Effect', text: 'As a team, brainstorm potential failure modes by product and process functions.' },
    { stepNum: 15, type: 'box', phase: 'cause_effect', phaseName: 'Cause & Effect', text: 'Use the sources of data to understand historical failure modes and mechanisms.' },
    { stepNum: 16, type: 'box', phase: 'cause_effect', phaseName: 'Cause & Effect', text: 'As a team, brainstorm potential causes using techniques like five whys for every failure mode, creating comprehensive mapping.' },
    { stepNum: 17, type: 'box', phase: 'cause_effect', phaseName: 'Cause & Effect', text: 'As a team, identify the local and end effect (impact) due to the failure modes.' },
    { stepNum: 18, type: 'box', phase: 'ranking', phaseName: 'Ranking', text: 'Ranking phase starts. Train the team in interpreting the customized SOD scale and skill gaps, and assigning ranking score.' }
  ];

  flowchartCol3: FlowNode[] = [
    { stepNum: 19, type: 'box', phase: 'ranking', phaseName: 'Ranking', text: 'Divide the team into two groups.' },
    { stepNum: 20, type: 'box', phase: 'ranking', phaseName: 'Ranking', text: 'The group assigned to severity reviews the failure modes, local and end effects, assigns severity scores using NGT and obtains consensus.' },
    { stepNum: 21, type: 'box', phase: 'ranking', phaseName: 'Ranking', text: 'The group assigned to occurrence detection reviews the failure modes, root causes and current controls, then assigns occurrence and detection scores using NGT and obtains consensus.' },
    { stepNum: 22, type: 'box', phase: 'ranking', phaseName: 'Ranking', text: 'Groups swap their severity, occurrence and detection scores and peer reviews.' },
    { stepNum: 23, type: 'box', phase: 'ranking', phaseName: 'Ranking', text: 'Transfer the information from mapping, SOD ranking to FMEA work sheet.' },
    { stepNum: 24, type: 'box', phase: 'ranking', phaseName: 'Ranking', text: 'Calculate RPN and criticality numbers. Prioritize the risks by the score.' },
    { stepNum: 25, type: 'box', phase: 'ranking', phaseName: 'Ranking', text: 'As a team, identify the actions to be taken to reduce the overall risks.' },
    { stepNum: 26, type: 'box', phase: 'implementation', phaseName: 'Implementation', text: 'As a first choice, team looks at mistake-proofing the causes responsible for the failure mode that brings down the detection and occurrence simultaneously.' }
  ];

  flowchartCol4: FlowNode[] = [
    { stepNum: 27, type: 'box', phase: 'implementation', phaseName: 'Implementation', text: 'Team looks at opportunity to improve detection ability and bring detection score down.' },
    { stepNum: 28, type: 'box', phase: 'implementation', phaseName: 'Implementation', text: 'Team next looks at opportunity to improve process capability and bring occurence score down.' },
    { stepNum: 29, type: 'box', phase: 'implementation', phaseName: 'Implementation', text: 'If the earlier actions are not bringing the overall risk below the target level, consider redesign.' },
    { stepNum: 30, type: 'box', phase: 'implementation', phaseName: 'Implementation', text: 'Assign responsibilities and timeline for actions closure.' },
    { stepNum: 31, type: 'box', phase: 'implementation', phaseName: 'Implementation', text: 'Reassign the SOD scores after action completion and update the FMEA worksheet.' },
    { stepNum: 32, type: 'box', phase: 'implementation', phaseName: 'Implementation', text: 'Review action status and scores (before and after) actions in management meeting.' },
    { stepNum: 33, type: 'box', phase: 'sustaining', phaseName: 'Sustaining', text: 'Review new failures from the field, customer complaints and in process issues periodically to include in the FMEA.' },
    { stepNum: 34, type: 'box', phase: 'sustaining', phaseName: 'Sustaining', text: 'Keep FMEA a live document and knowledge database.' }
  ];

  ngOnInit(): void {}

  setView(view: 'all' | 'infographic' | 'flowchart'): void {
    this.activeView = view;
  }
}
