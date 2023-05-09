import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

//Structural Directives

//ngIf
public text : any = "Hello this is ngIf belongs to structural directives"   //it will hide (if false) and show (if true) on given condition
public showText: boolean = true;    // for different operations change the value
public age : any = 20;                // for different operations change the value


//ngFor

public states:any = ["State-", "MH", "GJ", "PB", "BH", "RJ"]
public city: any = ["City-","Mumbai", "Ahmadabad", "Ludhiana", "Pusa", "Udaipur"]
public language: any= ["Language-","Marathi", "Gujarati", "Punjabi", "Maithli", "Rajasthani"]

public state:any = "M"



// For attribute directives

public testClass:any="";

public testClass1 : any ="" 

constructor(){
  if (this.age>18 && this.showText){
    this.testClass1 = "test1"
  }else
    this.testClass1 = "test2"
  }


}






