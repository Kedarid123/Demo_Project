import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

// interpolation binding -- ts file is communicating with html file
 
public name: any = "";

//property/ attribute binding -- ts file to html file
 
public age : any = "21";
public link: any =""; 

//two way data binding --- ts file to html file and vice versa

public firstName : any = "";

// event binding -- html file to ts file




//=============================================================================================================

constructor(){

  //interpolation binding

  this.name = "Kedar"

  //property / attribute binding --- 

if (this.age>18){
  console.log(this.link = "https://www.google.com/")
}else{
  console.log(this.link = "https://www.youtube.com")
}

}

//event binding

clickEvent(){
  console.log("This is Event Binding")
}


}


