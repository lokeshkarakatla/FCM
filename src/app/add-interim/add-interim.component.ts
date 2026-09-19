import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-interim',
  templateUrl: './add-interim.component.html',
  styleUrls: ['./add-interim.component.scss']
})
export class AddInterimComponent implements OnInit {

  responsibleSections :any;
  isSubmitting = false;
  ImagesNameRel: null;
  fileNameToggler: boolean = true;

  myGroup: FormGroup;

  constructor(
    private _fb:FormBuilder,
    public dialogRef: MatDialogRef<AddInterimComponent>,
    // private _issuesService: IssuesService,
    // private _notification:NotificationService,
    @Inject(MAT_DIALOG_DATA) public data:any) { }


  ngOnInit() {

    if (this.data.item) {
      this.formInit(this.data.item);
    } else {
      this.formInit(null);
    }
  }

  formInit(data: any) {
    this.myGroup = this._fb.group({
      RCAId   : new FormControl(data?.RCAId),
      IssueId: new FormControl(this.data?.IssueId, Validators.required ),
      InterimDescription: new FormControl(data?.InterimDescription, Validators.required),
      InterimTargetDate: new FormControl(data?.InterimTargetDate, Validators.required),
      InterimDocURL: new FormControl(data?.InterimDocURL),
   });
  }

  get f() { return this.myGroup.controls }


  fnAddInterim() {
    this.isSubmitting = true;
    // if (this.myGroup.valid) {
    //   this._issuesService.UpsertInterimIssues(this.myGroup.value).subscribe((data: any) => {
    //     if (data['Success']) {
    //       this.dialogRef.close("Update");
    //     }
    //   })
    // }
  }

  onFileSelect(event: any) {
    let af = ['image/jpeg', 'image/png', 'application/pdf'];
    // if (event.target.files.length > 0) {
    //   const file = event.target.files[0];
    //   if (!_.includes(af, file.type)) {
    //     this._notification.error('Please Upload only image/jpeg image/png files.');
    //   } else {
    //     this.myGroup?.get('myfile')?.setValue(file);
    //     this.onFormSubmit();
    //     //    this._alertService.createAlert('File Added Successfully.', 1);
    //   }
    // }
  }

  onFormSubmit() {
    const formData = new FormData();
    let uploadFile = this.myGroup?.get('myfile')?.value
    formData.append("file", uploadFile);
    // this._issuesService.uploadFile(formData, "InterimDocs").subscribe((response: any) => {
    //   if (response['Success']) {
    //     this.myGroup?.get('InterimDocURL')?.setValue(response['Data']);
    //     this.ImagesNameRel = response['Data'].split('/')[0]
    //   }
    //   else {
    //   }
    // });
  }

  close(){
    this.dialogRef.close();
  }

  toggleFileInputPhoto(val: any) {
    this.fileNameToggler = val;
  }

  removeRelevantLogo() {
    this.ImagesNameRel = null;
    this.f.InterimDocURL.setValue(null);
    this.fileNameToggler = false;
  }
}


