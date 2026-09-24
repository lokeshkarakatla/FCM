import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-masterdata',
  templateUrl: './masterdata.component.html',
  styleUrls: ['./masterdata.component.scss']
})
export class MasterdataComponent implements OnInit {

  tabs = [
    'Verification Methods', 'Verification Checklist',
    'Models', 'Variants', 'Plant', 'Color', 'Transmission',
    'Fuel Type', 'Stages', 'Engine Type', 'Drive Type', 'Drive Grade', 'Vehicle Type'
  ];

  activeTab: string = 'Verification Methods';

  modelsData = [
    { name: 'Fortuner', code: ')', status: 'Inactive' },
    { name: 'Toyota LandCruiser', code: '+', status: 'Inactive' },
    { name: 'Toyota Fortuner', code: '!', status: 'Inactive' },
    { name: 'Defender 310', code: '#', status: 'Inactive' },
    { name: 'Corvette', code: 'w', status: 'Inactive' },
    { name: 'Toyota Camry', code: 'b', status: 'Inactive' },
    { name: 'Hyundai', code: 'h', status: 'Inactive' },
    { name: 'Ferrari', code: 'u', status: 'Inactive' },
    { name: 'Lamborghini', code: 's', status: 'Inactive' }
  ];

  constructor() { }

  ngOnInit(): void {}

  selectTab(tab: string) {
    this.activeTab = tab;
  }
}
