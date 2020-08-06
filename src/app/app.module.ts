import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from "./firstcom";
import { LuckynumberComponent } from './luckynumber/luckynumber.component';
import { CounterComponent } from './counter/counter.component';
import { HellonameComponent } from './helloname/helloname.component';
import { FormsModule } from "@angular/forms";
import { PrintNameComponent } from './print-name/print-name.component';
import { DirectivecompComponent } from './directivecomp/directivecomp.component';
import { DisplayEmployeeComponent } from './display-employee/display-employee.component';
import { GreetingsComponentComponent } from './greetings-component/greetings-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { ArrayComponent } from "./array.component";
import { showAdminComponent} from "./showAdmin.component";
import { ButtonColorComponent} from "./Button.color.component";
import { ButtonLikeComponent } from "./Button.like.component";
import { Demo } from "./demo";


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    LuckynumberComponent,
    CounterComponent,
    HellonameComponent,
    PrintNameComponent,
    DirectivecompComponent,
    DisplayEmployeeComponent,
    GreetingsComponentComponent,
    LoginComponentComponent,
    ArrayComponent,
    showAdminComponent,
    ButtonColorComponent,
    ButtonLikeComponent,
    Demo

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
 // bootstrap: [AppComponent]
  //bootstrap:[FirstComponent]
  //bootstrap:[LuckynumberComponent]
  //bootstrap:[CounterComponent]
 //bootstrap:[HellonameComponent]
 //bootstrap:[PrintNameComponent]
 //bootstrap:[DisplayEmployeeComponent]
 bootstrap:[ArrayComponent]
 //bootstrap:[showAdminComponent]
 //bootstrap:[ButtonColorComponent]
 //bootstrap:[ButtonLikeComponent]
 //bootstrap:[Demo]
})
export class AppModule { }
