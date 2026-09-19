import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DefectsPopComponent } from '../defects-pop/defects-pop.component';

@Component({
  selector: 'app-defects-pop-master',
  templateUrl: './defects-pop-master.component.html',
  styleUrls: ['./defects-pop-master.component.scss']
})
export class DefectsPopMasterComponent implements OnInit {

  gridCells: any[] = [];

  defectsConfig = {
    // 0: Red, 1: Orange, 2: Yellow, 3: Blue, 4: Green, 5: Gray
    palette: [
      { name: 'red',     bgColor: '#dc2626', textColor: '#ffffff' }, // 0
      { name: 'orange',  bgColor: '#f8a000', textColor: '#ffffff' }, // 1
      { name: 'yellow',  bgColor: '#fcd34d', textColor: '#ffffff' }, // 2
      { name: 'blue',    bgColor: '#3b82f6', textColor: '#ffffff' }, // 3
      { name: 'green',   bgColor: '#4c9a2a', textColor: '#ffffff' }, // 4
      { name: 'gray',    bgColor: '#9ca3af', textColor: '#ffffff' }  // 5
    ],
rows: [
      {
        rowIndex: 0,
        cells: [
          { colIndex: 0, label: 'Sink Mark (14)',   colorIndex: 0 }, // Red
          { colIndex: 1, label: 'Thick Paint (18)', colorIndex: 0 }, // Red
          { colIndex: 2, label: 'Dent (11)',        colorIndex: 0 }, // Red
          { colIndex: 3, label: 'Short Fill (19)',  colorIndex: 0 }, // Red
          { colIndex: 4, label: 'Start up (12)',    colorIndex: 1 }  // Orange
        ]
      },
      {
        rowIndex: 1,
        cells: [
          { colIndex: 0, label: 'OCR Status (16)', colorIndex: 1 }, // Orange
          { colIndex: 1, label: 'Burn Mark (13)',  colorIndex: 1 }, // Orange
          { colIndex: 2, label: 'Damage (20)',     colorIndex: 1 }, // Orange
          { colIndex: 3, label: 'Flash (15)',      colorIndex: 2 }, // Yellow
          { colIndex: 4, label: 'Flow Mark (17)',  colorIndex: 2 }  // Yellow
        ]
      },
      {
        rowIndex: 2,
        cells: [
          { colIndex: 0, label: 'Gate Cut (10)',   colorIndex: 2 }, // Yellow
          { colIndex: 1, label: 'Oil Mark (14)',   colorIndex: 2 }, // Yellow
          { colIndex: 2, label: 'Patch Mark (19)', colorIndex: 3 }, // Blue
          { colIndex: 3, label: 'Pin Mark (12)',   colorIndex: 3 }, // Blue
          { colIndex: 4, label: 'Scratches (18)',  colorIndex: 3 }  // Blue
        ]
      },
      {
        rowIndex: 3,
        cells: [
          { colIndex: 0, label: 'Shining Mark (15)',   colorIndex: 3 }, // Blue
          { colIndex: 1, label: 'Silver Streaks (11)', colorIndex: 4 }, // Green
          { colIndex: 2, label: 'Others (16)',         colorIndex: 4 }, // Green
          { colIndex: 3, label: 'Warpage/Bend (13)',   colorIndex: 4 }, // Green
          { colIndex: 4, label: '',                    colorIndex: 5 }  // Gray
        ]
      },
      {
        rowIndex: 4,
        cells: [
          { colIndex: 0, label: '', colorIndex: 5 },
          { colIndex: 1, label: '', colorIndex: 5 },
          { colIndex: 2, label: '', colorIndex: 5 },
          { colIndex: 3, label: '', colorIndex: 5 },
          { colIndex: 4, label: '', colorIndex: 5 }
        ]
      },
      {
        rowIndex: 5,
        cells: [
          { colIndex: 0, label: '', colorIndex: 5 },
          { colIndex: 1, label: '', colorIndex: 5 },
          { colIndex: 2, label: '', colorIndex: 5 },
          { colIndex: 3, label: '', colorIndex: 5 },
          { colIndex: 4, label: '', colorIndex: 5 }
        ]
      },
      {
        rowIndex: 6,
        cells: [
          { colIndex: 0, label: '', colorIndex: 5 },
          { colIndex: 1, label: '', colorIndex: 5 },
          { colIndex: 2, label: '', colorIndex: 5 },
          { colIndex: 3, label: '', colorIndex: 5 },
          { colIndex: 4, label: '', colorIndex: 5 }
        ]
      },
      {
        rowIndex: 7,
        cells: [
          { colIndex: 0, label: '', colorIndex: 5 },
          { colIndex: 1, label: '', colorIndex: 5 },
          { colIndex: 2, label: '', colorIndex: 5 },
          { colIndex: 3, label: '', colorIndex: 5 },
          { colIndex: 4, label: '', colorIndex: 5 }
        ]
      },
      {
        rowIndex: 8,
        cells: [
          { colIndex: 0, label: '', colorIndex: 5 },
          { colIndex: 1, label: '', colorIndex: 5 },
          { colIndex: 2, label: '', colorIndex: 5 },
          { colIndex: 3, label: '', colorIndex: 5 },
          { colIndex: 4, label: '', colorIndex: 5 }
        ]
      },
      {
        rowIndex: 9, 
        cells: [
          { colIndex: 0, label: '', colorIndex: 5 },
          { colIndex: 1, label: '', colorIndex: 5 },
          { colIndex: 2, label: '', colorIndex: 5 },
          { colIndex: 3, label: '', colorIndex: 5 },
          { colIndex: 4, label: '', colorIndex: 5 }
        ]
      }
    ]
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DefectsPopComponent>
  ) { }

  ngOnInit(): void {
    this.gridCells = this.defectsConfig.rows.reduce((acc: any[], row) => {
      const cells = row.cells.map(cell => {
        const color = this.defectsConfig.palette[cell.colorIndex];
        return {
          label: cell.label,
          colorIndex: cell.colorIndex,
          bgColor: color.bgColor,
          textColor: color.textColor
        };
      });
      return acc.concat(cells);
    }, []);
  }

  toggleColor(cell: any) {
    // If the cell is gray (5), reset to red (0). 
    // Otherwise, loop through Red(0), Orange(1), Yellow(2), Blue(3), Green(4)
    if (cell.colorIndex === 5) {
      cell.colorIndex = 0;
    } else {
      cell.colorIndex = (cell.colorIndex + 1) % 5; 
    }
    
    // Apply the new color properties to the cell
    const color = this.defectsConfig.palette[cell.colorIndex];
    cell.bgColor = color.bgColor;
    cell.textColor = color.textColor;
  }

  close() {
    this.dialogRef.close();
  }

}