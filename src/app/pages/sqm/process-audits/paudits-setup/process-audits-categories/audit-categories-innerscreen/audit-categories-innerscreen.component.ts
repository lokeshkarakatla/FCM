import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { QuestionPopComponent } from './question-pop/question-pop.component';
import { AddQuestionPopComponent } from '../../commodity-master/commodity-inner-grid/add-question-pop/add-question-pop.component';

@Component({
  selector: 'app-audit-categories-innerscreen',
  templateUrl: './audit-categories-innerscreen.component.html',
  styleUrls: ['./audit-categories-innerscreen.component.scss']
})
export class AuditCategoriesInnerscreenComponent implements OnInit {

  currentCategoryCode: string = '';
  tableData: any[] = [];

  // Complete mock database for all 6 Process Categories
  allCategoryQuestions: any = {
    'QMS': [
      { question: 'Is a documented and implemented Quality Management System (QMS) established and maintained in accordance with applicable automotive standards?', code: 'QMS1', mandatory: 'Yes', priority: 'High' },
      { question: 'Are quality objectives, roles, responsibilities, and ownership clearly defined, communicated, and periodically reviewed?', code: 'QMS2', mandatory: 'Yes', priority: 'High' },
      { question: 'Are controlled procedures, work instructions, and quality records maintained with proper revision and retention controls?', code: 'QMS3', mandatory: 'Yes', priority: 'High' },
      { question: 'Are manufacturing and support processes documented with defined inputs, outputs, controls, and performance measures?', code: 'QMS4', mandatory: 'Yes', priority: 'High' },
      { question: 'Is a formal change management process in place to assess, approve, validate, and document process or product changes?', code: 'QMS5', mandatory: 'Yes', priority: 'High' },
      { question: 'Are process risks identified and managed using structured methods such as PFMEA, with mitigation actions tracked to closure?', code: 'QMS6', mandatory: 'Yes', priority: 'High' },
      { question: 'Are internal audits conducted according to a defined schedule, and are findings effectively closed and verified?', code: 'QMS7', mandatory: 'Yes', priority: 'High' },
      { question: 'Is there a structured corrective and preventive action (CAPA) process including root cause analysis and effectiveness validation?', code: 'QMS8', mandatory: 'Yes', priority: 'High' },
      { question: 'Are customer complaints, nonconformities, and quality incidents analyzed and used for continuous improvement?', code: 'QMS9', mandatory: 'Yes', priority: 'High' },
      { question: 'Are employees performing quality-related activities trained, competent, and periodically evaluated?', code: 'QMS10', mandatory: 'Yes', priority: 'Medium' },
      { question: 'Are quality performance metrics (e.g., defects, rework, audit results, delivery quality) monitored and reviewed regularly?', code: 'QMS11', mandatory: 'Yes', priority: 'Medium' },
      { question: 'Does management conduct periodic reviews of the QMS and ensure actions are taken for continual improvement?', code: 'QMS12', mandatory: 'Yes', priority: 'High' }
    ],
 'MM': [
  { question: 'Is there a documented process for selection, qualification, approval, and periodic evaluation of material suppliers and sub-suppliers?', code: 'MM1', mandatory: 'Yes', priority: 'High' },
  { question: 'Are material and sub-supplier requirements clearly defined through specifications, drawings, standards, and purchase agreements?', code: 'MM2', mandatory: 'Yes', priority: 'High' },
  { question: 'Are incoming materials verified through inspection, testing, or certification before release to production?', code: 'MM3', mandatory: 'Yes', priority: 'High' },
  { question: 'Is supplier performance monitored using defined KPIs such as quality, delivery, responsiveness, and defect rates?', code: 'MM4', mandatory: 'Yes', priority: 'High' },
  { question: 'Are approved supplier lists (ASL) maintained, reviewed, and controlled to prevent unauthorized sourcing?', code: 'MM5', mandatory: 'Yes', priority: 'High' },
  { question: 'Is material traceability maintained from receipt through production to finished product shipment?', code: 'MM6', mandatory: 'Yes', priority: 'High' },
  { question: 'Are changes to raw materials, specifications, manufacturing location, process, or sub-suppliers formally reviewed and approved before implementation?', code: 'MM7', mandatory: 'Yes', priority: 'High' },
  { question: 'Is there a process to manage supplier nonconformance, containment actions, corrective actions, and effectiveness verification?', code: 'MM8', mandatory: 'Yes', priority: 'High' },
  { question: 'Are sub-suppliers required to comply with applicable customer, regulatory, and automotive quality requirements?', code: 'MM9', mandatory: 'Yes', priority: 'High' },
  { question: 'Are supplier audits or assessments conducted periodically based on risk, performance, or business criticality?', code: 'MM10', mandatory: 'Yes', priority: 'Medium' },
  { question: 'Are inventory handling, storage conditions, identification, FIFO/FEFO controls, and material preservation practices implemented?', code: 'MM11', mandatory: 'Yes', priority: 'Medium' },
  { question: 'Are contingency and supply continuity plans established to address material shortages, supplier disruptions, or quality incidents?', code: 'MM12', mandatory: 'Yes', priority: 'High' }
],'PPC': [
  { question: 'Are production processes documented, standardized, and controlled through approved process flow diagrams, control plans, and work instructions?', code: 'PPC1', mandatory: 'Yes', priority: 'High' },
  { question: 'Are critical process parameters identified, monitored, and maintained within defined operating limits?', code: 'PPC2', mandatory: 'Yes', priority: 'High' },
  { question: 'Are production operators trained, qualified, and authorized for the processes they perform?', code: 'PPC3', mandatory: 'Yes', priority: 'High' },
  { question: 'Are setup verification and first-off / first-piece approval activities performed before production release?', code: 'PPC4', mandatory: 'Yes', priority: 'High' },
  { question: 'Are process controls implemented to prevent defects, including poka-yoke (error proofing) and automated detection methods where applicable?', code: 'PPC5', mandatory: 'Yes', priority: 'High' },
  { question: 'Are in-process inspections and quality checks performed at defined frequencies and recorded appropriately?', code: 'PPC6', mandatory: 'Yes', priority: 'High' },
  { question: 'Is process capability monitored (e.g., Cp/Cpk or equivalent), and are corrective actions initiated when performance falls below targets?', code: 'PPC7', mandatory: 'No', priority: 'Medium' },
  { question: 'Are nonconforming products identified, segregated, controlled, and prevented from unintended use or shipment?', code: 'PPC8', mandatory: 'Yes', priority: 'High' },
  { question: 'Is production equipment maintained through preventive or predictive maintenance programs to ensure process stability?', code: 'PPC9', mandatory: 'Yes', priority: 'High' },
  { question: 'Are production changes (equipment, tooling, process, layout, parameters, personnel, or software) formally reviewed, validated, and approved before implementation?', code: 'PPC10', mandatory: 'Yes', priority: 'High' },
  { question: 'Are product identification and traceability maintained throughout the production process and linked to manufacturing records?', code: 'PPC11', mandatory: 'Yes', priority: 'High' },
  { question: 'Are production performance indicators (yield, scrap, downtime, defects, rework, OEE, etc.) monitored and used for continual process improvement?', code: 'PPC12', mandatory: 'Yes', priority: 'Medium' }
],
  'PM': [
  { question: 'Is there a documented preventive maintenance program covering production equipment, tooling, utilities, and critical assets?', code: 'PM1', mandatory: 'Yes', priority: 'High' },
  { question: 'Are maintenance schedules established based on manufacturer recommendations, usage, risk, and historical performance?', code: 'PM2', mandatory: 'Yes', priority: 'High' },
  { question: 'Are preventive maintenance activities performed as planned and recorded with completion evidence?', code: 'PM3', mandatory: 'Yes', priority: 'High' },
  { question: 'Are equipment maintenance histories maintained, including breakdowns, repairs, replacement parts, and recurring issues?', code: 'PM4', mandatory: 'Yes', priority: 'Medium' },
  { question: 'Are critical machines and equipment identified, with prioritized maintenance plans to minimize production and quality risks?', code: 'PM5', mandatory: 'Yes', priority: 'High' },
  { question: 'Are maintenance procedures standardized and supported by approved work instructions and checklists?', code: 'PM6', mandatory: 'Yes', priority: 'Medium' },
  { question: 'Are maintenance personnel trained and qualified to perform preventive maintenance activities?', code: 'PM7', mandatory: 'Yes', priority: 'Medium' },
  { question: 'Are equipment calibration, inspection, lubrication, cleaning, and adjustment activities included in the maintenance program where applicable?', code: 'PM8', mandatory: 'Yes', priority: 'High' },
  { question: 'Is equipment condition monitored using preventive or predictive methods (e.g., condition monitoring, trend analysis, diagnostics)?', code: 'PM9', mandatory: 'No', priority: 'Medium' },
  { question: 'Are maintenance-related process changes or equipment modifications reviewed, validated, and approved before returning equipment to production?', code: 'PM10', mandatory: 'Yes', priority: 'High' },
  { question: 'Are spare parts for critical equipment identified, controlled, and available to support timely maintenance and recovery?', code: 'PM11', mandatory: 'Yes', priority: 'High' },
  { question: 'Are preventive maintenance KPIs (e.g., downtime, MTBF, MTTR, schedule compliance, maintenance effectiveness) monitored and used for continuous improvement?', code: 'PM12', mandatory: 'Yes', priority: 'Medium' }
],
 'CAPA': [
  { question: 'Is there a documented CAPA process defining responsibilities, timelines, escalation, and closure requirements?', code: 'CAPA1', mandatory: 'Yes', priority: 'High' },
  { question: 'Are customer complaints, internal defects, audit findings, and process deviations formally captured and evaluated through the CAPA process?', code: 'CAPA2', mandatory: 'Yes', priority: 'High' },
  { question: 'Are immediate containment actions implemented to control nonconforming products and prevent further impact?', code: 'CAPA3', mandatory: 'Yes', priority: 'High' },
  { question: 'Is root cause analysis conducted using structured methodologies (e.g., 5 Why, Fishbone, 8D, Fault Tree Analysis)?', code: 'CAPA4', mandatory: 'Yes', priority: 'High' },
  { question: 'Are corrective actions defined to eliminate identified root causes rather than address symptoms only?', code: 'CAPA5', mandatory: 'Yes', priority: 'High' },
  { question: 'Are preventive actions implemented to avoid recurrence of similar issues across products, processes, or locations?', code: 'CAPA6', mandatory: 'Yes', priority: 'High' },
  { question: 'Are CAPA actions assigned to responsible owners with defined target completion dates and progress tracking?', code: 'CAPA7', mandatory: 'Yes', priority: 'Medium' },
  { question: 'Is effectiveness verification performed to confirm that implemented actions resolved the issue and prevented recurrence?', code: 'CAPA8', mandatory: 'Yes', priority: 'High' },
  { question: 'Are lessons learned and CAPA outcomes incorporated into control plans, PFMEA, work instructions, and training materials?', code: 'CAPA9', mandatory: 'Yes', priority: 'High' },
  { question: 'Are recurring issues analyzed using trend data and quality metrics to identify systemic improvement opportunities?', code: 'CAPA10', mandatory: 'Yes', priority: 'Medium' },
  { question: 'Are changes resulting from CAPA formally reviewed, validated, documented, and approved before implementation?', code: 'CAPA11', mandatory: 'Yes', priority: 'High' },
  { question: 'Are CAPA performance indicators (e.g., closure time, recurrence rate, overdue actions, effectiveness rate) monitored and reviewed for continual improvement?', code: 'CAPA12', mandatory: 'Yes', priority: 'Medium' }
],
   '5S': [
  { question: 'Are 5S standards (Sort, Set in Order, Shine, Standardize, Sustain) documented, implemented, and communicated across production and support areas?', code: '5S1', mandatory: 'Yes', priority: 'High' },
  { question: 'Are unnecessary materials, tools, equipment, and waste regularly identified and removed from work areas?', code: '5S2', mandatory: 'Yes', priority: 'High' },
  { question: 'Are workstations, tools, materials, and storage locations clearly identified, labeled, and organized for efficient use?', code: '5S3', mandatory: 'Yes', priority: 'High' },
  { question: 'Are production, storage, and common areas maintained in a clean and orderly condition to support product quality and safety?', code: '5S4', mandatory: 'Yes', priority: 'High' },
  { question: 'Are cleaning activities scheduled, assigned, and documented with defined responsibilities?', code: '5S5', mandatory: 'Yes', priority: 'Medium' },
  { question: 'Are visual controls (floor markings, labels, shadow boards, status indicators, signage) used to maintain workplace organization?', code: '5S6', mandatory: 'Yes', priority: 'Medium' },
  { question: 'Are materials, components, and finished goods stored appropriately to prevent contamination, damage, or mix-up?', code: '5S7', mandatory: 'Yes', priority: 'High' },
  { question: 'Are aisles, emergency exits, equipment access points, and safety zones kept unobstructed and clearly marked?', code: '5S8', mandatory: 'Yes', priority: 'High' },
  { question: 'Are abnormal conditions (leaks, spills, damaged equipment, excess inventory, clutter) identified and addressed promptly?', code: '5S9', mandatory: 'Yes', priority: 'High' },
  { question: 'Are periodic 5S audits conducted and findings tracked through corrective actions to closure?', code: '5S10', mandatory: 'Yes', priority: 'High' },
  { question: 'Are employees trained and actively participating in maintaining housekeeping and workplace discipline practices?', code: '5S11', mandatory: 'Yes', priority: 'Medium' },
  { question: 'Are 5S performance indicators and continuous improvement activities reviewed regularly to sustain workplace standards?', code: '5S12', mandatory: 'Yes', priority: 'Medium' }
],
    // A default fallback list if the code doesn't match
    'DEFAULT': [
      { question: 'No category data found. Check category code.', code: 'ERR', mandatory: 'No', priority: 'Low' }
    ]
  };

  constructor(
    private dialog: MatDialog, 
    public router: Router, 
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Listen for changes in the URL query parameters
    this.route.queryParams.subscribe(params => {
      this.currentCategoryCode = params['code'];
      this.loadQuestions(this.currentCategoryCode);
    });
  }

  loadQuestions(code: string): void {
    // Check if we have data for this code, otherwise load DEFAULT
    if (code && this.allCategoryQuestions[code]) {
      this.tableData = this.allCategoryQuestions[code];
    } else {
      this.tableData = this.allCategoryQuestions['DEFAULT'];
    }
  }

  // --- Action Handlers ---
// --- Action Handlers ---

  onAddQuestion(): void {
    this.dialog.open(AddQuestionPopComponent, {
      width: '600px',
      // Pass isEdit: false for the Add button
      data: { isEdit: false, categoryCode: this.currentCategoryCode } 
    }); 
  }

  onEdit(item: any): void {
     this.dialog.open(AddQuestionPopComponent, {
      width: '600px',
      // Pass isEdit: true AND the item data for the Edit button
      data: { isEdit: true, item: item, categoryCode: this.currentCategoryCode } 
    }); 
  }

  onDelete(item: any): void {
    console.log('Delete clicked for:', item.question);
  }

  goBack() {
    this.location.back();
  }
}