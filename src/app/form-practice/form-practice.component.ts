import { Component } from '@angular/core';

@Component({
  selector: 'app-form-practice',
  templateUrl: './form-practice.component.html',
  styleUrls: ['./form-practice.component.css']
})
export class FormPracticeComponent {


  public fn:any="";
  public eml:any="";
  public gen: any="";
  public idd: any="";

  public count: number=1;

  public allData: any= [];
  public flag: boolean= false;
 
  onSumbitData(Data: any){

    console.log(Data.value)
    Data.value.id = this.count;
    this.allData.push(Data.value)

    if(this.allData.length > 0){
      this.flag = true;
    }
    this.count++;
  }

  onDelete(del: any){
    this.idd = del.id;
    this.allData.forEach((ele: any) => {
        if (ele.id == del.id){
          this.allData.splice(this.allData.indexOf(ele), 1)
        }
    });
  }

  onUpdate(upd: any){
    this.idd = upd.id;
    this.fn = upd.fname;
    this.eml = upd.email;
    this.gen = upd.gender;

  // this.allData.forEach((ele2: any) =>{
  //   if(ele2.id == upd.id){
  //     this.idd = this.allData.indexOf(ele2);
  //   }
  // })

  }

  updateMyForm(update: any){
    this.allData.splice(this.idd, 1, update.value);
  
  }
}
