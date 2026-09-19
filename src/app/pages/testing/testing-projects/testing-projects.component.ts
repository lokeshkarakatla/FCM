import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { AddProjectsComponent } from './add-projects/add-projects.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StatusConfirmationDialogComponent } from './add-projects/status-confirmation-dialog/status-confirmation-dialog.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { FreezepanesDialogComponent } from './freezepanes-dialog/freezepanes-dialog.component';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ActivatedRoute, Router } from '@angular/router';

export type Status = 'Pending' | 'Allocated' | 'Progress' | 'Hold' | 'Cancelled' | 'Completed';

export interface Card {
  id: number;
  subject: string;
  LawFirm: string;
  createdBy: string;
  assignedTo: string;
  createdDate: string;
  dueDate: string;
  expedite: boolean;
  notes: { text: string; author: string; date: string }[];
  expanded: boolean;
  status: Status;
}

export interface ProjectElement {
  ProjectName: string;
  ProjectCode: string;
  Description: string;
  StartDate: string;
  DueDate: string;
  ProjectManager: string;
  ProjectType: string;
  Team: number | string;
  Assets: number | string;
  Facilities: number | string;
  Stages: string;
  Gates: string;
  CurrentStage: string;
  CurrentGate: string;
  Backlog: number | string;
  Sprints: string;
  BufferStatus: string;
  ProjectStatus: string;
  Completion: string;
  Budget: string;
  Hours: number | string;
  Expenses: string;
  ETA: string;
  UpdatedDate: string;
  CompletionSecondary: string;
  Done: string;
  IsActive?: boolean;
}

@Component({
  selector: 'app-testing-projects',
  templateUrl: './testing-projects.component.html',
  styleUrls: ['./testing-projects.component.scss']
})
export class TestingProjectsComponent implements OnInit {
  
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  // View Toggle State
  isKanbanView: boolean = false;

  // --- GRID PROPERTIES ---
  filterForm: FormGroup;
  filterToggle: boolean = false;
  allProjects: ProjectElement[] = []; 
  currentPage: number = 0;
  pageSize: number = 10;
  totalSize: number = 0;
  canCreate: boolean = true; 
  canUpdate: boolean = true;
  canDelete: boolean = true;

  // --- KANBAN PROPERTIES ---
  showFilter: boolean = false;
  lists: Status[] = ['Pending', 'Allocated', 'Progress', 'Hold', 'Cancelled', 'Completed'];
  cards: Record<Status, Card[]> = {
    Pending: [], Allocated: [], Progress: [],
    Hold: [], Cancelled: [], Completed: []
  };
  
  kanbanData = [
    { subject: 'Global fleet of connected vehicles', distributor: 'Mahindra', Lead: 'Ravi', status: 'Pending', TargetDate: '2026-04-25', FailureDate: '2026-04-20' },
    { subject: 'Engine Overheating', distributor: 'Tata Motors', Lead: 'Sneha', status: 'Pending', TargetDate: '2026-04-22', FailureDate: '2026-04-18' },
    { subject: 'Update Application Dependencies', distributor: 'Infosys', Lead: 'Kiran', status: 'Hold', TargetDate: '2026-04-30', FailureDate: '2026-04-21' },
    { subject: 'Verify DLL Versions', distributor: 'Tesla', Lead: 'Arjun', status: 'Process', TargetDate: '2026-04-15', FailureDate: '2026-04-10' },
    { subject: 'Bumper Issue', distributor: 'Tesla', Lead: 'Arjun', status: 'Hold', TargetDate: '2026-04-15', FailureDate: '2026-04-10' },
    { subject: 'Error Testing A', distributor: 'Tesla', Lead: 'Arjun', status: 'Pending', TargetDate: '2026-04-15', FailureDate: '2026-04-10' },
    { subject: 'Error Testing B', distributor: 'Tesla', Lead: 'Arjun', status: 'Hold', TargetDate: '2026-04-15', FailureDate: '2026-04-10' },
    { subject: 'Error Testing C', distributor: 'Tesla', Lead: 'Arjun', status: 'Process', TargetDate: '2026-04-15', FailureDate: '2026-04-10' },
    { subject: 'Error Testing D', distributor: 'Tesla', Lead: 'Arjun', status: 'Closed', TargetDate: '2026-04-15', FailureDate: '2026-04-10' }
  ];

  private statusMap: Record<string, Status> = {
    'Pending': 'Pending',
    'Allocated': 'Allocated',
    'Process': 'Progress',
    'Progress': 'Progress',
    'Hold': 'Hold',
    'Cancelled': 'Cancelled',
    'Closed': 'Completed',
    'Completed': 'Completed'
  };

  newNote = '';

constructor(private fb: FormBuilder, private dialog: MatDialog, private router: Router,private route: ActivatedRoute) {
    this.filterForm = this.fb.group({
      Keyword: [''],
      Status: [null]
    });
  }

  ngOnInit(): void {
    // Initialize Grid
    this.getAllProjects();

    // Initialize Kanban
    const savedData = localStorage.getItem('kanbanData');
    if (savedData) {
      this.cards = JSON.parse(savedData);
    } else {
      this.initializeKanbanData();
    }
  }

  // ================= GRID METHODS =================

 getAllProjects(): void {

    const mockData: ProjectElement[] = [

      {

        ProjectName: 'NextGen Assembly Line',

        ProjectCode: '2026/MFG/011',

        Description: 'Automate chassis welding process for Plant A',

        StartDate: '01/03/2026',

        DueDate: '30/11/2026',

        ProjectManager: 'Sarah Jenkins',

        ProjectType: 'Manufacturing',

        Team: 15,

        Assets: 5,

        Facilities: 1,

        Stages: '2/6',

        Gates: '1/5',

        CurrentStage: 'Procurement',

        CurrentGate: 'G2',

        Backlog: 120,

        Sprints: 'NA',

        BufferStatus: '10%',

        ProjectStatus: 'On Track',

        Completion: '25%',

        Budget: '1,200,000 $',

        Hours: 3400,

        Expenses: '150,000 $',

        ETA: '25/11/2026',

        UpdatedDate: '10/06/2026',

        CompletionSecondary: 'NA',

        Done: 'NA',

        IsActive: true

      },

      {

        ProjectName: 'Cloud ERP Migration',

        ProjectCode: '2026/IT/042',

        Description: 'Migrate legacy on-premise ERP to AWS',

        StartDate: '15/01/2026',

        DueDate: '20/09/2026',

        ProjectManager: 'David Chen',

        ProjectType: 'IT',

        Team: 12,

        Assets: 0,

        Facilities: 0,

        Stages: '4/5',

        Gates: '3/4',

        CurrentStage: 'UAT',

        CurrentGate: 'G4',

        Backlog: 34,

        Sprints: '18/24',

        BufferStatus: '5%',

        ProjectStatus: 'WIP',

        Completion: '85%',

        Budget: '450,000 $',

        Hours: 4200,

        Expenses: '380,000 $',

        ETA: '15/09/2026',

        UpdatedDate: '11/06/2026',

        CompletionSecondary: 'Pass',

        Done: 'False',

        IsActive: true

      },

      {

        ProjectName: 'Oasis Office Complex',

        ProjectCode: '2026/CON/108',

        Description: 'Build a 10-story green office building',

        StartDate: '10/05/2025',

        DueDate: '15/12/2026',

        ProjectManager: 'Marcus Vance',

        ProjectType: 'Construction',

        Team: 45,

        Assets: 12,

        Facilities: 1,

        Stages: '3/4',

        Gates: '2/3',

        CurrentStage: 'Interior Framing',

        CurrentGate: 'G3',

        Backlog: 210,

        Sprints: 'NA',

        BufferStatus: '-2%',

        ProjectStatus: 'Delayed',

        Completion: '60%',

        Budget: '15,500,000 $',

        Hours: 18500,

        Expenses: '9,200,000 $',

        ETA: '30/12/2026',

        UpdatedDate: '12/06/2026',

        CompletionSecondary: 'NA',

        Done: 'NA',

        IsActive: true

      },

      {

        ProjectName: 'VaxTrial Phase II',

        ProjectCode: '2026/RND/004',

        Description: 'Clinical trials for seasonal antigen',

        StartDate: '01/02/2026',

        DueDate: '30/06/2027',

        ProjectManager: 'Dr. Elena Rostova',

        ProjectType: 'R&D',

        Team: 22,

        Assets: 8,

        Facilities: 3,

        Stages: '2/3',

        Gates: '1/2',

        CurrentStage: 'Patient Enrollment',

        CurrentGate: 'G2',

        Backlog: 15,

        Sprints: 'NA',

        BufferStatus: '20%',

        ProjectStatus: 'On Track',

        Completion: '45%',

        Budget: '2,100,000 $',

        Hours: 6500,

        Expenses: '800,500 $',

        ETA: '15/06/2027',

        UpdatedDate: '09/06/2026',

        CompletionSecondary: 'NA',

        Done: 'NA',

        IsActive: true

      },

      {

        ProjectName: 'AeroFoil X-1 Dynamics',

        ProjectCode: '2026/AER/099',

        Description: 'Wind tunnel testing for new wing geometry',

        StartDate: '10/04/2026',

        DueDate: '01/10/2026',

        ProjectManager: 'Julian Bashir',

        ProjectType: 'Engineering',

        Team: 6,

        Assets: 2,

        Facilities: 1,

        Stages: '1/4',

        Gates: '1/4',

        CurrentStage: 'Simulation',

        CurrentGate: 'G1',

        Backlog: 8,

        Sprints: '3/10',

        BufferStatus: '8%',

        ProjectStatus: 'WIP',

        Completion: '15%',

        Budget: '850,000 $',

        Hours: 950,

        Expenses: '120,000 $',

        ETA: '05/10/2026',

        UpdatedDate: '13/06/2026',

        CompletionSecondary: 'NA',

        Done: 'NA',

        IsActive: false

      },

      {

        ProjectName: 'Euro-Hub Expansion',

        ProjectCode: '2026/LOG/022',

        Description: 'Expand warehouse capacity in Frankfurt',

        StartDate: '01/01/2026',

        DueDate: '15/07/2026',

        ProjectManager: 'Thomas Müller',

        ProjectType: 'Logistics',

        Team: 18,

        Assets: 10,

        Facilities: 2,

        Stages: '4/4',

        Gates: '3/3',

        CurrentStage: 'Final Inspection',

        CurrentGate: 'G4',

        Backlog: 5,

        Sprints: 'NA',

        BufferStatus: '25%',

        ProjectStatus: 'Nearing Completion',

        Completion: '95%',

        Budget: '3,200,000 $',

        Hours: 8400,

        Expenses: '3,050,000 $',

        ETA: '30/06/2026',

        UpdatedDate: '12/06/2026',

        CompletionSecondary: 'Pending',

        Done: 'False',

        IsActive: true

      },

      {

        ProjectName: 'Global Launch: XEV 9E',

        ProjectCode: '2026/MKT/001',

        Description: 'Marketing campaign and PR for new EV release',

        StartDate: '01/05/2026',

        DueDate: '01/09/2026',

        ProjectManager: 'Chloe Price',

        ProjectType: 'Marketing',

        Team: 14,

        Assets: 0,

        Facilities: 0,

        Stages: '2/5',

        Gates: '1/3',

        CurrentStage: 'Content Creation',

        CurrentGate: 'G2',

        Backlog: 56,

        Sprints: '4/8',

        BufferStatus: '0%',

        ProjectStatus: 'At Risk',

        Completion: '35%',

        Budget: '1,500,000 $',

        Hours: 1100,

        Expenses: '650,000 $',

        ETA: '10/09/2026',

        UpdatedDate: '13/06/2026',

        CompletionSecondary: 'NA',

        Done: 'NA',

        IsActive: true

      },

      {

        ProjectName: 'Offshore Wind Farm Alpha',

        ProjectCode: '2026/NRG/303',

        Description: 'Install 50 turbines in the North Sea',

        StartDate: '01/03/2024',

        DueDate: '30/11/2027',

        ProjectManager: 'Lars Thomsen',

        ProjectType: 'Energy',

        Team: 85,

        Assets: 45,

        Facilities: 3,

        Stages: '3/6',

        Gates: '2/5',

        CurrentStage: 'Foundation Installation',

        CurrentGate: 'G3',

        Backlog: 340,

        Sprints: 'NA',

        BufferStatus: '12%',

        ProjectStatus: 'WIP',

        Completion: '48%',

        Budget: '850,000,000 $',

        Hours: 125000,

        Expenses: '410,000,000 $',

        ETA: '15/11/2027',

        UpdatedDate: '01/06/2026',

        CompletionSecondary: 'NA',

        Done: 'NA',

        IsActive: true

      },

      {

        ProjectName: 'Omnichannel POS Upgrade',

        ProjectCode: '2026/RET/018',

        Description: 'Rollout new POS terminals across 500 stores',

        StartDate: '15/02/2026',

        DueDate: '31/10/2026',

        ProjectManager: 'Anita Desai',

        ProjectType: 'Retail',

        Team: 30,

        Assets: 500,

        Facilities: 0,

        Stages: '2/4',

        Gates: '2/4',

        CurrentStage: 'Pilot Testing',

        CurrentGate: 'G2',

        Backlog: 85,

        Sprints: '10/20',

        BufferStatus: '15%',

        ProjectStatus: 'On Track',

        Completion: '50%',

        Budget: '2,800,000 $',

        Hours: 5600,

        Expenses: '1,200,000 $',

        ETA: '31/10/2026',

        UpdatedDate: '12/06/2026',

        CompletionSecondary: 'Pass',

        Done: 'False',

        IsActive: false

      },

      {

        ProjectName: 'Quantum Chip Prototype',

        ProjectCode: '2026/HW/007',

        Description: 'Develop 128-qubit processor logic board',

        StartDate: '01/06/2026',

        DueDate: '31/12/2028',

        ProjectManager: 'Dr. Alan Turing',

        ProjectType: 'R&D',

        Team: 10,

        Assets: 4,

        Facilities: 1,

        Stages: '1/8',

        Gates: '0/7',

        CurrentStage: 'Design & Architecture',

        CurrentGate: 'G1',

        Backlog: 412,

        Sprints: '1/50',

        BufferStatus: '50%',

        ProjectStatus: 'Just Started',

        Completion: '2%',

        Budget: '12,500,000 $',

        Hours: 320,

        Expenses: '45,000 $',

        ETA: '31/12/2028',

        UpdatedDate: '13/06/2026',

        CompletionSecondary: 'NA',

        Done: 'NA',

        IsActive: true

      }

    ];

    this.totalSize = mockData.length;
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    this.allProjects = mockData.slice(start, end);
  }

  scrollLeft(): void {
    if (this.scrollContainer) {
      this.scrollContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
    }
  }

  scrollRight(): void {
    if (this.scrollContainer) {
      this.scrollContainer.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
    }
  }

  clearFilter(): void {
    this.filterForm.reset();
    this.getAllProjects();
  }
  
  getCategory(): void {
    console.log('Search triggered');
  }

  fnHandlePage(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getAllProjects();
  }

  Confirmation(item: any) {
    this.dialog.open(StatusConfirmationDialogComponent, {
      width: 'auto',
      data: { TractorStatusId: item.TractorStatusId, title: 'Change Status', content: 'Are you sure you want to Change the Status ?' }
    });
  }

  openEditDialog(value: any) {
    this.dialog.open(AddProjectsComponent, {
      data: value,
      height: 'auto',
      width: '800px',
    });
  }

  deleteConfirmation(item: any) {
    this.dialog.open(ConfirmationDialogComponent, {
      width: 'auto',
      data: { ProjectId: item.ProjectId, title: 'Delete Confirmation', content: 'Are you sure you want to Delete?' }
    });
  }

  freezepanes() {
    this.dialog.open(FreezepanesDialogComponent, {
      width: 'auto',
      height: 'auto',
      data: {}
    });
  }

  // ================= KANBAN METHODS =================

  toggleView(isKanban: boolean): void {
    this.isKanbanView = isKanban;
  }

  toggleFilter(): void {
    this.showFilter = !this.showFilter;
  }

  initializeKanbanData(): void {
    const grouped: Record<Status, Card[]> = {
      Pending: [], Allocated: [], Progress: [],
      Hold: [], Cancelled: [], Completed: []
    };

    this.kanbanData.forEach((item, index) => {
      const status: Status = this.statusMap[item.status] ?? 'Pending';
      grouped[status].push({
        id: index + 1,
        subject: item.subject,
        LawFirm: item.distributor,
        createdBy: item.Lead,
        assignedTo: item.Lead,
        createdDate: item.FailureDate,
        dueDate: item.TargetDate,
        expedite: false,
        notes: [],
        expanded: false,
        status
      });
    });

    this.cards = grouped;
    localStorage.setItem('kanbanData', JSON.stringify(this.cards));
  }

  drop(event: CdkDragDrop<Card[]>, targetList: Status): void {
    const previousList = event.previousContainer.id as Status;
    const currentList  = event.container.id as Status;

    if (previousList !== currentList) {
      transferArrayItem(
        this.cards[previousList],
        this.cards[currentList],
        event.previousIndex,
        event.currentIndex
      );
      this.cards[currentList][event.currentIndex].status = currentList;
    } else {
      moveItemInArray(this.cards[targetList], event.previousIndex, event.currentIndex);
    }

    this.cards = { ...this.cards };
    localStorage.setItem('kanbanData', JSON.stringify(this.cards));
  }

  toggleCard(card: Card): void {
    card.expanded = !card.expanded;
  }

  addNote(card: Card): void {
    if (this.newNote.trim()) {
      card.notes.push({
        text: this.newNote,
        author: 'Current User',
        date: new Date().toLocaleString()
      });
      this.newNote = '';
      localStorage.setItem('kanbanData', JSON.stringify(this.cards));
    }
  }

  isOverdue(dueDate: string): boolean {
    const today = new Date().toISOString().split('T')[0];
    return dueDate < today;
  }

  getColor(status: string): string {
    const colors: Record<string, string> = {
      'Pending':   '#e24b4a',
      'Allocated': '#ef9f27',
      'Progress':  '#378add',
      'Hold':      '#f0995b',
      'Cancelled': '#888780',
      'Completed': '#639922'
    };
    return colors[status] ?? '#888780';
  }

  getCardClass(status: string): string {
    const classes: Record<string, string> = {
      'Pending':   'pending-card',
      'Allocated': 'allocated-card',
      'Progress':  'progress-card',
      'Hold':      'hold-card',
      'Cancelled': 'cancelled-card',
      'Completed': 'completed-card'
    };
    return classes[status] ?? 'default-card';
  }

  trackByCard(index: number, item: Card): number {
    return item.id;
  }








goToDashboard(projectCode: string) {
     
    this.router.navigate(['dashboard'], { relativeTo: this.route }); 
}
}


