import { Component,OnInit } from "@angular/core";

@Component({
selector:'app-demo',
template: `
<h2> Welcome {{name}} </h2>
`,
styles:[]

})
export class Demo implements OnInit {
   public name="komal"
    constructor(){

    }
    ngOnInit(): void {
    }
}