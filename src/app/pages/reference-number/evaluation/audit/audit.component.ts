import { Component, OnInit } from '@angular/core';
import { PartsData } from '../../../prts/PartsData';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss']
})
export class AuditComponent implements OnInit {

  department: string = '';
  responsibility: string = '';
  notes: string = '';
  values: any[] = [];

  ngOnInit(): void {
    this.values = PartsData.getd3b();
  }

  save(): void {
    console.log('Audit data saved:', {
      department: this.department,
      responsibility: this.responsibility,
      notes: this.notes,
      values: this.values
    });
  }

  approve(): void {
    console.log('Audit approved:', {
      department: this.department,
      responsibility: this.responsibility,
      notes: this.notes,
      values: this.values
    });
  }
}
