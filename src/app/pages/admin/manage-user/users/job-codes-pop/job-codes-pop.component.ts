import { Component, OnInit } from '@angular/core';

interface JobCode {
  name: string;
  title: string;
  selected: boolean;
}

@Component({
  selector: 'app-job-codes-pop',
  templateUrl: './job-codes-pop.component.html',
  styleUrls: ['./job-codes-pop.component.scss']
})
export class JobCodesPopComponent implements OnInit {

  // Complete list of project names
  rawCodes: string[] = [
    'AA', 'BSM', 'CCAD1', 'CLCNT', 'CLINT', 'EA', 'FM', 'FS', 'ITT', 'PM', 
    'QA', 'QTPRP', 'SB&SR', 'CC', 'CCAD2', 'CCAD3', 'CFA', 'CPC1', 'CPC2', 
    'CPC3', 'CTL', 'SPC', 'ECAD1', 'ECAD2', 'ECAD3', 'EPC1', 'EPC2', 'EPC3', 
    'ETL', 'RT', '1DC', 'CRCTN', 'DFT', 'INTFLDWRK', 'LCAD1', 'LCAD2', 'LCAD3', 
    'LPC1', 'LPC2', 'LPC3', 'LTL', 'MNMT', 'OLS', 'PLCHK', '1DR', 'ACCCHK', 
    'CLCT', 'PROVSCH', 'Test', 'FLRVW', 'GISM', 'GT1', 'GT2', 'INTPRSTP', 
    'PA1', 'PA2', 'RM'
  ];

  // Mapping of Job Codes to their respective Titles
  jobTitlesMap: { [key: string]: string } = {
    '1DC': '1st Draft Corrections',
    '1DR': '1st Draft Reviewer',
    'AA': 'Admin Assistant',
    'ACCCHK': 'Accounts checking',
    'BSM': 'Business Services Manager',
    'CC': 'Construction Coordinator',
    'CCAD1': 'Construction CAD 1',
    'CCAD2': 'Construction CAD 2',
    'CCAD3': 'Construction CAD 3',
    'CFA': 'Construction Field Assistant',
    'CLCNT': 'Client Contact',
    'CLCT': 'Calculations',
    'CLINT': 'Client Interaction',
    'CPC1': 'Construction Party Chief 1',
    'CPC2': 'Construction Party Chief 2',
    'CPC3': 'Construction Party Chief 3',
    'CRCTN': 'Corrections',
    'CTL': 'Construction Team Lead',
    'DFT': 'Drafting',
    'EA': 'Executive Assistant',
    'ECAD1': 'Engineering CAD 1',
    'ECAD2': 'Engineering CAD 2',
    'ECAD3': 'Engineering CAD 3',
    'EPC1': 'Engineering Party Chief 1',
    'EPC2': 'Engineering Party Chief 2',
    'EPC3': 'Engineering Party Chief 3',
    'ETL': 'Engineering Team Lead',
    'FLRVW': 'File Review',
    'FM': 'Finance Manager',
    'FS': 'Field Supervisor',
    'GISM': 'GIS Manager',
    'GT1': 'GIS Technician 1',
    'GT2': 'GIS Technician 2',
    'INTFLDWRK': 'Initial Field Work',
    'INTPRSTP': 'Initial project Setup',
    'ITT': 'IT Technician',
    'LCAD1': 'Legal CAD 1',
    'LCAD2': 'Legal CAD 2',
    'LCAD3': 'Legal CAD 3',
    'LPC1': 'Legal Party Chief 1',
    'LPC2': 'Legal Party Chief 2',
    'LPC3': 'Legal Party Chief 3',
    'LTL': 'Legal Team Lead',
    'MNMT': 'Monumentation',
    'OLS': 'Ontario Land Surveyor',
    'PA1': 'Jr. Project Administrator',
    'PA2': 'Project Administrator 2',
    'PLCHK': 'Plan Check',
    'PM': 'Project Manager',
    'PROVSCH': 'Project oversight & Schedule',
    'QA': 'Quotes Administrator',
    'QTPRP': 'Quote Preparation',
    'RM': 'Research Manager',
    'RT': 'Records Technician',
    'SB&SR': 'Setting Budget & Scope Review',
    'SPC': 'Senior Party Chief',
    'Test': 'Field QC Technician'
  };

  allJobCodes: JobCode[] = [];
  leftColumn: JobCode[] = [];
  rightColumn: JobCode[] = [];

  // Pagination configuration (10 items per column = 20 per page)
  currentPage = 0;
  pageSize = 20; 

  constructor() { }

  ngOnInit(): void {
    // Map raw strings to objects, assigning the real title and selecting the first 20
    this.allJobCodes = this.rawCodes.map((code, index) => ({ 
      name: code, 
      title: this.jobTitlesMap[code] || 'Title not found',
      selected: index < 20 // This will be true for indices 0 through 19
    }));
    this.updatePage();
  }

  updatePage() {
    const start = this.currentPage * this.pageSize;
    const pagedData = this.allJobCodes.slice(start, start + this.pageSize);
    
    // Split the current page's 20 items into two arrays of 10 for the two columns
    this.leftColumn = pagedData.slice(0, 10);
    this.rightColumn = pagedData.slice(10, 20);
  }

  get totalPages(): number {
    return Math.ceil(this.allJobCodes.length / this.pageSize);
  }

  // --- Pagination Controls ---
  firstPage() {
    this.currentPage = 0;
    this.updatePage();
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updatePage();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.updatePage();
    }
  }

  lastPage() {
    this.currentPage = this.totalPages - 1;
    this.updatePage();
  }
}