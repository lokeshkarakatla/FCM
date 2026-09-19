import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ImgClickPopComponent } from './img-click-pop/img-click-pop.component';
import { AddCheckpointComponent } from '../add-checkpoint/add-checkpoint.component';

@Component({
  selector: 'app-checkpoint-check',
  templateUrl: './checkpoint-check.component.html',
  styleUrls: ['./checkpoint-check.component.scss']
})
export class CheckpointCheckComponent implements OnInit {

  Image: any = '/assets/car10x10.png';
  disableOverview: boolean = false;
  
  // Grid properties matching the 11x8 setup
  gridRows = Array(8).fill(0);
  gridCols = Array(11).fill(0);
  highlightedCells: any[] = [];

  // This will hold the filtered data for the HTML table
  values: any[] = [];

  // Master list mapping every checkpoint to its specific car module
allCheckpoints = [
    // --- Right Fender (7 Checkpoints) ---
    { module: 'Right Fender', value: '5.5', row: '1', col: '2', serial: '121', checkpoints: 'checkpoint-1', measure: 'GAP', lsl: '0.20', usl: '1.2', unit: 'mm' },
    { module: 'Right Fender', value: '3.2', row: '3', col: '4', serial: '122', checkpoints: 'checkpoint-2', measure: 'Flush', lsl: '0.22', usl: '1.25', unit: 'mm' },
    { module: 'Right Fender', value: '1.1', row: '7', col: '7', serial: '123', checkpoints: 'checkpoint-3', measure: 'Alignment', lsl: '0.1', usl: '1.0', unit: 'mm' },
    { module: 'Right Fender', value: '4.0', row: '2', col: '5', serial: '124', checkpoints: 'checkpoint-4', measure: 'Consistency', lsl: '0.20', usl: '1.2', unit: 'mm' },
    { module: 'Right Fender', value: '0.9', row: '4', col: '6', serial: '125', checkpoints: 'checkpoint-5', measure: 'GAP', lsl: '0.20', usl: '1.2', unit: 'mm' },
    { module: 'Right Fender', value: '2.5', row: '6', col: '2', serial: '126', checkpoints: 'checkpoint-6', measure: 'Flush', lsl: '0.22', usl: '1.25', unit: 'mm' },
    { module: 'Right Fender', value: '3.8', row: '5', col: '8', serial: '127', checkpoints: 'checkpoint-7', measure: 'Alignment', lsl: '0.1', usl: '1.0', unit: 'mm' },

    // --- Right Front Door (6 Checkpoints) ---
    { module: 'Right Front Door', value: '5.5', row: '4', col: '5', serial: '128', checkpoints: 'checkpoint-8', measure: 'Consistency', lsl: '0.20', usl: '1.2', unit: 'mm' },
    { module: 'Right Front Door', value: '0.6', row: '6', col: '7', serial: '129', checkpoints: 'checkpoint-9', measure: 'GAP', lsl: '0.20', usl: '1.2', unit: 'mm' },
    { module: 'Right Front Door', value: '1.3', row: '2', col: '6', serial: '130', checkpoints: 'checkpoint-10', measure: 'Flush', lsl: '0.22', usl: '1.25', unit: 'mm' },
    { module: 'Right Front Door', value: '2.1', row: '1', col: '3', serial: '131', checkpoints: 'checkpoint-11', measure: 'Alignment', lsl: '0.1', usl: '1.0', unit: 'mm' },
    { module: 'Right Front Door', value: '4.5', row: '5', col: '2', serial: '132', checkpoints: 'checkpoint-12', measure: 'GAP', lsl: '0.20', usl: '1.2', unit: 'mm' },
    { module: 'Right Front Door', value: '0.8', row: '7', col: '5', serial: '133', checkpoints: 'checkpoint-13', measure: 'Consistency', lsl: '0.20', usl: '1.2', unit: 'mm' },

    // --- Right Rear Door (6 Checkpoints) ---
    { module: 'Right Rear Door', value: '5.5', row: '2', col: '8', serial: '134', checkpoints: 'checkpoint-14', measure: 'Flush', lsl: '0.22', usl: '1.25', unit: 'mm' },
    { module: 'Right Rear Door', value: '1.4', row: '4', col: '7', serial: '135', checkpoints: 'checkpoint-15', measure: 'Alignment', lsl: '0.1', usl: '1.0', unit: 'mm' },
    { module: 'Right Rear Door', value: '0.7', row: '1', col: '6', serial: '136', checkpoints: 'checkpoint-16', measure: 'GAP', lsl: '0.20', usl: '1.2', unit: 'mm' },
    { module: 'Right Rear Door', value: '3.3', row: '6', col: '4', serial: '137', checkpoints: 'checkpoint-17', measure: 'Consistency', lsl: '0.20', usl: '1.2', unit: 'mm' },
    { module: 'Right Rear Door', value: '2.0', row: '7', col: '8', serial: '138', checkpoints: 'checkpoint-18', measure: 'Flush', lsl: '0.22', usl: '1.25', unit: 'mm' },
    { module: 'Right Rear Door', value: '5.1', row: '5', col: '5', serial: '139', checkpoints: 'checkpoint-19', measure: 'GAP', lsl: '0.20', usl: '1.2', unit: 'mm' },

    // --- Rear (7 Checkpoints) ---
    { module: 'Rear', value: '5.5', row: '5', col: '4', serial: '140', checkpoints: 'checkpoint-20', measure: 'Consistency', lsl: '0.20', usl: '1.2', unit: 'mm' },
    { module: 'Rear', value: '2.1', row: '6', col: '5', serial: '141', checkpoints: 'checkpoint-21', measure: 'GAP', lsl: '0.20', usl: '1.2', unit: 'mm' },
    { module: 'Rear', value: '1.0', row: '4', col: '4', serial: '142', checkpoints: 'checkpoint-22', measure: 'Flush', lsl: '0.22', usl: '1.25', unit: 'mm' },
    { module: 'Rear', value: '0.5', row: '5', col: '8', serial: '143', checkpoints: 'checkpoint-23', measure: 'Alignment', lsl: '0.1', usl: '1.0', unit: 'mm' },
    { module: 'Rear', value: '3.6', row: '7', col: '6', serial: '144', checkpoints: 'checkpoint-24', measure: 'GAP', lsl: '0.20', usl: '1.2', unit: 'mm' },
    { module: 'Rear', value: '4.2', row: '2', col: '5', serial: '145', checkpoints: 'checkpoint-25', measure: 'Consistency', lsl: '0.20', usl: '1.2', unit: 'mm' },
    { module: 'Rear', value: '1.8', row: '6', col: '2', serial: '146', checkpoints: 'checkpoint-26', measure: 'Flush', lsl: '0.22', usl: '1.25', unit: 'mm' },

    // --- Left Rear Door (7 Checkpoints) ---
    { module: 'Left Rear Door', value: '5.5', row: '3', col: '2', serial: '147', checkpoints: 'checkpoint-27', measure: 'Flush', lsl: '0.22', usl: '1.25', unit: 'mm' },
    { module: 'Left Rear Door', value: '0.4', row: '5', col: '3', serial: '148', checkpoints: 'checkpoint-28', measure: 'GAP', lsl: '0.20', usl: '1.2', unit: 'mm' },
    { module: 'Left Rear Door', value: '1.1', row: '1', col: '6', serial: '149', checkpoints: 'checkpoint-29', measure: 'Alignment', lsl: '0.1', usl: '1.0', unit: 'mm' },
    { module: 'Left Rear Door', value: '2.7', row: '8', col: '5', serial: '150', checkpoints: 'checkpoint-30', measure: 'Consistency', lsl: '0.20', usl: '1.2', unit: 'mm' },
    { module: 'Left Rear Door', value: '4.4', row: '4', col: '7', serial: '151', checkpoints: 'checkpoint-31', measure: 'GAP', lsl: '0.20', usl: '1.2', unit: 'mm' },
    { module: 'Left Rear Door', value: '0.9', row: '6', col: '7', serial: '152', checkpoints: 'checkpoint-32', measure: 'Flush', lsl: '0.22', usl: '1.25', unit: 'mm' },
    { module: 'Left Rear Door', value: '3.1', row: '7', col: '2', serial: '153', checkpoints: 'checkpoint-33', measure: 'Alignment', lsl: '0.1', usl: '1.0', unit: 'mm' },

    // --- Left Front Door (7 Checkpoints) ---
    { module: 'Left Front Door', value: '5.5', row: '2', col: '4', serial: '154', checkpoints: 'checkpoint-34', measure: 'Alignment', lsl: '0.1', usl: '1.0', unit: 'mm' },
    { module: 'Left Front Door', value: '0.6', row: '6', col: '10', serial: '155', checkpoints: 'checkpoint-35', measure: 'Flush', lsl: '0.22', usl: '1.25', unit: 'mm' },
    { module: 'Left Front Door', value: '1.4', row: '5', col: '7', serial: '156', checkpoints: 'checkpoint-36', measure: 'GAP', lsl: '0.20', usl: '1.2', unit: 'mm' },
    { module: 'Left Front Door', value: '2.2', row: '7', col: '7', serial: '157', checkpoints: 'checkpoint-37', measure: 'Consistency', lsl: '0.20', usl: '1.2', unit: 'mm' },
    { module: 'Left Front Door', value: '3.9', row: '1', col: '8', serial: '158', checkpoints: 'checkpoint-38', measure: 'GAP', lsl: '0.20', usl: '1.2', unit: 'mm' },
    { module: 'Left Front Door', value: '4.8', row: '3', col: '6', serial: '159', checkpoints: 'checkpoint-39', measure: 'Flush', lsl: '0.22', usl: '1.25', unit: 'mm' },
    { module: 'Left Front Door', value: '1.7', row: '4', col: '5', serial: '160', checkpoints: 'checkpoint-40', measure: 'Alignment', lsl: '0.1', usl: '1.0', unit: 'mm' },

    // --- Left Fender (6 Checkpoints) ---
    { module: 'Left Fender', value: '5.5', row: '1', col: '4', serial: '161', checkpoints: 'checkpoint-41', measure: 'GAP', lsl: '0.20', usl: '1.2', unit: 'mm' },
    { module: 'Left Fender', value: '0.9', row: '7', col: '10', serial: '162', checkpoints: 'checkpoint-42', measure: 'Consistency', lsl: '0.20', usl: '1.2', unit: 'mm' },
    { module: 'Left Fender', value: '1.0', row: '2', col: '6', serial: '163', checkpoints: 'checkpoint-43', measure: 'Alignment', lsl: '0.1', usl: '1.0', unit: 'mm' },
    { module: 'Left Fender', value: '2.6', row: '3', col: '10', serial: '164', checkpoints: 'checkpoint-44', measure: 'Flush', lsl: '0.22', usl: '1.25', unit: 'mm' },
    { module: 'Left Fender', value: '4.3', row: '5', col: '4', serial: '165', checkpoints: 'checkpoint-45', measure: 'GAP', lsl: '0.20', usl: '1.2', unit: 'mm' },
    { module: 'Left Fender', value: '1.5', row: '6', col: '7', serial: '166', checkpoints: 'checkpoint-46', measure: 'Consistency', lsl: '0.20', usl: '1.2', unit: 'mm' },

    // --- Roof (5 Checkpoints) ---
    { module: 'Roof', value: '5.5', row: '1', col: '1', serial: '167', checkpoints: 'checkpoint-47', measure: 'Flush', lsl: '0.22', usl: '1.25', unit: 'mm' },
    { module: 'Roof', value: '1.2', row: '4', col: '11', serial: '168', checkpoints: 'checkpoint-48', measure: 'Alignment', lsl: '0.1', usl: '1.0', unit: 'mm' },
    { module: 'Roof', value: '0.5', row: '3', col: '6', serial: '169', checkpoints: 'checkpoint-49', measure: 'GAP', lsl: '0.20', usl: '1.2', unit: 'mm' },
    { module: 'Roof', value: '3.4', row: '5', col: '10', serial: '170', checkpoints: 'checkpoint-50', measure: 'Consistency', lsl: '0.20', usl: '1.2', unit: 'mm' },
    { module: 'Roof', value: '2.8', row: '6', col: '5', serial: '171', checkpoints: 'checkpoint-51', measure: 'Flush', lsl: '0.22', usl: '1.25', unit: 'mm' },

    // --- Bonnet (4 Checkpoints) ---
    { module: 'Bonnet', value: '5.5', row: '1', col: '3', serial: '172', checkpoints: 'checkpoint-52', measure: 'GAP', lsl: '0.20', usl: '1.2', unit: 'mm' },
    { module: 'Bonnet', value: '1.5', row: '5', col: '11', serial: '173', checkpoints: 'checkpoint-53', measure: 'Flush', lsl: '0.22', usl: '1.25', unit: 'mm' },
    { module: 'Bonnet', value: '0.7', row: '2', col: '3', serial: '174', checkpoints: 'checkpoint-54', measure: 'Alignment', lsl: '0.1', usl: '1.0', unit: 'mm' },
    { module: 'Bonnet', value: '4.1', row: '6', col: '4', serial: '175', checkpoints: 'checkpoint-55', measure: 'Consistency', lsl: '0.20', usl: '1.2', unit: 'mm' }
  ];

  constructor(public dialog: MatDialog, public router: Router) { }

  ngOnInit(): void {
    // 1. Retrieve the stored image
    const storedImage = sessionStorage.getItem('currentCheckpointImage');
    if (storedImage) {
      this.Image = storedImage;
    }

    // 2. Retrieve the hide/show flag for the Overview tab
    const isOverviewDisabled = sessionStorage.getItem('disableOverview');
    this.disableOverview = isOverviewDisabled === 'true';

    // 3. Retrieve and parse the highlighted cells
    const storedCells = sessionStorage.getItem('highlightedCells');
    if (storedCells) {
      this.highlightedCells = JSON.parse(storedCells);
    }

    // 4. Retrieve the module name and filter the table
    const selectedModule = sessionStorage.getItem('selectedModule');
    if (selectedModule) {
      this.values = this.allCheckpoints.filter(item => item.module === selectedModule);
    } else {
      // Fallback in case of direct access without a module
      this.values = this.allCheckpoints;
    }
  }

  isPreHighlighted(rowIndex: number, colIndex: number): boolean {
    return this.highlightedCells.some(
      (cell: any) => cell.row === rowIndex && cell.col === colIndex
    );
  }

  imgpop(item: any) {
    this.dialog.open(ImgClickPopComponent, {
      data: item,
      width: "500px",
      height: "auto"
    });
  }

  addcheckpoint(item: any) {
    this.dialog.open(AddCheckpointComponent, {
      data: item,
      width: "600px",
      height: "auto"
    });
  }

  clearStorage() {
    sessionStorage.removeItem('currentCheckpointImage');
    sessionStorage.removeItem('disableOverview');
    sessionStorage.removeItem('highlightedCells');
    sessionStorage.removeItem('selectedModule'); // Be sure to clear the module ID
  }

  next() {
    this.clearStorage();
    this.router.navigate(['/app/new-audits/objective-audits/prts-objective-setup/obj-setup-modules-checkpoints']);
  }

  back() {
    this.clearStorage();
    this.router.navigate(['/app/setup/subjective/overview']);
  }

  goBack() {
    this.clearStorage();
    this.router.navigate(['/app/objective-audits/prts-objective-setup/obj-setup-modules-checkpoints']);
  }
}