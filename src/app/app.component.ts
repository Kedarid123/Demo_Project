import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo28-3';
  // public showData:boolean = true;

  // constructor(private route: Router){

  // }

  // onClickOfevents(){
  //   console.log("This is ts file of events")
  //   if(this.showData == true){
  //     // this.route.navigate(['events'])

  //     this.route.navigateByUrl('events')
  //   }
  // }

  // onClickOfstudlogin(){
  //   console.log("This is ts file for stud-login")
  //   if(this.showData == true){
  //     this.route.navigate(['stud-login'])
  //   }
  // }
}
