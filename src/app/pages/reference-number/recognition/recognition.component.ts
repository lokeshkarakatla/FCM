import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RecognitionDialogComponent } from '../dialogs/recognition-dialog/recognition-dialog.component';

@Component({
  selector: 'app-recognition',
  templateUrl: './recognition.component.html',
  styleUrls: ['./recognition.component.scss']
})
export class RecognitionComponent {
  department: string = 'Quality Assurance & Plant Operations';
  personnel: string = 'Ravi Kumar (QE), Priya Sharma (Prod. Supervisor), Arun Verma (Quality Head)';
  recognitionDate: string = '2024-10-15';
  achievementCategory: string = 'Exemplary Root Cause Detection & Rapid Containment';
  compliments: string = 'The cross-functional team demonstrated outstanding diligence in identifying the ECU thermal dissipation bottleneck and deploying containment countermeasures within 24 hours, preventing customer escalations.';

  save(): void {
    console.log('Recognition data saved:', {
      department: this.department,
      personnel: this.personnel,
      recognitionDate: this.recognitionDate,
      achievementCategory: this.achievementCategory,
      compliments: this.compliments
    });
  }
}

