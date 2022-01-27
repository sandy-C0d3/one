import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GetThiruService } from 'src/app/service/getThiru/get-thiru.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-harrypotter',
  templateUrl: './harrypotter.component.html',
  styleUrls: ['./harrypotter.component.css']
})
export class HarrypotterComponent implements OnInit {

  subscribe: Subscription | undefined;
  data:Array<any>=[];
  constructor(private s : GetThiruService) { }

  ngOnInit(): void {
    
  }
getStudents(){
  this.subscribe= this.s.gethp().subscribe((response:any)=>{
    console.log(response)
    this.data=response.body
  },(error:any)=>{
    console.log(error)
  })
}

getStaff(){
  this.subscribe= this.s.gethpstaff().subscribe((response:any)=>{
    console.log(response)
    this.data=response.body
  },(error:any)=>{
    console.log(error)
  })
}

getAllstudents(){
  this.subscribe= this.s.gethpall().subscribe((response:any)=>{
    console.log(response)
    this.data=response.body
  },(error:any)=>{
    console.log(error)
  })
}

getbyhouse(){
  this.subscribe= this.s.gethphouse($("#lol").val()).subscribe((response:any)=>{
    console.log(response)
    this.data=response.body
  },(error:any)=>{
    console.log(error)
  })
}
}
