import { Component, OnInit } from "@angular/core";

@Component({
selector:'app-showAdmin',
template:` 
<input id="txt-name" type='text' [(ngModel)]='Uname' > 

<button (click)='showName()'> click </button>
<br/>
<span class="msg-show"> {{msg}} </span>
`,
styles: [

]

})


export class showAdminComponent{
Uname:string;
msg:string;
showName(){
    if(this.Uname=="Ramu"){
        this.msg="Welcome Admin";
    }
    else{
        this.msg="Welcome"+" "+this.Uname;
    }

    
}

    constructor(){

   }

   ngOnInit(){

   }
}