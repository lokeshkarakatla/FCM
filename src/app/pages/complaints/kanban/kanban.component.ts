import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ComplaintsService } from '../complaints.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { PageHeaderService } from '../../../shared/page-header.service';

interface Note {
  text: string;
  author: string;
  date: string;
}

interface Card {
  id: number;
  subject: string;
  LawFirm: string;
  createdBy: string;
  assignedTo: string;
  createdDate: string;
  dueDate: string;
  expedite: boolean;
  notes: Note[];
  expanded: boolean;
  status: Status;
}

type Status = 'Pending' | 'Process' | 'Hold' | 'Closed';


@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private complaintsService: ComplaintsService, private pageHeaderService: PageHeaderService) { }
  ngOnInit(): void {
    this.pageHeaderService.showBackButton(() => this.goBack());

    localStorage.removeItem('kanbanData');
    this.initializeKanbanData();

    const savedData = localStorage.getItem('kanbanData');

    if (savedData) {
      this.cards = JSON.parse(savedData);
    } else {
      this.initializeKanbanData();
    }
  }
  data = [
    { subject: 'Global fleet of connected vehicles', distributor: 'Mahindra', Lead: 'Ravi', status: 'Pending', TargetDate: '2026-04-25', FailureDate: '2026-04-20' },
    { subject: 'Engine Overheating', distributor: 'Tata Motors', Lead: 'Sneha', status: 'Pending', TargetDate: '2026-04-22', FailureDate: '2026-04-18' },
    { subject: 'Update Application Dependencies', distributor: 'Infosys', Lead: 'Kiran', status: 'Hold', TargetDate: '2026-04-30', FailureDate: '2026-04-21' },
    { subject: 'Verify DLL Versions', distributor: 'Tesla', Lead: 'Arjun', status: 'Process', TargetDate: '2026-04-15', FailureDate: '2026-04-10' },
    { subject: 'Bumper Issue', distributor: 'Tesla', Lead: 'Arjun', status: 'Hold', TargetDate: '2026-04-15', FailureDate: '2026-04-10' },
    { subject: 'Error Testing', distributor: 'Tesla', Lead: 'Arjun', status: 'Pending', TargetDate: '2026-04-15', FailureDate: '2026-04-10' },
    { subject: 'Error Testing', distributor: 'Tesla', Lead: 'Arjun', status: 'Hold', TargetDate: '2026-04-15', FailureDate: '2026-04-10' },
    { subject: 'Error Testing', distributor: 'Tesla', Lead: 'Arjun', status: 'Process', TargetDate: '2026-04-15', FailureDate: '2026-04-10' },
    { subject: 'Error Testing', distributor: 'Tesla', Lead: 'Arjun', status: 'Closed', TargetDate: '2026-04-15', FailureDate: '2026-04-10' }
  ];

  lists: Status[] = ['Pending', 'Process', 'Hold', 'Closed'];

  cards: Record<Status, Card[]> = {
    Pending: [],
    Process: [],
    Hold: [],
    Closed: []
  };

  initializeKanbanData() {
    const grouped: Record<Status, Card[]> = {
      Pending: [],
      Process: [],
      Hold: [],
      Closed: []
    };

    this.data.forEach((item, index) => {
      const status = item.status as Status;

      const card: Card = {
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
        status: status
      };

      grouped[status].push(card);
    });

    this.cards = grouped;
    localStorage.setItem('kanbanData', JSON.stringify(this.cards));
  }

  // Toggle card expansion
  toggleExpand(card: Card) {
    card.expanded = !card.expanded;
  }

  // Check if the card is overdue
  isOverdue(dueDate: string): boolean {
    const today = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD
    return dueDate < today;
  }


  // Function to assign a color based on the list name
  getCardClass(list: string): string {
    const statusClasses: { [key: string]: string } = {
      'Pending': 'pending-card',
      'Process': 'process-card',
      'Hold': 'hold-card',
      'Closed': 'closed-card'
    };
    return statusClasses[list] || 'default-card';
  }

  newNote = '';

  //constructor(public dialog: MatDialog) { }

  // drop(event: CdkDragDrop<Card[]>, targetList: string) {
  //   const previousList = event.previousContainer.id;
  //   const currentList = event.container.id;

  //   if (previousList !== currentList) {
  //     transferArrayItem(
  //       this.cards[previousList],
  //       this.cards[currentList],
  //       event.previousIndex,
  //       event.currentIndex
  //     );
  //   } else {
  //     moveItemInArray(this.cards[targetList], event.previousIndex, event.currentIndex);
  //   }
  // }
  drop(event: CdkDragDrop<Card[]>, targetList: Status) {
    const previousList = event.previousContainer.id as Status;
    const currentList = event.container.id as Status;

    if (previousList !== currentList) {
      transferArrayItem(
        this.cards[previousList],
        this.cards[currentList],
        event.previousIndex,
        event.currentIndex
      );

      const movedCard = this.cards[currentList][event.currentIndex];
      movedCard.status = currentList;

    } else {
      moveItemInArray(
        this.cards[targetList],
        event.previousIndex,
        event.currentIndex
      );
    }

    this.cards = { ...this.cards };
    localStorage.setItem('kanbanData', JSON.stringify(this.cards));
  }
  // openAddCardDialog(val: any) {
  //   const dialogRef = this.dialog.open(AddCardDialogComponent, {
  //     //data: card ? { ...card } : null
  //     width: "500px"
  //   });

  //   dialogRef.afterClosed().subscribe((newCard: Card) => {
  //     if (newCard) {

  //       this.cards[val].push(newCard);

  //     }
  //   });
  // }


  // openAddNoteDialog(val: any) {
  //   const dialogRef = this.dialog.open(AddNotesDialogComponent, {

  //     width: "550px",
  //     height: "570px",
  //     data: val
  //   });

  //   dialogRef.afterClosed().subscribe((newCard: Card) => {

  //   });
  // }

  addNote(card: Card) {
    if (this.newNote.trim()) {
      card.notes.push({
        text: this.newNote,
        author: "Current User",
        date: new Date().toLocaleString()
      });
      this.newNote = '';
    }
  }

  // archiveCard(card: Card) {
  //   Object.keys(this.cards).forEach(list => {
  //     this.cards[list] = this.cards[list].filter(c => c.id !== card.id);
  //   });
  // }

  // Toggle card expansion
  toggleCard(card: Card) {
    card.expanded = !card.expanded;
  }




  scrollGrid(side: 'left' | 'right') {
    const ele = document.getElementById('grid-table-container');
    const scrollAmount = 300; // Adjust if necessary

    if (ele) {
      if (side === 'right') {
        ele.scrollLeft += scrollAmount;
      } else {
        ele.scrollLeft -= scrollAmount;
      }
    }
  }



  goBack() {
    this.router.navigate(['/app/complaints']);
  }

  ngOnDestroy(): void {
    this.pageHeaderService.hideBackButton();
  }
  trackByCard(index: number, item: Card) {
    return item.id;
  }

  getColor(status: string): string {
    switch (status) {
      case 'Pending': return 'red';
      case 'Process': return 'yellow';
      case 'Hold': return 'blue';
      case 'Closed': return 'green';
      default: return 'gray';
    }
  }


}
