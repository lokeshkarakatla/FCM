import { Component } from '@angular/core';

export interface TimelineStep {
  step: string;
  status: boolean | string;
  startDate: string;
  finishDate: string;
  days: number;
  responsibility: string;
  done: boolean;
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {

  stepData: TimelineStep[] = [
    { step: 'Intake', status: true, startDate: '2025-06-01', finishDate: '2025-06-05', days: 4, responsibility: 'Karthik Varanasi', done: false },
    { step: 'Field Info Awaited', status: 'Inactive', startDate: '2025-05-20', finishDate: '2025-05-25', days: 5, responsibility: 'Karthik Varanasi', done: false },
    { step: 'Failed Part Awaited', status: false, startDate: '2025-06-10', finishDate: '2025-06-15', days: 5, responsibility: 'Karthik Varanasi', done: true },
    { step: 'Containment', status: 'Inactive', startDate: '2025-06-03', finishDate: '2025-06-08', days: 5, responsibility: 'Karthik Varanasi', done: false },
    { step: 'Investigation', status: false, startDate: '2025-06-12', finishDate: '2025-06-18', days: 6, responsibility: 'Karthik Varanasi', done: false },
    { step: 'Design Review', status: false, startDate: '2025-06-01', finishDate: '2025-06-06', days: 5, responsibility: 'Karthik Varanasi', done: false },
    { step: 'Supplier Action', status: false, startDate: '2025-05-28', finishDate: '2025-06-02', days: 5, responsibility: 'Karthik Varanasi', done: true },
    { step: 'CAPA', status: 'Inactive', startDate: '2025-06-04', finishDate: '2025-06-09', days: 5, responsibility: 'Karthik Varanasi', done: true },
    { step: 'Implemantation', status: 'Active', startDate: '2025-05-30', finishDate: '2025-06-04', days: 5, responsibility: 'Karthik Varanasi', done: false },
    { step: 'Verification', status: 'Inactive', startDate: '2025-06-06', finishDate: '2025-06-10', days: 4, responsibility: 'Karthik Varanasi', done: true },
    { step: 'Monitoring', status: 'Active', startDate: '2025-06-11', finishDate: '2025-06-14', days: 3, responsibility: 'Karthik Varanasi', done: true },
    { step: 'Prevention', status: false, startDate: '2025-06-01', finishDate: '2025-06-01', days: 0, responsibility: 'Karthik Varanasi', done: true },
    { step: 'Recognition', status: false, startDate: '2025-06-01', finishDate: '2025-06-01', days: 0, responsibility: 'Karthik Varanasi', done: false },
    { step: 'Closure', status: false, startDate: '2025-06-01', finishDate: '2025-06-01', days: 0, responsibility: 'Karthik Varanasi', done: false },
    { step: 'Completed', status: false, startDate: '2025-06-01', finishDate: '2025-06-01', days: 0, responsibility: 'Karthik Varanasi', done: false }
  ];

  /** Returns true when the step has meaningful data to show */
  hasData(item: TimelineStep): boolean {
    return !!(item.responsibility && item.startDate);
  }

  /** Colour rules (mirrors what the Updates checkbox shows — any truthy status = active):
   *  active ✓ + done ✓  → green  #27a469
   *  active ✓ + done ✗  → blue   #295fd9
   *  active ✗            → grey   #eeeff2
   */
  circleClass(item: TimelineStep): string {
    const isActive = !!item.status;   // truthy: true, 'Active', 'Inactive', any non-empty string
    if (isActive && item.done) return 'circle-done';
    if (isActive && !item.done) return 'circle-active';
    return 'circle-pending';
  }
}
