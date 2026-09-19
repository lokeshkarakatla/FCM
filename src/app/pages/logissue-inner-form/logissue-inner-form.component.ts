import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logissue-inner-form',
  templateUrl: './logissue-inner-form.component.html',
  styleUrls: ['./logissue-inner-form.component.scss']
})
export class LogissueInnerFormComponent implements OnInit {
  Image: any = '/assets/cardoor.png';
  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  values1 = [
    { serial: '121 : Checkpoint name', Measure: 'Gap', lsl: '5 / 6' },
    { serial: '122 : Checkpoint name', Measure: 'Gap', lsl: '5 / 6' },
    { serial: '123 : Checkpoint name', Measure: 'Gap', lsl: '5 / 6' },
    { serial: '124 : Checkpoint name', Measure: 'Gap', lsl: '5 / 6' },
    { serial: '125 : Checkpoint name', Measure: 'Gap', lsl: '5 / 6' },
    { serial: '126 : Checkpoint name', Measure: 'Gap', lsl: '5 / 6' },
    { serial: '127 : Checkpoint name', Measure: 'Gap', lsl: '5 / 6' },
    { serial: '128 : Checkpoint name', Measure: 'Gap', lsl: '5 / 6' },
    { serial: '129 : Checkpoint name', Measure: 'Gap', lsl: '5 / 6' },
    { serial: '130 : Checkpoint name', Measure: 'Gap', lsl: '5 / 6' },

  ]
  back() {
    this.router.navigate(['/app/parameterboard/issuelog-par']);
  }
}
