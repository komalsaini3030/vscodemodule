import { Component,OnInit } from "@angular/core";

@Component({
selector:'app-buttonColor',
template: `
<div>
<button (click)='onClickMe()' [class]="clickedMax?'done':'notdone' ">Click</button>
<section>
Clicked {{initialCount}} times!!
</section>
</div>

`,
styles:[`
.done{
    background-color:green
}
`]

})


export class ButtonColorComponent{
    initialCount=10;
    clickedMax=false;


    onClickMe(){
        this.initialCount++;
        if(this.initialCount>15){
            this.clickedMax=true;
        }
    }
    constructor(){

    }
OnInit(){

}

}