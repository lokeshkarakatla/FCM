import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.scss']
})
export class ClientLoginComponent implements OnInit {

  
  items = [
    {poref:"2022/AMZN/HYD/001",vendor: 'Pulse Contracts', podate: '12-Jan-2021', tilldate: '1,23,112', povalue: '1,21,23,112', items: 8,consign:3},
    {poref:"2021/TWT/HYD/301",vendor: 'Shiva Traders', podate: '6-April-2021', tilldate: '1,21,23,112', povalue: '2,01,23,112', items: 4,consign:1},
    {poref:"2021/AMZN/HYD/321",vendor: 'Asian Paints', podate: '21-Dec-2021', tilldate: '1,21,00,112', povalue: '1,21,23,112', items: 3,consign:2},
    {poref:"2021/TCS/HYD/501",vendor: 'Shiva Traders', podate: '22-Nov-2021', tilldate: '2,31,23,112', povalue: '3,31,23,112', items: 8,consign:3},
    {poref:"2021/AMZN/HYD/301",vendor: 'Pulse Contracts', podate: '12-Jan-2022', tilldate: '1,00,23,112', povalue: '1,41,23,112', items: 6,consign:5},
  ]

  constructor(public dialog: MatDialog) { }
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public cancelClicked: boolean = false;
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  ngOnInit() {
  }

  // openActionTypeDialog(value) {
  //   let dialogRef = this.dialog.open(JobCodesDialogSetupComponent, {
  //     data: value,
  //     height: 'auto',
  //     width: '600px',
  // });
  // }
  saveStatus() {
    //this.alertService.createAlert('Successfully saved.', 1);
}

}
