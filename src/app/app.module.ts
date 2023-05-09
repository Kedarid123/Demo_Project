import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PipeComponent } from './pipe/pipe.component';
import { TemplateFormDeleteComponent } from './template-form-delete/template-form-delete.component';
import { FormPracticeComponent } from './form-practice/form-practice.component';
import { RegularPracticeComponent } from './regular-practice/regular-practice.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceComponent } from './service/service.component';
import { HomeComponent } from './College/home/home.component';
import { CoursesComponent } from './College/courses/courses.component';
import { EventsComponent } from './College/events/events.component';
import { StaffLoginComponent } from './College/staff-login/staff-login.component';
import { StudLoginComponent } from './College/stud-login/stud-login.component';
import { AboutUsComponent } from './College/about-us/about-us.component';
import { ObservablesComponent } from './observables/observables.component';
import { Observable } from 'rxjs';
import { ParentCompComponent } from './Input-Output/parent-comp/parent-comp.component';
import { ChildCompComponent } from './Input-Output/child-comp/child-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    DataBindingComponent,
    DirectivesComponent,
    ReactiveFormComponent,
    PipeComponent,
    TemplateFormDeleteComponent,
    FormPracticeComponent,
    RegularPracticeComponent,
    ServiceComponent,
    HomeComponent,
    CoursesComponent,
    EventsComponent,
    StaffLoginComponent,
    StudLoginComponent,
    AboutUsComponent,
    ObservablesComponent,
    ParentCompComponent,
    ChildCompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
