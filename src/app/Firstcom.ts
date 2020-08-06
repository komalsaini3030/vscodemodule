import { Component } from "@angular/core";

@Component({
    selector:'app-first',
    template:`<p>My first component, woaa I have created my first angular component</p> 
    <input type="text" [(ngModel)]='Uname' name='Uname'>enter name
    <div>hello my name is {{Uname}}
    <app-luckynumber></app-luckynumber>`,
    styles:[]
})
export class FirstComponent{
    Uname:String="";

}