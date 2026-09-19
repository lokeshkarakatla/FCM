import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-parts-master-suppliers',
  templateUrl: './parts-master-suppliers.component.html',
  styleUrls: ['./parts-master-suppliers.component.scss']
})
export class PartsMasterSuppliersComponent implements OnInit {

  // Available items for the left box
  availableSuppliers: string[] = [
    'Tata Motors Supplier',
    'Ashok Leyland Supplier',
    'Bosch Automotive Components',
    'Mahindra & Mahindra Supplier',
    'Exide Industries',
    'Lucas-TVS',
    'Amara Raja Batteries',
    'Hella India Lighting',
    'Sona Koyo Steering Systems',
    'Varroc Engineering',
    'Wheels India'
  ];

  // Assigned items for the right box
  assignedSuppliers: string[] = [
    'Sundaram Fasteners',
    'Motherson Sumi Systems',
    'Bharat Forge',
    'JBM Group',
    'Delphi Automotive Systems'
  ];

  // Track the user's active selections in the lists
  selectedAvailable: string[] = [];
  selectedAssigned: string[] = [];

  // Inject MatDialogRef to handle closing the popup
  constructor(public dialogRef: MatDialogRef<PartsMasterSuppliersComponent>) { }

  ngOnInit(): void {
  }

  // Moves items from Left (Available) to Right (Assigned)
  addSuppliers() {
    if (this.selectedAvailable.length > 0) {
      // 1. Add selected items to the Assigned list
      this.assignedSuppliers.push(...this.selectedAvailable);
      
      // 2. Remove those items from the Available list
      this.availableSuppliers = this.availableSuppliers.filter(
        (supplier) => !this.selectedAvailable.includes(supplier)
      );
      
      // 3. Clear the selection highlights
      this.selectedAvailable = [];
    }
  }

  // Moves items from Right (Assigned) to Left (Available)
  removeSuppliers() {
    if (this.selectedAssigned.length > 0) {
      // 1. Add selected items back to the Available list
      this.availableSuppliers.push(...this.selectedAssigned);
      
      // 2. Remove those items from the Assigned list
      this.assignedSuppliers = this.assignedSuppliers.filter(
        (supplier) => !this.selectedAssigned.includes(supplier)
      );
      
      // 3. Clear the selection highlights
      this.selectedAssigned = [];
    }
  }

  // Saves the selection and closes the dialog
  save() {
    // Closes the popup and returns the updated assigned array to the parent component
    this.dialogRef.close(this.assignedSuppliers);
  }

  closeDialog(){
    this.dialogRef.close();
  }

}