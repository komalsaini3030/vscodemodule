import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helloname',
  template: `
    
      <form class="f"> 
      Enter your name:<input [(ngModel)]=userName name='nm' />
      <button type='submit'>Submit</button> 
          <p> Hello {{userName}}</p>   
      </form>
  `,
  styles: ['.f{background-color:grey;color:red}'
  ]
})
export class HellonameComponent implements OnInit {
userName:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
