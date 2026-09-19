import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddCuaseComponent } from '../../add-cuase/add-cuase.component';
import { environment } from 'src/environments/environment';
import { PartsData } from '../../PartsData';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.scss']
})
export class DiagnosisComponent implements OnInit {

  constructor(public router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    if (environment.mode == 1) {
      this.values = PartsData.diagnosis();
    }
    else {

    }
  }
  values = [

  ]

  next() {
    this.router.navigate(['/app/prtsnavbar/fish']);
  }
  back() {
    this.router.navigate(['/app/prtsnavbar/d4']);
  }
  addchecklistaudit() {
    let dialogRef = this.dialog.open(AddCuaseComponent, {

      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });

  }
}
