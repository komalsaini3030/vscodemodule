import { Component,OnInit } from "@angular/core";

@Component({
selector:'app-likeButton',
template:`
<div>
<button (click)='onClickMe()' [class]="clicked?'liked':'unliked' ">
<section>
Clicked {{initialValue}} times!
</section>
</button>
</div>
`,
styles:[`
.liked{
    background-color:green
}
`]

})

export class ButtonLikeComponent{
    initialValue=100;
    clicked=false;
    onClickMe(){
        if(this.clicked==false){
        this.initialValue++
        this.clicked=true;
        }
        else{
            this.clicked=false;
            this.initialValue--;
        }

    }
    
    constructor(){

    }
    OnInit(){

    }
}