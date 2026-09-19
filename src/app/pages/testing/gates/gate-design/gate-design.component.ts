import { Component, OnInit, OnDestroy } from '@angular/core';
import { AddcriteriaComponent } from '../addcriteria/addcriteria.component';
import { MatDialog } from '@angular/material/dialog';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gate-design',
  templateUrl: './gate-design.component.html',
  styleUrls: ['./gate-design.component.scss']
})
export class GateDesignComponent implements OnInit, OnDestroy {

  private subs = new Subscription();

  // Role Checks
  canDelete = true;
  canUpdate = true;

  // Track the currently viewed module
  selectedModule: any;

  // Data grouped by modules 
  modules = [
    {
      id: 1,
      name: 'Design Specs & Approvals',
      criteria: [
        { id: 1, status: true, question: 'Have detailed product specifications and design requirements been finalized?', description: 'All functional and performance requirements are defined and agreed upon.', answer: null, priority: 'High', mandatory: true },
        { id: 2, status: true, question: 'Has the product design been reviewed and approved by all relevant stakeholders?', description: 'Engineering, marketing, and management have signed off on the design.', answer: null, priority: 'High', mandatory: true },
        { id: 3, status: false, question: 'Have CAD models, engineering drawings, and technical documents been completed?', description: 'All design outputs are documented and version-controlled.', answer: null, priority: 'Medium', mandatory: false }
      ]
    },
    {
      id: 2,
      name: 'Materials & Manufacturing',
      criteria: [
        { id: 4, status: true, question: 'Has Design for Manufacturing (DFM) analysis been conducted?', description: 'Manufacturing challenges are identified and addressed early.', answer: null, priority: 'High', mandatory: true },
        { id: 5, status: false, question: 'Have material selections and component specifications been validated?', description: 'Materials and components meet performance, cost, and availability needs.', answer: null, priority: 'Medium', mandatory: false },
        { id: 6, status: false, question: 'Has a preliminary Bill of Materials (BOM) been created and reviewed?', description: 'All parts and assemblies are listed for costing and procurement.', answer: null, priority: 'High', mandatory: true }
      ]
    },
    {
      id: 3,
      name: 'Compliance & Risk Management',
      criteria: [
        { id: 7, status: true, question: 'Have safety, regulatory, and compliance requirements been incorporated into the design?', description: 'Design meets applicable standards to avoid regulatory delays.', answer: null, priority: 'High', mandatory: true },
        { id: 8, status: true, question: 'Has design risk analysis (e.g., DFMEA) been completed and documented?', description: 'Failure modes are identified and mitigation actions are in place.', answer: null, priority: 'High', mandatory: true },
        { id: 9, status: false, question: 'Have prototype manufacturing methods and tooling requirements been identified?', description: 'Processes and equipment for prototyping are planned and ready.', answer: null, priority: 'Medium', mandatory: false },
        { id: 10, status: false, question: 'Has the design passed internal review gates for progression to prototyping/testing?', description: 'Design is formally confirmed as mature enough for prototyping.', answer: null, priority: 'High', mandatory: true }
      ]
    }
  ];

  constructor(private dragulaService: DragulaService, private dialog: MatDialog) {
    if (this.dragulaService.find('DESIGN_ROWS')) {
      this.dragulaService.destroy('DESIGN_ROWS');
    }

    this.dragulaService.createGroup('DESIGN_ROWS', {
      revertOnSpill: true,
    });

    this.subs.add(
      this.dragulaService.dropModel('DESIGN_ROWS').subscribe(({ targetModel }) => {
        this.selectedModule.criteria = [...targetModel];
      })
    );
  }

  ngOnInit(): void {
    // Select the first module by default on load
    if (this.modules && this.modules.length > 0) {
      this.selectedModule = this.modules[0];
    }
  }

  ngOnDestroy(): void {
    this.dragulaService.destroy('DESIGN_ROWS');
    this.subs.unsubscribe();
  }

  // Handle clicking a module in the sidebar
  selectModule(mod: any): void {
    this.selectedModule = mod;
  }

  addCriteria(): void {
    const dialogRef = this.dialog.open(AddcriteriaComponent, {
      width: '850px',
      height: 'auto',
      disableClose: false,
      data: { moduleId: this.selectedModule.id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Criteria added:', result);
        this.selectedModule.criteria.push(result);
      }
    });
  }

  // --- HTML Binding Methods ---
  
  addmodule(item: any): void {
    console.log('Edit clicked for', item);
    // Add edit dialog logic here
  }

  deleteConfirmation(item: any): void {
    console.log('Delete clicked for', item);
    // Add delete dialog / filtering logic here
  }

  Confirmation(item: any): void {
    item.status = !item.status;
  }
}