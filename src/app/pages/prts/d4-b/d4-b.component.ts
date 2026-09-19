import { AddCuaseComponent } from './../add-cuase/add-cuase.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { LogauditresultComponent } from '../logauditresult/logauditresult.component';
import { NoteComponent } from '../note/note.component';
import { ActionDocumentTwoDialogComponent } from '../action-prts/action-document-two/action-document-two-dialog/action-document-two-dialog.component';
import { ActionDocumentTwoTypeComponent } from '../action-prts/action-document-two/action-document-two-type/action-document-two-type.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { AddCapaComponent } from '../../capa/add-capa/add-capa.component';
import { PartsData } from '../PartsData';

@Component({
  selector: 'app-d4b',
  templateUrl: './d4-b.component.html',
  styleUrls: ['./d4-b.component.scss']
})
export class D4BComponent implements OnInit {

  // Tab data
  values: any[] = [];       // Overview (Escape root cause checklist)
  documents: any[] = [];    // Documents
  dataList: any[] = [];     // CAPA
  man: any[] = [];
  material: any[] = [];
  machines: any[] = [];
  methods: any[] = [];
  environment: any[] = [];
  supply: any[] = [];

  // Form for 5WHY
  addLookupGroup: FormGroup;

  activeTab: string = 'overview';

  constructor(
    public fb: FormBuilder,
    public router: Router,
    public dialog: MatDialog
  ) {
    this.addLookupGroup = this.fb.group({
      CodeMasterId: new FormControl(''),
      lookupNameDetails: this.fb.array([
        this.initTechnologyFields()
      ])
    });
  }

    goBack(){
    this.router.navigate(['/app/prts-part/prtsissuestatus/psr']);
  }

  ngOnInit(): void {
    // Start with 5 WHY inputs
    this.addNewInputField(4);

    // Fishbone categories for D4B
    const fishData = PartsData.fishD4b();
    this.man = fishData.man;
    this.material = fishData.material;
    this.machines = fishData.machines;
    this.methods = fishData.methods;
    this.environment = fishData.environment;
    this.supply = fishData.supply;

    // Other tabs
    this.values = PartsData.getd4b();        // Overview (D4B-specific escape root cause checklist)
    this.documents = PartsData.documentD4a(); // If you add documentD4b(), switch to that
    this.dataList = PartsData.data();        // CAPA (shared dataset)
  }

  // Navigation
  next() {
    this.router.navigate(['/app/prtsnavbar/d5']);
  }
  back() {
    this.router.navigate(['/app/prtsnavbar/d4']);
  }
  setTab(tab: string) {
    this.activeTab = tab;
  }

  // Dialog actions
  deleteConfirmation(item: any) {
    this.dialog.open(ConfirmationDialogComponent, {
      width: 'auto',
      data: { ProjectId: item.ProjectId, title: 'Delete Confirmation', content: 'Are you sure you want to Delete?' }
    });
  }
  addchecklistaudit() {
    this.dialog.open(AddCuaseComponent, { height: 'auto', width: '600px' });
  }
  addMeeting(item: any) {
    this.dialog.open(AddCapaComponent, { data: item, width: "850px", height: "auto" });
  }
  note() {
    this.dialog.open(NoteComponent, { height: 'auto', width: '600px' });
  }
  addlog() {
    this.dialog.open(LogauditresultComponent, { height: 'auto', width: '1300px' });
  }
  public adddocument(auditdata: any) {
    this.dialog.open(ActionDocumentTwoDialogComponent, { data: auditdata, height: 'auto', width: '600px' });
  }
  public adddocumenttype(audit: any) {
    this.dialog.open(ActionDocumentTwoTypeComponent, { data: audit, height: 'auto', width: '600px' });
  }

  // 5WHY FormArray helpers
  get lookupNameDetails(): FormArray {
    return this.addLookupGroup.get('lookupNameDetails') as FormArray;
  }
  initTechnologyFields(): FormGroup {
    return this.fb.group({
      LookupId: [],
      LookupName: ['', Validators.required]
    });
  }
  addNewInputField(count: number = 1): void {
    for (let i = 0; i < count; i++) {
      this.lookupNameDetails.push(this.initTechnologyFields());
    }
  }
  fnLookupDeleteItemModal(i: number): void {
    this.lookupNameDetails.removeAt(i);
  }
}
