import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Meeting {
  date: string;
  time: string;
  duration: string;
  agendaItems: string[];
  attendees: any[];
}

@Injectable({
  providedIn: 'root'
})
export class MeetingService {
  deleteMeeting(index: number) {
    throw new Error('Method not implemented.');
  }

  private storageKey = 'meetings';

  private meetingsSubject = new BehaviorSubject<Meeting[]>(this.loadFromStorage());
  meetings$ = this.meetingsSubject.asObservable();

  constructor() {}

  // ✅ ALWAYS reload from localStorage
  private loadFromStorage(): Meeting[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  // 🔥 Save
  saveMeeting(meeting: Meeting) {
    const current = this.loadFromStorage();
    current.push(meeting);

    localStorage.setItem(this.storageKey, JSON.stringify(current));
    this.meetingsSubject.next([...current]); // IMPORTANT: spread copy
  }

  // 🔥 Force refresh (call on init if needed)
  refresh() {
    this.meetingsSubject.next(this.loadFromStorage());
  }

  getMeetings(): Meeting[] {
    return this.loadFromStorage();
  }

  deleteMeetingByItem(meeting: Meeting) {
  const current = this.meetingsSubject.value;

  const updated = current.filter(m => m !== meeting);

  localStorage.setItem(this.storageKey, JSON.stringify(updated));
  this.meetingsSubject.next([...updated]);
}
}