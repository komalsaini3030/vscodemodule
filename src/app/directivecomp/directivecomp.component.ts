import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivecomp',
  template: `

  <input type="radio" name="rb" (click)='assign(true)' >Valid
  <input type="radio" name="rb" (click)='assign(false)'>InValid  
    
  <div *ngIf='isValid'>
    <b>you are valid </b>
    </div>

    <div *ngIf='!isValid'>
    <b>you are not valid </b>
    </div>

    <div *ngFor='let c of cities'>
    <p> {{c}}</p>

  `,
  styles: [
  ]
})
export class DirectivecompComponent implements OnInit {
isValid:boolean=true;
assign(c){
  this.isValid=c;
}
  constructor() { }

  ngOnInit(): void {
  }
  cities:any[]=['pune','mumbai','delhi'];

}
