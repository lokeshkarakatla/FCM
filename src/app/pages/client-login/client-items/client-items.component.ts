import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-items',
  templateUrl: './client-items.component.html',
  styleUrls: ['./client-items.component.scss']
})
export class ClientItemsComponent implements OnInit {
  items = [
    {orderqnty:"65",qntyrecv:"12",qntytransit:"23",lastdate:"26-Feb-2022",length:"200",width:"57",height:"103",rate:"2000",dimen:"200 x 100 x 50", thick:"100 MM",var:"0",time:'12',remarks:'NA',scategory:'',name:'Gypsum Board', no:'56107', cat:'Plaster & Boards', subcat:'Commercial', uom:'SQMTR', type:'Plain', make:'IGL', model:'FMX480', pmake:'Volvo', equi:'-'},
    {orderqnty:"35",qntyrecv:"22",qntytransit:"33",lastdate:"15-Feb-2022",length:"320",width:"54",height:"104",rate:"3000",dimen:"300 x 200 x 100",thick:"400 MM",var:"3",time:'22',remarks:'NA',scategory:'',name:'Plaster', no:'182048', cat:'Steel', subcat:'FLEXIPLY', uom:'NOS', type:'Duraline Board', make:'VANGYP', model:'Armstrong', pmake:'Caterpillar', equi:'-'},
    {orderqnty:"33",qntyrecv:"21",qntytransit:"45",lastdate:"21-Mar-2022",length:"320",width:"54",height:"105",rate:"5000",dimen:"300 x 200 x 100",thick:"400 MM",var:"0",time:'32',remarks:'NA',scategory:'',name:'Chain Hook', no:'123428', cat:'Ply/Boards', subcat:'Commercial', uom:'Kg', type:'ACOUSTICAL', make:'GYPROC', model:'CAT B214', pmake:'Caterpillar', equi:'-'},
    {orderqnty:"43",qntyrecv:"25",qntytransit:"75",lastdate:"5-Feb-2022",length:"320",width:"54",height:"105",rate:"5000",dimen:"300 x 200 x 100",thick:"400 MM",var:"3",time:'12',remarks:'NA',scategory:'',name:'Gypsum Board', no:'141234', cat:'Plaster & Boards', subcat:'BWP', uom:'SQMTR', type:'Duraline Board', make:'Armstrong', model:'TH 234', pmake:'Kirloskar', equi:'-'},
    {orderqnty:"41",qntyrecv:"45",qntytransit:"15",lastdate:"11-Feb-2022",length:"320",width:"44",height:"115",rate:"5000",dimen:"300 x 200 x 100",thick:"400 MM",var:"3",time:'12',remarks:'NA',scategory:'',name:'Plaster', no:'56107', cat:'Steel', subcat:'Veneered', uom:'SQMTR', type:'ACOUSTICAL', make:'VANGYP', model:'FR0032', pmake:'Spykaar', equi:'-'},
    {orderqnty:"21",qntyrecv:"25",qntytransit:"35",lastdate:"21-Jan-2022",length:"320",width:"47",height:"215",rate:"3000",dimen:"300 x 200 x 100",thick:"100 MM",var:"3",time:'32',remarks:'NA',scategory:'',name:'Pipes', no:'182048', cat:'Ply/Boards', subcat:'Laminated', uom:'Litres', type:'MR Board', make:'Armstrong', model:'Hubless', pmake:'Vizag Steel', equi:'-'},
    {orderqnty:"27",qntyrecv:"25",qntytransit:"32",lastdate:"23-Feb-2022",length:"320",width:"47",height:"230",rate:"6000",dimen:"400 x 200 x 150",thick:"500 MM",var:"0",time:'13',remarks:'NA',scategory:'',name:'Gypsum Board', no:'13254', cat:'Plaster & Boards', subcat:'FLEXIPLY', uom:'Kg', type:'ACOUSTICAL', make:'VANGYP', model:'Ramco-53', pmake:'JSW Ramco', equi:'-'},
    {orderqnty:"17",qntyrecv:"15",qntytransit:"32",lastdate:"11-Aprl-2022",length:"220",width:"47",height:"230",rate:"6000",dimen:"400 x 200 x 150",thick:"500 MM",var:"4",time:'16',remarks:'NA',scategory:'',name:'Plaster', no:'56135', cat:'Ply/Boards', subcat:'Veneered', uom:'kg/m3', type:'MR Board', make:'Armstrong', model:'Armstrong', pmake:'SREE TMT', equi:'-'},
    {orderqnty:"15",qntyrecv:"35",qntytransit:"33",lastdate:"21-Feb-2022",length:"220",width:"57",height:"210",rate:"6000",dimen:"400 x 200 x 150",thick:"500 MM",var:"4",time:'17',remarks:'NA',scategory:'',name:'Gypsum Board', no:'19234', cat:'Plaster & Boards', subcat:'FLEXIPLY', uom:'Litres', type:'Duraline Board', make:'GYPROC', model:'H-23', pmake:'Havels-Bell', equi:'-'},
  ];
  constructor(private Location : Location) { }

  ngOnInit() {
  }

  goback(){
    this.Location.back();
  }

}
