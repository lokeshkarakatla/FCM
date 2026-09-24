import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import {
  VerificationMasterService,
  VerificationMethod
} from '../../admin/masterdata/verification-master.service';

interface ChecklistDisplayItem {
  id: number;
  item: string;
  checked: boolean;
}

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit, OnDestroy {
  verifiedBy: string = 'Alex Johnson';
  verificationDate: string = '2026-09-24';
  verificationMethod: string = 'testing';
  result: string = 'pass';
  remarks: string = 'Corrective actions verified. Process is within tolerance and zero repeat failure observed.';

  methods: VerificationMethod[] = [];
  checklist: ChecklistDisplayItem[] = [];

  private sub: Subscription = new Subscription();

  constructor(
    private verificationService: VerificationMasterService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.sub.add(
      this.verificationService.methods$.subscribe((methods: VerificationMethod[]) => {
        this.methods = methods.filter(m => m.status);
        if (this.methods.length > 0) {
          // If current selection is invalid or empty, pick the first
          if (!this.verificationMethod || !this.methods.some(m => m.id === this.verificationMethod)) {
            this.verificationMethod = this.methods[0].id;
          }
          this.loadChecklistForSelectedMethod();
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  get selectedMethodName(): string {
    const found = this.methods.find(m => m.id === this.verificationMethod);
    return found ? found.name : '';
  }

  onMethodChange(newMethodId: string): void {
    this.verificationMethod = newMethodId;
    this.loadChecklistForSelectedMethod();
  }

  loadChecklistForSelectedMethod(): void {
    if (!this.verificationMethod) return;
    this.checklist = this.verificationService.getChecklistForMethod(this.verificationMethod);
  }

  save(): void {
    if (this.verificationMethod) {
      this.verificationService.saveVerificationSessionChecklist(
        this.verificationMethod,
        this.checklist
      );
    }

    this.snackBar.open(
      `Verification details & checklist for "${this.selectedMethodName}" saved successfully!`,
      'Close',
      {
        duration: 3500,
        horizontalPosition: 'right',
        verticalPosition: 'top',
        panelClass: ['bg-success', 'text-white']
      }
    );
  }
}
