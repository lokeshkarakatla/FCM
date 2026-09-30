import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PartsData } from '../../../prts/PartsData';
import { AddCauseDialogComponent } from '../../dialogs/add-cause-dialog/add-cause-dialog.component';

@Component({
  selector: 'app-eval-fishbone',
  templateUrl: './fishbone.component.html',
  styleUrls: ['./fishbone.component.scss']
})
export class FishboneComponent implements OnInit {

  man: any[] = [];
  material: any[] = [];
  machines: any[] = [];
  methods: any[] = [];
  environment: any[] = [];
  supply: any[] = [];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    const fishData = PartsData.fishD3();
    this.man = fishData.man || [];
    this.material = fishData.material || [];
    this.machines = fishData.machines || [];
    this.methods = fishData.methods || [];
    this.environment = fishData.environment || [];
    this.supply = fishData.supply || [];
  }

  addchecklistaudit(category: string = 'man'): void {
    const dialogRef = this.dialog.open(AddCauseDialogComponent, {
      height: 'auto',
      width: '600px',
      data: { category }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result && result.possibleCause) {
        const text = result.shortCode
          ? `${result.shortCode} - ${result.possibleCause}`
          : result.possibleCause;
        const newIssue = { issue: text };
        const cat = result.category || category;

        if (cat === 'man') {
          this.man.push(newIssue);
        } else if (cat === 'material') {
          this.material.push(newIssue);
        } else if (cat === 'machines') {
          this.machines.push(newIssue);
        } else if (cat === 'methods') {
          this.methods.push(newIssue);
        } else if (cat === 'environment') {
          this.environment.push(newIssue);
        } else if (cat === 'supply' || cat === 'supply_exception') {
          this.supply.push(newIssue);
        }
      }
    });
  }

  save(): void {
    console.log('Fishbone saved', {
      man: this.man,
      material: this.material,
      machines: this.machines,
      methods: this.methods,
      environment: this.environment,
      supply: this.supply
    });
  }
}
