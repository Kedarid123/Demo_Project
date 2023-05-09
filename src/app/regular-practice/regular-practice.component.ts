import { Component } from '@angular/core';

@Component({
  selector: 'app-regular-practice',
  templateUrl: './regular-practice.component.html',
  styleUrls: ['./regular-practice.component.css']
})
export class RegularPracticeComponent {

public myName:string="";
public myString:string="";
public showData:boolean=false;

public City:any=["Akola","Amravati","Nagpur","Buldhana", "Wardha"]
public shortForm:any=["Ak", "Amr", "Ngp", "Bd", "War"]

public State:any="MP"

public link:any="www.w3school.com"

public FullName:any="";

public test1:any;
public test2:any;
public age: number = 20;
public showFlag: boolean = true;

public stest1: any = {'color' : 'red'}
public stest2: any = {'color' : 'green'}

constructor(){
 this.myName="Alex Dawson" 
 this.myString="This are Structural Directives"
}



eventClick(){
  console.log("This is click event")
}
}

