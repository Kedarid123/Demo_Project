import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {



  public allData :any = [];
  public showFlag:boolean= false;


  onSubmitData(data:any){
    console.log("This is the template driven from");
    console.log(data.value);
    this.allData.push(data.value);
    if(this.allData.length > 0){
      this.showFlag = true;
    }

    console.log(this.allData);
  }


  onDel(){
    console.log("on Delete");
  }

}
