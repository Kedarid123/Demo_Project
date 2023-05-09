import { Component } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent {


// myObservable = new Observable((observer)=>{  // observer is a variable to assign data // observer is the suscriber of that observable
// console.log("Observable start")

//  1. obs.next - to emit some value using next method

// setTimeout(()=>{observer.next("1")},1000)
// setTimeout(()=>{observer.next("2")},2000)
// setTimeout(()=>{observer.next("3")},3000)
// setTimeout(()=>{observer.next("4")},4000)
// setTimeout(()=>{observer.next("5")},5000)
// observer.next("1")
// observer.next("2")
// observer.next("3")
// observer.next("4")
// observer.next("5")

//  2. obs.error - to emit an error using error method

// observer.next("1")
// observer.next("2")
// observer.next("3")
// observer.error(new Error("Something went wrong! Please try again after sometime!"))
// observer.next("4")
// observer.next("5")

//  3. obs.complete - to emit complete signal in observable.

// setTimeout(()=>{observer.next("1")},1000)
// setTimeout(()=>{observer.next("2")},2000)
// setTimeout(()=>{observer.next("3")},3000)
// setTimeout(()=>{observer.next("4")},4000)
// setTimeout(()=>{observer.complete()},4000)
// setTimeout(()=>{observer.next("5")},5000)
// })

// 1. Of operator - - Used to convert comma seperated values into observable. it will emit the data we have passed as an arguments i.e. array1 and array2, it accepts various number of arguments

array1= [1,2,3,4,5,6];
array2 = ["A","B","C","D"];

// myObservable = of(this.array1, this.array2, 20, "Array", "HelloNG");  

//2. From operator - from : Used to convert array element into observable. it accepts single argument.

myObservable = from(this.array1)

// 3. map - modify individual element of observable data

transformedData = this.myObservable.pipe(map((data)=>{
  return data*5;
}))


// 4. filter operator - it filters the data from transformed observables. it will filter the mapped data. 

transformedData1 = this.transformedData.pipe(filter((data)=>{
   return data%10 == 0 
}))




ngOnInit(){
  this.transformedData1.subscribe((data)=>{  //suscribe - it takes three optional parameters i.e. next, error, complete
    console.log(data)
  // }, (error)=>{
  //   alert(error.message);
  // },()=>{
  //   alert("Observable has emitted all the values")
  });  // 3 callback  functions are there for next., error and complete method respe.
}

}


//observables are used to perform asynchronous operation and to handle asynchronous data.
//observables are used to convert ordinary stream of data into observable stream of data.
//provided by RxJS (reactive extension library for JS) library