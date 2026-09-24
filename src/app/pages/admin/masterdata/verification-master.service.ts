import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface VerificationMethod {
  id: string;
  name: string;
  code: string;
  description: string;
  status: boolean;
  checklistCount?: number;
}

export interface VerificationChecklistItem {
  id: number;
  methodId: string;
  methodName: string;
  item: string;
  defaultChecked: boolean;
  status: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class VerificationMasterService {

  private methods: VerificationMethod[] = [
    {
      id: 'testing',
      name: 'Testing / Inspection',
      code: 'VM-01',
      description: 'Physical specimen tests, laboratory checks, and dimensional verification',
      status: true
    },
    {
      id: 'audit',
      name: 'Process Audit',
      code: 'VM-02',
      description: 'Shop floor process audit, operator adherence, and SOP compliance check',
      status: true
    },
    {
      id: 'review',
      name: 'Document Review',
      code: 'VM-03',
      description: 'Engineering drawings, control plan, PFMEA, and quality standard sign-offs',
      status: true
    },
    {
      id: 'field',
      name: 'Field Validation',
      code: 'VM-04',
      description: 'Fleet trials in customer operating conditions and dealer service monitoring',
      status: true
    }
  ];

  private checklists: VerificationChecklistItem[] = [
    // Testing / Inspection
    { id: 1, methodId: 'testing', methodName: 'Testing / Inspection', item: 'Root cause addressed in physical test', defaultChecked: true, status: true },
    { id: 2, methodId: 'testing', methodName: 'Testing / Inspection', item: 'Corrective action implemented on test bench', defaultChecked: true, status: true },
    { id: 3, methodId: 'testing', methodName: 'Testing / Inspection', item: 'No recurrence in 100 test samples', defaultChecked: false, status: true },
    { id: 4, methodId: 'testing', methodName: 'Testing / Inspection', item: 'Dimensional & tolerance checks within spec', defaultChecked: false, status: true },
    { id: 5, methodId: 'testing', methodName: 'Testing / Inspection', item: 'Environmental & endurance stress testing passed', defaultChecked: false, status: true },

    // Process Audit
    { id: 6, methodId: 'audit', methodName: 'Process Audit', item: 'Process parameters verified against SOP', defaultChecked: true, status: true },
    { id: 7, methodId: 'audit', methodName: 'Process Audit', item: 'Operator adherence & station training confirmed', defaultChecked: true, status: true },
    { id: 8, methodId: 'audit', methodName: 'Process Audit', item: 'Poka-Yoke error-proofing verified active', defaultChecked: false, status: true },
    { id: 9, methodId: 'audit', methodName: 'Process Audit', item: 'Control plan & PFMEA adherence validated', defaultChecked: false, status: true },
    { id: 10, methodId: 'audit', methodName: 'Process Audit', item: 'Calibration status of all inspection gauges valid', defaultChecked: false, status: true },

    // Document Review
    { id: 11, methodId: 'review', methodName: 'Document Review', item: 'Root cause analysis documentation approved', defaultChecked: true, status: true },
    { id: 12, methodId: 'review', methodName: 'Document Review', item: 'Engineering Change Notice (ECN) signed off', defaultChecked: true, status: true },
    { id: 13, methodId: 'review', methodName: 'Document Review', item: 'Standard Operating Procedure (SOP) revised & released', defaultChecked: false, status: true },
    { id: 14, methodId: 'review', methodName: 'Document Review', item: 'Quality manual & inspection work instructions updated', defaultChecked: false, status: true },
    { id: 15, methodId: 'review', methodName: 'Document Review', item: 'Stakeholders & customer service teams informed', defaultChecked: false, status: true },

    // Field Validation
    { id: 16, methodId: 'field', methodName: 'Field Validation', item: 'Field trial units installed & operating in target conditions', defaultChecked: true, status: true },
    { id: 17, methodId: 'field', methodName: 'Field Validation', item: 'No recurrence observed over 1,000 km / 100 hours cycle', defaultChecked: true, status: true },
    { id: 18, methodId: 'field', methodName: 'Field Validation', item: 'Customer / dealer satisfaction feedback confirmed positive', defaultChecked: false, status: true },
    { id: 19, methodId: 'field', methodName: 'Field Validation', item: 'Field service bulletin issued to dealer network', defaultChecked: false, status: true },
    { id: 20, methodId: 'field', methodName: 'Field Validation', item: 'Warranty claims monitored for 30 consecutive days', defaultChecked: false, status: true }
  ];

  // In-memory user active checklist state for current verification session
  private activeVerificationSessionState: { [methodId: string]: { id: number; item: string; checked: boolean }[] } = {};

  private methodsSubject = new BehaviorSubject<VerificationMethod[]>(this.getMethods());
  public methods$ = this.methodsSubject.asObservable();

  private checklistsSubject = new BehaviorSubject<VerificationChecklistItem[]>(this.getChecklists());
  public checklists$ = this.checklistsSubject.asObservable();

  constructor() {}

  // ==================== Verification Methods (Master 1) ====================

  getMethods(): VerificationMethod[] {
    return this.methods.map(m => ({
      ...m,
      checklistCount: this.checklists.filter(c => c.methodId === m.id).length
    }));
  }

  getActiveMethods(): VerificationMethod[] {
    return this.getMethods().filter(m => m.status);
  }

  getMethodById(id: string): VerificationMethod | undefined {
    return this.getMethods().find(m => m.id === id);
  }

  addMethod(method: { name: string; code?: string; description?: string; status?: boolean }): VerificationMethod {
    const slug = method.name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
    const newMethod: VerificationMethod = {
      id: slug || `vm-${Date.now()}`,
      name: method.name,
      code: method.code || `VM-0${this.methods.length + 1}`,
      description: method.description || '',
      status: method.status !== undefined ? method.status : true
    };
    this.methods.push(newMethod);
    this.notifyChanges();
    return newMethod;
  }

  updateMethod(id: string, updated: Partial<VerificationMethod>): boolean {
    const idx = this.methods.findIndex(m => m.id === id);
    if (idx !== -1) {
      const oldName = this.methods[idx].name;
      this.methods[idx] = { ...this.methods[idx], ...updated };
      // If name changed, update methodName in checklists
      if (updated.name && updated.name !== oldName) {
        this.checklists.forEach(c => {
          if (c.methodId === id) {
            c.methodName = updated.name!;
          }
        });
      }
      this.notifyChanges();
      return true;
    }
    return false;
  }

  deleteMethod(id: string): boolean {
    const idx = this.methods.findIndex(m => m.id === id);
    if (idx !== -1) {
      this.methods.splice(idx, 1);
      // Remove associated checklists
      this.checklists = this.checklists.filter(c => c.methodId !== id);
      delete this.activeVerificationSessionState[id];
      this.notifyChanges();
      return true;
    }
    return false;
  }

  toggleMethodStatus(id: string): boolean {
    const method = this.methods.find(m => m.id === id);
    if (method) {
      method.status = !method.status;
      this.notifyChanges();
      return true;
    }
    return false;
  }

  // ==================== Verification Checklist (Master 2 Relation) ====================

  getChecklists(methodId?: string): VerificationChecklistItem[] {
    if (methodId && methodId !== 'all') {
      return this.checklists.filter(c => c.methodId === methodId);
    }
    return [...this.checklists];
  }

  addChecklistItem(item: { methodId: string; item: string; defaultChecked?: boolean; status?: boolean }): VerificationChecklistItem {
    const method = this.methods.find(m => m.id === item.methodId);
    const newId = this.checklists.length > 0 ? Math.max(...this.checklists.map(c => c.id)) + 1 : 1;
    const newItem: VerificationChecklistItem = {
      id: newId,
      methodId: item.methodId,
      methodName: method ? method.name : item.methodId,
      item: item.item,
      defaultChecked: item.defaultChecked !== undefined ? item.defaultChecked : false,
      status: item.status !== undefined ? item.status : true
    };
    this.checklists.push(newItem);
    // clear cached session state for this method so new items are visible
    delete this.activeVerificationSessionState[item.methodId];
    this.notifyChanges();
    return newItem;
  }

  updateChecklistItem(id: number, updated: Partial<VerificationChecklistItem>): boolean {
    const idx = this.checklists.findIndex(c => c.id === id);
    if (idx !== -1) {
      const current = this.checklists[idx];
      let methodName = current.methodName;
      if (updated.methodId && updated.methodId !== current.methodId) {
        const m = this.methods.find(x => x.id === updated.methodId);
        if (m) methodName = m.name;
        delete this.activeVerificationSessionState[current.methodId];
      }
      this.checklists[idx] = { ...current, ...updated, methodName };
      delete this.activeVerificationSessionState[this.checklists[idx].methodId];
      this.notifyChanges();
      return true;
    }
    return false;
  }

  deleteChecklistItem(id: number): boolean {
    const idx = this.checklists.findIndex(c => c.id === id);
    if (idx !== -1) {
      const methodId = this.checklists[idx].methodId;
      this.checklists.splice(idx, 1);
      delete this.activeVerificationSessionState[methodId];
      this.notifyChanges();
      return true;
    }
    return false;
  }

  toggleChecklistStatus(id: number): boolean {
    const item = this.checklists.find(c => c.id === id);
    if (item) {
      item.status = !item.status;
      delete this.activeVerificationSessionState[item.methodId];
      this.notifyChanges();
      return true;
    }
    return false;
  }

  // ==================== Dynamic Checklist for Verification Screen ====================

  /**
   * Retrieves active checklist items for a chosen method with checked state.
   */
  getChecklistForMethod(methodId: string): { id: number; item: string; checked: boolean }[] {
    if (this.activeVerificationSessionState[methodId]) {
      return JSON.parse(JSON.stringify(this.activeVerificationSessionState[methodId]));
    }
    const matching = this.checklists
      .filter(c => c.methodId === methodId && c.status)
      .map(c => ({
        id: c.id,
        item: c.item,
        checked: c.defaultChecked
      }));

    this.activeVerificationSessionState[methodId] = JSON.parse(JSON.stringify(matching));
    return matching;
  }

  saveVerificationSessionChecklist(methodId: string, items: { id: number; item: string; checked: boolean }[]): void {
    this.activeVerificationSessionState[methodId] = JSON.parse(JSON.stringify(items));
  }

  private notifyChanges(): void {
    this.methodsSubject.next(this.getMethods());
    this.checklistsSubject.next(this.getChecklists());
  }
}
