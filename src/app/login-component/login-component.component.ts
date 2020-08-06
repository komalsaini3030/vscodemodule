import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-component',
  template: `
  <form>
  Enter your name:<input [(ngModel)]=Name  type='text' name='nm' />
  Enter Password <input [(ngModel)]=password   name='ps' />
  <button type='submit' (click)='Login()'>Login</button> 
</form>

  <div *ngIf='valid'>
    <b>Login Successfull </b>
    </div>

    <div *ngIf='!valid'>
    <b> Login failed please try again!!!</b>
    </div>
  `,
  styles: [
  ]
})
export class LoginComponentComponent implements OnInit {
  Name:string="";
  password:string;
  valid=false;
  index:number;
  names:string[]=['komal','saini','sonam','john','jack','maria','julie','doe','Elisha','Nitya'];
  pass:string[]=['komal@123','saini@123','sonam@123','john@123','jack@123','maria@123','julie@123','doe@123','Elisha@123','Nitya@123']
  Login(){
  
    if(this.names.indexOf(this.Name)!=-1){
      this.index=this.names.indexOf(this.Name);
            if(this.pass.indexOf(this.password)==this.index)
      {
      this.valid=true;
      }
  }
}
  constructor() { }

  ngOnInit(): void {
  }

}
