import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-lookup-dialog',
  templateUrl: './add-lookup-dialog.component.html',
  styleUrls: ['./add-lookup-dialog.component.scss']
})
export class AddLookupDialogComponent implements OnInit {

  countryList : any;
  stateList : any;
  cityList : any;
  data : any;
  code_master:any;
  conditions : Array<any> = [{'code':'>=','name':' >= '},{'code':'<=','name':' <= '}];
  colors : Array<any> = [{'code':'green','name':'Green','colorClass':'dot_green'},{'code':'blue','name':'Blue','colorClass':'dot_blue'},{'code':'grey','name':'Grey','colorClass':'dot_grey'},{'code':'red','name':'Red','colorClass':'dot_red'}];
  constructor(public dialogRef: MatDialogRef<AddLookupDialogComponent>,@Inject(MAT_DIALOG_DATA) public user: number,
   //private alertService: AlertService
   ) { 
     this.data = user
    console.log(this.user);
   }

  
  ngOnInit() {
    
  }

  close(): void {
    this.dialogRef.close();
  }

  itemstr: HTMLElement[] = [];
  agestr: HTMLElement[] = [];
  responsestr: HTMLElement[] = [];
  str: HTMLElement = <HTMLElement>document.getElementById("new_text");
  copy(type) {
    if(type=='lookup')
      this.itemstr.push(this.str);
    else if(type=='age')
      this.agestr.push(this.str);
    else
      this.responsestr.push(this.str);
  }

  remove(e) {
    document.getElementById("repeat-" + e).remove();
  }

  saveLookup() {
    //this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }

}
