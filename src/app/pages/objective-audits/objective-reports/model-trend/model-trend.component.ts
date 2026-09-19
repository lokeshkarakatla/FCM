import { Component, OnInit } from '@angular/core';
import { auditdata } from 'src/app/pages/new-audits/auditdata'; // Mock data source
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-model-trend',
  templateUrl: './model-trend.component.html',
  styleUrls: ['./model-trend.component.scss']
})
export class ModelTrendComponent implements OnInit {

  // --- Component State ---
  public filterToggle: boolean = false;

  // --- Data Properties ---
  // Data for the summary table
  public items: any[] = [];

  // Data for the main chart (e.g., Rating by Model)
  public first: any[] = [
    { name: 'Hector', value: 90 },
    { name: 'Ev', value: 90 },
    { name: 'Astor', value: 79 },
    { name: 'Gloster', value: 98 },
    { name: 'Land Cruiser (LC)', value: 96 },
  { name: 'Fortuner', value: 94 },
  { name: 'Legender', value: 92 },
   { name: 'MG4 Electric', value: 95 },
  { name: 'RX5', value: 80 },
  { name: 'Marvel R', value: 88 },
  { name: 'Cyberster', value: 97 },
  { name: 'One', value: 83 },
  { name: 'HS', value: 91 },
    
  ];

  // Data for a potential second chart (e.g., Demerits by Model)
  public three: any[] = [
    { name: 'Hector', value: 1290 },
    { name: 'Ev', value: 320 },
    { name: 'Astor', value: 751 },
    { name: 'Gloster', value: 1190 },
     { name: 'Astor', value: 751 },
    { name: 'Gloster', value: 1190 },
     { name: 'Astor', value: 751 },
    { name: 'Gloster', value: 1190 },
  ];

  // --- Chart Configuration ---
  // Common properties for ngx-charts
  public showLegend: boolean = false;
  public gradient: boolean = true;
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  };

  // Bar chart specific properties
  public showXAxis: boolean = true;
  public showYAxis: boolean = true;
  public showXAxisLabel: boolean = true;
  public showYAxisLabel: boolean = true;
  public xAxisLabel: string = 'Model';
  public yAxisLabel: string = 'Value';

  constructor() { }

  ngOnInit(): void {
    // Load initial data based on the environment configuration
    if (environment.mode === 1) {
      // Using static mock data for development
      this.items = auditdata.objectiveModel();
    } else {
      // In a real application, you would fetch this data from an API service
      // this.loadDataFromApi();
    }
  }

  // --- Placeholder Methods for Filtering ---

  /**
   * Fetches data based on selected filter criteria.
   */
  getTests(): void {
    console.log('Search button clicked. Fetching data...');
    // Add logic here to apply filters and update the 'items' and chart data arrays.
  }

  /**
   * Resets all filter controls to their default state.
   */
  clearFilter(): void {
    console.log('Clear button clicked. Resetting filters...');
    // Add logic to clear your filter model.
    this.getTests(); // Optionally, refresh data after clearing.
  }
}