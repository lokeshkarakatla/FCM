import { Component } from '@angular/core';
@Component({
  selector: 'app-recognition',
  templateUrl: './recognition.component.html',
  styleUrls: ['./recognition.component.scss']
})
export class RecognitionComponent {
  teamMembers = [
    { name: 'Ravi Kumar', role: 'Quality Engineer', contribution: 'Led root cause analysis and identified design defect', award: 'Star Performer' },
    { name: 'Priya Sharma', role: 'Production Supervisor', contribution: 'Implemented containment actions within 24 hours', award: 'Quick Response' },
  ];
  teamLead: string = '';
  recognitionDate: string = '';
  remarks: string = '';
}
