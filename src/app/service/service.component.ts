import { Component } from '@angular/core';
import { ServiceService } from '../Service-/service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
public data:any;
public data1:any;
public userData:any;

constructor( private ds: ServiceService){  
  // object creation of service and import that service
  this.getStudData();
  // above code is called as dependency injection
  // if we want any external class in any of our component then we neet to inject that class
  this.sendStudData();

  this.getuserData();


}
getStudData(){
// this.ds.getSampleData();
// console.log(this.ds.getSampleData())
this.data= this.ds.getSampleData();
}

sendStudData(){
this.data1={
  username: "jd123",
  password: "123321",
  captcha: "C6HjK3"
}
this.ds.sendSampleData(this.data1)
}

getuserData(){
 this.userData =

 this.ds.getAPIData().subscribe((res:any)=>{
   this.userData= res;
   console.log(this.userData)
  })

 
}
}
