import { Component, OnInit } from '@angular/core';
// import { RadarData } from 'src/app/pages/radar/RadarData'; // Assuming this provides your data
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sub-category-type-trend',
  templateUrl: './sub-category-type-trend.component.html',
  styleUrls: ['./sub-category-type-trend.component.scss']
})
export class SubCategoryTypeTrendComponent implements OnInit {
  filterToggle: boolean = false;

  public three: any[]; // Still present but not used in HTML for charts
  public single: any[];
  public first: any[]; // This will now power the bar chart
  items: any[];

 
  // public explodeSlices = false; // Not applicable for bar chart
  public showLabels = true;
  // public doughnut = false; // Not applicable for bar chart
  public gradient = true;

  // Bar chart specific properties
  public showXAxis = true;
  public showYAxis = true;
  public xAxisLabel = 'Category';
  public yAxisLabel = 'Demerit';


  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  };

constructor() {
  // Initialize data for demonstration if RadarData is not available
  this.items = [
    { model: 'Electrical', demerit: 20 },
    { model: 'Body', demerit: 30 },
    { model: 'Paint', demerit: 25 },
    { model: 'Chassis', demerit: 15 },
    { model: 'Engine', demerit: 10 },
    { model: 'Interior', demerit: 18 },
    { model: 'Transmission', demerit: 22 },
    { model: 'Suspension', demerit: 16 },
  ];

  this.first = [
    { name: 'Electrical', value: 20 },
    { name: 'Body', value: 30 },
    { name: 'Paint', value: 25 },
    { name: 'Chassis', value: 15 },
    { name: 'Engine', value: 10 },
    { name: 'Interior', value: 18 },
    { name: 'Transmission', value: 22 },
    { name: 'Suspension', value: 16 },
  ];
}


  ngOnInit() {
    // Uncomment and ensure RadarData is correctly imported and structured if you're using it
    // if (environment.mode === 1) {
    //   this.items = RadarData.ParameterCategoryGrid();
    //   const three = RadarData.ParameterCategoryPieChart2(); // Assuming this is also a {name, value} array
    //   const first = RadarData.ParameterCategoryPieChart1(); // This data is now for the bar chart
    //   Object.assign(this, { first, three });
    // }
  }

  fnYearChange(event: any): void {
    console.log('Year changed:', event.value);
    // You would typically refetch data based on the new year here
  }

  getTests(): void {
    console.log('Search button clicked!');
    // Implement your data fetching logic here based on filter criteria
  }

  clearFilter(): void {
    console.log('Clear filter button clicked!');
    // Implement your filter clearing logic here
  }
}