
import { Component, OnInit } from '@angular/core';
import { User} from "../user";
 
@Component({
  selector: 'app-print-name',
  template: `
    <form (ngSubmit)='show()'>
  UserName:<input [(ngModel)]=user.userName name='uname'/>
  User Address <input [(ngModel)]=user.userAddress name='uadd'/>
  user Age<input [(ngModel)]=user.userAge name='uage'/>
  <button type='submit'>Submit</button>
  <img [src]=imagePath/>
    </form>
    <p>usename:{{user.userName}}</p>
  `,
  styles: [
  ]
})
export class PrintNameComponent implements OnInit {

  imagePath="assets/img.png";
      user=new User();
  constructor() { 
    console.log('constructor called')
  }
  

  ngOnInit(): void {
    console.log('on init method called')
    console.log(this.user.userName+' '+this.user.userAddress+' '+this.user.userAge)

  }
  show(){
    console.log('show method called')
    console.log(this.user.userName+' '+this.user.userAddress+' '+this.user.userAge)
  }

}
