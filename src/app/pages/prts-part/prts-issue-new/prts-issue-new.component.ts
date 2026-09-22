import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

enum CheckBoxType { APPLY_FOR_JOB, MODIFY_A_JOB, NONE };

@Component({
  selector: 'app-prts-issue-new',
  templateUrl: './prts-issue-new.component.html',
  styleUrls: ['./prts-issue-new.component.scss']
})
export class PrtsIssueNewComponent implements OnInit {

  check_box_type = CheckBoxType;
  isRepeted: boolean = true;
  addStep = 1;
  currentlyChecked?: CheckBoxType;
  data: any;
  addLookupGroup: FormGroup;
  editLookupGroup: FormGroup;
  lookup: any = false;
  codes: any = [];
  colors: Array<any> = [{ 'code': 'green', 'name': 'Green', 'colorClass': 'dot_green' }, { 'code': 'blue', 'name': 'Blue', 'colorClass': 'dot_blue' }, { 'code': 'grey', 'name': 'Grey', 'colorClass': 'dot_grey' }, { 'code': 'red', 'name': 'Red', 'colorClass': 'dot_red' }];
  pageGroup?: FormGroup;
  deleteLookupItemValue: any;
  index = 10;
  private _lookupService: any;
  alertService: any;

  // Automotive Master Data Dropdown Lists
  models = [
    'Toyota Fortuner 4x4',
    'Toyota Camry Hybrid',
    'Hyundai Creta SX',
    'Hyundai Verna Turbo',
    'Mahindra XUV700 AX7',
    'Tata Safari Dark Edition',
    'Tata Nexon EV Max',
    'Honda Elevate ZX'
  ];

  variants = [
    'ZX 4x4 AT (2.8L Diesel)',
    'Dynamic Hybrid e-CVT (2.5L)',
    'SX(O) Turbo 7-DCT (1.5L TGDi)',
    'SX(O) Turbo 6MT (160 PS)',
    'AX7 Luxury Pack AWD (Diesel AT)',
    'Accomplished+ 6S Dark (Diesel AT)',
    'Empowered+ LR (40.5 kWh EV)',
    'ZX CVT with ADAS Sensing Suite'
  ];

  severities = [
    'Safety Critical (Level 1 - Airbag, Braking, Steering)',
    'Major Breakdown (Level 2 - Powertrain, Transmission)',
    'Moderate Issue (Level 3 - Infotainment, HVAC, Sensors)',
    'Minor Aesthetic (Level 4 - Panel Fitment, Paint Blemish)'
  ];

  categories = [
    'ADAS, Radar & Safety Vision Sensors',
    'Engine, Turbocharger & Fuel Injection',
    'Automatic Transmission & Dual-Clutch (DCT)',
    'High Voltage Battery & BMS (EV)',
    'Infotainment, Digital Cluster & Telematics',
    'HVAC, Dual-Zone AC & Compressor',
    'Suspension, Steering & ABS / ESP',
    'Body Panel Fitment, Paint & NVH'
  ];

  authorDepartments = [
    'Automotive Quality Assurance & IATF 16949',
    'Field Engineering & Dealer Technical Support',
    'Powertrain R&D & Calibration',
    'Electrical, Electronics & ADAS Software',
    'Trim, Chassis & Final Assembly (TCF)',
    'Supplier Quality Management (SQM)',
    'Paint Shop & Cathodic Coating (CED)',
    'Vehicle Homologation & Safety Compliance'
  ];

  assignedUsers = [
    'Dr. K. Patel (Powertrain R&D)',
    'Amitabh Sen (EE & ADAS Software)',
    'Rajesh Sharma (Quality Assurance)',
    'Sunil Verma (Supplier Quality)',
    'Tejaswi (Quality Assurance)',
    'Ayush (Supply Chain)'
  ];

  containmentUsers = [
    'Vikram Singh (Field Technical Service)',
    'Gurpreet Singh (Assembly Plant)',
    'Ravi Teja (Paint Shop)',
    'Manoj Kumar (Homologation)',
    'Roshan (R & D)',
    'Ayush (Customer Service)'
  ];

  machines = [
    { value: 'PRTS-2025-081', viewValue: 'PRTS-2025-081: ADAS Front Radar Camera Calibration Error' },
    { value: 'PRTS-2025-074', viewValue: 'PRTS-2025-074: 7-Speed Dual-Clutch Transmission Low-Speed Shudder' },
    { value: 'PRTS-2025-063', viewValue: 'PRTS-2025-063: High Voltage Battery BMS Fast-Charging Drop' },
    { value: 'PRTS-2025-052', viewValue: 'PRTS-2025-052: Electronic Power Steering (EPS) Assist Sensor Loss' },
    { value: 'PRTS-2025-041', viewValue: 'PRTS-2025-041: Panoramic Sunroof A-Pillar Water Drain Ingress' },
    { value: 'PRTS-2025-033', viewValue: 'PRTS-2025-033: Turbocharger Wastegate Actuator Linkage Play' }
  ];

  filteredMachines = [...this.machines];
  searchCtrl = new FormControl();

  selectedModel: string = 'Toyota Fortuner 4x4';
  selectedVariant: string = 'ZX 4x4 AT (2.8L Diesel)';
  selectedSeverity: string = 'Safety Critical (Level 1 - Airbag, Braking, Steering)';
  selectedCategory: string = 'ADAS, Radar & Safety Vision Sensors';
  selectedAuthorDept: string = 'Field Engineering & Dealer Technical Support';
  selectedAssignedUser: string = 'Dr. K. Patel (Powertrain R&D)';
  selectedContainmentUser: string = 'Vikram Singh (Field Technical Service)';
  selectedMachine: string = 'PRTS-2025-081';

  constructor(
    public router: Router,
    public fb: FormBuilder,
    private _location: Location,
    private snackBar: MatSnackBar
  ) {
    this.addLookupGroup = this.fb.group({
      CodeMasterId: new FormControl(''),
      lookupNameDetails: this.fb.array([
        this.initTechnologyFields()
      ])
    });
    this.editLookupGroup = this.fb.group({
      LookupId: new FormControl(''),
      CodeMasterId: new FormControl(''),
      LookupName: new FormControl(null, Validators.compose([Validators.required]))
    });
  }

  ngOnInit(): void {
    this.getAllCodes();

    if (this.data != null) {
      this.editLookupGroup.controls['LookupId'].setValue(this.data['LookupId']);
      this.editLookupGroup.controls['LookupName'].setValue(this.data['LookupName']);
      this.editLookupGroup.controls['CodeMasterId'].setValue(this.data['CodeMasterId']);
    }

    this.addNewInputField(3);

    this.filteredMachines = [...this.machines];
    this.searchCtrl.valueChanges.subscribe(search => {
      this.filteredMachines = this.machines.filter(machine =>
        machine.viewValue.toLowerCase().includes(search?.toLowerCase() || '')
      );
    });
  }

  getAllCodes() { }

  saveLookup() {
    if (this.editLookupGroup.valid) { }
  }

  initTechnologyFields(): FormGroup {
    return this.fb.group({
      LookupId: [],
      LookupName: ['', Validators.required]
    });
  }

  addNewInputField(val: number): void {
    if (val > 0) {
      for (let i = 0; i < val; i++) {
        const control = <FormArray>this.addLookupGroup.controls.lookupNameDetails;
        control.push(this.initTechnologyFields());
      }
    } else {
      const control = <FormArray>this.addLookupGroup.controls.lookupNameDetails;
      control.push(this.initTechnologyFields());
    }
  }

  fnLookupDeleteItemModal(i: number, item: any): void {
    this.index = i;
    this.removeInputField(this.index);
  }

  removeInputField(i: number): void {
    const control = <FormArray>this.addLookupGroup.controls.lookupNameDetails;
    control.removeAt(i);
  }

  selectCheckBox(targetType: CheckBoxType) {
    if (this.currentlyChecked === targetType) {
      this.currentlyChecked = CheckBoxType.NONE;
      return;
    }
    this.currentlyChecked = targetType;
  }

  repeted(event: any) {
    this.isRepeted = !this.isRepeted;
  }

  changeAddStep(value: number) {
    this.addStep = value;
  }

  goback() {
    this.router.navigate(['/app/prts-part/prtsissuestatus']);
  }

  close() {
    this.router.navigate(['/app/prts-part/prtsissuestatus']);
  }

  save() {
    this.snackBar.open('PRTS Issue Created Successfully! Redirecting to Issue Status...', 'OK', {
      duration: 3000
    });
    setTimeout(() => {
      this.router.navigate(['/app/prts-part/prtsissuestatus']);
    }, 1200);
  }
}
