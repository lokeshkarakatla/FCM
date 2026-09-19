


//     export interface ClosureItem {
//   date: string;
//   subject: string;
// }



export class PartsData {





  static stepsData() {
  let values = [
    {
      step: 'D1',
      stepName: 'Process',
      department: 'Quality Assurance',
      assigned: 'Jane Smith',
      status: 'In Progress',
      lastUpdated: '2025-10-09',
      updatedBy: 'Jane Smith',
      startDate: '2025-10-01',
      endDate: '2025-10-15',
      done: false
    },
    {
      step: 'D2',
      stepName: 'Tools',
      department: 'Production',
      assigned: 'Peter Jones',
      status: 'Not Started',
      lastUpdated: '2025-10-08',
      updatedBy: 'Admin',
      startDate: '2025-10-16',
      endDate: '2025-10-20',
      done: false
    },
    {
      step: 'D3a',
      stepName: 'Production',
      department: 'Manufacturing',
      assigned: 'Mary Williams',
      status: 'Pending Review',
      lastUpdated: '2025-10-10',
      updatedBy: 'Supervisor',
      startDate: '2025-10-12',
      endDate: '2025-10-18',
      done: false
    },
    {
      step: 'D3b',
      stepName: 'Supplier Quality Management',
      department: 'Supply Chain',
      assigned: 'Peter Jones',
      status: 'In Progress',
      lastUpdated: '2025-10-11',
      updatedBy: 'Quality Lead',
      startDate: '2025-10-13',
      endDate: '2025-10-19',
      done: false
    },
    {
      step: 'D4a',
      stepName: 'Internal Quality Control',
      department: 'QA',
      assigned: 'Jane Smith',
      status: 'Completed',
      lastUpdated: '2025-10-07',
      updatedBy: 'Auditor',
      startDate: '2025-09-30',
      endDate: '2025-10-05',
      done: true
    },
    {
      step: 'D4b',
      stepName: 'Supplier Part Quality',
      department: 'Procurement',
      assigned: 'Mary Williams',
      status: 'In Progress',
      lastUpdated: '2025-10-09',
      updatedBy: 'Supplier Manager',
      startDate: '2025-10-14',
      endDate: '2025-10-22',
      done: false
    },
    {
      step: 'D5',
      stepName: 'Process Engineering',
      department: 'Engineering',
      assigned: 'Peter Jones',
      status: 'Not Started',
      lastUpdated: '2025-10-08',
      updatedBy: 'Admin',
      startDate: '2025-10-20',
      endDate: '2025-10-25',
      done: false
    },
    {
      step: 'D6',
      stepName: 'Product Design',
      department: 'R&D',
      assigned: 'Jane Smith',
      status: 'In Progress',
      lastUpdated: '2025-10-12',
      updatedBy: 'Design Lead',
      startDate: '2025-10-15',
      endDate: '2025-10-28',
      done: false
    },
    {
      step: 'D7',
      stepName: 'Cross Functional Team',
      department: 'Operations',
      assigned: 'Mary Williams',
      status: 'Pending',
      lastUpdated: '2025-10-10',
      updatedBy: 'Coordinator',
      startDate: '2025-10-18',
      endDate: '2025-10-30',
      done: false
    }
  ];
  return values;
}






    static GetD7tData() {
        let  values = [
  { check: 'Have all relevant process documents  been permanently updated to reflect the corrective actions?' },
  { check: 'Are the new process controls standardized and applied across all similar lines, machines, or plants?' },
  { check: 'Have lessons learned been documented and shared across relevant teams or departments?' },
  { check: 'Has the FMEA been updated to reflect new risks, controls, and revised RPN values?' },
  { check: 'Are preventive controls in place to detect early signs of recurrence ?' },
  { check: 'Have training programs been updated, and are all current/future operators trained on the revised process?' },
  { check: 'Are audit mechanisms  updated to include the new controls?' },
  { check: 'Have similar products, processes, or sites been reviewed for potential occurrence of the same issue?' },
  { check: 'Are there system-level changes required ?' },
  { check: 'Is there a monitoring plan in place to ensure long-term sustainability of the corrective actions?' }
];
        return values;
    }
    static getd1() {
        let values = [
            { check: 'What is the exact process being analyzed, and where does it start and end?' },
            { check: 'Who is the process owner, and which cross-functional stakeholders must be involved?' },
            { check: 'What are the key inputs for this process?' },
            { check: 'What are the expected outputs, and how is quality measured for them?' },
            { check: 'What does the current “as-is” process flow look like, including rework and inspection points?' },
            { check: 'Which process parameters are Critical to Quality (CTQs), and what are their acceptable limits?' },
            { check: 'What existing controls  are in place to ensure process stability?' },
            { check: 'What data is currently available for this process, and is it reliable and traceable?' },
            { check: 'Are there known variations, bottlenecks, or recurring failure points in this process?' },
            { check: 'What similar issues or past corrective actions (CAPAs/NCRs) are associated with this process?' }
        ];
        return values;


    }

    static getd2() {
        let values = [
  { check:  'What exactly is the problem, and how is it defined in measurable terms?' },
   { check: 'At which specific process step or operation is the issue occurring?' },
   { check: 'When was the problem first observed, and what is its frequency or trend over time?' },
   { check: 'Where in the process flow does the defect originate vs where it is detected?' },
   { check: 'What is the magnitude of the issue ?' },
   { check: 'Which products, batches, machines, or shifts are affected?' },
   { check: 'What are the standard process parameters, and how do current conditions deviate from them?' },
   { check: 'What is the impact on downstream processes or customers (internal/external)?' },
   { check: 'What is the “Is / Is Not” comparison ?' },
   { check: 'What objective data  supports the problem statement?' }
 ];
        return values;


    }


    static getd3a() {
 let    values = [
   { check: 'Have all affected in-process materials (WIP), semi-finished, and finished goods within the plant been identified and physically segregated?' },
  { check: 'Is containment applied at the exact process step where the defect originates, as well as all downstream internal operations?' },
  { check: 'Have all relevant production lines, machines, shifts, and operators been included in the containment scope?' },
  { check: 'What temporary controls are implemented within production?' },
  { check: 'Are clear identification methods  used to distinguish suspect vs approved material?' },
  { check: 'Have production operators and supervisors been formally informed and trained on containment procedures?' },
  { check: 'Is there a defined process for handling non-conforming material  within the plant?' },
  { check: 'How is containment effectiveness being monitored internally ?' },
  { check: 'Are there risks that containment actions could disrupt production flow, introduce errors, or create bottlenecks?' },
  { check: 'Is ownership clearly assigned for maintaining containment actions until permanent corrective actions (D5/D6) are validated?' }
  ];
        return values;


    }


    static getd3b() {
        let values =[
  { check: 'Have all potentially affected shipments  been identified using traceability data?' },
  { check: 'Has a formal customer notification been issued with clear instructions ?' },
  { check: 'Are containment actions consistently applied across all customers, regions, and distribution channels?' },
  { check: 'What external controls are in place ?' },
  { check: 'Is there a robust recall/hold mechanism to stop further distribution of suspect products?' },
  { check: 'How are suspect vs cleared products clearly identified at customer or distributor locations?' },
  { check: 'What is the defined process for disposition of affected products  in the field?' },
  { check: 'How is the effectiveness of external containment being monitored ?' },
  { check: 'Are communication channels established for real-time updates between internal teams and customers?' },
  { check: 'Is ownership clearly defined for managing external containment until permanent corrective actions are validated?' }
];
        return values;


    }
    static getd4() {
        let values = [
  { check: 'At which exact process step and condition does the defect originate (machine, operation, stage)?' },
  { check: 'What specific process parameter(s)  deviate from standard during defect occurrence?' },
  { check: 'What evidence  correlates process variation with the defect?' },
  { check: 'Have structured RCA tools been applied specifically to process variables?' },
  { check: 'Was the process operating within defined specifications at the time of defect generation? If not, why?' },
  { check: 'Are there differences between “good” vs “defective” runs under the same process conditions?' },
  { check: 'Have controlled trials or experiments been conducted to reproduce the defect under suspected conditions?' },
  { check: 'Are machine-related factors  contributing to the issue?' },
  { check: 'Are material variations  influencing process performance?' },
  { check: 'Has the true occurrence root cause been validated with objective evidence and agreed upon by the cross-functional team?' }
];
        return values;


    }

static getd4b() {
  let values = [
    { check: 'At which process step should the defect have been detected, and why was it missed?' },
    { check: 'What inspection or control method (visual, automated, sampling) was in place at that stage?' },
    { check: 'Was the detection method capable of identifying this specific defect (sensitivity, accuracy, repeatability)?' },
    { check: 'Were inspection standards, criteria, or acceptance limits clearly defined and correctly applied?' },
    { check: 'Was the inspection frequency or sampling plan sufficient to catch the defect?' },
    { check: 'Were there any human factors involved (operator error, fatigue, inadequate training)?' },
    { check: 'Were inspection tools, gauges, or systems properly calibrated and functioning at the time?' },
    { check: 'Did process changes, overrides, or deviations bypass existing controls or inspections?' },
    { check: 'Was there a breakdown in data monitoring or escalation (SPC alerts ignored, alarms not triggered)?' },
    { check: 'Has the escape root cause been validated with objective evidence and agreed upon by the team?' }
  ];
  return values;
}


    static getd5() {
        let values = [
  { check: 'What corrective actions are proposed to eliminate each verified root cause ?' },
  { check: 'How do the proposed actions modify or control the specific process step where the issue originates?' },
  { check: 'Have alternative solutions been evaluated, and what criteria were used to select the best option?' },
  { check: 'Do the corrective actions address both occurrence causes and escape causes?' },
  { check: 'What impact will the proposed changes have on process flow, cycle time, and productivity?' },
  { check: 'Have risk assessments been conducted to ensure no new failure modes are introduced?' },
  { check: 'Are the proposed actions technically feasible with current equipment, resources, and skills?' },
  { check: 'What process parameters, controls, or standards will be updated as part of the corrective action?' },
  { check: 'How will the effectiveness of each corrective action be measured after implementation?' },
  { check: 'Have all stakeholders reviewed and approved the selected actions?' }
];
        return values;


    }

    static getd6() {
        let values = [
  { check: 'Have all approved corrective actions been implemented in the targeted process steps as planned?' },
  { check: 'Were implementation activities executed according to a defined plan ?' },
  { check: 'Have updated process documents been revised and released?' },
  { check: 'Are operators and relevant personnel trained on the new or modified process requirements?' },
  { check: 'Have process parameters, machine settings, or tooling changes been correctly applied and verified?' },
  { check: 'What data has been collected post-implementation to validate effectiveness ?' },
  { check: 'Does the data demonstrate that the root cause has been eliminated or significantly reduced?' },
  { check: 'Have validation trials or pilot runs been conducted under normal operating conditions?' },
  { check: 'Are there any unintended side effects on process performance ?' },
  { check: 'Has the effectiveness of corrective actions been formally reviewed and approved by stakeholders?' }
];
        return values;


    }
    static workflow() {
        let values = [
            { stage: 'D1', title: 'Process', status: 'Assigned', isChecked: '', lastupdated: '19/11/2022', updatedby: 'Navin' },
            { stage: 'D2', title: 'Tool', status: 'WIP', isChecked: '', lastupdated: '18/01/2019', updatedby: 'surya' },
            { stage: 'D3A', title: 'Production', status: 'WIP', isChecked: '', lastupdated: '23/04/2021', updatedby: 'Satya' },
            { stage: 'D3B', title: 'SQM', status: 'Assigned', isChecked: '', lastupdated: '02/06/2021', updatedby: 'Vamshi' },
            { stage: 'D4A', title: 'Internal Quality Control', status: 'Assigned', isChecked: '', lastupdated: '14/01/2021', updatedby: 'Abhishek' },
            { stage: 'D4B', title: 'Supplier Part Quality', status: 'Done', isChecked: '', lastupdated: '07/12/2021', updatedby: 'Sourabh' },
            { stage: 'D5', title: 'Process ENG', status: 'Done', isChecked: '', lastupdated: '29/09/2022', updatedby: 'Radha Krishna' },
            { stage: 'D6', title: 'Product ENG', status: 'WIP', isChecked: '', lastupdated: '19/11/2020', updatedby: 'Preetham' },
            { stage: 'D7', title: 'CFT', status: 'Assigned', isChecked: '', lastupdated: '12/19/2021', updatedby: 'Satya' },


        ]
        return values;


    }
    static alert() {
        let values = [
            { date: '11 oct 2022,4:44pm', action: 'Subject 1', Stage: 'D1:Process', assing: 'VamshiKrishna', context: 'Checklist', escalated: 'Vamshikrishna', due: '25 dec 2022', deley: '6' },
            { date: '11 oct 2022,4:44pm', action: 'Subject 1', Stage: 'D1:Process', assing: 'VamshiKrishna', context: 'Checklist', escalated: 'Vamshikrishna', due: '25 dec 2022', deley: '10' },
            { date: '11 oct 2022,4:44pm', action: 'Subject 1', Stage: 'D1:Process', assing: 'VamshiKrishna', context: 'Checklist', escalated: 'Vamshikrishna', due: '25 dec 2022', deley: '5' },
            { date: '11 oct 2022,4:44pm', action: 'Subject 1', Stage: 'D1:Process', assing: 'VamshiKrishna', context: 'Checklist', escalated: 'Vamshikrishna', due: '25 dec 2022', deley: '6' },
            { date: '11 oct 2022,4:44pm', action: 'Subject 1', Stage: 'D1:Process', assing: 'VamshiKrishna', context: 'Checklist', escalated: 'Vamshikrishna', due: '25 dec 2022', deley: '10' },
            { date: '11 oct 2022,4:44pm', action: 'Subject 1', Stage: 'D1:Process', assing: 'VamshiKrishna', context: 'Checklist', escalated: 'Vamshikrishna', due: '25 dec 2022', deley: '5' },
            { date: '11 oct 2022,4:44pm', action: 'Subject 1', Stage: 'D1:Process', assing: 'VamshiKrishna', context: 'Checklist', escalated: 'Vamshikrishna', due: '25 dec 2022', deley: '6' },
            { date: '11 oct 2022,4:44pm', action: 'Subject 1', Stage: 'D1:Process', assing: 'VamshiKrishna', context: 'Checklist', escalated: 'Vamshikrishna', due: '25 dec 2022', deley: '10' },
            { date: '11 oct 2022,4:44pm', action: 'Subject 1', Stage: 'D1:Process', assing: 'VamshiKrishna', context: 'Checklist', escalated: 'Vamshikrishna', due: '25 dec 2022', deley: '5' },

        ]
        return values;
    }
   static actionGrid() {
  let values = [
    { 
      title: 'Supplier Audit', 
      date: '10 May 2026', 
      assign: 'Tejaswi', 
      agency: 'QA', 
      due: '20 May 2026', 
      Complexity: 'High' 
    },
    { 
      title: 'Line Validation', 
      date: '12 May 2026', 
      assign: 'Roshan', 
      agency: 'Production', 
      due: '25 May 2026', 
      Complexity: 'Medium' 
    },
    { 
      title: 'SOP Training', 
      date: '15 May 2026', 
      assign: 'Ayush', 
      agency: 'HR', 
      due: '30 May 2026', 
      Complexity: 'Low' 
    },
    { 
      title: 'Brake Complaint', 
      date: '16 May 2026', 
      assign: 'Krishna', 
      agency: 'Customer Service', 
      due: '22 May 2026', 
      Complexity: 'High' 
    },
    { 
      title: 'CNC Maintenance', 
      date: '18 May 2026', 
      assign: 'Vishnu', 
      agency: 'Maintenance', 
      due: '28 May 2026', 
      Complexity: 'Medium' 
    },
    { 
      title: 'ISO Docs Update', 
      date: '20 May 2026', 
      assign: 'Hrithik', 
      agency: 'Compliance', 
      due: '05 Jun 2026', 
      Complexity: 'High' 
    }
  ];
  return values;
}

    static closur() {
        let values = [
            { date: '17-sep-2024,08:52 PM', subject: 'Quality Issue Resolution & Action Tracking' },
            { date: '10-oct-2025,10:30 AM', subject: 'Corrective Actions for Manufacturing Quality Deviations' },
            { date: '25-Jan-2026,06:13 PM', subject: 'Quality Improvement Action Plan (QIP)' },
            { date: '18-Jul-2026,07:55 AM', subject: 'Non-Conformance Resolution & Action Items' },
        ]
        return values;
    }
    static summary() {
        let values = [
            { date: '12-10-2022  09:50', stage: 'Initial', action: 'Vamshikrishna', context: 'Checklist', due: '12-12-2022', Status: 'Pending', activity: 'Issue was added', done: 'Vishvajit jere' },
            {
                date: '12-10-2022  10:42', stage: 'Setup', action: 'Vamshikrishna', context: 'Checklist', due: '12-12-2022', Status: 'Pending', activity: 'Workflow updated', done: 'Vamshi'
            },
            {
                date: '12-10-2022  18:30', stage: 'D1:process', action: 'Vamshikrishna', context: 'Checklist', due: '12-12-2022', Status: 'Pending', activity: 'Checklist updates ', done: 'Snigdha'
            },

        ]
        return values;
    }
    static document() {
  let values = [
    { date: '12/01/2021', refer: 'QA/100101', Done: 'Arjun' },
    { date: '18/03/2021', refer: 'QA/100245', Done: 'Meera' },
    { date: '25/06/2021', refer: 'QA/100389', Done: 'Ravi' },
    { date: '10/09/2021', refer: 'QA/100512', Done: 'Sneha' },
    { date: '22/11/2021', refer: 'QA/100678', Done: 'Kiran' },
    { date: '15/02/2022', refer: 'QA/100789', Done: 'Ananya' }
  ];
  return values;
}


    static documentD2() {
  let values = [
    { date: '21/11/2021', refer: 'QA/100245', Done: 'Tejaswi' },
    { date: '22/11/2021', refer: 'QA/100246', Done: 'Hrithik' },
    { date: '23/11/2021', refer: 'QA/100247', Done: 'Sai' },
    { date: '24/11/2021', refer: 'QA/100248', Done: 'Krishna' },
    { date: '25/11/2021', refer: 'QA/100249', Done: 'Vishnu' },
    { date: '26/11/2021', refer: 'QA/100250', Done: 'Roshan' }
  ];
  return values;
}

static documentD3() {
  let values = [
    { date: '05/01/2022', refer: 'QA/200301', Done: 'Ananya' },
    { date: '06/01/2022', refer: 'QA/200302', Done: 'Ravi' },
    { date: '07/01/2022', refer: 'QA/200303', Done: 'Meera' },
    { date: '08/01/2022', refer: 'QA/200304', Done: 'Arjun' },
    { date: '09/01/2022', refer: 'QA/200305', Done: 'Kiran' },
    { date: '10/01/2022', refer: 'QA/200306', Done: 'Sneha' }
  ];
  return values;
}

static documentD3b() {
  let values = [
    { date: '15/02/2022', refer: 'QA/300401', Done: 'Priya' },
    { date: '16/02/2022', refer: 'QA/300402', Done: 'Rahul' },
    { date: '17/02/2022', refer: 'QA/300403', Done: 'Deepa' },
    { date: '18/02/2022', refer: 'QA/300404', Done: 'Suresh' },
    { date: '19/02/2022', refer: 'QA/300405', Done: 'Manoj' },
    { date: '20/02/2022', refer: 'QA/300406', Done: 'Lakshmi' }
  ];
  return values;
}

static documentD4a() {
  let values = [
    { date: '12/03/2022', refer: 'QA/400501', Done: 'Nikhil' },
    { date: '13/03/2022', refer: 'QA/400502', Done: 'Pooja' },
    { date: '14/03/2022', refer: 'QA/400503', Done: 'Sanjay' },
    { date: '15/03/2022', refer: 'QA/400504', Done: 'Divya' },
    { date: '16/03/2022', refer: 'QA/400505', Done: 'Amit' },
    { date: '17/03/2022', refer: 'QA/400506', Done: 'Kavya' }
  ];
  return values;
}

static documentD5() {
  let values = [
    { date: '20/04/2022', refer: 'QA/500601', Done: 'Ramesh' },
    { date: '21/04/2022', refer: 'QA/500602', Done: 'Sneha' },
    { date: '22/04/2022', refer: 'QA/500603', Done: 'Vikram' },
    { date: '23/04/2022', refer: 'QA/500604', Done: 'Anjali' },
    { date: '24/04/2022', refer: 'QA/500605', Done: 'Harsha' },
    { date: '25/04/2022', refer: 'QA/500606', Done: 'Megha' }
  ];
  return values;
}

static documentD6() {
  let values = [
    { date: '10/05/2022', refer: 'QA/600701', Done: 'Arvind' },
    { date: '11/05/2022', refer: 'QA/600702', Done: 'Bhavana' },
    { date: '12/05/2022', refer: 'QA/600703', Done: 'Chirag' },
    { date: '13/05/2022', refer: 'QA/600704', Done: 'Neha' },
    { date: '14/05/2022', refer: 'QA/600705', Done: 'Siddharth' },
    { date: '15/05/2022', refer: 'QA/600706', Done: 'Tanvi' }
  ];
  return values;
}

static documentD7() {
  let values = [
    { date: '01/06/2022', refer: 'QA/700801', Done: 'Varun' },
    { date: '02/06/2022', refer: 'QA/700802', Done: 'Shreya' },
    { date: '03/06/2022', refer: 'QA/700803', Done: 'Naveen' },
    { date: '04/06/2022', refer: 'QA/700804', Done: 'Aishwarya' },
    { date: '05/06/2022', refer: 'QA/700805', Done: 'Rohit' },
    { date: '06/06/2022', refer: 'QA/700806', Done: 'Karthik' }
  ];
  return values;
}



    static monitor() {
        let values = [
            { date: '17/10/2020', refer: 'MG/822441', Done: 'Vishvajit jere', },
            { date: '17/10/2020', refer: 'MG/822441', Done: 'Vishvajit jere', },
            { date: '17/10/2020', refer: 'MG/822441', Done: 'Vishvajit jere', },
            { date: '17/10/2020', refer: 'MG/822441', Done: 'Vishvajit jere', },
            { date: '17/10/2020', refer: 'MG/822441', Done: 'Vishvajit jere', },
            { date: '17/10/2020', refer: 'MG/822441', Done: 'Vishvajit jere', },

        ]
        return values;
    }
    static diagnosis() {
        let values = [
            { possible: ' Is the current Data/analysis data available?', short: 'current Data' },
            { possible: ' Is the current Data/analysis data available?', short: 'current Data' },
            { possible: ' Is the current Data/analysis data available?', short: 'current Data' },
            { possible: ' Is the current Data/analysis data available?', short: 'current Data' },
        ]
        return values;
    }
    static fish() {
        return {
            man: [
                { issue: 'Operator not trained' },
                { issue: 'Incorrect handling' }
            ],
            material: [
                { issue: 'Wrong material batch' },
                { issue: 'Defective raw material' }
            ],
            machines: [
                { issue: 'Calibration overdue' },
                { issue: 'Machine breakdown' }
            ],
            methods: [
                { issue: 'Process not followed' },
                { issue: 'Missing SOP' }
            ],
            environment: [
                { issue: 'Poor lighting' },
                { issue: 'High humidity' }
            ],
            supply: [
                { issue: 'Supplier delay' },
                { issue: 'Incorrect shipment' }
            ]
        };
    }

    static fishD2() {
  return {
    man: [
      { issue: 'Insufficient training on new process' },
      { issue: 'High turnover of staff' }
    ],
    material: [
      { issue: 'Supplier provided incorrect grade' },
      { issue: 'Contaminated raw material' }
    ],
    machines: [
      { issue: 'Frequent power fluctuations' },
      { issue: 'Preventive maintenance skipped' }
    ],
    methods: [
      { issue: 'Procedure not updated' },
      { issue: 'Work instructions unclear' }
    ],
    environment: [
      { issue: 'Excessive noise in workspace' },
      { issue: 'Temperature not controlled' }
    ],
    supply: [
      { issue: 'Late delivery from vendor' },
      { issue: 'Incorrect packaging' }
    ]
  };
}


static fishD3() {
  return {
    man: [
      { issue: 'Fatigue due to overtime' },
      { issue: 'Lack of motivation' }
    ],
    material: [
      { issue: 'Incorrect labeling on supplies' },
      { issue: 'Expired raw materials used' }
    ],
    machines: [
      { issue: 'Software glitches in control system' },
      { issue: 'Wear and tear of components' }
    ],
    methods: [
      { issue: 'Inconsistent inspection process' },
      { issue: 'Improper documentation of steps' }
    ],
    environment: [
      { issue: 'Dust accumulation in workspace' },
      { issue: 'Poor ventilation' }
    ],
    supply: [
      { issue: 'Unreliable third-party logistics' },
      { issue: 'Mismatch in order quantities' }
    ]
  };
}


static fishD3b() {
  return {
    man: [
      { issue: 'Unclear role assignments' },
      { issue: 'Low skill diversity in team' }
    ],
    material: [
      { issue: 'Incorrect storage conditions' },
      { issue: 'Shortage of critical supplies' }
    ],
    machines: [
      { issue: 'Obsolete equipment still in use' },
      { issue: 'Uncalibrated measuring instruments' }
    ],
    methods: [
      { issue: 'Steps skipped under pressure' },
      { issue: 'No standardized checklist' }
    ],
    environment: [
      { issue: 'Workspace overcrowded' },
      { issue: 'Lighting not adequate for inspection' }
    ],
    supply: [
      { issue: 'Vendor communication gaps' },
      { issue: 'Unverified supplier changes' }
    ]
  };
}

static fishD4a() {
  return {
    man: [
      { issue: 'Inadequate supervision during shift' },
      { issue: 'Lack of cross-training among staff' }
    ],
    material: [
      { issue: 'Incorrect chemical composition' },
      { issue: 'Damaged packaging materials' }
    ],
    machines: [
      { issue: 'Outdated safety guards' },
      { issue: 'Improper lubrication schedule' }
    ],
    methods: [
      { issue: 'No contingency plan documented' },
      { issue: 'Steps not validated against standards' }
    ],
    environment: [
      { issue: 'Temperature fluctuations in storage area' },
      { issue: 'Uncontrolled dust particles' }
    ],
    supply: [
      { issue: 'Supplier quality audits not performed' },
      { issue: 'Delivery schedule not aligned with demand' }
    ]
  };
}

static fishD4b() {
  return {
    man: [
      { issue: 'Shift scheduling conflicts' },
      { issue: 'Insufficient safety training' }
    ],
    material: [
      { issue: 'Incorrect supplier documentation' },
      { issue: 'Material stored under wrong conditions' }
    ],
    machines: [
      { issue: 'Frequent overheating of equipment' },
      { issue: 'Unscheduled downtime due to faults' }
    ],
    methods: [
      { issue: 'Inspection steps skipped' },
      { issue: 'No feedback loop in process' }
    ],
    environment: [
      { issue: 'High vibration levels in workspace' },
      { issue: 'Poor ergonomic setup' }
    ],
    supply: [
      { issue: 'Unreliable transport partner' },
      { issue: 'Mismatch between demand and supply' }
    ]
  };
}

static fishD5() {
  return {
    man: [
      { issue: 'Insufficient experience with new tools' },
      { issue: 'Low accountability in team roles' }
    ],
    material: [
      { issue: 'Incorrect substitute materials used' },
      { issue: 'Shortage of approved raw materials' }
    ],
    machines: [
      { issue: 'Automation system errors' },
      { issue: 'Delayed spare parts replacement' }
    ],
    methods: [
      { issue: 'No standardized escalation process' },
      { issue: 'Steps not aligned with quality standards' }
    ],
    environment: [
      { issue: 'Temperature extremes affecting process' },
      { issue: 'Workspace clutter causing inefficiency' }
    ],
    supply: [
      { issue: 'Supplier contracts not reviewed' },
      { issue: 'Delivery lead times too long' }
    ]
  };
}


static fishD6() {
  return {
    man: [
      { issue: 'Insufficient knowledge of updated standards' },
      { issue: 'Low morale due to workload' }
    ],
    material: [
      { issue: 'Incorrect supplier certifications' },
      { issue: 'Material mix-up during storage' }
    ],
    machines: [
      { issue: 'Outdated software controlling equipment' },
      { issue: 'Frequent sensor malfunctions' }
    ],
    methods: [
      { issue: 'No peer review of process steps' },
      { issue: 'Improper sequencing of tasks' }
    ],
    environment: [
      { issue: 'Excessive heat in production area' },
      { issue: 'Noise interfering with communication' }
    ],
    supply: [
      { issue: 'Vendor capacity issues' },
      { issue: 'Incorrect invoicing causing delays' }
    ]
  };
}

static fishD7() {
  return {
    man: [
      { issue: 'Lack of specialized expertise' },
      { issue: 'Poor communication between shifts' }
    ],
    material: [
      { issue: 'Incorrect material specifications' },
      { issue: 'Unstable supply quality' }
    ],
    machines: [
      { issue: 'Frequent breakdown due to age' },
      { issue: 'Improper machine alignment' }
    ],
    methods: [
      { issue: 'No verification step in process' },
      { issue: 'Inconsistent application of standards' }
    ],
    environment: [
      { issue: 'Temperature not monitored regularly' },
      { issue: 'Excessive dust affecting equipment' }
    ],
    supply: [
      { issue: 'Supplier not meeting compliance' },
      { issue: 'Logistics delays during peak demand' }
    ]
  };
}








    static data() {
        let dataList = [
            {
                title: "High-Performance Nissan Ariya NISMO Debuts on World EV (FIELD/2024/09/6)",
                role: "Tejaswi",
                department: "QA",
                issue: "Engine Overheating",
                details: "enginee getting sound",
                date: "2024-09-20",
                status: "Open",
                eta: "024-09-20",
                meetingRef: "(Meet/2025/10/02)",
                actions: { edit: true, delete: true }
            },
            {
                title: "High-Performance Nissan Ariya NISMO Debuts on World EV (FIELD/2024/09/6)",
                role: "Hrithik",
                department: "Quality",
                issue: "Brakes Squeaking not working",
                details: "Brakes Squeaking not working",
                date: "2024-09-24",
                status: "Pending",
                eta: "024-09-20",
                meetingRef: "(Meet/2025/10/03)",
                actions: { edit: true, delete: true }
            },
            {
                title: "This road hazard service is part of Bosch’s connected map issue (FIELD/2024/09/8)",
                role: "Sai",
                department: "QA",
                issue: "Transmission Slipping",
                details: "Transmission Slipping is not good",
                date: "2024-09-24",
                status: "WIP",
                meetingRef: "(Meet/2025/10/03)",
                actions: { edit: true, delete: true }
            },
            {
                title: "High-Performance Nissan Ariya NISMO Debuts on World EV (FIELD/2024/09/6)",
                role: "Krishna",
                department: "Account",
                issue: "Transmission Slipping",
                details: "Transmission Slipping",
                date: "2024-09-24",
                status: "WIP",
                meetingRef: "(Meet/2025/10/04)",
                actions: { edit: true, delete: true }
            },
            {
                title: "High-Performance Nissan Ariya NISMO Debuts on World EV (FIELD/2024/09/6)",
                role: "Vishnu",
                department: "Developer",
                issue: "Battery Draining",
                details: "Battery Draining",
                date: "2024-09-24",
                status: "Pending",
                meetingRef: "(Meet/2025/10/05)",
                actions: { edit: true, delete: true }
            },
            {
                title: "Global fleet of connected vehicles (FIELD/2024/09/3)",
                role: "Roshan",
                department: "QA",
                issue: "Unusual Vibrations",
                details: "Unusual Vibrations",
                date: "2024-09-24",
                status: "Open",
                meetingRef: "(Meet/2025/10/06)",
                actions: { edit: true, delete: true }
            },
            {
                title: "High-Performance Nissan Ariya NISMO Debuts on World EV (FIELD/2024/09/6)",
                role: "Mohit",
                department: "Quality",
                issue: "Brakes Squeaking not working",
                details: "Brakes Squeaking not working",
                date: "2024-09-24",
                status: "Open",
                meetingRef: "(Meet/2025/10/07)",
                actions: { edit: true, delete: true }
            },
            {
                title: "High-Performance Nissan Ariya NISMO Debuts on World EV (FIELD/2024/09/6)",
                role: "Satyarth",
                department: "Quality",
                issue: "Brakes Squeaking not getting",
                details: "Brakes Squeaking not working",
                meetingRef: "(Meet/2025/10/08)",
                date: "2024-09-24",
                status: "Pending",
                actions: { edit: true, delete: true }
            }
        ];
        return dataList;
    }





}
