import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { PageHeaderService } from '../../../shared/page-header.service';

@Component({
  selector: 'app-add-meeting-page',
  templateUrl: './add-meeting-page.component.html',
  styleUrls: ['./add-meeting-page.component.scss']
})
export class AddMeetingPageComponent implements OnDestroy {

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
    return this.agendaItems.filter(i => i.trim().length > 0).length;
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

  constructor(private router: Router, private pageHeaderService: PageHeaderService) {
    this.pageHeaderService.showBackButton(() => this.goBack());
  }

  goBack(): void {
    this.router.navigate(['/app/complaints/meeting']);
  }

  ngOnDestroy(): void {
    this.pageHeaderService.hideBackButton();
  }

  save(): void {
    // wire to service when ready
    this.router.navigate(['/app/complaints/meeting']);
  }

  trackByIndex(index: number, item: any) {
    return index;
  }
}