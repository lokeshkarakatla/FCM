import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-adddetection',
  templateUrl: './adddetection.component.html',
  styleUrls: ['./adddetection.component.scss']
})
export class AdddetectionComponent implements OnInit {

 
  isSubmitting = false;
  roles: any;
  myGroup: FormGroup;
  users: any[];
  agencies: any[];
  managers: any[];

  constructor(
    public _fb: FormBuilder,
    public dialogRef: MatDialogRef<AdddetectionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    //private _MasterDataService: MasterDataService
  ) {
  }

  ngOnInit() {
    if (this.data) {
      this.formInit(this.data)
    } else {
      this.formInit(null)
    }
  }

  upsertDetection() {
    this.isSubmitting = true;
    if (this.myGroup.valid) {
      // this._MasterDataService.UpsertDetection(this.myGroup.value).subscribe((data: any) => {
      //   if (data['Success']) {
      //     this.dialogRef.close("Update");
      //   }
      // })
    }
  }


  formInit(data: any) {
    this.myGroup = this._fb.group({
      DetectionId: new FormControl(data?.DetectionId,),
      DetectionName: new FormControl(data?.DetectionName, Validators.compose([Validators.required])),
      Remarks: new FormControl(data?.Remarks),
    });
  }

  // convienience getter for form
  get f() { return this.myGroup.controls }


  close(): void {
    this.dialogRef.close();
  }
}