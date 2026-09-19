import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  // Top header fields (as specified by CEO transcript)
  reviewDate: string = '2026-09-25';
  dueDate: string = '2026-10-15';
  eta: string = '2026-10-08';
  priority: string = 'Critical';

  // Analysis & Corrective Actions
  rootCause: string = 'Thermal dissipation bottleneck in high-load operating cycle causing intermittent ECU communication loss.';
  interimAction: string = 'Installed supplemental thermal insulation pads and updated firmware fan curve on affected batch.';
  permanentAction: string = 'Redesigned heatsink casting for increased surface area (+30%) and implemented automated end-of-line thermal stress validation.';

  // Status flags
  savedSuccessfully: boolean = false;

  priorities = [
    { value: 'Safety', label: 'Safety', color: '#c62828' },
    { value: 'Critical', label: 'Critical', color: '#e65100' },
    { value: 'Important', label: 'Important', color: '#f57c00' },
    { value: 'Other', label: 'Other', color: '#546e7a' }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void { }

  getPriorityColor(): string {
    const found = this.priorities.find(p => p.value === this.priority);
    return found ? found.color : '#333';
  }

  saveSummary(): void {
    this.savedSuccessfully = true;
    setTimeout(() => {
      this.savedSuccessfully = false;
    }, 3000);
  }

  saveAndNext(): void {
    this.saveSummary();
    this.router.navigate(['/app/complaints/reference-number/timeline']);
  }
}
