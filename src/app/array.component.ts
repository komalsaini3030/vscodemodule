import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-array',
    template: `
    TODO<input type="text" [(ngModel)]='v' > <br/>
    <button (click)='add()'> Add </button>
 
     
    <ul *ngFor="let a of myArr">
  <li>{{a}} </li>
</ul>

    `,
    styles: [`
    ul{list-style-type:none},

<p>Hello how are you <p>

    `
    ]
  })

export class ArrayComponent{
    v:string="";
    myArr:Array<any>=[];  //for creating array 
    // myArr=new Set<any>(); // for creating object of set type
    constructor() { }

  ngOnInit(): void {
  }

add(){

    this.myArr.push(this.v)
    //this.myArr.add(this.v) //if we use set then this method is used
    console.log(this.v);
}

}