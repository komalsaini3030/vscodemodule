import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greetings-component',
  template: `
    <form>
    Enter your name:<input [(ngModel)]=Name name='nm' />
    <button type='submit' (click)='show()'>Submit</button> 
    </form>
    <p>
    <span *ngIf='val'> {{value}} </span> <span *ngIf='val'>{{Name}}</span>
    </p>   
  `,
  styles: [
  ]
})
export class GreetingsComponentComponent implements OnInit {

  constructor() { }
  val:boolean=false;
  Name:string="";
  value:String="";
  greetings = ["Hello", "Hi", "Namaste", "Salaam", "Bonjour"];

  show(){
    this.value=this.greetings[Math.floor(Math.random() * this.greetings.length)];
  this.val=true;
  }
  ngOnInit(): void {
  }

}
