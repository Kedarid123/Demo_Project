import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {

public sString:any= "Hello Angular Pipe";

public newDate= new Date();

public StudData:any=[
  {fname: "Kedar", age: 26},
  {fname: "Rohan", age: 26},
  {fname: "Ashutosh", age: 26}
]

public StudData1: any=[30,25,27,29,31,33]

public amount:number= 1500;


public newString:any="Hello New String"

}
