import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Subscription } from 'rxjs';
import { GetThiruService } from 'src/app/service/getThiru/get-thiru.service';



@Component({
  selector: 'app-tiruk',
  templateUrl: './tiruk.component.html',
  styleUrls: ['./tiruk.component.css']
})
export class TirukComponent implements OnInit {
  subscribe : Subscription | undefined;
  data:any;
  enablediv=false;
  errormsg= ""
  constructor(private s : GetThiruService) { }

  ngOnInit(): void {
  }

  submit(){
    this.errormsg=""
    this.subscribe=this.s.getdata($("#num").val()).subscribe((response:any)=>{
      console.log(response)
      this.data =response.body
      this.enablediv=true
    },(error:any)=>{
      console.log(error)
      this.errormsg="error"
      this.enablediv=false
    })
  }
}
