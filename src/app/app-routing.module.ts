import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './College/home/home.component';
import { CoursesComponent } from './College/courses/courses.component';
import { EventsComponent } from './College/events/events.component';
import { StaffLoginComponent } from './College/staff-login/staff-login.component';
import { StudLoginComponent } from './College/stud-login/stud-login.component';
import { AboutUsComponent } from './College/about-us/about-us.component';

const routes: Routes = [
  {path: "home", component:HomeComponent},
  {path: "courses", component:CoursesComponent},
  {path: "events", component:EventsComponent},
  {path: "staff-login", component:StaffLoginComponent},
  {path: "stud-login", component:StudLoginComponent},
  {path: "about-us", component:AboutUsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
