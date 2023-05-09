import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  public myForm:any;
  public streams : any = ["Civil", "E&TC", "Mech", "Electrical", "Chemical"]
  public isFormSubmitted: boolean= false;


constructor(private fb: FormBuilder){     //constructor is use to create object of a class   // if we need to implement reactive form we need to import FormBuider(builds the form)
this.myForm = this.fb.group({     // fb provides us group inside which we can take many fields
  fname: ['',[Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
  lname: ['',[Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
  email: ['',[Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
  streams: [''],
  gender: [''],
  pass: ['',[Validators.required,Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@('@')$!%*#?&])[A-Za-z\d$@('@')$!%*#?&]{8,20}$/)]],
  cpass: ['',[Validators.required,Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@('@')$!%*#?&])[A-Za-z\d$@('@')$!%*#?&]{8,20}$/)]]
})             // group -- we need to set field of our form here
}

onSubmitData(){
  console.log(this.myForm)
  this.isFormSubmitted= true;
}


get f(){              // get function will gives us the values while set function sets the values
return this.myForm.controls;       
} 


}
