import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddRecordPopComponent } from '../add-record-pop/add-record-pop.component';
import { DefectsPopComponent } from './defects-pop/defects-pop.component';
import { ActiveGridDialogComponent } from '../../process-audits/paudits-active-audits/activeaudits-reference/active-grid-dialog/active-grid-dialog.component';

@Component({
  selector: 'app-inspection-datatable',
  templateUrl: './inspection-datatable.component.html',
  styleUrls: ['./inspection-datatable.component.scss']
})
export class InspectionDatatableComponent implements OnInit, AfterViewInit {

  @ViewChild('tableContainer', { static: false }) tableContainer!: ElementRef;

  // ── ngx-charts Configuration ──
  public first:  any[] = []; // Inspection by Stage
  public multi:  any[] = []; // Distribution by Part Family
  public triple: any[] = []; // By Inspector
  
  public showLegend    = false;
  public showLabels    = true;
  public explodeSlices = false;
  public doughnut      = false;
  public gradient      = false;
  public colorScheme: any = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  };

  public onSelect(event?: any) {
    console.log('Item clicked', event);
  }

  // ── Grid Data ──
  mockdata: any[] = [];
  showFilter = false;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.generateMockData();
    this.updateChartData(); // Calculate chart data from the table data
  }

  generateMockData() {
    this.mockdata = [
      { id: 1, Reference: '2026/ENG/098121', Publish: true, InspectionDate: '19/06/2026', Time: '09:00 AM', Inspector: 'Rajiv Sharma', PartFamily: 'Engine Components', PartName: 'Gear Shifter', PartNumber: 'ENG/09877', Defects: '2/50', Parameters: '1/16', Remarks: 'Minor deviations observed', BatchNumber: '2026/ENG/1334556', BatchQuantity: 200, SampleQuantity: 50, ErrorRatePct: '0.97%', ErrorRatePPM: '9700', stage: 'Incoming' },
      { id: 2, Reference: '2026/ENG/098122', Publish: false, InspectionDate: '18/06/2026', Time: '10:00 AM', Inspector: 'Amit Singh', PartFamily: 'Transmission', PartName: 'Alternator', PartNumber: 'PT-1004', Defects: '3/60', Parameters: '2/16', Remarks: 'Requires rework', BatchNumber: '2026/BCH-102', BatchQuantity: 1050, SampleQuantity: 60, ErrorRatePct: '1.20%', ErrorRatePPM: '12000', stage: 'Start Up' },
      { id: 3, Reference: '2026/ENG/098123', Publish: true, InspectionDate: '17/06/2026', Time: '11:00 AM', Inspector: 'Priya Sharma', PartFamily: 'Electrical', PartName: 'Brake Pad', PartNumber: 'PT-1007', Defects: '0/70', Parameters: '0/16', Remarks: 'All clear', BatchNumber: '2026/BCH-103', BatchQuantity: 1100, SampleQuantity: 70, ErrorRatePct: '0.00%', ErrorRatePPM: '0', stage: 'Start Up' },
      { id: 4, Reference: '2026/ENG/098124', Publish: true, InspectionDate: '16/06/2026', Time: '12:00 PM', Inspector: 'Vikram Patel', PartFamily: 'Body Panels', PartName: 'Fuel Pump', PartNumber: 'PT-1010', Defects: '1/80', Parameters: '1/16', Remarks: 'Within tolerance', BatchNumber: '2026/BCH-104', BatchQuantity: 1150, SampleQuantity: 80, ErrorRatePct: '0.55%', ErrorRatePPM: '5500', stage: 'Process' },
      { id: 5, Reference: '2026/ENG/098125', Publish: false, InspectionDate: '15/06/2026', Time: '01:00 PM', Inspector: 'Sneha Rao', PartFamily: 'Interior', PartName: 'Radiator', PartNumber: 'PT-1013', Defects: '5/50', Parameters: '3/16', Remarks: 'Review required', BatchNumber: '2026/BCH-105', BatchQuantity: 1200, SampleQuantity: 50, ErrorRatePct: '2.10%', ErrorRatePPM: '21000', stage: 'Final' },
      { id: 6, Reference: '2026/ENG/098126', Publish: true, InspectionDate: '14/06/2026', Time: '02:00 PM', Inspector: 'Kiran Kumar', PartFamily: 'Suspension', PartName: 'Shock Absorber', PartNumber: 'PT-1016', Defects: '2/55', Parameters: '1/16', Remarks: 'Minor scratches', BatchNumber: '2026/BCH-106', BatchQuantity: 1250, SampleQuantity: 55, ErrorRatePct: '0.80%', ErrorRatePPM: '8000', stage: 'Process' }
    ];
  }

  // Dynamically calculate chart data based on mockdata
  updateChartData() {
    const stageCounts: any = {};
    const familyCounts: any = {};
    const inspectorCounts: any = {};

    this.mockdata.forEach(item => {
      // Count Stages
      stageCounts[item.stage] = (stageCounts[item.stage] || 0) + 1;
      // Count Part Families
      familyCounts[item.PartFamily] = (familyCounts[item.PartFamily] || 0) + 1;
      // Count Inspectors
      inspectorCounts[item.Inspector] = (inspectorCounts[item.Inspector] || 0) + 1;
    });

    // Map to ngx-charts format: { name: string, value: number }
    this.first = Object.keys(stageCounts).map(key => ({ name: key, value: stageCounts[key] }));
    this.multi = Object.keys(familyCounts).map(key => ({ name: key, value: familyCounts[key] }));
    this.triple = Object.keys(inspectorCounts).map(key => ({ name: key, value: inspectorCounts[key] }));
  }

  scrollLeft()  { this.tableContainer?.nativeElement.scrollBy({ left: -300, behavior: 'smooth' }); }
  scrollRight() { this.tableContainer?.nativeElement.scrollBy({ left:  300, behavior: 'smooth' }); }

  addrecord(data: any)          { this.dialog.open(AddRecordPopComponent, { width: '1000px', height: 'auto', data }); }
  openDefectsPop(item: any)     { this.dialog.open(DefectsPopComponent,   { width: '1400px', height: 'auto', data: item }); }
  openEditDialog(item: any)     { console.log('Edit clicked for:', item);    }
  deleteConfirmation(item: any) { console.log('Delete clicked for:', item);  }
  archiveRecord(item: any)      { console.log('Archive clicked for:', item); }



  
      openGridView(data:any) {
        this.dialog.open(ActiveGridDialogComponent, {
          width: '650px',
          height: 'auto',
            maxHeight: '90vh',
              panelClass: 'no-scroll-dialog' 
        });
      }



      ngAfterViewInit(): void {
  // code after view initialization
}
}