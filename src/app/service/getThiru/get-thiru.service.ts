import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetThiruService {

  constructor(private http : HttpClient) { }

  getdata(number:any){
    return this.http.get("https://api-thirukkural.vercel.app/api?num="+ number,{observe: "response"})
  }


  gethp(){
    return this.http.get("http://hp-api.herokuapp.com/api/characters/students",{observe:"response"})
  }

  gethpstaff(){
    return this.http.get("http://hp-api.herokuapp.com/api/characters/staff",{observe:"response"})
  }

  gethpall(){
    return this.http.get("http://hp-api.herokuapp.com/api/characters",{observe:"response"})
  }

  gethphouse(housename:any){
    return this.http.get("http://hp-api.herokuapp.com/api/characters/house/"+ housename,{observe:"response"})
  }
}
