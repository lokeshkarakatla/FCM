import { Component, OnInit } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-paudits-alerts',
  templateUrl: './paudits-alerts.component.html',
  styleUrls: ['./paudits-alerts.component.scss']
})
export class PauditsAlertsComponent implements OnInit {
  // Toggles the visibility of the filter panel
  showFilters: any;
  // showFilters: boolean = false; 

  // Mock data for the table based on the provided image
  tableData = [
    {
      supplierName: 'ABC Suppliers Ltd',
      auditRef: '2024/Process/08/445',
      commodity: 'Casting',
      actionSubject: 'John Doe',
      processArea: 'Assembly',
      processCategory: 'Manufacturing',
      dueDate: '12-Oct-2024',
      logDate: '12-Oct-2024',
      completionDate: '12-Oct-2024',
      delay: '2 days',
      resolved: true
    },
    {
      supplierName: 'Global Parts Co.',
      auditRef: '2024/Process/08/102',
      commodity: 'Forging',
      actionSubject: 'Jane Smith',
      processArea: 'CNC Operation',
      processCategory: 'Quality',
      dueDate: '11-Oct-2024',
      logDate: '11-Oct-2024',
      completionDate: '11-Oct-2024',
      delay: '3 days',
      resolved: false
    },
    {
      supplierName: 'Tech Innovators',
      auditRef: '2024/Process/08/091',
      commodity: 'Machining',
      actionSubject: 'Richard Roe',
      processArea: 'Testing',
      processCategory: 'Quality Assurance',
      dueDate: '10-Oct-2024',
      logDate: '10-Oct-2024',
      completionDate: '10-Oct-2024',
      delay: '5 days',
      resolved: true
    },
    {
      supplierName: 'Auto Components Inc.',
      auditRef: '2024/Process/08/123',
      commodity: 'Fasteners',
      actionSubject: 'Emily Johnson',
      processArea: 'Shipping',
      processCategory: 'Logistics',
      dueDate: '14-Oct-2024',
      logDate: '14-Oct-2024',
      completionDate: '14-Oct-2024',
      delay: '1 day',
      resolved: true
    },
    {
      supplierName: 'Green Energy Solutions',
      auditRef: '2024/Process/08/445',
      commodity: 'Casting',
      actionSubject: 'John Doe',
      processArea: 'Assembly',
      processCategory: 'Manufacturing',
      dueDate: '12-Oct-2024',
      logDate: '12-Oct-2024',
      completionDate: '12-Oct-2024',
      delay: '2 days',
      resolved: false
    },
    {
      supplierName: 'Tech Innovators',
      auditRef: '2024/Process/08/102',
      commodity: 'Forging',
      actionSubject: 'Jane Smith',
      processArea: 'CNC Operation',
      processCategory: 'Quality',
      dueDate: '11-Oct-2024',
      logDate: '11-Oct-2024',
      completionDate: '11-Oct-2024',
      delay: '3 days',
      resolved: false
    },
    {
      supplierName: 'Tech Innovators',
      auditRef: '2024/Process/08/091',
      commodity: 'Machining',
      actionSubject: 'Richard Roe',
      processArea: 'Testing',
      processCategory: 'Quality Assurance',
      dueDate: '10-Oct-2024',
      logDate: '10-Oct-2024',
      completionDate: '10-Oct-2024',
      delay: '5 days',
      resolved: false
    },
    {
      supplierName: 'Tech Innovators',
      auditRef: '2024/Process/08/123',
      commodity: 'Fasteners',
      actionSubject: 'Emily Johnson',
      processArea: 'Shipping',
      processCategory: 'Logistics',
      dueDate: '14-Oct-2024',
      logDate: '14-Oct-2024',
      completionDate: '14-Oct-2024',
      delay: '1 day',
      resolved: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // Method to handle the Filter button click
  toggleFilters(): void {
    this.showFilters = !this.showFilters;
  }


}
