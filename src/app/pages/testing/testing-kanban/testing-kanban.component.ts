import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ComplaintsService } from '../../complaints/complaints.service';
import { PageHeaderService } from 'src/app/shared/page-header.service';

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

@Component({
  selector: 'app-testing-kanban',
  templateUrl: './testing-kanban.component.html',
  styleUrls: ['./testing-kanban.component.scss']
})
export class TestingKanbanComponent implements OnInit {

  constructor(
    private router: Router,
    private complaintsService: ComplaintsService,
    private pageHeaderService: PageHeaderService
  ) {}

  ngOnInit(): void {
    const savedData = localStorage.getItem('kanbanData');
    if (savedData) {
      this.cards = JSON.parse(savedData);
    } else {
      this.initializeKanbanData();
    }
  }

  data = [
    { subject: 'Global fleet of connected vehicles', distributor: 'Mahindra',   Lead: 'Ravi',  status: 'Pending', TargetDate: '2026-04-25', FailureDate: '2026-04-20' },
    { subject: 'Engine Overheating',                 distributor: 'Tata Motors', Lead: 'Sneha', status: 'Pending', TargetDate: '2026-04-22', FailureDate: '2026-04-18' },
    { subject: 'Update Application Dependencies',    distributor: 'Infosys',     Lead: 'Kiran', status: 'Hold',    TargetDate: '2026-04-30', FailureDate: '2026-04-21' },
    { subject: 'Verify DLL Versions',                distributor: 'Tesla',       Lead: 'Arjun', status: 'Process', TargetDate: '2026-04-15', FailureDate: '2026-04-10' },
    { subject: 'Bumper Issue',                       distributor: 'Tesla',       Lead: 'Arjun', status: 'Hold',    TargetDate: '2026-04-15', FailureDate: '2026-04-10' },
    { subject: 'Error Testing A',                    distributor: 'Tesla',       Lead: 'Arjun', status: 'Pending', TargetDate: '2026-04-15', FailureDate: '2026-04-10' },
    { subject: 'Error Testing B',                    distributor: 'Tesla',       Lead: 'Arjun', status: 'Hold',    TargetDate: '2026-04-15', FailureDate: '2026-04-10' },
    { subject: 'Error Testing C',                    distributor: 'Tesla',       Lead: 'Arjun', status: 'Process', TargetDate: '2026-04-15', FailureDate: '2026-04-10' },
    { subject: 'Error Testing D',                    distributor: 'Tesla',       Lead: 'Arjun', status: 'Closed',  TargetDate: '2026-04-15', FailureDate: '2026-04-10' }
  ];

  lists: Status[] = ['Pending', 'Allocated', 'Progress', 'Hold', 'Cancelled', 'Completed'];

  cards: Record<Status, Card[]> = {
    Pending: [], Allocated: [], Progress: [],
    Hold: [], Cancelled: [], Completed: []
  };

  // Maps legacy/mismatched status strings to valid Status values
  private statusMap: Record<string, Status> = {
    'Pending':   'Pending',
    'Allocated': 'Allocated',
    'Process':   'Progress',   // fix: 'Process' → 'Progress'
    'Progress':  'Progress',
    'Hold':      'Hold',
    'Cancelled': 'Cancelled',
    'Closed':    'Completed',  // fix: 'Closed' → 'Completed'
    'Completed': 'Completed'
  };

  initializeKanbanData(): void {
    const grouped: Record<Status, Card[]> = {
      Pending: [], Allocated: [], Progress: [],
      Hold: [], Cancelled: [], Completed: []
    };

    this.data.forEach((item, index) => {
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

  newNote = '';

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

  scrollGrid(side: 'left' | 'right'): void {
    const ele = document.getElementById('grid-table-container');
    if (ele) {
      ele.scrollLeft += side === 'right' ? 300 : -300;
    }
  }

  goBack(): void {
    this.router.navigate(['/app/complaints']);
  }

  trackByCard(index: number, item: Card): number {
    return item.id;
  }

    showFilter: boolean = false;
      toggleFilter(): void {
    this.showFilter = !this.showFilter;
  }
}