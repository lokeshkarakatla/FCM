import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-addrca',
  templateUrl: './addrca.component.html',
  styleUrls: ['./addrca.component.scss']
})
export class AddrcaComponent implements OnInit {


 fileNameToggler: boolean = true;
  responsibleSections :any;
  isSubmitting = false;
  ImagesRCA: null;
  myGroup: FormGroup;

  constructor(
    private _fb:FormBuilder,
    public dialogRef: MatDialogRef<AddrcaComponent>,
    // private _issuesService: IssuesService,
    // private _notification:NotificationService,
    @Inject(MAT_DIALOG_DATA) public data:any) { }


  ngOnInit() {
 console.log(this.data,'check the data')
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
      RCADescription: new FormControl(data?.RCADescription, Validators.required),
      RCATargetDate: new FormControl(data?.RCATargetDate, Validators.required),
      RCADocURL: new FormControl(data?.RCADocURL),
   });
  }

  get f() { return this.myGroup.controls }


  fnAddRCA() {
    // this.isSubmitting = true;
    // if (this.myGroup.valid) {
    //   this._issuesService.UpsertRCAIssues(this.myGroup.value).subscribe((data: any) => {
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
    // this._issuesService.uploadFile(formData, "RCADocs").subscribe((response: any) => {
    //   if (response['Success']) {
    //     this.myGroup?.get('RCADocURL')?.setValue(response['Data']);
    //      this.ImagesRCA = response['Data'].split('/')[0]
    //   }
    //   else {
    //   }
    // });
  }

  toggleFileInputPhoto(val: any) {
    this.fileNameToggler = val;
  }

  removeRCALogo() {
    this.ImagesRCA = null;
    this.f.RCADocURL.setValue(null);
    this.fileNameToggler = false;
  }

  close(){
    this.dialogRef.close();
  }
}

