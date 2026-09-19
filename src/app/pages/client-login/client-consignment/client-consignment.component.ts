import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-consignment',
  templateUrl: './client-consignment.component.html',
  styleUrls: ['./client-consignment.component.scss']
})
export class ClientConsignmentComponent implements OnInit {
  items = [
    {date:"12-Dec-2021",ref:"2022/AMZN/DEL/001",delref:"DEL/TS/1345",items:"6",status:"Delivery",grndate:"22-Nov-2021"},
    {date:"22-Nov-2021",ref:"2021/TCS/HYD/031",delref:"BNG/TT/2355",items:"12",status:"Transit",grndate:"16-Dec-2021"},
    {date:"26-Dec-2021",ref:"2021/GOOG/GNG/301",delref:"HYD/SS/2545",items:"4",status:"Delivery",grndate:"22-Nov-2021"},
    {date:"26-Jan-2022",ref:"2021/GOOG/HYD/301",delref:"DEL/TS/2545",items:"6",status:"Transit",grndate:"16-Dec-2021"},
    {date:"16-Dec-2021",ref:"2022/GOOGN/HYD/001",delref:"DEL/TS/5345",items:"2",status:"Delivery",grndate:"12-Dec-2021"}
  ]
  constructor(private Location: Location) { }

  ngOnInit() {
  }
  goback(){
    this.Location.back();
  }

}
