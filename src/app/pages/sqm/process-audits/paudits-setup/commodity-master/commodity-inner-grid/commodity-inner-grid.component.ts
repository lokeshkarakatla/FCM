import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddQuestionPopComponent } from './add-question-pop/add-question-pop.component';
import { Location } from '@angular/common';
import { AddTargetPopComponent } from './add-target-pop/add-target-pop.component';

@Component({
  selector: 'app-commodity-inner-grid',
  templateUrl: './commodity-inner-grid.component.html',
  styleUrls: ['./commodity-inner-grid.component.scss']
})
export class CommodityInnerGridComponent implements OnInit {
  
  // Data extracted from the new screenshot
  tableData = [
    { question: 'Engineering Report', code: 'ENGR', mandatory: '', priority: '' },
    { question: 'Digital Transformation', code: 'DT', mandatory: '', priority: '' },
    { question: 'Productivity Report', code: 'PR1', mandatory: '', priority: '' },
    { question: 'Predictability Report', code: 'PR2', mandatory: '', priority: '' },
    { question: 'Monthly Metrics', code: 'MM', mandatory: '', priority: '' },
    { question: 'Monthly Quality Review', code: 'MQR', mandatory: '', priority: '' },
    { question: 'Daily Progress Report', code: 'DPR', mandatory: '', priority: '' },
    { question: 'Defect Leakage Report', code: 'DLR', mandatory: '', priority: '' }
  ];

  constructor(private dialog: MatDialog, public router: Router,private location: Location) { }

  ngOnInit(): void {
  }

  // --- Action Handlers ---

  onAddQuestion(): void {
    this.dialog.open(AddQuestionPopComponent, {
      width: '600px',
      data: {} // Pass any necessary data to the dialog
    }); 
    // Logic to open Add Question dialog
  }

  onBack(): void {
    console.log('Back button clicked');
    // Logic to navigate back
    // this.router.navigate(['/previous-route']);
  }

  onEdit(item: any): void {
    console.log('Edit clicked for:', item.question);
  }

  onDelete(item: any): void {
    console.log('Delete clicked for:', item.question);
  }

  goBack()
  {
    this.location.back();
  }


  activeTab: 'process' | 'parts' = 'process';

  // Data for the Process Audits Grid (matches your image)
  processAuditsData = [
  { year: 2024, q1: 65, q2: 72, q3: 80, q4: 76 },
  { year: 2024, q1: 70, q2: 68, q3: 75, q4: 82 },
  { year: 2025, q1: 74, q2: 79, q3: 83, q4: 88 },
  { year: 2026, q1: 80, q2: 85, q3: 87, q4: 91 },
  { year: 2026, q1: 82, q2: 88, q3: 90, q4: 94 },
  { year: 2026, q1: 84, q2: 89, q3: 92, q4: 97 }
];

  // Different Data for the Parts Audits Grid (to prove the toggle works)
  partsAuditsData = [
    { year: 2026, q1: 85, q2: 88, q3: 89, q4: 92 },
    { year: 2027, q1: 82, q2: 86, q3: 90, q4: 95 },
     { year: 2026, q1: 59, q2: 65, q3: 69, q4: 92 },
    { year: 2027, q1: 62, q2: 76, q3: 80, q4: 95 }
  ];

 

  // Function to switch between tabs
  setTab(tab: 'process' | 'parts') {
    this.activeTab = tab;
  }

  // Getter to dynamically provide data based on the active tab
  get currentGridData() {
    return this.activeTab === 'process' ? this.processAuditsData : this.partsAuditsData;
  }
 

  

  // Called by the "Add Target" button
  ontarget(): void {
    this.dialog.open(AddTargetPopComponent, {
      width: '600px',
      data: 0 // 0 means Add Mode
    }); 
  }

  // Called by the "Edit" icon in the grid
  addtarget(id: number): void {
    this.dialog.open(AddTargetPopComponent, {
      width: '600px',
      data: id // Passing 1 triggers Edit Mode in your child component
    });
  }
}