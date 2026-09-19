import { Component, OnInit } from '@angular/core';

// Interfaces to define our hierarchical data structure
export interface TaskItem {
  id: number;
  name: string;
  completed: boolean;
}

export interface ModuleItem {
  id: number;
  name: string;
  tasks: TaskItem[];
}

export interface StageItem {
  id: number;
  name: string;
  type: 'stage' | 'gate'; 
  modules: ModuleItem[];
}

@Component({
  selector: 'app-project-setup',
  templateUrl: './project-setup.component.html',
  styleUrls: ['./project-setup.component.scss']
})
export class ProjectSetupComponent implements OnInit {

  selectedStage: StageItem | null = null;
  selectedModule: ModuleItem | null = null;

  stagesAndGates: StageItem[] = [
    {
      id: 1, name: 'Concept & Feasibility', type: 'stage',
      modules: [
        {
          id: 101, name: 'Requirements Gathering', tasks: [
            { id: 1001, name: 'Define product & technical specifications', completed: false },
            { id: 1002, name: 'Identify raw material requirements', completed: false },
            { id: 1003, name: 'Estimate target production volume', completed: false },
            { id: 1004, name: 'Initial BOM & labor cost estimation', completed: false },
            { id: 1005, name: 'Assess existing factory floor capacity', completed: false },
            { id: 1006, name: 'Regulatory and EHS compliance check', completed: false },
            { id: 1007, name: 'Identify required new machinery (CAPEX)', completed: false },
            { id: 1008, name: 'Preliminary supply chain & vendor assessment', completed: false },
            { id: 1009, name: 'Draft initial project charter', completed: false },
            { id: 1010, name: 'Schedule Gate 1 Review', completed: false }
          ]
        },
        { id: 102, name: 'Technical Feasibility Study', tasks: [] },
        { id: 103, name: 'ROI & Payback Analysis', tasks: [] }
      ]
    },
    { id: 2, name: 'Gate 1: Project Charter Approval', type: 'gate', modules: [] },
    { id: 3, name: 'Process & Design Engineering', type: 'stage', modules: [] },
    { id: 4, name: 'Gate 2: Design Freeze & CAPEX Sign-off', type: 'gate', modules: [] },
    { id: 5, name: 'Tooling & Prototyping', type: 'stage', modules: [] },
    { id: 6, name: 'Gate 3: Prototype Validation', type: 'gate', modules: [] },
    { id: 7, name: 'Pilot Production Run', type: 'stage', modules: [] },
    { id: 8, name: 'Gate 4: Mass Production Readiness', type: 'gate', modules: [] },
    { id: 9, name: 'Mass Production Ramp-Up', type: 'stage', modules: [] },
    { id: 10, name: 'Gate 5: Handover to Operations', type: 'gate', modules: [] },
    { id: 11, name: 'Post-Implementation Review', type: 'stage', modules: [] }
  ];

  constructor() { }

  ngOnInit(): void {
    this.selectStage(this.stagesAndGates[0]);
  }

  selectStage(stage: StageItem) {
    this.selectedStage = stage;
    if (stage.modules && stage.modules.length > 0) {
      this.selectedModule = stage.modules[0];
    } else {
      this.selectedModule = null;
    }
  }

  selectModule(moduleItem: ModuleItem) {
    this.selectedModule = moduleItem;
  }

  // --- Menu Action Handlers ---
  
  editItem(item: any, type: string) {
    console.log(`Editing ${type}:`, item);
    // Open dialog or trigger inline edit here
  }

  deleteItem(item: any, type: string) {
    console.log(`Deleting ${type}:`, item);
    // Trigger delete confirmation or API call here
  }
}