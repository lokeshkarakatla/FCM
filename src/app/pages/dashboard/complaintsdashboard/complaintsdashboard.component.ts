import { Component, OnInit, AfterViewInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import * as Highcharts from 'highcharts';

declare var require: any;
try {
  const More = require('highcharts/highcharts-more');
  More(Highcharts);
} catch (e) {
  console.warn('HighchartsMore could not be loaded via require:', e);
}

export interface ComplaintMetric {
  id: string;
  referenceNumber: string;
  subject: string;
  model: string;
  country: string;
  subsystem: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  stage8d: 'D1' | 'D2' | 'D3' | 'D4' | 'D5' | 'D6' | 'D7' | 'D8';
  stageLabel: string;
  status: 'Open' | 'In Progress' | 'Under Containment' | 'CAPA Active' | 'Closed';
  ageDays: number;
  warrantyCost: number;
  department: string;
  distributor: string;
  dateLogged: string;
}

export interface ModelAgg {
  name: string;
  total: number;
  critical: number;
  high: number;
  medium: number;
  low: number;
  warrantyCost: number;
  subsystems: { [key: string]: number };
}

export interface CountryAgg {
  name: string;
  distributor: string;
  total: number;
  critical: number;
  warrantyCost: number;
  resolved: number;
  open: number;
}

@Component({
  selector: 'app-complaintsdashboard',
  templateUrl: './complaintsdashboard.component.html',
  styleUrls: ['./complaintsdashboard.component.scss']
})
export class ComplaintsdashboardComponent implements OnInit, AfterViewInit, OnDestroy {

  isFilterOpen: boolean = false;
  selectedModel: string = 'ALL';
  selectedSubsystem: string = 'ALL';
  selectedCountry: string = 'ALL';
  selectedSeverity: string = 'ALL';
  selectedStatus: string = 'ALL';
  selectedStage8d: string = 'ALL';
  selectedDistributor: string = 'ALL';
  selectedDepartment: string = 'ALL';
  selectedLead: string = 'ALL';
  selectedTimeframe: string = 'YTD';
  activePreset: string = 'ALL';
  fromDate: string = '';
  toDate: string = '';

  activeTab: 'radar' | 'model' | 'country' | 'pipeline8d' | 'ageing' = 'radar';
  currentView: 'charts' | 'grid' = 'charts';

  // Available filter options (matching executive filter drawer)
  modelOptions: string[] = ['ALL', 'Solis 26 4WD', 'Solis NT 90 4WD', 'Solis NT 60 4WD 12+12', 'Solis 50 RX', 'Solis 75 4WD', 'Others'];
  subsystemOptions: string[] = ['ALL', 'Hydraulics', 'Thermal & Engine', 'Transmission', 'Electrical', 'Braking'];
  countryOptions: string[] = ['ALL', 'Thailand', 'Israel', 'Nepal', 'Germany', 'Algeria', 'Andorra', 'France'];
  severityOptions: string[] = ['ALL', 'Critical', 'High', 'Medium', 'Low'];
  statusOptions: string[] = ['ALL', 'Under Containment', 'In Progress', 'CAPA Active', 'Closed'];
  stage8dOptions: string[] = ['ALL', 'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8'];
  distributorOptions: string[] = ['ALL', 'Siam Agri Tech', 'Golan Tractors', 'AgriNord SARL', 'Atlas Motors', 'AgriTech Central'];
  departmentOptions: string[] = ['ALL', 'R&D', 'Manufacturing', 'Quality', 'Supplier Sourcing'];
  leadOptions: string[] = ['ALL', 'Field Service Eng.', 'Quality Lead', 'Plant Liaison'];
  timeframeOptions = [
    { key: 'YTD', label: 'YTD 2026' },
    { key: 'Q3_2026', label: 'Q3 2026' },
    { key: 'LAST_90_DAYS', label: 'Last 90 Days' },
    { key: 'ALL', label: 'All Time' }
  ];

  // --- RAW COMPLAINTS MASTER REPOSITORY ---
  rawComplaints: ComplaintMetric[] = [
    {
      id: 'FCM-001',
      referenceNumber: 'FIELD/2026/09/01',
      subject: 'Hydraulic Lift Cylinder Pressure Drop Under Load',
      model: 'Solis NT 90 4WD',
      country: 'Thailand',
      subsystem: 'Hydraulics',
      severity: 'Critical',
      stage8d: 'D3',
      stageLabel: 'D3 Containment',
      status: 'Under Containment',
      ageDays: 14,
      warrantyCost: 4200,
      department: 'R&D',
      distributor: 'Siam Agri Tech',
      dateLogged: '2026-09-08'
    },
    {
      id: 'FCM-002',
      referenceNumber: 'FIELD/2026/09/02',
      subject: 'Engine Overheating at High Ambient Temp (>42°C)',
      model: 'Solis NT 90 4WD',
      country: 'Thailand',
      subsystem: 'Thermal & Engine',
      severity: 'Critical',
      stage8d: 'D4',
      stageLabel: 'D4 Root Cause (RCA)',
      status: 'In Progress',
      ageDays: 22,
      warrantyCost: 6800,
      department: 'Manufacturing',
      distributor: 'Siam Agri Tech',
      dateLogged: '2026-08-31'
    },
    {
      id: 'FCM-003',
      referenceNumber: 'FIELD/2026/09/03',
      subject: 'Synchromesh Gear Grinding on 2nd to 3rd Shift',
      model: 'Solis NT 60 4WD 12+12',
      country: 'Israel',
      subsystem: 'Transmission',
      severity: 'High',
      stage8d: 'D5',
      stageLabel: 'D5 Permanent Action (PCA)',
      status: 'CAPA Active',
      ageDays: 38,
      warrantyCost: 5400,
      department: 'Quality',
      distributor: 'Golan Tractors',
      dateLogged: '2026-08-15'
    },
    {
      id: 'FCM-004',
      referenceNumber: 'FIELD/2026/09/04',
      subject: 'Power Steering Flutter and Seal Leakage',
      model: 'Solis 26 4WD',
      country: 'Germany',
      subsystem: 'Steering',
      severity: 'Medium',
      stage8d: 'D6',
      stageLabel: 'D6 Verification',
      status: 'In Progress',
      ageDays: 18,
      warrantyCost: 2100,
      department: 'R&D',
      distributor: 'AgriKraft GmbH',
      dateLogged: '2026-09-04'
    },
    {
      id: 'FCM-005',
      referenceNumber: 'FIELD/2026/09/05',
      subject: 'Starter Motor Intermittent Engagement No-Crank',
      model: 'Solis 26 4WD',
      country: 'Nepal',
      subsystem: 'Electrical',
      severity: 'High',
      stage8d: 'D2',
      stageLabel: 'D2 Problem Definition',
      status: 'Open',
      ageDays: 9,
      warrantyCost: 1800,
      department: 'Supplier Sourcing',
      distributor: 'Himalayan Farm Equip',
      dateLogged: '2026-09-13'
    },
    {
      id: 'FCM-006',
      referenceNumber: 'FIELD/2026/09/06',
      subject: 'Rear Axle Differential Lock Disengagement Noise',
      model: 'Solis NT 90 4WD',
      country: 'Israel',
      subsystem: 'Transmission',
      severity: 'Critical',
      stage8d: 'D3',
      stageLabel: 'D3 Containment',
      status: 'Under Containment',
      ageDays: 27,
      warrantyCost: 7100,
      department: 'Manufacturing',
      distributor: 'Golan Tractors',
      dateLogged: '2026-08-26'
    },
    {
      id: 'FCM-007',
      referenceNumber: 'FIELD/2026/09/07',
      subject: 'Front Axle 4WD Engagement Hub Hairline Crack',
      model: 'Solis 75 4WD',
      country: 'Algeria',
      subsystem: 'Chassis & Frame',
      severity: 'Critical',
      stage8d: 'D4',
      stageLabel: 'D4 Root Cause (RCA)',
      status: 'CAPA Active',
      ageDays: 45,
      warrantyCost: 8900,
      department: 'Quality',
      distributor: 'Atlas Motors',
      dateLogged: '2026-08-08'
    },
    {
      id: 'FCM-008',
      referenceNumber: 'FIELD/2026/09/08',
      subject: 'ECU Firmware Fuel Injection Calibration Drift',
      model: 'Solis 50 RX',
      country: 'Andorra',
      subsystem: 'Electrical',
      severity: 'Medium',
      stage8d: 'D7',
      stageLabel: 'D7 Recurrence Prevention',
      status: 'In Progress',
      ageDays: 52,
      warrantyCost: 3100,
      department: 'R&D',
      distributor: 'Pyrenees Fleet',
      dateLogged: '2026-08-01'
    },
    {
      id: 'FCM-009',
      referenceNumber: 'FIELD/2026/09/09',
      subject: 'PTO Clutch Plate Premature Glazing & Wear',
      model: 'Solis NT 60 4WD 12+12',
      country: 'Thailand',
      subsystem: 'Transmission',
      severity: 'High',
      stage8d: 'D8',
      stageLabel: 'D8 Closed',
      status: 'Closed',
      ageDays: 68,
      warrantyCost: 4600,
      department: 'Supplier Sourcing',
      distributor: 'Siam Agri Tech',
      dateLogged: '2026-07-16'
    },
    {
      id: 'FCM-010',
      referenceNumber: 'FIELD/2026/09/10',
      subject: 'Instrument Cluster Tachometer Needle Sticking',
      model: 'Solis 26 4WD',
      country: 'France',
      subsystem: 'Electrical',
      severity: 'Low',
      stage8d: 'D8',
      stageLabel: 'D8 Closed',
      status: 'Closed',
      ageDays: 75,
      warrantyCost: 850,
      department: 'Quality',
      distributor: 'AgriNord SARL',
      dateLogged: '2026-07-09'
    },
    {
      id: 'FCM-011',
      referenceNumber: 'FIELD/2026/09/11',
      subject: 'Brake Disc Caliper Piston Corrosion in Saline Coastal Air',
      model: 'Solis 50 RX',
      country: 'Thailand',
      subsystem: 'Braking',
      severity: 'High',
      stage8d: 'D4',
      stageLabel: 'D4 Root Cause (RCA)',
      status: 'In Progress',
      ageDays: 31,
      warrantyCost: 3900,
      department: 'Manufacturing',
      distributor: 'Siam Agri Tech',
      dateLogged: '2026-08-22'
    },
    {
      id: 'FCM-012',
      referenceNumber: 'FIELD/2026/09/12',
      subject: 'Coolant Expansion Tank Neck Thread Stripping',
      model: 'Solis NT 90 4WD',
      country: 'Algeria',
      subsystem: 'Thermal & Engine',
      severity: 'Medium',
      stage8d: 'D5',
      stageLabel: 'D5 Permanent Action (PCA)',
      status: 'CAPA Active',
      ageDays: 24,
      warrantyCost: 1950,
      department: 'Supplier Sourcing',
      distributor: 'Atlas Motors',
      dateLogged: '2026-08-29'
    }
  ];

  // --- PROCESSED / FILTERED DATA ---
  filteredComplaints: ComplaintMetric[] = [];

  searchKeyword: string = '';

  // Summary Metrics
  totalComplaintsCount: number = 0;
  openCount: number = 0;
  closedCount: number = 0;
  criticalHighCount: number = 0;
  underContainmentCount: number = 0;
  avgResolutionDays: number = 14.8;
  totalWarrantyCost: number = 0;

  // Aggregated models and countries
  modelSummaries: ModelAgg[] = [];
  countrySummaries: CountryAgg[] = [];
  pipelineCounts: { [key: string]: number } = {};
  ageingCounts = {
    '0-15 Days': 0,
    '16-30 Days': 0,
    '31-60 Days': 0,
    '60+ Days': 0
  };

  // Top Critical List for Quick Reference
  topCriticalComplaints: ComplaintMetric[] = [];

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  private resizeListener = () => {
    Highcharts.charts.forEach(chart => {
      if (chart) {
        try {
          chart.reflow();
        } catch (e) {}
      }
    });
  };

  ngOnInit(): void {
    this.applyFilters();
    window.addEventListener('resize', this.resizeListener);
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
    this.renderActiveChartsWithDelay();
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.resizeListener);
  }

  // --- FILTERING & DATA COMPILATION ---
  toggleFilter(): void {
    this.isFilterOpen = !this.isFilterOpen;
  }

  getActiveFilterCount(): number {
    let count = 0;
    if (this.selectedModel !== 'ALL') count++;
    if (this.selectedSubsystem !== 'ALL') count++;
    if (this.selectedCountry !== 'ALL') count++;
    if (this.selectedSeverity !== 'ALL') count++;
    if (this.selectedStatus !== 'ALL') count++;
    if (this.selectedStage8d !== 'ALL') count++;
    if (this.selectedDistributor !== 'ALL') count++;
    if (this.selectedDepartment !== 'ALL') count++;
    if (this.selectedLead !== 'ALL') count++;
    if (this.selectedTimeframe !== 'YTD') count++;
    if (this.fromDate) count++;
    if (this.toDate) count++;
    if (this.searchKeyword && this.searchKeyword.trim().length > 0) count++;
    return count;
  }

  getActiveFilterList(): { key: string; label: string; value: string }[] {
    const list: { key: string; label: string; value: string }[] = [];
    if (this.searchKeyword && this.searchKeyword.trim().length > 0) {
      list.push({ key: 'keyword', label: 'Search', value: `"${this.searchKeyword}"` });
    }
    if (this.selectedModel !== 'ALL') {
      list.push({ key: 'model', label: 'Model', value: this.selectedModel });
    }
    if (this.selectedSubsystem !== 'ALL') {
      list.push({ key: 'subsystem', label: 'Subsystem', value: this.selectedSubsystem });
    }
    if (this.selectedCountry !== 'ALL') {
      list.push({ key: 'country', label: 'Market', value: this.selectedCountry });
    }
    if (this.selectedSeverity !== 'ALL') {
      list.push({ key: 'severity', label: 'Severity', value: this.selectedSeverity });
    }
    if (this.selectedStatus !== 'ALL') {
      list.push({ key: 'status', label: 'Status', value: this.selectedStatus });
    }
    if (this.selectedStage8d !== 'ALL') {
      list.push({ key: 'stage8d', label: '8D Stage', value: `Stage ${this.selectedStage8d}` });
    }
    if (this.selectedDistributor !== 'ALL') {
      list.push({ key: 'distributor', label: 'Distributor', value: this.selectedDistributor });
    }
    if (this.selectedDepartment !== 'ALL') {
      list.push({ key: 'department', label: 'Dept', value: this.selectedDepartment });
    }
    if (this.selectedLead !== 'ALL') {
      list.push({ key: 'lead', label: 'Lead', value: this.selectedLead });
    }
    if (this.selectedTimeframe !== 'YTD') {
      const tf = this.timeframeOptions.find(t => t.key === this.selectedTimeframe);
      list.push({ key: 'timeframe', label: 'Period', value: tf ? tf.label : this.selectedTimeframe });
    }
    return list;
  }

  removeFilter(key: string): void {
    if (key === 'keyword') this.searchKeyword = '';
    else if (key === 'model') this.selectedModel = 'ALL';
    else if (key === 'subsystem') this.selectedSubsystem = 'ALL';
    else if (key === 'country') this.selectedCountry = 'ALL';
    else if (key === 'severity') this.selectedSeverity = 'ALL';
    else if (key === 'status') this.selectedStatus = 'ALL';
    else if (key === 'stage8d') this.selectedStage8d = 'ALL';
    else if (key === 'distributor') this.selectedDistributor = 'ALL';
    else if (key === 'department') this.selectedDepartment = 'ALL';
    else if (key === 'lead') this.selectedLead = 'ALL';
    else if (key === 'timeframe') this.selectedTimeframe = 'YTD';
    this.activePreset = 'CUSTOM';
    this.applyFilters();
  }

  applyPreset(preset: 'all' | 'critical' | 'containment'): void {
    this.selectedModel = 'ALL';
    this.selectedSubsystem = 'ALL';
    this.selectedCountry = 'ALL';
    this.selectedSeverity = 'ALL';
    this.selectedStatus = 'ALL';
    this.selectedStage8d = 'ALL';
    this.selectedDistributor = 'ALL';
    this.selectedDepartment = 'ALL';
    this.selectedLead = 'ALL';
    this.selectedTimeframe = 'YTD';
    this.searchKeyword = '';
    this.activePreset = preset;

    if (preset === 'critical') {
      this.selectedSeverity = 'Critical';
    } else if (preset === 'containment') {
      this.selectedStatus = 'Under Containment';
    } else if (preset === 'all') {
      this.activePreset = 'ALL';
    }
    this.applyFilters();
  }

  applyFilters(): void {
    const query = (this.searchKeyword || '').trim().toLowerCase();

    this.filteredComplaints = this.rawComplaints.filter(c => {
      const matchModel = (this.selectedModel === 'ALL' || c.model === this.selectedModel);
      const matchSubsystem = (this.selectedSubsystem === 'ALL' || c.subsystem === this.selectedSubsystem);
      const matchCountry = (this.selectedCountry === 'ALL' || c.country === this.selectedCountry);
      const matchSeverity = (this.selectedSeverity === 'ALL' || c.severity === this.selectedSeverity);
      const matchStatus = (this.selectedStatus === 'ALL' || c.status === this.selectedStatus);
      const matchStage8d = (this.selectedStage8d === 'ALL' || c.stage8d === this.selectedStage8d);
      const matchDistributor = (this.selectedDistributor === 'ALL' || c.distributor === this.selectedDistributor);
      const matchDepartment = (this.selectedDepartment === 'ALL' || c.department === this.selectedDepartment);
      const matchLead = (this.selectedLead === 'ALL' || (c as any).lead === this.selectedLead);
      const matchFromDate = !this.fromDate || c.dateLogged >= this.fromDate;
      const matchToDate = !this.toDate || c.dateLogged <= this.toDate;
      const matchQuery = !query || (
        c.subject.toLowerCase().includes(query) ||
        c.referenceNumber.toLowerCase().includes(query) ||
        c.distributor.toLowerCase().includes(query) ||
        c.subsystem.toLowerCase().includes(query) ||
        c.model.toLowerCase().includes(query) ||
        c.country.toLowerCase().includes(query) ||
        c.department.toLowerCase().includes(query)
      );
      return matchModel && matchSubsystem && matchCountry && matchSeverity && matchStatus && matchStage8d && matchDistributor && matchDepartment && matchLead && matchFromDate && matchToDate && matchQuery;
    });

    this.computeAggregations();
    this.renderActiveChartsWithDelay();
  }

  hasActiveFilters(): boolean {
    return this.getActiveFilterCount() > 0;
  }

  resetFilters(): void {
    this.selectedModel = 'ALL';
    this.selectedSubsystem = 'ALL';
    this.selectedCountry = 'ALL';
    this.selectedSeverity = 'ALL';
    this.selectedStatus = 'ALL';
    this.selectedStage8d = 'ALL';
    this.selectedDistributor = 'ALL';
    this.selectedDepartment = 'ALL';
    this.selectedLead = 'ALL';
    this.selectedTimeframe = 'YTD';
    this.searchKeyword = '';
    this.fromDate = '';
    this.toDate = '';
    this.activePreset = 'ALL';
    this.applyFilters();
  }

  computeAggregations(): void {
    const list = this.filteredComplaints;

    this.totalComplaintsCount = list.length;
    this.openCount = list.filter(c => c.status !== 'Closed').length;
    this.closedCount = list.filter(c => c.status === 'Closed').length;
    this.criticalHighCount = list.filter(c => c.severity === 'Critical' || c.severity === 'High').length;
    this.underContainmentCount = list.filter(c => c.status === 'Under Containment' || c.status === 'CAPA Active').length;
    this.totalWarrantyCost = list.reduce((sum, c) => sum + c.warrantyCost, 0);

    // Compute Model Aggregates
    const modelMap = new Map<string, ModelAgg>();
    list.forEach(c => {
      if (!modelMap.has(c.model)) {
        modelMap.set(c.model, {
          name: c.model,
          total: 0,
          critical: 0,
          high: 0,
          medium: 0,
          low: 0,
          warrantyCost: 0,
          subsystems: {}
        });
      }
      const agg = modelMap.get(c.model)!;
      agg.total += 1;
      agg.warrantyCost += c.warrantyCost;
      if (c.severity === 'Critical') agg.critical += 1;
      if (c.severity === 'High') agg.high += 1;
      if (c.severity === 'Medium') agg.medium += 1;
      if (c.severity === 'Low') agg.low += 1;
      agg.subsystems[c.subsystem] = (agg.subsystems[c.subsystem] || 0) + 1;
    });
    this.modelSummaries = Array.from(modelMap.values()).sort((a, b) => b.total - a.total);

    // Compute Country Aggregates
    const countryMap = new Map<string, CountryAgg>();
    list.forEach(c => {
      if (!countryMap.has(c.country)) {
        countryMap.set(c.country, {
          name: c.country,
          distributor: c.distributor,
          total: 0,
          critical: 0,
          warrantyCost: 0,
          resolved: 0,
          open: 0
        });
      }
      const agg = countryMap.get(c.country)!;
      agg.total += 1;
      agg.warrantyCost += c.warrantyCost;
      if (c.severity === 'Critical') agg.critical += 1;
      if (c.status === 'Closed') agg.resolved += 1;
      else agg.open += 1;
    });
    this.countrySummaries = Array.from(countryMap.values()).sort((a, b) => b.total - a.total);

    // 8D Pipeline counts
    this.pipelineCounts = { D1: 0, D2: 0, D3: 0, D4: 0, D5: 0, D6: 0, D7: 0, D8: 0 };
    list.forEach(c => {
      if (this.pipelineCounts[c.stage8d] !== undefined) {
        this.pipelineCounts[c.stage8d] += 1;
      }
    });

    // Ageing counts
    this.ageingCounts = { '0-15 Days': 0, '16-30 Days': 0, '31-60 Days': 0, '60+ Days': 0 };
    list.forEach(c => {
      if (c.ageDays <= 15) this.ageingCounts['0-15 Days'] += 1;
      else if (c.ageDays <= 30) this.ageingCounts['16-30 Days'] += 1;
      else if (c.ageDays <= 60) this.ageingCounts['31-60 Days'] += 1;
      else this.ageingCounts['60+ Days'] += 1;
    });

    // Top Critical List
    this.topCriticalComplaints = list
      .filter(c => c.severity === 'Critical' || c.severity === 'High')
      .sort((a, b) => b.warrantyCost - a.warrantyCost)
      .slice(0, 6);
  }

  // --- TAB & VIEW SWITCHING ---
  setActiveTab(tab: 'radar' | 'model' | 'country' | 'pipeline8d' | 'ageing'): void {
    this.activeTab = tab;
    this.renderActiveChartsWithDelay();
  }

  setView(view: 'charts' | 'grid'): void {
    this.currentView = view;
    this.renderActiveChartsWithDelay();
  }

  renderActiveChartsWithDelay(): void {
    setTimeout(() => {
      if (this.currentView === 'charts') {
        if (this.activeTab === 'radar') {
          this.renderSpiderwebRadarChart();
          this.renderStageMiniChart();
          this.renderRadarSubsystemChart();
          this.renderRadarMarketChart();
        } else if (this.activeTab === 'model') {
          this.renderModelStackedBarChart();
          this.renderModelDonutChart();
          this.renderModelSeverityChart();
          this.renderModelWarrantyChart();
        } else if (this.activeTab === 'country') {
          this.renderCountryBarChart();
          this.renderCountryWarrantyPieChart();
          this.renderCountrySlaChart();
          this.renderCountrySubsystemChart();
        } else if (this.activeTab === 'pipeline8d') {
          this.render8dFunnelChart();
          this.render8dDwellChart();
          this.render8dDeptChart();
          this.render8dContainmentChart();
        } else if (this.activeTab === 'ageing') {
          this.renderAgeingBarChart();
          this.renderAgeingDonutChart();
          this.renderAgeingMttrChart();
          this.renderAgeingEscalationChart();
        }

        // Trigger reflow to guarantee charts snap cleanly to 12-column dimensions
        setTimeout(() => {
          Highcharts.charts.forEach(chart => {
            if (chart) {
              try {
                chart.reflow();
              } catch (e) {}
            }
          });
        }, 80);
      }
    }, 60);
  }

  // --- HIGHCHARTS CHART RENDERING ---

  // 1. Executive Multi-Dimensional Risk Radar (Spiderweb)
  renderSpiderwebRadarChart(): void {
    const container = document.getElementById('fieldRiskRadarContainer');
    if (!container) return;

    // Calculate dynamic scores based on selection
    const hasFiltered = this.selectedModel !== 'ALL';
    const severityScore = hasFiltered ? 78 : 68;
    const occurrenceScore = hasFiltered ? 84 : 64;
    const detectionDelayScore = hasFiltered ? 72 : 55;
    const containmentVelocityScore = hasFiltered ? 65 : 74;
    const warrantyBurdenScore = hasFiltered ? 88 : 62;
    const supplierRiskScore = hasFiltered ? 70 : 58;

    Highcharts.chart('fieldRiskRadarContainer', {
      chart: {
        polar: true,
        type: 'area',
        backgroundColor: 'transparent',
        style: { fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, sans-serif' }
      },
      title: {
        text: undefined
      },
      subtitle: {
        text: undefined
      },
      credits: { enabled: false },
      pane: {
        size: '76%'
      },
      xAxis: {
        categories: [
          'Severity Impact',
          'Field Occurrence Rate',
          'Detection Latency',
          'Containment Speed',
          'Warranty Cost Burden',
          'Supplier Defect Index'
        ],
        tickmarkPlacement: 'on',
        lineWidth: 0,
        labels: {
          style: { fontSize: '11px', fontWeight: '600', color: '#334155' }
        }
      },
      yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0,
        max: 100,
        labels: {
          style: { fontSize: '10px', color: '#94a3b8' }
        }
      },
      tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">●</span> {series.name}: <b>{point.y}/100</b><br/>'
      },
      legend: {
        align: 'center',
        verticalAlign: 'bottom',
        layout: 'horizontal',
        itemStyle: { fontSize: '12px', fontWeight: '600', color: '#334155' }
      },
      series: [
        {
          name: this.selectedModel === 'ALL' ? 'Fleet Quality Telemetry' : this.selectedModel,
          type: 'area',
          data: [severityScore, occurrenceScore, detectionDelayScore, containmentVelocityScore, warrantyBurdenScore, supplierRiskScore],
          pointPlacement: 'on',
          color: '#0288d1',
          fillOpacity: 0.25,
          lineWidth: 2.5
        },
        {
          name: 'Target Benchmark Threshold',
          type: 'line',
          data: [45, 40, 35, 80, 30, 35],
          pointPlacement: 'on',
          color: '#10b981',
          dashStyle: 'ShortDash',
          lineWidth: 2
        },
        {
          name: 'Critical Alert Ceiling',
          type: 'line',
          data: [75, 75, 75, 75, 75, 75],
          pointPlacement: 'on',
          color: '#ef4444',
          dashStyle: 'Dot',
          lineWidth: 1.5
        }
      ]
    });
  }

  // 2. 8D Lifecycle Stage Distribution Chart (Expanded Full-Height)
  renderStageMiniChart(): void {
    const container = document.getElementById('stageMiniChartContainer');
    if (!container) return;

    Highcharts.chart('stageMiniChartContainer', {
      chart: {
        type: 'column',
        backgroundColor: 'transparent',
        style: { fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, sans-serif' }
      },
      title: { text: undefined },
      subtitle: { text: undefined },
      credits: { enabled: false },
      xAxis: {
        categories: ['D1 Team', 'D2 Problem', 'D3 Containment', 'D4 RCA', 'D5 PCA', 'D6 Validation', 'D7 Prevention', 'D8 Closure'],
        labels: { style: { fontSize: '11px', fontWeight: '600', color: '#475569' } }
      },
      yAxis: {
        min: 0,
        title: { text: 'Active Complaints Count', style: { color: '#64748b', fontSize: '11px' } },
        gridLineDashStyle: 'Dash',
        gridLineColor: '#e2e8f0'
      },
      legend: { enabled: false },
      tooltip: { pointFormat: 'Complaints: <b>{point.y}</b>' },
      plotOptions: {
        column: {
          borderRadius: 4,
          colorByPoint: true,
          colors: ['#6366f1', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#10b981', '#059669'],
          dataLabels: {
            enabled: true,
            style: { fontWeight: '700', fontSize: '11px', color: '#0f172a' }
          }
        }
      },
      series: [{
        type: 'column',
        name: 'Complaints',
        data: [
          this.pipelineCounts['D1'] || 2,
          this.pipelineCounts['D2'] || 3,
          this.pipelineCounts['D3'] || 4,
          this.pipelineCounts['D4'] || 3,
          this.pipelineCounts['D5'] || 2,
          this.pipelineCounts['D6'] || 1,
          this.pipelineCounts['D7'] || 1,
          this.pipelineCounts['D8'] || 2
        ]
      }]
    });
  }

  // 3. Radar Secondary Chart: Subsystems Breakdown
  renderRadarSubsystemChart(): void {
    const container = document.getElementById('radarSubsystemBarContainer');
    if (!container) return;

    const categories = this.modelSummaries.map(m => m.name);
    const subsystemsList = ['Hydraulics', 'Transmission', 'Thermal & Engine', 'Electrical', 'Steering', 'Braking', 'Chassis & Frame'];
    const colors = ['#0288d1', '#6366f1', '#ef4444', '#f59e0b', '#10b981', '#8b5cf6', '#64748b'];

    const series = subsystemsList.map((sub, idx) => ({
      name: sub,
      data: this.modelSummaries.map(m => m.subsystems[sub] || 0),
      color: colors[idx % colors.length]
    }));

    Highcharts.chart('radarSubsystemBarContainer', {
      chart: {
        type: 'column',
        backgroundColor: 'transparent',
        style: { fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, sans-serif' }
      },
      title: { text: undefined },
      subtitle: { text: undefined },
      credits: { enabled: false },
      xAxis: {
        categories: categories,
        labels: { style: { fontSize: '11px', fontWeight: '600', color: '#334155' } }
      },
      yAxis: {
        min: 0,
        title: { text: 'Subsystem Complaints', style: { color: '#64748b', fontSize: '11px' } },
        stackLabels: { enabled: true, style: { fontWeight: '700', color: '#1e293b' } },
        gridLineDashStyle: 'Dash',
        gridLineColor: '#e2e8f0'
      },
      legend: {
        align: 'center',
        verticalAlign: 'bottom',
        layout: 'horizontal',
        itemStyle: { fontSize: '11px', color: '#334155' }
      },
      tooltip: {
        shared: true,
        headerFormat: '<b>{point.x}</b><br/>'
      },
      plotOptions: {
        column: {
          stacking: 'normal',
          borderRadius: 2
        }
      },
      series: series as any
    });
  }

  // 4. Radar Secondary Chart: Market Exposure & Resolution
  renderRadarMarketChart(): void {
    const container = document.getElementById('radarMarketBarContainer');
    if (!container) return;

    const categories = this.countrySummaries.map(c => c.name);
    const openData = this.countrySummaries.map(c => c.open);
    const resolvedData = this.countrySummaries.map(c => c.resolved);

    Highcharts.chart('radarMarketBarContainer', {
      chart: {
        type: 'bar',
        backgroundColor: 'transparent',
        style: { fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, sans-serif' }
      },
      title: { text: undefined },
      subtitle: { text: undefined },
      credits: { enabled: false },
      xAxis: {
        categories: categories,
        labels: { style: { fontSize: '11px', fontWeight: '600', color: '#334155' } }
      },
      yAxis: {
        min: 0,
        title: { text: 'Complaint Volume', style: { color: '#64748b', fontSize: '11px' } },
        gridLineDashStyle: 'Dash',
        gridLineColor: '#e2e8f0'
      },
      legend: {
        align: 'center',
        verticalAlign: 'bottom',
        itemStyle: { fontSize: '11px', color: '#334155' }
      },
      plotOptions: {
        bar: {
          stacking: 'normal',
          borderRadius: 3
        }
      },
      series: [
        { name: 'Active Complaints', data: openData, color: '#f59e0b', type: 'bar' },
        { name: 'Resolved / Closed', data: resolvedData, color: '#10b981', type: 'bar' }
      ]
    });
  }

  // 2. Model & Subsystem Intelligence Charts
  renderModelStackedBarChart(): void {
    const container = document.getElementById('modelStackedBarContainer');
    if (!container) return;

    const categories = this.modelSummaries.map(m => m.name);
    const subsystemsList = ['Hydraulics', 'Transmission', 'Thermal & Engine', 'Electrical', 'Steering', 'Braking', 'Chassis & Frame'];
    const colors = ['#0288d1', '#6366f1', '#ef4444', '#f59e0b', '#10b981', '#8b5cf6', '#64748b'];

    const series = subsystemsList.map((sub, idx) => ({
      name: sub,
      data: this.modelSummaries.map(m => m.subsystems[sub] || 0),
      color: colors[idx % colors.length]
    }));

    Highcharts.chart('modelStackedBarContainer', {
      chart: {
        type: 'column',
        backgroundColor: 'transparent',
        style: { fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, sans-serif' }
      },
      title: { text: undefined },
      subtitle: { text: undefined },
      credits: { enabled: false },
      xAxis: {
        categories: categories,
        labels: { style: { fontSize: '11px', fontWeight: '600', color: '#334155' } }
      },
      yAxis: {
        min: 0,
        title: { text: 'Complaint Count', style: { color: '#64748b', fontSize: '11px' } },
        stackLabels: { enabled: true, style: { fontWeight: '700', color: '#1e293b' } },
        gridLineDashStyle: 'Dash',
        gridLineColor: '#e2e8f0'
      },
      legend: {
        align: 'center',
        verticalAlign: 'bottom',
        layout: 'horizontal',
        itemStyle: { fontSize: '11px', color: '#334155' }
      },
      tooltip: {
        shared: true,
        headerFormat: '<b>{point.x}</b><br/>'
      },
      plotOptions: {
        column: {
          stacking: 'normal',
          borderRadius: 2
        }
      },
      series: series as any
    });
  }

  renderModelDonutChart(): void {
    const container = document.getElementById('modelDonutContainer');
    if (!container) return;

    const data = this.modelSummaries.map(m => ({
      name: m.name,
      y: m.total
    }));

    Highcharts.chart('modelDonutContainer', {
      chart: {
        type: 'pie',
        backgroundColor: 'transparent',
        style: { fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, sans-serif' }
      },
      title: { text: undefined },
      subtitle: { text: undefined },
      credits: { enabled: false },
      tooltip: {
        pointFormat: 'Complaints: <b>{point.y}</b> ({point.percentage:.1f}%)'
      },
      plotOptions: {
        pie: {
          innerSize: '58%',
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f}%',
            style: { fontSize: '11px', color: '#334155' }
          }
        }
      },
      series: [{
        type: 'pie',
        name: 'Complaints',
        data: data
      }]
    });
  }

  renderModelSeverityChart(): void {
    const container = document.getElementById('modelSeverityBarContainer');
    if (!container) return;

    const categories = this.modelSummaries.map(m => m.name);
    const criticalData = this.modelSummaries.map(m => m.critical);
    const highData = this.modelSummaries.map(m => m.high);
    const mediumData = this.modelSummaries.map(m => m.medium);
    const lowData = this.modelSummaries.map(m => m.low);

    Highcharts.chart('modelSeverityBarContainer', {
      chart: {
        type: 'column',
        backgroundColor: 'transparent',
        style: { fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, sans-serif' }
      },
      title: { text: undefined },
      subtitle: { text: undefined },
      credits: { enabled: false },
      xAxis: {
        categories: categories,
        labels: { style: { fontSize: '11px', fontWeight: '600', color: '#334155' } }
      },
      yAxis: {
        min: 0,
        title: { text: 'Complaints by Severity', style: { color: '#64748b', fontSize: '11px' } },
        gridLineDashStyle: 'Dash',
        gridLineColor: '#e2e8f0'
      },
      legend: {
        align: 'center',
        verticalAlign: 'bottom',
        itemStyle: { fontSize: '11px', color: '#334155' }
      },
      tooltip: {
        shared: true,
        headerFormat: '<b>{point.x}</b><br/>'
      },
      plotOptions: {
        column: {
          stacking: 'normal',
          borderRadius: 2
        }
      },
      series: [
        { name: 'Critical', data: criticalData, color: '#ef4444', type: 'column' },
        { name: 'High', data: highData, color: '#f97316', type: 'column' },
        { name: 'Medium', data: mediumData, color: '#3b82f6', type: 'column' },
        { name: 'Low', data: lowData, color: '#94a3b8', type: 'column' }
      ]
    });
  }

  renderModelWarrantyChart(): void {
    const container = document.getElementById('modelWarrantyBarContainer');
    if (!container) return;

    const categories = this.modelSummaries.map(m => m.name);
    const data = this.modelSummaries.map(m => m.warrantyCost);

    Highcharts.chart('modelWarrantyBarContainer', {
      chart: {
        type: 'bar',
        backgroundColor: 'transparent',
        style: { fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, sans-serif' }
      },
      title: { text: undefined },
      subtitle: { text: undefined },
      credits: { enabled: false },
      xAxis: {
        categories: categories,
        labels: { style: { fontSize: '11px', fontWeight: '600', color: '#334155' } }
      },
      yAxis: {
        min: 0,
        title: { text: 'Warranty Claims ($ USD)', style: { color: '#64748b', fontSize: '11px' } },
        gridLineDashStyle: 'Dash',
        gridLineColor: '#e2e8f0'
      },
      legend: { enabled: false },
      tooltip: {
        pointFormat: 'Warranty Exposure: <b>${point.y:,.0f}</b>'
      },
      plotOptions: {
        bar: {
          borderRadius: 3,
          color: '#0d9488',
          dataLabels: {
            enabled: true,
            format: '${point.y:,.0f}',
            style: { fontSize: '11px', fontWeight: '600' }
          }
        }
      },
      series: [{
        name: 'Warranty Cost',
        data: data,
        type: 'bar'
      }]
    });
  }

  // 3. Country & Geospatial Charts
  renderCountryBarChart(): void {
    const container = document.getElementById('countryBarContainer');
    if (!container) return;

    const categories = this.countrySummaries.map(c => c.name);
    const openData = this.countrySummaries.map(c => c.open);
    const resolvedData = this.countrySummaries.map(c => c.resolved);

    Highcharts.chart('countryBarContainer', {
      chart: {
        type: 'bar',
        backgroundColor: 'transparent',
        style: { fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, sans-serif' }
      },
      title: { text: undefined },
      subtitle: { text: undefined },
      credits: { enabled: false },
      xAxis: {
        categories: categories,
        labels: { style: { fontSize: '11px', fontWeight: '600', color: '#334155' } }
      },
      yAxis: {
        min: 0,
        title: { text: 'Total Complaints', style: { color: '#64748b', fontSize: '11px' } },
        gridLineDashStyle: 'Dash',
        gridLineColor: '#e2e8f0'
      },
      legend: {
        align: 'center',
        verticalAlign: 'bottom',
        itemStyle: { fontSize: '11px', color: '#334155' }
      },
      plotOptions: {
        bar: {
          stacking: 'normal',
          borderRadius: 3
        }
      },
      series: [
        { name: 'Active / Open', data: openData, color: '#f59e0b', type: 'bar' },
        { name: 'Resolved / Closed', data: resolvedData, color: '#10b981', type: 'bar' }
      ]
    });
  }

  renderCountryWarrantyPieChart(): void {
    const container = document.getElementById('countryWarrantyPieContainer');
    if (!container) return;

    const data = this.countrySummaries.map(c => ({
      name: c.name,
      y: c.warrantyCost
    }));

    Highcharts.chart('countryWarrantyPieContainer', {
      chart: {
        type: 'pie',
        backgroundColor: 'transparent',
        style: { fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, sans-serif' }
      },
      title: { text: undefined },
      subtitle: { text: undefined },
      credits: { enabled: false },
      tooltip: {
        pointFormat: 'Claim Value: <b>${point.y:,.0f}</b> ({point.percentage:.1f}%)'
      },
      plotOptions: {
        pie: {
          innerSize: '52%',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: ${point.y:,.0f}',
            style: { fontSize: '11px' }
          }
        }
      },
      series: [{
        type: 'pie',
        name: 'Warranty Spend',
        data: data
      }]
    });
  }

  renderCountrySlaChart(): void {
    const container = document.getElementById('countrySlaBarContainer');
    if (!container) return;

    const categories = this.countrySummaries.map(c => c.name);
    const avgDaysData = this.countrySummaries.map(c => {
      const countryItems = this.filteredComplaints.filter(item => item.country === c.name);
      return Math.round(countryItems.reduce((acc, curr) => acc + curr.ageDays, 0) / (countryItems.length || 1));
    });

    Highcharts.chart('countrySlaBarContainer', {
      chart: {
        type: 'column',
        backgroundColor: 'transparent',
        style: { fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, sans-serif' }
      },
      title: { text: undefined },
      subtitle: { text: undefined },
      credits: { enabled: false },
      xAxis: {
        categories: categories,
        labels: { style: { fontSize: '11px', fontWeight: '600', color: '#334155' } }
      },
      yAxis: {
        min: 0,
        title: { text: 'Mean Resolution Velocity (Days)', style: { color: '#64748b', fontSize: '11px' } },
        gridLineDashStyle: 'Dash',
        gridLineColor: '#e2e8f0',
        plotLines: [{
          value: 18,
          color: '#10b981',
          dashStyle: 'ShortDash',
          width: 2,
          label: {
            text: 'Global Target SLA: 18 Days',
            align: 'right',
            style: { color: '#047857', fontWeight: 'bold', fontSize: '10px' }
          }
        }]
      },
      legend: { enabled: false },
      tooltip: {
        pointFormat: 'Avg Resolution: <b>{point.y} Days</b>'
      },
      plotOptions: {
        column: {
          borderRadius: 3,
          colorByPoint: true,
          colors: ['#0288d1', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6', '#10b981', '#06b6d4'],
          dataLabels: {
            enabled: true,
            format: '{point.y}d',
            style: { fontSize: '11px', fontWeight: '600' }
          }
        }
      },
      series: [{
        type: 'column',
        name: 'Avg Resolution Days',
        data: avgDaysData
      }]
    });
  }

  renderCountrySubsystemChart(): void {
    const container = document.getElementById('countrySubsystemBarContainer');
    if (!container) return;

    const topCountries = this.countrySummaries.slice(0, 5).map(c => c.name);
    const subsystemsList = ['Hydraulics', 'Transmission', 'Electrical', 'Steering', 'Chassis & Frame'];
    const colors = ['#0288d1', '#6366f1', '#f59e0b', '#10b981', '#64748b'];

    const series = subsystemsList.map((sub, idx) => ({
      name: sub,
      data: topCountries.map(country => {
        return this.filteredComplaints.filter(c => c.country === country && c.subsystem === sub).length;
      }),
      color: colors[idx % colors.length]
    }));

    Highcharts.chart('countrySubsystemBarContainer', {
      chart: {
        type: 'bar',
        backgroundColor: 'transparent',
        style: { fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, sans-serif' }
      },
      title: { text: undefined },
      subtitle: { text: undefined },
      credits: { enabled: false },
      xAxis: {
        categories: topCountries,
        labels: { style: { fontSize: '11px', fontWeight: '600', color: '#334155' } }
      },
      yAxis: {
        min: 0,
        title: { text: 'Subsystem Failure Count', style: { color: '#64748b', fontSize: '11px' } },
        gridLineDashStyle: 'Dash',
        gridLineColor: '#e2e8f0'
      },
      legend: {
        align: 'center',
        verticalAlign: 'bottom',
        itemStyle: { fontSize: '11px', color: '#334155' }
      },
      plotOptions: {
        bar: {
          stacking: 'normal',
          borderRadius: 2
        }
      },
      series: series as any
    });
  }

  // 4. 8D Lifecycle Pipeline Chart
  render8dFunnelChart(): void {
    const container = document.getElementById('funnel8dContainer');
    if (!container) return;

    const categories = [
      'D1: Team',
      'D2: Problem',
      'D3: Containment',
      'D4: RCA',
      'D5: PCA',
      'D6: Validate',
      'D7: Prevent',
      'D8: Closure'
    ];

    const data = [
      this.pipelineCounts['D1'] || 2,
      this.pipelineCounts['D2'] || 3,
      this.pipelineCounts['D3'] || 4,
      this.pipelineCounts['D4'] || 3,
      this.pipelineCounts['D5'] || 2,
      this.pipelineCounts['D6'] || 1,
      this.pipelineCounts['D7'] || 1,
      this.pipelineCounts['D8'] || 2
    ];

    Highcharts.chart('funnel8dContainer', {
      chart: {
        type: 'column',
        backgroundColor: 'transparent',
        style: { fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, sans-serif' }
      },
      title: { text: undefined },
      subtitle: { text: undefined },
      credits: { enabled: false },
      xAxis: {
        categories: categories,
        labels: {
          rotation: -15,
          style: { fontSize: '11px', fontWeight: '600', color: '#334155' }
        }
      },
      yAxis: {
        min: 0,
        title: { text: 'Active Complaints Count', style: { color: '#64748b', fontSize: '11px' } },
        gridLineDashStyle: 'Dash',
        gridLineColor: '#e2e8f0'
      },
      legend: { enabled: false },
      plotOptions: {
        column: {
          borderRadius: 4,
          colorByPoint: true,
          colors: ['#6366f1', '#0288d1', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#10b981', '#059669'],
          dataLabels: {
            enabled: true,
            style: { fontWeight: '700', fontSize: '11px' }
          }
        }
      },
      series: [{
        type: 'column',
        name: 'Complaints',
        data: data
      }]
    });
  }

  render8dDwellChart(): void {
    const container = document.getElementById('stageDwell8dContainer');
    if (!container) return;

    const stages = ['D1 Team', 'D2 Problem', 'D3 Containment', 'D4 RCA', 'D5 PCA', 'D6 Validation', 'D7 Prevention', 'D8 Closure'];
    const avgDwellDays = [2.4, 4.1, 3.2, 9.8, 6.5, 4.8, 3.6, 2.1];

    Highcharts.chart('stageDwell8dContainer', {
      chart: {
        type: 'bar',
        backgroundColor: 'transparent',
        style: { fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, sans-serif' }
      },
      title: { text: undefined },
      subtitle: { text: undefined },
      credits: { enabled: false },
      xAxis: {
        categories: stages,
        labels: { style: { fontSize: '11px', fontWeight: '600', color: '#334155' } }
      },
      yAxis: {
        min: 0,
        title: { text: 'Cycle Duration (Days)', style: { color: '#64748b', fontSize: '11px' } },
        gridLineDashStyle: 'Dash',
        gridLineColor: '#e2e8f0',
        plotLines: [{
          value: 5,
          color: '#10b981',
          dashStyle: 'ShortDash',
          width: 1.5,
          label: {
            text: 'Target 5d SLA',
            align: 'right',
            style: { color: '#047857', fontSize: '10px' }
          }
        }]
      },
      legend: { enabled: false },
      tooltip: {
        pointFormat: 'Avg Dwell: <b>{point.y} Days</b>'
      },
      plotOptions: {
        bar: {
          borderRadius: 3,
          colorByPoint: true,
          colors: ['#0288d1', '#3b82f6', '#f59e0b', '#ef4444', '#f97316', '#8b5cf6', '#10b981', '#059669'],
          dataLabels: {
            enabled: true,
            format: '{point.y}d',
            style: { fontSize: '11px', fontWeight: '600' }
          }
        }
      },
      series: [{
        type: 'bar',
        name: 'Dwell Days',
        data: avgDwellDays
      }]
    });
  }

  render8dDeptChart(): void {
    const container = document.getElementById('dept8dContainer');
    if (!container) return;

    const deptMap: { [key: string]: number } = {};
    this.filteredComplaints.forEach(c => {
      const d = c.department || 'Quality';
      deptMap[d] = (deptMap[d] || 0) + 1;
    });

    const data = Object.keys(deptMap).map(dept => ({
      name: dept,
      y: deptMap[dept]
    }));

    Highcharts.chart('dept8dContainer', {
      chart: {
        type: 'pie',
        backgroundColor: 'transparent',
        style: { fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, sans-serif' }
      },
      title: { text: undefined },
      subtitle: { text: undefined },
      credits: { enabled: false },
      tooltip: {
        pointFormat: 'Investigations: <b>{point.y}</b> ({point.percentage:.1f}%)'
      },
      plotOptions: {
        pie: {
          innerSize: '55%',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.y}',
            style: { fontSize: '11px' }
          }
        }
      },
      series: [{
        type: 'pie',
        name: 'Workload',
        data: data
      }]
    });
  }

  render8dContainmentChart(): void {
    const container = document.getElementById('containment8dContainer');
    if (!container) return;

    Highcharts.chart('containment8dContainer', {
      chart: {
        type: 'column',
        backgroundColor: 'transparent',
        style: { fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, sans-serif' }
      },
      title: { text: undefined },
      subtitle: { text: undefined },
      credits: { enabled: false },
      xAxis: {
        categories: ['D3 Containment Executed', 'D5 Permanent Action Defined', 'D6 Validation Passed', 'D7 Recurrence Protected'],
        labels: { style: { fontSize: '11px', fontWeight: '600', color: '#334155' } }
      },
      yAxis: {
        min: 0,
        max: 100,
        title: { text: 'Compliance / Success Rate (%)', style: { color: '#64748b', fontSize: '11px' } },
        gridLineDashStyle: 'Dash',
        gridLineColor: '#e2e8f0'
      },
      legend: {
        align: 'center',
        verticalAlign: 'bottom',
        itemStyle: { fontSize: '11px', color: '#334155' }
      },
      plotOptions: {
        column: {
          borderRadius: 3,
          dataLabels: {
            enabled: true,
            format: '{point.y}%',
            style: { fontSize: '11px', fontWeight: '600' }
          }
        }
      },
      series: [
        { name: 'Current Cohort Compliance', data: [94, 82, 88, 92], color: '#0288d1', type: 'column' },
        { name: 'Quality Threshold Baseline', data: [90, 85, 85, 90], color: '#10b981', type: 'column' }
      ]
    });
  }

  // 5. Ageing & SLA Charts
  renderAgeingBarChart(): void {
    const container = document.getElementById('ageingBarContainer');
    if (!container) return;

    Highcharts.chart('ageingBarContainer', {
      chart: {
        type: 'column',
        backgroundColor: 'transparent',
        style: { fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, sans-serif' }
      },
      title: { text: undefined },
      subtitle: { text: undefined },
      credits: { enabled: false },
      xAxis: {
        categories: ['0-15 Days', '16-30 Days', '31-60 Days', '60+ Days (Escalated)'],
        labels: { style: { fontSize: '11px', fontWeight: '600', color: '#334155' } }
      },
      yAxis: {
        min: 0,
        title: { text: 'Complaint Count', style: { color: '#64748b', fontSize: '11px' } },
        gridLineDashStyle: 'Dash',
        gridLineColor: '#e2e8f0'
      },
      legend: { enabled: false },
      plotOptions: {
        column: {
          borderRadius: 4,
          colorByPoint: true,
          colors: ['#10b981', '#3b82f6', '#f59e0b', '#ef4444'],
          dataLabels: {
            enabled: true,
            style: { fontWeight: '700', fontSize: '11px' }
          }
        }
      },
      series: [{
        type: 'column',
        name: 'Complaints',
        data: [
          this.ageingCounts['0-15 Days'],
          this.ageingCounts['16-30 Days'],
          this.ageingCounts['31-60 Days'],
          this.ageingCounts['60+ Days']
        ]
      }]
    });
  }

  renderAgeingDonutChart(): void {
    const container = document.getElementById('ageingDonutContainer');
    if (!container) return;

    Highcharts.chart('ageingDonutContainer', {
      chart: {
        type: 'pie',
        backgroundColor: 'transparent',
        style: { fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, sans-serif' }
      },
      title: { text: undefined },
      subtitle: { text: undefined },
      credits: { enabled: false },
      plotOptions: {
        pie: {
          innerSize: '58%',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f}%',
            style: { fontSize: '11px' }
          }
        }
      },
      series: [{
        type: 'pie',
        name: 'Complaints',
        data: [
          { name: 'Within SLA (<30d)', y: this.ageingCounts['0-15 Days'] + this.ageingCounts['16-30 Days'], color: '#10b981' },
          { name: 'SLA Warning (31-60d)', y: this.ageingCounts['31-60 Days'], color: '#f59e0b' },
          { name: 'SLA Breached (>60d)', y: this.ageingCounts['60+ Days'], color: '#ef4444' }
        ]
      }]
    });
  }

  renderAgeingMttrChart(): void {
    const container = document.getElementById('ageingMttrContainer');
    if (!container) return;

    const severities = ['Critical', 'High', 'Medium', 'Low'];
    const actualMttr = severities.map(sev => {
      const items = this.filteredComplaints.filter(c => c.severity === sev);
      return items.length ? Math.round(items.reduce((acc, c) => acc + c.ageDays, 0) / items.length) : 0;
    });

    Highcharts.chart('ageingMttrContainer', {
      chart: {
        type: 'column',
        backgroundColor: 'transparent',
        style: { fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, sans-serif' }
      },
      title: { text: undefined },
      subtitle: { text: undefined },
      credits: { enabled: false },
      xAxis: {
        categories: severities,
        labels: { style: { fontSize: '11px', fontWeight: '600', color: '#334155' } }
      },
      yAxis: {
        min: 0,
        title: { text: 'Mean Resolution Time (Days)', style: { color: '#64748b', fontSize: '11px' } },
        gridLineDashStyle: 'Dash',
        gridLineColor: '#e2e8f0',
        plotLines: [{
          value: 18,
          color: '#10b981',
          dashStyle: 'ShortDash',
          width: 2,
          label: {
            text: '18-Day Corporate SLA',
            align: 'right',
            style: { color: '#047857', fontSize: '10px', fontWeight: 'bold' }
          }
        }]
      },
      legend: { enabled: false },
      tooltip: {
        pointFormat: 'MTTR: <b>{point.y} Days</b>'
      },
      plotOptions: {
        column: {
          borderRadius: 3,
          colorByPoint: true,
          colors: ['#ef4444', '#f97316', '#3b82f6', '#94a3b8'],
          dataLabels: {
            enabled: true,
            format: '{point.y}d',
            style: { fontSize: '11px', fontWeight: '600' }
          }
        }
      },
      series: [{
        type: 'column',
        name: 'MTTR Days',
        data: actualMttr
      }]
    });
  }

  renderAgeingEscalationChart(): void {
    const container = document.getElementById('ageingEscalationContainer');
    if (!container) return;

    Highcharts.chart('ageingEscalationContainer', {
      chart: {
        type: 'areaspline',
        backgroundColor: 'transparent',
        style: { fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, sans-serif' }
      },
      title: { text: undefined },
      subtitle: { text: undefined },
      credits: { enabled: false },
      xAxis: {
        categories: ['0-10d', '11-20d', '21-30d', '31-45d', '46-60d', '61-75d', '75d+'],
        labels: { style: { fontSize: '11px', fontWeight: '600', color: '#334155' } }
      },
      yAxis: {
        min: 0,
        title: { text: 'Executive Risk Multiplier Index', style: { color: '#64748b', fontSize: '11px' } },
        gridLineDashStyle: 'Dash',
        gridLineColor: '#e2e8f0'
      },
      legend: { enabled: false },
      tooltip: {
        pointFormat: 'Risk Index: <b>{point.y}x</b>'
      },
      plotOptions: {
        areaspline: {
          color: '#ef4444',
          fillColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, 'rgba(239, 68, 68, 0.45)'],
              [1, 'rgba(239, 68, 68, 0.02)']
            ]
          },
          lineWidth: 2.5,
          marker: { radius: 3 }
        }
      },
      series: [{
        type: 'areaspline',
        name: 'Escalation Multiplier',
        data: [1.0, 1.2, 1.6, 2.5, 3.8, 5.2, 7.5]
      }]
    });
  }

  // --- NAVIGATION ACTIONS ---
  navigateToMonitor(filterParam?: any): void {
    this.router.navigate(['/app/complaints/monitor'], { queryParams: filterParam });
  }

  navigateToComplaint(refNumber: string): void {
    this.router.navigate(['/app/complaints/reference-number'], { queryParams: { id: refNumber } });
  }

  editComplaint(complaint: ComplaintMetric): void {
    this.router.navigate(['/app/complaints/reference-number'], { queryParams: { id: complaint.referenceNumber, mode: 'edit' } });
  }

  deleteComplaint(complaint: ComplaintMetric): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: 'auto',
      data: {
        title: 'Delete Confirmation',
        content: `Are you sure you want to delete investigation ${complaint.referenceNumber}?`,
        isConfirmation: true
      }
    });

    dialogRef.afterClosed().subscribe((res: any) => {
      if (res) {
        this.rawComplaints = this.rawComplaints.filter(c => c.id !== complaint.id && c.referenceNumber !== complaint.referenceNumber);
        this.applyFilters();
      }
    });
  }
}