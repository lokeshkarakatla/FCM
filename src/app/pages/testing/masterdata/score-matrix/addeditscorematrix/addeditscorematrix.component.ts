import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-addeditscorematrix',
  templateUrl: './addeditscorematrix.component.html',
  styleUrls: ['./addeditscorematrix.component.scss']
})
export class AddeditscorematrixComponent implements OnInit {

  isSubmitting = false;
  roles: any;
  myGroup: FormGroup;
  users: any[];
  agencies: any[];
  managers: any[];

  constructor(
    public _fb: FormBuilder,
    public dialogRef: MatDialogRef<AddeditscorematrixComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    // private _MasterDataService: MasterDataService
  ) {
  }

  ngOnInit() {
    if(this.data){
      this.formInit(this.data)
    }else{
      this.formInit(null)
    }
  }

  upsertScoreMatrix() {
    this.isSubmitting = true;
    if (this.myGroup.valid) {
    // this._MasterDataService.UpsertScoreMatrix(this.myGroup.value).subscribe((data: any) => {
    //   if (data['Success']) {
    //     this.dialogRef.close("Update");
    //   }
    // })
  }
  }


  formInit(data: any) {
    this.myGroup = this._fb.group({
      ScoreMatrixId: new FormControl(data?.ScoreMatrixId),
     // ScoreMatrixName: new FormControl(data?.ScoreMatrixName, Validators.compose([Validators.required])),
     ScoreMatrixName: new FormControl(data?.ScoreMatrixName, Validators.compose([Validators.required,Validators.pattern("^[a-zA-Z0-9][a-zA-Z0-9\- ]*[a-zA-Z0-9]$")])),
      
     Severity: new FormControl(data?.Severity,Validators.compose([Validators.required])),
    });
  }
  
  // convienience getter for form
  get f() { return this.myGroup.controls }

  close(): void {
    this.dialogRef.close();
  }
}