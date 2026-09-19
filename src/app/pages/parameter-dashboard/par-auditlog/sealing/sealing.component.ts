import { AddCheckpointRequestComponent } from './add-checkpoint-request/add-checkpoint-request.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { ImgPopSealingComponent } from './img-pop-sealing/img-pop-sealing.component';

@Component({
  selector: 'app-sealing',
  templateUrl: './sealing.component.html',
  styleUrls: ['./sealing.component.scss']
})
export class SealingComponent implements OnInit {

  isChecked3: string = 'no';
  isChecked4: string = 'yes';
  isChecked5: string = 'yes';
  isChecked6: string = 'yes';
  isChecked7: string = 'yes';
  isChecked8: string = 'yes';
  isChecked9: string = 'yes';
  isChecked10: string = 'yes';
  isChecked11: string = 'yes';

  // --- GRID DENSITY CONTROL ---
  gridRows = Array(8).fill(0); 
  gridCols = Array(11).fill(0);

  // Updated images array with standardized heights, widths, and GREY cells added
  images = [
    {
      title: "Right Fender",
      src: "/assets/Swift/Right_Fender.png",
      height: "310px", width: "480px", heightPx: 310, widthPx: 480,
      highlightedCells: [
        { col: 2, row: 2, color: "rgba(255, 205, 205, 0.64)" },
        { col: 5, row: 2, color: "rgba(255, 205, 205, 0.64)" },
        { col: 7, row: 2, color: "rgba(127, 255, 127, 0.62)" },
        { col: 3, row: 3, color: "rgba(255, 205, 205, 0.64)" },
        { col: 2, row: 4, color: "rgba(127, 255, 127, 0.62)" },
        { col: 3, row: 1, color: "rgba(127, 255, 127, 0.62)" },
        { col: 6, row: 3, color: "rgba(127, 255, 127, 0.62)" },
        { col: 8, row: 4, color: "rgba(211, 211, 211, 0.8)" },
        { col: 4, row: 6, color: "rgba(211, 211, 211, 0.8)" },
      ],
    },
    {
      title: "Right Front Door",
      src: "/assets/Swift/Right_Front_Door.png",
      height: "310px", width: "480px", heightPx: 310, widthPx: 480,
      highlightedCells: [
        { col: 3, row: 1, color: "rgba(255, 205, 205, 0.64)" },
        { col: 6, row: 2, color: "rgba(127, 255, 127, 0.62)" },
        { col: 7, row: 5, color: "rgba(127, 255, 127, 0.62)" },
        { col: 3, row: 6, color: "rgba(127, 255, 127, 0.62)" },
        { col: 5, row: 7, color: "rgba(255, 205, 205, 0.64)" },
        { col: 7, row: 7, color: "rgba(127, 255, 127, 0.62)" },
        { col: 4, row: 3, color: "rgba(211, 211, 211, 0.8)" },
        { col: 5, row: 4, color: "rgba(211, 211, 211, 0.8)" },
      ],
    },
    {
      title: "Right Rear Door",
      src: "/assets/Swift/Right_Rear_Door.png",
      height: "310px", width: "480px", heightPx: 310, widthPx: 480,
      highlightedCells: [
        { col: 3, row: 1, color: "rgba(255, 205, 205, 0.64)" },
        { col: 6, row: 1, color: "rgba(127, 255, 127, 0.62)" },
        { col: 8, row: 3, color: "rgba(127, 255, 127, 0.62)" },
        { col: 6, row: 4, color: "rgba(255, 205, 205, 0.64)" },
        { col: 7, row: 4, color: "rgba(127, 255, 127, 0.62)" },
        { col: 3, row: 6, color: "rgba(255, 205, 205, 0.64)" },
        { col: 6, row: 7, color: "rgba(255, 205, 205, 0.64)" },
        { col: 5, row: 8, color: "rgba(255, 205, 205, 0.64)" },
        { col: 6, row: 8, color: "rgba(127, 255, 127, 0.62)" },
        { col: 4, row: 5, color: "rgba(211, 211, 211, 0.8)" },
      ],
    },
    {
      title: "Rear",
      src: "/assets/Swift/Back.png",
      height: "310px", width: "480px", heightPx: 310, widthPx: 480,
      highlightedCells: [
        { col: 4, row: 4, color: "rgba(127, 255, 127, 0.62)" },
        { col: 6, row: 4, color: "rgba(127, 255, 127, 0.62)" },
        { col: 2, row: 5, color: "rgba(255, 205, 205, 0.64)" },
        { col: 4, row: 6, color: "rgba(255, 205, 205, 0.64)" },
        { col: 6, row: 6, color: "rgba(255, 205, 205, 0.64)" },
        { col: 8, row: 5, color: "rgba(127, 255, 127, 0.62)" },
        { col: 2, row: 6, color: "rgba(127, 255, 127, 0.62)" },
        { col: 5, row: 5, color: "rgba(211, 211, 211, 0.8)" },
        { col: 5, row: 7, color: "rgba(211, 211, 211, 0.8)" },
      ],
    },
    {
      title: "Left Rear Door",
      src: "/assets/Swift/Left_Rear_Door.png",
      height: "310px", width: "480px", heightPx: 310, widthPx: 480,
      highlightedCells: [
        { col: 6, row: 1, color: "rgba(127, 255, 127, 0.62)" },
        { col: 6, row: 4, color: "rgba(255, 205, 205, 0.64)" },
        { col: 7, row: 4, color: "rgba(127, 255, 127, 0.62)" },
        { col: 3, row: 5, color: "rgba(127, 255, 127, 0.62)" },
        { col: 3, row: 6, color: "rgba(255, 205, 205, 0.64)" },
        { col: 6, row: 7, color: "rgba(255, 205, 205, 0.64)" },
        { col: 5, row: 8, color: "rgba(255, 205, 205, 0.64)" },
        { col: 4, row: 3, color: "rgba(211, 211, 211, 0.8)" },
      ],
    },
    {
      title: "Left Front Door",
      src: "/assets/Swift/Left_Front_Door.png",
      height: "310px", width: "480px", heightPx: 310, widthPx: 480,
      highlightedCells: [
        { col: 6, row: 1, color: "rgba(127, 255, 127, 0.62)" },
        { col: 8, row: 1, color: "rgba(255, 205, 205, 0.64)" },
        { col: 7, row: 5, color: "rgba(127, 255, 127, 0.62)" },
        { col: 3, row: 6, color: "rgba(127, 255, 127, 0.62)" },
        { col: 4, row: 7, color: "rgba(127, 255, 127, 0.62)" },
        { col: 5, row: 7, color: "rgba(255, 205, 205, 0.64)" },
        { col: 7, row: 7, color: "rgba(127, 255, 127, 0.62)" },
        { col: 5, row: 3, color: "rgba(211, 211, 211, 0.8)" },
      ],
    },
    {
      title: "Left Fender",
      src: "/assets/Swift/Left_Fender.png",
      height: "310px", width: "480px", heightPx: 310, widthPx: 480,
      highlightedCells: [
        { col: 11, row: 2, color: "rgba(255, 205, 205, 0.64)" },
        { col: 8, row: 2, color: "rgba(255, 205, 205, 0.64)" },
        { col: 6, row: 2, color: "rgba(127, 255, 127, 0.62)" },
        { col: 10, row: 3, color: "rgba(255, 205, 205, 0.64)" },
        { col: 7, row: 3, color: "rgba(255, 205, 205, 0.64)" },
        { col: 9, row: 1, color: "rgba(127, 255, 127, 0.62)" },
        { col: 4, row: 4, color: "rgba(211, 211, 211, 0.8)" },
      ],
    },
    {
      title: "Roof",
      src: "/assets/Swift/Roof.png",
      height: "310px", width: "480px", heightPx: 310, widthPx: 480,
      highlightedCells: [
        { col: 5, row: 4, color: "rgba(255, 205, 205, 0.64)" },
        { col: 9, row: 4, color: "rgba(255, 205, 205, 0.64)" },
        { col: 10, row: 5, color: "rgba(255, 205, 205, 0.64)" },
        { col: 6, row: 3, color: "rgba(127, 255, 127, 0.62)" },
        { col: 6, row: 6, color: "rgba(127, 255, 127, 0.62)" },
        { col: 8, row: 5, color: "rgba(211, 211, 211, 0.8)" },
      ],
    },
    {
      title: "Bonnet",
      src: "/assets/Swift/Bonnet.png",
      height: "310px", width: "480px", heightPx: 310, widthPx: 480,
      highlightedCells: [
        { col: 7, row: 4, color: "rgba(255, 205, 205, 0.64)" },
        { col: 4, row: 5, color: "rgba(127, 255, 127, 0.62)" },
        { col: 3, row: 2, color: "rgba(127, 255, 127, 0.62)" },
        { col: 3, row: 4, color: "rgba(255, 205, 205, 0.64)" },
        { col: 6, row: 6, color: "rgba(211, 211, 211, 0.8)" },
      ],
    },
  ];

  // This will hold ONLY the records for the currently selected part
  values1: any[] = [];

  // Master database mapping checkpoints to specific modules
  allCheckpoints = [
    // Right Fender Checkpoints
    { module: 'Right Fender', value: '5.5', row: '2', col: '2', serial: '121', checkpoints: 'checkpoint-1', measure: 'GAP', lsl: '0.20', usl: '1.2', unit: 'mm' },
    { module: 'Right Fender', value: '0.8', row: '2', col: '7', serial: '122', checkpoints: 'checkpoint-2', measure: 'Flush', lsl: '0.22', usl: '1.25', unit: 'mm' },
    { module: 'Right Fender', value: '1.1', row: '4', col: '8', serial: '123', checkpoints: 'checkpoint-3', measure: 'Alignment', lsl: '0.1', usl: '1.0', unit: 'mm' },

    // Right Front Door Checkpoints
    { module: 'Right Front Door', value: '0.5', row: '1', col: '3', serial: '124', checkpoints: 'checkpoint-4', measure: 'GAP', lsl: '0.20', usl: '1.2', unit: 'mm' },
    { module: 'Right Front Door', value: '1.3', row: '2', col: '6', serial: '125', checkpoints: 'checkpoint-5', measure: 'Flush', lsl: '0.22', usl: '1.25', unit: 'mm' },
    { module: 'Right Front Door', value: '0.9', row: '7', col: '5', serial: '126', checkpoints: 'checkpoint-6', measure: 'Consistancy', lsl: '0.20', usl: '1.2', unit: 'mm' },

    // Right Rear Door Checkpoints
    { module: 'Right Rear Door', value: '1.2', row: '1', col: '6', serial: '127', checkpoints: 'checkpoint-7', measure: 'GAP', lsl: '0.20', usl: '1.2', unit: 'mm' },
    { module: 'Right Rear Door', value: '0.7', row: '4', col: '7', serial: '128', checkpoints: 'checkpoint-8', measure: 'Alignment', lsl: '0.1', usl: '1.0', unit: 'mm' },

    // Rear Checkpoints
    { module: 'Rear', value: '2.1', row: '4', col: '4', serial: '129', checkpoints: 'checkpoint-9', measure: 'Flush', lsl: '0.22', usl: '1.25', unit: 'mm' },
    { module: 'Rear', value: '1.0', row: '5', col: '8', serial: '130', checkpoints: 'checkpoint-10', measure: 'GAP', lsl: '0.20', usl: '1.2', unit: 'mm' },

    // Left Rear Door Checkpoints
    { module: 'Left Rear Door', value: '0.4', row: '1', col: '6', serial: '131', checkpoints: 'checkpoint-11', measure: 'Alignment', lsl: '0.1', usl: '1.0', unit: 'mm' },
    { module: 'Left Rear Door', value: '1.1', row: '8', col: '5', serial: '132', checkpoints: 'checkpoint-12', measure: 'Flush', lsl: '0.22', usl: '1.25', unit: 'mm' },

    // Left Front Door Checkpoints
    { module: 'Left Front Door', value: '0.6', row: '5', col: '7', serial: '133', checkpoints: 'checkpoint-13', measure: 'GAP', lsl: '0.20', usl: '1.2', unit: 'mm' },
    { module: 'Left Front Door', value: '1.4', row: '7', col: '7', serial: '134', checkpoints: 'checkpoint-14', measure: 'Consistancy', lsl: '0.20', usl: '1.2', unit: 'mm' },

    // Left Fender Checkpoints
    { module: 'Left Fender', value: '0.9', row: '2', col: '6', serial: '135', checkpoints: 'checkpoint-15', measure: 'Alignment', lsl: '0.1', usl: '1.0', unit: 'mm' },
    { module: 'Left Fender', value: '1.0', row: '3', col: '10', serial: '136', checkpoints: 'checkpoint-16', measure: 'GAP', lsl: '0.20', usl: '1.2', unit: 'mm' },

    // Roof Checkpoints
    { module: 'Roof', value: '0.5', row: '3', col: '6', serial: '137', checkpoints: 'checkpoint-17', measure: 'Flush', lsl: '0.22', usl: '1.25', unit: 'mm' },
    { module: 'Roof', value: '1.2', row: '5', col: '10', serial: '138', checkpoints: 'checkpoint-18', measure: 'Consistancy', lsl: '0.20', usl: '1.2', unit: 'mm' },

    // Bonnet Checkpoints
    { module: 'Bonnet', value: '0.7', row: '2', col: '3', serial: '139', checkpoints: 'checkpoint-19', measure: 'Alignment', lsl: '0.1', usl: '1.0', unit: 'mm' },
    { module: 'Bonnet', value: '1.5', row: '5', col: '4', serial: '140', checkpoints: 'checkpoint-20', measure: 'GAP', lsl: '0.20', usl: '1.2', unit: 'mm' },
  ];

  // Store the active image object here instead of just a string
  currentImage: any = this.images[0];

  // Holds dynamic statistics table data
  values: any[] = [];

  constructor(public dialog: MatDialog) {
    if (environment.mode === 1) {
    }
  }

  ngOnInit(): void {
    this.calculateMetrics(); // Initial Calculation
  }

  // Helper method to retrieve cell specific styles/values
  getCellData(rowIndex: number, colIndex: number) {
    if (!this.currentImage || !this.currentImage.highlightedCells) return null;
    return this.currentImage.highlightedCells.find(
      (cell: any) => cell.row === rowIndex && cell.col === colIndex
    );
  }

  // --- DYNAMIC CALCULATION METRICS & TABLE FILTER ---
  calculateMetrics() {
    if (!this.currentImage || !this.currentImage.highlightedCells) return;

    let passCount = 0; // Green cells
    let failCount = 0; // Red cells
    let pendingCount = 0; // Grey cells

    this.currentImage.highlightedCells.forEach((cell: any) => {
      if (cell.color.includes('127, 255, 127')) {
        passCount++;
      } else if (cell.color.includes('255, 205, 205')) {
        failCount++;
      } else if (cell.color.includes('211, 211, 211')) {
        pendingCount++;
      }
    });

    let totalCount = passCount + failCount + pendingCount;

    // Update the values array dynamically (Status table)
    this.values = [
      { status: 'Total', value: totalCount.toString() },
      { status: 'Pending Checks', value: pendingCount.toString() }, // Grey
      { status: 'Pass', value: passCount.toString() }, // Green
      { status: 'Fail', value: failCount.toString() }, // Red
    ];

    // IMPORTANT ADDITION: Filter the bottom table based on the selected image
    this.values1 = this.allCheckpoints.filter(item => item.module === this.currentImage.title);
  }

  imgpop(item: any) {
    this.dialog.open(ImgPopSealingComponent, {
      data: item,
      width: "750px",
      height: "auto"
    })
  }

  requestCheckpoints(item: any) {
    this.dialog.open(AddCheckpointRequestComponent, {
      data: item,
      width: "1100px",
      height: "auto"
    })
  }

  // Helper method to reset all tabs to inactive state
  resetColors() {
    this.isChecked3 = 'yes';
    this.isChecked4 = 'yes';
    this.isChecked5 = 'yes';
    this.isChecked6 = 'yes';
    this.isChecked7 = 'yes';
    this.isChecked8 = 'yes';
    this.isChecked9 = 'yes';
    this.isChecked10 = 'yes';
    this.isChecked11 = 'yes';
  }

  // Tab click methods updated to calculate metrics immediately
  color3() { this.resetColors(); this.isChecked3 = 'no'; this.currentImage = this.images[0]; this.calculateMetrics(); }
  color4() { this.resetColors(); this.isChecked4 = 'no'; this.currentImage = this.images[1]; this.calculateMetrics(); }
  color5() { this.resetColors(); this.isChecked5 = 'no'; this.currentImage = this.images[2]; this.calculateMetrics(); }
  color6() { this.resetColors(); this.isChecked6 = 'no'; this.currentImage = this.images[3]; this.calculateMetrics(); }
  color7() { this.resetColors(); this.isChecked7 = 'no'; this.currentImage = this.images[4]; this.calculateMetrics(); }
  color8() { this.resetColors(); this.isChecked8 = 'no'; this.currentImage = this.images[5]; this.calculateMetrics(); }
  color9() { this.resetColors(); this.isChecked9 = 'no'; this.currentImage = this.images[6]; this.calculateMetrics(); }
  color10() { this.resetColors(); this.isChecked10 = 'no'; this.currentImage = this.images[7]; this.calculateMetrics(); }
  color11() { this.resetColors(); this.isChecked11 = 'no'; this.currentImage = this.images[8]; this.calculateMetrics(); }
}