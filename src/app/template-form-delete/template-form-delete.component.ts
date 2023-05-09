import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form-delete',
  templateUrl: './template-form-delete.component.html',
  styleUrls: ['./template-form-delete.component.css']
})
export class TemplateFormDeleteComponent {

  public allFormData:any = [];

  public courses: any= ["BSc","BCS","Engineering","B.Tech","MCS"]

  public fn:any= "";
  public ln:any= "";
  public em:any= "";
  public cor:any="" ;
  public gen:any= "";
  public ps:any= "";
  public cps:any= "";
  
  public idd:any=""
  public count:number=1;

  public showFlag:boolean=false;

  Constructor(){

  }

  onSubmitData(formData: any){

    console.log(formData)

    //adds the unique value to every record
  if(formData.value.id == undefined){
    // this code is for inserting new record
    formData.value.id = this.count;
    this.allFormData.push(formData.value)
    if (this.allFormData.length>0){
      this.showFlag = true;
    }
    this.count++; 
  }else{
    //this code is for update the record
  }
  
  console.log(this.allFormData)

  }

  

  onDeleteData(){

  }
}



// CRUD Application

//Step 1 - Create component
//Step 2 - Create teamplat form or reactive form
//Steo 3 - Form Data Submit
//Step 4 - View form data
//Step 5 - Delete Data
//Step 6 - Apply Validation
//Step 7 - Updatre the form