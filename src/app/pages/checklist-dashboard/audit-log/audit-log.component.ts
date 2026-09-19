import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

import { AddChecklistLineitemComponent } from './add-checklist-lineitem/add-checklist-lineitem.component';
import { AddTableNotesComponent } from './add-table-notes/add-table-notes.component';
import { ImageDisplayComponent } from './image-display/image-display.component';
import { RequestTypeComponent } from './request-type/request-type.component';

@Component({
  selector: 'app-audit-log',
  templateUrl: './audit-log.component.html',
  styleUrls: ['./audit-log.component.scss']
})
export class AuditLogComponent implements OnInit {

  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  
  // Top Button States
  isChecked1: string = 'no';
  isChecked2: string = 'yes';
  isChecked3: string = 'yes';
  isChecked4: string = 'yes';
  isChecked5: string = 'yes';
  
  filterToggle = false;
  gridToggle = false;

  // --- GRID DENSITY CONTROL ---
  gridRows = Array(8).fill(0); 
  gridCols = Array(11).fill(0);
  
  // --- NEW IMAGE LOGIC VARIABLES ---
  selectedSidePart: number = 0; // Default to index 0 (Right Fender)

 redColor = "rgba(255, 205, 205, 0.64)"; // Standard clear red color
greenColor = "rgba(213, 255, 205, 0.64)"; 
  images = [
  {
    title: "Right Fender",
    src: "/assets/Swift/Right_Fender.png",
    height: "310px", width: "480px", heightPx: 310, widthPx: 480,
    highlightedCells: [
      { col: 2, row: 2, color: this.redColor, value: "2" },
      { col: 5, row: 2, color: this.redColor, value: "12" },
      { col: 7, row: 2, color: this.redColor, value: "12" },
      { col: 3, row: 3, color: this.redColor, value: "1" },
      { col: 2, row: 4, color: this.redColor, value: "12" },
      { col: 3, row: 1, color: this.redColor, value: "12" },
      { col: 6, row: 3, color: this.redColor, value: "12" },
    ],
  },
  {
    title: "Right Front Door",
    src: "/assets/Swift/Right_Front_Door.png",
    height: "310px", width: "480px", heightPx: 310, widthPx: 480,
    highlightedCells: [
      { col: 3, row: 1, color: this.redColor, value: "6" },
      { col: 6, row: 2, color: this.redColor, value: "12" },
      { col: 7, row: 5, color: this.redColor, value: "12" },
      { col: 3, row: 6, color: this.redColor, value: "12" },
      { col: 5, row: 7, color: this.redColor, value: "12" },
      { col: 7, row: 7, color: this.redColor, value: "12" },
    ],
  },
  {
    title: "Right Rear Door",
    src: "/assets/Swift/Right_Rear_Door.png",
    height: "310px", width: "480px", heightPx: 310, widthPx: 480,
    highlightedCells: [
      { col: 3, row: 1, color: this.redColor, value: "3" },
      { col: 6, row: 1, color: this.redColor, value: "12" },
      { col: 6, row: 4, color: this.redColor, value: "3" },
      { col: 7, row: 4, color: this.redColor, value: "12" },
      { col: 3, row: 6, color: this.redColor, value: "7" },
      { col: 6, row: 7, color: this.redColor, value: "12" },
    ],
  },
  {
    title: "Rear",
    src: "/assets/Swift/Back.png",
    height: "310px", width: "480px", heightPx: 310, widthPx: 480,
    highlightedCells: [
      { col: 4, row: 4, color: this.redColor, value: "12" },
      { col: 6, row: 4, color: this.redColor, value: "12" },
      { col: 2, row: 5, color: this.redColor, value: "9" },
      { col: 4, row: 6, color: this.redColor, value: "2" },
      { col: 6, row: 6, color: this.redColor, value: "7" },
      { col: 8, row: 5, color: this.redColor, value: "12" },
      { col: 2, row: 6, color: this.redColor, value: "12" },
    ],
  },
  {
    title: "Left Rear Door",
    src: "/assets/Swift/Left_Rear_Door.png",
    height: "310px", width: "480px", heightPx: 310, widthPx: 480,
    highlightedCells: [
      { col: 6, row: 1, color: this.redColor, value: "12" },
      { col: 6, row: 4, color: this.redColor, value: "3" },
      { col: 7, row: 4, color: this.redColor, value: "12" },
      { col: 3, row: 5, color: this.redColor, value: "9" },
      { col: 3, row: 6, color: this.redColor, value: "7" },
      { col: 6, row: 7, color: this.redColor, value: "12" },
      { col: 5, row: 8, color: this.redColor, value: "6" },
    ],
  },
  {
    title: "Left Front Door",
    src: "/assets/Swift/Left_Front_Door.png",
    height: "310px", width: "480px", heightPx: 310, widthPx: 480,
    highlightedCells: [
      { col: 6, row: 1, color: this.redColor, value: "12" },
      { col: 8, row: 1, color: this.redColor, value: "1" },
      { col: 7, row: 5, color: this.redColor, value: "12" },
      { col: 3, row: 6, color: this.redColor, value: "12" },
      { col: 4, row: 7, color: this.redColor, value: "12" },
      { col: 5, row: 7, color: this.redColor, value: "5" },
      { col: 7, row: 7, color: this.redColor, value: "12" },
    ],
  },
  {
    title: "Left Fender",
    src: "/assets/Swift/Left_Fender.png",
    height: "310px", width: "480px", heightPx: 310, widthPx: 480,
    highlightedCells: [
      { col: 11, row: 2, color: this.redColor, value: "2" },
      { col: 8, row: 2, color: this.redColor, value: "12" },
      { col: 6, row: 2, color: this.redColor, value: "12" },
      { col: 10, row: 3, color: this.redColor, value: "1" },
      { col: 7, row: 3, color: this.redColor, value: "3" },
      { col: 9, row: 1, color: this.redColor, value: "12" },
    ],
  },
  {
    title: "Roof",
    src: "/assets/Swift/Roof.png",
    height: "310px", width: "480px", heightPx: 310, widthPx: 480,
    highlightedCells: [
      { col: 5, row: 4, color: this.redColor, value: "2" },
      { col: 9, row: 4, color: this.redColor, value: "7" },
      { col: 10, row: 5, color: this.redColor, value: "3" },
      { col: 6, row: 3, color: this.redColor, value: "12" },
      { col: 6, row: 6, color: this.redColor, value: "12" },
    ],
  },
  {
    title: "Bonnet",
    src: "/assets/Swift/Bonnet.png",
    height: "310px", width: "480px", heightPx: 310, widthPx: 480,
    highlightedCells: [
      { col: 7, row: 4, color: this.redColor, value: "1" },
      { col: 4, row: 5, color: this.redColor, value: "12" },
      { col: 3, row: 2, color: this.redColor, value: "12" },
      { col: 3, row: 4, color: this.redColor, value: "4" },
    ],
  },
];

  // Initializing with the full object
  currentImage: any = this.images[0];

  constructor(public dialog: MatDialog, private router: Router) { }

  values: any[] = [];
  
values1 = [
    // Right Fender (Matches grid highlights at 2,2 | 3,3 | 1,3 | 3,6)
    { sno: '1', module: 'Right Fender', function: 'Aesthetics', defect: 'Scratch', issue: 'Right Fender top edge scratch', side: 'RH', face: 'FT', agency: 'Paint', demerit: '10', gridRow: 2, gridCol: 2 },
    { sno: '2', module: 'Right Fender', function: 'Mutilation', defect: 'Dent/ Ding / Bump', issue: 'Minor ding near wheel arch', side: 'RH', face: 'FT', agency: 'Body', demerit: '20', gridRow: 3, gridCol: 3 },
    { sno: '3', module: 'Right Fender', function: 'Aesthetics', defect: 'Thin Paint', issue: 'Thin clear coat at corner', side: 'RH', face: 'FT', agency: 'Paint', demerit: '5', gridRow: 1, gridCol: 3 },
    { sno: '4', module: 'Right Fender', function: 'Mutilation', defect: 'Improper assembly', issue: 'Panel gap uneven', side: 'RH', face: 'FT', agency: 'Body', demerit: '10', gridRow: 3, gridCol: 6 },

    // Right Front Door (Matches grid highlights at 1,3 | 5,7 | 2,6 | 7,5)
    { sno: '5', module: 'Right Front Door', function: 'Aesthetics', defect: 'Thin Paint', issue: 'Paint thinning near handle', side: 'RH', face: 'FT', agency: 'Paint', demerit: '5', gridRow: 1, gridCol: 3 },
    { sno: '6', module: 'Right Front Door', function: 'Aesthetics', defect: 'Color / Shade Mismatch', issue: 'Slight shade difference on lower panel', side: 'RH', face: 'FT', agency: 'SQE', demerit: '10', gridRow: 5, gridCol: 7 },
    { sno: '7', module: 'Right Front Door', function: 'Mutilation', defect: 'Dent/ Ding / Bump', issue: 'Ding on upper character line', side: 'RH', face: 'FT', agency: 'Body', demerit: '20', gridRow: 2, gridCol: 6 },
    { sno: '8', module: 'Right Front Door', function: 'Aesthetics', defect: 'Contamination', issue: 'Dirt under clear coat', side: 'RH', face: 'FT', agency: 'Paint', demerit: '5', gridRow: 7, gridCol: 5 },

    // Right Rear Door (Matches grid highlights at 4,6 | 1,6 | 7,6)
    { sno: '9', module: 'Right Rear Door', function: 'Mutilation', defect: 'Tool / Scuff Marks', issue: 'Scuff mark near center trim', side: 'RH', face: 'RR', agency: 'Body', demerit: '1', gridRow: 4, gridCol: 6 },
    { sno: '10', module: 'Right Rear Door', function: 'Aesthetics', defect: 'Scratch', issue: 'Deep scratch near window sill', side: 'RH', face: 'RR', agency: 'Paint', demerit: '20', gridRow: 1, gridCol: 6 },
    { sno: '11', module: 'Right Rear Door', function: 'Aesthetics', defect: 'Sink / flow marks', issue: 'Flow mark at bottom edge', side: 'RH', face: 'RR', agency: 'Paint', demerit: '10', gridRow: 7, gridCol: 6 },

    // Rear (Matches grid highlights at 6,4 | 4,6 | 5,2)
    { sno: '12', module: 'Rear', function: 'Aesthetics', defect: 'Uneven/Excess Gap', issue: 'Bumper alignment gap', side: 'BH', face: 'BH', agency: 'Body', demerit: '20', gridRow: 6, gridCol: 4 },
    { sno: '13', module: 'Rear', function: 'Mutilation', defect: 'Dent/ Ding / Bump', issue: 'Tailgate minor dent', side: 'BH', face: 'BH', agency: 'Body', demerit: '20', gridRow: 4, gridCol: 6 },
    { sno: '14', module: 'Rear', function: 'Aesthetics', defect: 'Thin Paint', issue: 'Thin paint on lower bumper edge', side: 'BH', face: 'BH', agency: 'Paint', demerit: '5', gridRow: 5, gridCol: 2 },

    // Left Rear Door (Matches grid highlights at 4,7 | 1,6 | 8,5)
    { sno: '15', module: 'Left Rear Door', function: 'Mutilation', defect: 'Sink / flow marks', issue: 'Flow mark visible under light', side: 'LH', face: 'RR', agency: 'Paint', demerit: '10', gridRow: 4, gridCol: 7 },
    { sno: '16', module: 'Left Rear Door', function: 'Aesthetics', defect: 'Scratch', issue: 'Hairline scratch near handle', side: 'LH', face: 'RR', agency: 'Paint', demerit: '5', gridRow: 1, gridCol: 6 },
    { sno: '17', module: 'Left Rear Door', function: 'Mutilation', defect: 'Tool / Scuff Marks', issue: 'Scuff mark on lower panel', side: 'LH', face: 'RR', agency: 'Body', demerit: '1', gridRow: 8, gridCol: 5 },

    // Left Front Door (Matches grid highlights at 7,5 | 1,8 | 6,3)
    { sno: '18', module: 'Left Front Door', function: 'Aesthetics', defect: 'Contamination', issue: 'Dust inclusion in clear coat', side: 'LH', face: 'FT', agency: 'Paint', demerit: '5', gridRow: 7, gridCol: 5 },
    { sno: '19', module: 'Left Front Door', function: 'Mutilation', defect: 'Improper assembly', issue: 'Mirror casing loose', side: 'LH', face: 'FT', agency: 'Body', demerit: '50', gridRow: 1, gridCol: 8 },
    { sno: '20', module: 'Left Front Door', function: 'Aesthetics', defect: 'Color / Shade Mismatch', issue: 'Slight yellowing', side: 'LH', face: 'FT', agency: 'Paint', demerit: '10', gridRow: 6, gridCol: 3 },

    // Left Fender (Matches grid highlights at 3,10 | 2,6 | 1,9)
    { sno: '21', module: 'Left Fender', function: 'Mutilation', defect: 'Improper assembly', issue: 'Bracket loosely fitted', side: 'LH', face: 'FT', agency: 'Body', demerit: '50', gridRow: 3, gridCol: 10 },
    { sno: '22', module: 'Left Fender', function: 'Aesthetics', defect: 'Scratch', issue: 'Deep scratch near headlight', side: 'LH', face: 'FT', agency: 'Paint', demerit: '20', gridRow: 2, gridCol: 6 },
    { sno: '23', module: 'Left Fender', function: 'Aesthetics', defect: 'Thin Paint', issue: 'Edge not fully covered', side: 'LH', face: 'FT', agency: 'Paint', demerit: '5', gridRow: 1, gridCol: 9 },

    // Roof (Matches grid highlights at 4,5 | 5,10 | 3,6)
    { sno: '24', module: 'Roof', function: 'Aesthetics', defect: 'Scratch', issue: 'Long scratch across center roof', side: 'BH', face: 'FT', agency: 'Paint', demerit: '20', gridRow: 4, gridCol: 5 },
    { sno: '25', module: 'Roof', function: 'Mutilation', defect: 'Dent/ Ding / Bump', issue: 'Hail damage dent', side: 'BH', face: 'FT', agency: 'Body', demerit: '20', gridRow: 5, gridCol: 10 },
    { sno: '26', module: 'Roof', function: 'Aesthetics', defect: 'Contamination', issue: 'Bird dropping etching', side: 'BH', face: 'FT', agency: 'Paint', demerit: '10', gridRow: 3, gridCol: 6 },

    // Bonnet (Matches grid highlights at 4,3 | 4,7 | 2,3)
    { sno: '27', module: 'Bonnet', function: 'Mutilation', defect: 'Dent/ Ding / Bump', issue: 'Small ding on front left curve', side: 'FT', face: 'FT', agency: 'Body', demerit: '10', gridRow: 4, gridCol: 3 },
    { sno: '28', module: 'Bonnet', function: 'Aesthetics', defect: 'Sink / flow marks', issue: 'Clear coat sag', side: 'FT', face: 'FT', agency: 'Paint', demerit: '10', gridRow: 4, gridCol: 7 },
    { sno: '29', module: 'Bonnet', function: 'Aesthetics', defect: 'Scratch', issue: 'Stone chip scratch', side: 'FT', face: 'FT', agency: 'Paint', demerit: '5', gridRow: 2, gridCol: 3 }
  ];

ngOnInit() {
    if (environment.mode == 1) {
      // Initially filter the table for the default selected image (Right Fender)
      this.values = this.values1.filter(item => item.module === this.currentImage.title);
    }
  }

  // Helper method to retrieve cell specific styles/values
  getCellData(rowIndex: number, colIndex: number) {
    if (!this.currentImage || !this.currentImage.highlightedCells) return null;
    return this.currentImage.highlightedCells.find(
      (cell: any) => cell.row === rowIndex && cell.col === colIndex
    );
  }

  // --- DYNAMIC IMAGE CHANGER METHOD (By Index) ---
changeImage(index: number) {
    this.selectedSidePart = index;
    this.currentImage = this.images[index];
    
    // Filter the table data based on the newly selected image's title
    if (environment.mode == 1) {
      this.values = this.values1.filter(item => item.module === this.currentImage.title);
    }
  }

  opendashboard() {
    window.open('/#/app/checklistdoard/issuelog/request-type');
  }

  request(item: any) {
    this.dialog.open(RequestTypeComponent, {
      data: item,
      width: "1100px",
      height: "auto"
    });
  }

  public addchecklistissuelineitem(item: any) {
    this.dialog.open(AddChecklistLineitemComponent, {
      data: item,
      width: "900px",
      height: "auto"
    });
  }

  scrollGrid(side: string) {
    var ele = document.getElementById('tableScroll');
    if(ele) {
      if (side == 'right') ele.scrollLeft += 210;
      else ele.scrollLeft -= 210;
    }
  }

  public addnote(item: any) {
    this.dialog.open(AddTableNotesComponent, {
      data: item,
      width: "600px",
      height: "auto"
    });
  }

  public imageSource(item: any) {
    this.dialog.open(ImageDisplayComponent, {
      data: item,
      width: "600px",
      height: "auto"
    });
  }

  public addchecklistaudit(auditdata: any) {
    window.open('/#/app/prts-grid');
  }

  // Top Filter Buttons Colors
  color1() {
    this.isChecked1 = 'no'; this.isChecked2 = 'yes'; this.isChecked3 = 'yes'; this.isChecked4 = 'yes'; this.isChecked5 = 'yes';
  }
  color2() {
    this.isChecked1 = 'yes'; this.isChecked2 = 'no'; this.isChecked3 = 'yes'; this.isChecked4 = 'yes'; this.isChecked5 = 'yes';
  }
  color3() {
    this.isChecked1 = 'yes'; this.isChecked2 = 'yes'; this.isChecked3 = 'no'; this.isChecked4 = 'yes'; this.isChecked5 = 'yes';
  }
  color4() {
    this.isChecked1 = 'yes'; this.isChecked2 = 'yes'; this.isChecked3 = 'yes'; this.isChecked4 = 'no'; this.isChecked5 = 'yes';
  }
  color5() {
    this.isChecked1 = 'yes'; this.isChecked2 = 'yes'; this.isChecked3 = 'yes'; this.isChecked4 = 'yes'; this.isChecked5 = 'no';
  }
}