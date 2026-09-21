import { Component, OnInit, OnDestroy, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { PageHeaderService } from '../shared/page-header.service';

@Component({
  selector: 'app-meetingref',
  templateUrl: './meetingref.component.html',
  styleUrls: ['./meetingref.component.scss']
})
export class MeetingrefComponent implements OnInit, OnDestroy {

  meetingDate = '';
  meetingTime = '';
  duration = '';

  agendaItems: string[] = ['', '', ''];  // start with 3 blank rows

  attendees = [
    { name: 'Pavan Kalyan', role: 'Project Manager', initials: 'PK', color: '#4A90D9', present: false },
    { name: 'Test1', role: 'Lead Developer', initials: 'T1', color: '#9B59B6', present: false },
    { name: 'Navin Malik', role: 'UI/UX Designer', initials: 'NM', color: '#27AE60', present: false },
    { name: 'Gaurav', role: 'Business Analyst', initials: 'GV', color: '#E67E22', present: false },
    { name: 'Contact OM', role: 'QA Engineer', initials: 'CO', color: '#E74C3C', present: false },
    { name: 'Ayush', role: 'Product Owner', initials: 'AY', color: '#1ABC9C', present: false },
    { name: 'Santosh', role: 'DevOps Engineer', initials: 'ST', color: '#E91E8C', present: false },
    { name: 'Harsha', role: 'Scrum Master', initials: 'HA', color: '#673AB7', present: false }
  ];

  get agendaCount(): number {
    return this.agendaItems.filter(i => i && i.trim().length > 0).length;
  }

  addAgendaItem(): void {
    this.agendaItems.push('');
  }

  get presentCount(): number {
    return this.attendees.filter(a => a.present).length;
  }

  get allSelected(): boolean {
    return this.attendees.every(a => a.present);
  }

  toggleAll(): void {
    const next = !this.allSelected;
    this.attendees.forEach(a => a.present = next);
  }

  constructor(
    private router: Router,
    @Optional() private pageHeaderService?: PageHeaderService,
    @Optional() public dialogRef?: MatDialogRef<MeetingrefComponent>
  ) {
    if (this.pageHeaderService) {
      this.pageHeaderService.showBackButton(() => this.goBack());
    }
  }

  ngOnInit(): void {
  }

  goBack(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    } else {
      this.router.navigate(['/app/complaints/meeting']);
    }
  }

  ngOnDestroy(): void {
    if (this.pageHeaderService) {
      this.pageHeaderService.hideBackButton();
    }
  }

  save(): void {
    const today = new Date();
    const newRef = `MEET-${today.getFullYear()}/${String(today.getMonth() + 1).padStart(2, '0')}/${String(today.getDate()).padStart(2, '0')}`;
    if (this.dialogRef) {
      this.dialogRef.close({
        meetingRef: newRef,
        date: this.meetingDate || '10-10-2024',
        time: this.meetingTime || '10:00 AM',
        duration: this.duration || '45 min',
        attendance: `${this.presentCount}/${this.attendees.length}`,
        agendaItems: this.agendaItems
      });
    }
    this.router.navigate(['/app/complaints/meetings/detail'], {
      queryParams: {
        meetingRef: newRef,
        date: this.meetingDate || '10-10-2024',
        time: this.meetingTime || '10:00 AM',
        duration: this.duration || '45 min',
        attendance: `${this.presentCount}/${this.attendees.length}`
      }
    });
  }

  trackByIndex(index: number, item: any) {
    return index;
  }
}
