import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subjective-ithelp-desk',
  templateUrl: './subjective-ithelp-desk.component.html',
  styleUrls: ['./subjective-ithelp-desk.component.scss']
})
export class SubjectiveIthelpDeskComponent implements OnInit {

  ticketSubject: string = '';
  ticketCategory: string = 'terminal';
  ticketPriority: string = 'medium';
  ticketPlant: string = 'bidadi';
  ticketDescription: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  submitTicket(): void {
    if (!this.ticketSubject || !this.ticketDescription) {
      alert('Please fill in the required fields (Subject and Description).');
      return;
    }
    alert('Support ticket has been successfully registered. Ticket ID: IT-SUBJ-' + Math.floor(100000 + Math.random() * 900000));
    this.resetForm();
  }

  resetForm(): void {
    this.ticketSubject = '';
    this.ticketCategory = 'terminal';
    this.ticketPriority = 'medium';
    this.ticketPlant = 'bidadi';
    this.ticketDescription = '';
  }

}
