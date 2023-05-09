import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public studData:any=""; 

  constructor(private http: HttpClient) { 
    this.studData=[
      {name: "Jaydip", age:15},
      {name: "Ashalata", age:14},
      {name: "Rohan", age: 19}
    ]
  } 

  getSampleData(){
    return this.studData;
  }

  sendSampleData(dt:any){
    console.log(dt)
  }

  getAPIData(){
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }
}
